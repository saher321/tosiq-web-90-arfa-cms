import React from 'react';
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Welcome to RepairCMS
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
                Manage your appliance repair business with ease. Track repairs, manage customers, and grow your business.
            </p>
            <div className="flex gap-4 mt-8">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg">Learn More</Button>
            </div>
        </div>
    );
}
