import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Bug, CalendarDays, FilePenLine, Layers2, Mail, Mailbox, Pencil, Phone, User } from 'lucide-react';
import axios from 'axios';
import { ALL_BOOKINGS, UPDATE_BOOKING } from '@/resources/server_apis';
import moment from 'moment';
import { toast } from 'sonner';

export default function Booking() {
    const [category, setCategory] = useState('');
    const [bookings, setBookings] = useState([]);
    const [selectedBooking, setSelectedBooking] = useState(null);

    const fetchBookings = async () => {
        try {
            const response = await axios.get(ALL_BOOKINGS);
            setBookings(response.data.bookings);
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };
    useEffect(() => {
        fetchBookings();
    }, []);


    const handleBookingStatusChange = async (bookingId, status) => {
        setSelectedBooking((prev) => ({ ...prev, [bookingId]: status}));
        // console.log(bookingId,status,selectedBooking);

        try {
            const response = await axios.patch(UPDATE_BOOKING, { bookingId, status });
            if (response.data.status == true) {
                toast.success(response.data.message);
                await fetchBookings();
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log("Error: ", error);
            toast.error("Something went wrong");
        }
    }

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Booking Page</h2>
                <p className="text-muted-foreground">Manage the content of your Booking page.</p>
            </div>

            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Booking List</CardTitle>
                        <CardDescription>Manage the booking list.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                <TableHead className="w-[50px]">ID</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>User Details</TableHead>
                                <TableHead>Appliance Details</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    bookings.length > 0 ?
                                    bookings.map((booking, index) => (
                                        <TableRow>
                                            <TableCell className="font-medium">{index + 1}</TableCell>
                                            <TableCell className='w-[150px]'>
                                                <Select onValueChange={(e) => handleBookingStatusChange(booking._id, e)} value={booking.status}>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select a status" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectItem value="pending">Pending</SelectItem>
                                                            <SelectItem value="confirmed">Confirmed</SelectItem>
                                                            <SelectItem value="processing">Processing</SelectItem>
                                                            <SelectItem value="completed">Completed</SelectItem>
                                                            <SelectItem value="cancelled">Cancelled</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </TableCell>
                                            <TableCell className="w-[350px]">
                                                <div className='bg-gray-100 p-2 rounded'>
                                                    <p className='font-bold text-lg'> <User className='inline -mt-1' /> {booking.firstName + " " + booking.lastName}</p>
                                                    <div className='mt-3'>
                                                        <p className='text-gray-600'> <Mail size={16} className='inline -mt-1 ml-1 mr-3' />{booking.email}</p>
                                                        <p className='text-gray-600'> <Phone size={16} className='inline -mt-1 ml-1 mr-3' />{booking.phone}</p>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className='bg-gray-100 p-2 rounded'>
                                                    <div className='flex items-center justify-between gap-2'>
                                                        <p className='font-bold text-lg capitalize'> <Layers2 className='inline -mt-1' /> {booking.category}</p>
                                                        <p className='bg-white p-1 text-xs font-bold rounded text-purple-600'>
                                                            <CalendarDays className='h-4 w-4 inline -mt-1 ml-1 mr-1' /> {booking.createdAt && moment(booking.createdAt).format('llll')}
                                                        </p>
                                                    </div>
                                                    <div className='mt-3'>
                                                        <p className='text-gray-600'> <Bug size={16} className='inline -mt-1 ml-1 mr-3' />{booking.issue}</p>
                                                        <p className='text-gray-600 flex items-start gap-2'> <div><Mailbox size={16} className='mt-1 ml-1'/></div>
                                                        <span className='block'>
                                                            {booking.message}
                                                        </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                    :
                                    <TableRow>
                                        <TableCell colSpan={4} className="h-24 text-center">
                                            No bookings found.
                                        </TableCell>
                                    </TableRow>
                                }
                            </TableBody>
                        </Table>  
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
