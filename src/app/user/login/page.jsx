"use client"

import { useState } from "react"
import Link from 'next/link'

export default function Page(){
    const [data, setData] = useState({email: "", password: ""})
    const [isLoading, setIsLoading] = useState(false)

    const InputChange = (name, value) => {
        setData(pre => ({
            ...pre,
            [name]: value
        }))
    }

    const FormSubmitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!data.email.trim() || !data.password.trim()) {
            alert("Please fill in all fields");
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch("/api/user/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            
            if (!response.ok) {
                alert("Invalid credentials. Please try again.");
                return;
            }

            const json = await response.json();
            
            if (json.status === "success") {
                alert('Login successful!');
                window.location.replace("/dashboard/myMessage");
            } else {
                alert("Please provide valid email and password");
            }
        } catch (error) {
            alert("Login failed. Please try again.");
            console.error("Login error:", error);
        } finally {
            setIsLoading(false);
        }
    };
 
    return(
        <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
            <div className="w-full max-w-md">
                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                            🔑
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Welcome Back
                        </h1>
                        <p className="text-gray-600 text-sm mt-2">
                            Sign in to your dashboard
                        </p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={FormSubmitHandler} className="space-y-6">
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                                Email Address
                            </label>
                            <input 
                                type='email' 
                                placeholder='Enter your email' 
                                value={data.email} 
                                onChange={(e) => InputChange("email", e.target.value)} 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                id="email"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                                Password
                            </label>
                            <input 
                                type="password" 
                                placeholder="Enter your password" 
                                value={data.password} 
                                onChange={(e) => InputChange("password", e.target.value)} 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                id="password"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                        >
                            {isLoading ? (
                                <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                                    <span>Signing In...</span>
                                </>
                            ) : (
                                <span>Sign In</span>
                            )}
                        </button>

                        {/* Links Section */}
                        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                            <Link 
                                href="/user/registration" 
                                className="text-blue-600 hover:text-blue-700 transition-colors text-sm"
                            >
                                Create Account
                            </Link>
                            
                            <Link 
                                href="/user/forgetpassword" 
                                className="text-gray-600 hover:text-gray-700 transition-colors text-sm"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                    </form>
                </div>

                {/* Additional Info */}
                <div className="text-center mt-6">
                    <p className="text-gray-500 text-sm">
                        Secure login with encrypted connection
                    </p>
                </div>
            </div>
        </div>
    )
}