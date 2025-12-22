import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { CREATE_ABOUTUS } from '@/resources/server_apis';

export default function About() {

    const { register, handleSubmit, reset } = useForm();

    const [features, setFeatures] = useState([
    ]);

    const addFeature = () => {
        setFeatures([...features, { id: Date.now(), text: '' }]);
    };

    const removeFeature = (id) => {
        setFeatures(features.filter(f => f.id !== id));
    };

    const updateFeature = (id, text) => {
        setFeatures(features.map(f => f.id === id ? { ...f, text } : f));
    };

    const handleSaveAbout = async (data) => {

        const newData = {
            mission: data.mission,
            vision: data.vision,
            features: features
        }
        
        try {
            await axios.post(CREATE_ABOUTUS, newData);            
        } catch (error) {
            console.log("Error in axios: ", error)
        }
    }

    return (
        <div className="space-y-6 max-w-4xl">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">About Page</h2>
                <p className="text-muted-foreground">Manage the content of your About Us page.</p>
            </div>

            <div className="grid gap-6">
                <form onSubmit={handleSubmit(handleSaveAbout)}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Company Overview</CardTitle>
                            <CardDescription>Define your company's mission and vision.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="mission">Our Mission</Label>
                                <Textarea
                                    id="mission"
                                    className="min-h-[100px]"
                                    { ...register("mission") }
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="vision">Our Vision</Label>
                                <Textarea
                                    id="vision"
                                    className="min-h-[100px]"
                                    { ...register("vision") }
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Why Choose Us?</CardTitle>
                            <CardDescription>List the key benefits of your service.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {features.map((feature) => (
                                <div key={feature.id} className="flex gap-2">
                                    <Input
                                        value={feature.text}
                                        onChange={(e) => updateFeature(feature.id, e.target.value)}
                                        placeholder="Feature text"
                                    />
                                    <Button variant="ghost" size="icon" className="text-destructive" onClick={() => removeFeature(feature.id)}>
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            ))}
                            <Button variant="outline" onClick={addFeature} className="w-full">
                                <Plus className="w-4 h-4 mr-2" /> Add Feature
                            </Button>
                        </CardContent>
                    </Card>

                    <div className="flex justify-end">
                        <Button size="lg">Save Changes</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
