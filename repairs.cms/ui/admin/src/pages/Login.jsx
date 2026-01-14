import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Loader2, Lock, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { toast } from 'sonner';
import { LOGIN_URL } from '@/resources/server_apis';
import axios from 'axios';
import { useAuth } from '@/AuthContext';
import { useGoogleLogin } from '@react-oauth/google';

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleUserLogin = async (data) => {
        if (!data.email || !data.password) return toast.error("Form fields are required!");

        try {
            setIsLoading(true);
            const response = await axios.post(LOGIN_URL, data);
            if (response.data.status == true) {
                setIsLoading(false);
                toast.success(response.data.message);
                await login(response.data.userToken, response.data.user);
                navigate('/');
            } else {
                setIsLoading(false);
                toast.error(response.data.message);
            }
        } catch (error) {
            setIsLoading(false);
            console.log("Error: ", error);
            toast.error("Network error!");
        }
    }

    const handleGoogleLogin = useGoogleLogin({
        onSuccess: async (token) => {
            try {
                setIsLoading(true);
                console.log("Token: ", token);
                const response = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        Authorization: `Bearer ${token.access_token}`
                    }
                });
                const data = await response.json();
                console.log(data);
                
                setIsLoading(false);
                toast.success("Login successful!");
                await login(token.access_token, data);
                navigate('/'); // redirect to dashboard
            } catch (error) {
                setIsLoading(false);
                console.log("Error: ", error);
                toast.error("Network error!");
            }    
        }
    });

    return (
        <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                <div className="absolute inset-0 bg-zinc-900" />
                <div className="relative z-20 flex items-center text-lg font-medium">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-6 w-6"
                    >
                        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                    </svg>
                    Repairs CMS
                </div>
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-lg">
                            &ldquo;This library has saved me countless hours of work and
                            helped me deliver stunning designs to my clients faster than
                            ever before.&rdquo;
                        </p>
                        <footer className="text-sm">Sofia Davis</footer>
                    </blockquote>
                </div>
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Login to your account
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your email below to login to your admin dashboard
                        </p>
                    </div>
                    <div className="grid gap-6">
                        <form onSubmit={handleSubmit(handleUserLogin)}>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            {...register("email")}
                                            id="email"
                                            placeholder="name@example.com"
                                            type="email"
                                            autoCapitalize="none"
                                            autoComplete="email"
                                            autoCorrect="off"
                                            disabled={isLoading}
                                            className="pl-9"
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <div className="relative">
                                        <Lock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            {...register("password")}
                                            id="password"
                                            placeholder="Password"
                                            type={showPassword ? "text" : "password"}
                                            autoCapitalize="none"
                                            autoComplete="current-password"
                                            disabled={isLoading}
                                            className="pl-9 pr-9"
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? (
                                                <EyeOff className="h-4 w-4 text-muted-foreground" />
                                            ) : (
                                                <Eye className="h-4 w-4 text-muted-foreground" />
                                            )}
                                            <span className="sr-only">
                                                {showPassword ? "Hide password" : "Show password"}
                                            </span>
                                        </Button>
                                    </div>
                                </div>
                                <Button disabled={isLoading}>
                                    {isLoading && (
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    )}
                                    Sign In
                                </Button>
                            </div>
                        </form>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                    Or continue with
                                </span>
                            </div>
                        </div>
                        <Button onClick={() => handleGoogleLogin()} variant="outline" type="button" disabled={isLoading}>
                            {isLoading ? (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                                <svg
                                    className="mr-2 h-4 w-4"
                                    viewBox="0 0 48 48"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    focusable="false"
                                >
                                    <path fill="#EA4335" d="M24 9.5c3.1 0 5.9 1.1 8.1 3.1l6-6C34.5 2.7 29.6 0 24 0 14.6 0 6.6 5.4 2.7 13.3l7 5.4C11.6 13.1 17.3 9.5 24 9.5z" />
                                    <path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-2.8-.4-4H24v7.6h12.7c-.6 3.1-2.4 5.8-5.1 7.6l7.9 6.1c4.6-4.2 6.6-10.4 6.6-17.3z" />
                                    <path fill="#FBBC05" d="M9.7 28.7c-.5-1.5-.8-3.1-.8-4.7s.3-3.2.8-4.7l-7-5.4C.9 17.4 0 20.6 0 24s.9 6.6 2.7 9.4l7-4.7z" />
                                    <path fill="#34A853" d="M24 48c5.6 0 10.5-1.8 14-5l-7.9-6.1c-2.2 1.5-5 2.4-8.1 2.4-6.7 0-12.4-4.6-14.4-10.7l-7 5.4C6.6 42.6 14.6 48 24 48z" />
                                </svg>
                            )}
                            Google
                        </Button>
                    </div>
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        By clicking continue, you agree to our{" "}
                        <NavLink
                            to="/terms"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Terms of Service
                        </NavLink>{" "}
                        and{" "}
                        <NavLink
                            to="/privacy"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Privacy Policy
                        </NavLink>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}
