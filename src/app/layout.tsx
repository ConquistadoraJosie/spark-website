import React from 'react';
import '../app/styles/globals.css'
import { Metadata } from 'next';
import { SpeedInsights } from "@vercel/speed-insights/next"
import "@fontsource/gugi"; // Defaults to weight 400
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
}
    from '@clerk/nextjs'


export const metadata: Metadata = {
    title: 'SPARK: Reigniting Learning',
    description: 'Website',
}



export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <nav id="navbar">
                    <ClerkProvider publishableKey={process.env.CLERK_PUBLISHABLE_KEY}>
                        <div className="logo">
                            <a href="/">SPARK</a>
                        </div>
                        <ul className="nav-links">
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Sessions & Upcoming Events</a></li>
                            <li><SignInButton mode="modal" /></li>
                            <li><SignUpButton mode="modal" /></li>
                        </ul>
                    </ClerkProvider>
                </nav>
                {children}
                <SpeedInsights />
            </body>
        </html>
    );

}