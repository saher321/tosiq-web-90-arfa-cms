import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
                <div>
                    <h2 className="text-3xl font-bold">Contact Us</h2>
                    <p className="text-muted-foreground mt-2">
                        Have a question or need a repair? Fill out the form or contact us directly.
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-full text-primary">
                            <Phone className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-medium">Phone</p>
                            <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-full text-primary">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-medium">Email</p>
                            <p className="text-muted-foreground">support@repaircms.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-full text-primary">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-medium">Address</p>
                            <p className="text-muted-foreground">123 Repair Street, Fix City, FC 12345</p>
                        </div>
                    </div>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Send us a message</CardTitle>
                    <CardDescription>We'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="first-name">First name</Label>
                                <Input id="first-name" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="last-name">Last name</Label>
                                <Input id="last-name" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="john@example.com" type="email" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <textarea
                                id="message"
                                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="How can we help you?"
                            />
                        </div>
                        <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
