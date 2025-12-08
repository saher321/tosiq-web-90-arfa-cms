import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold">About Us</h2>
                <p className="text-muted-foreground">Leading appliance repair service provider.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            To provide fast, reliable, and affordable appliance repair services to our community. We believe in fixing things rather than throwing them away.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Our Vision</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            To be the most trusted name in appliance repair, known for our technical expertise and exceptional customer service.
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Certified Technicians</li>
                        <li>Same Day Service</li>
                        <li>90-Day Warranty on Parts & Labor</li>
                        <li>Transparent Pricing</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}
