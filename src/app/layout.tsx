import '../app/styles/globals.css'
import { type Metadata } from 'next'
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
} from '@clerk/nextjs'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
    title: 'SPARK: Reigniting Learning',
    description: 'Website',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
            <html lang="en">
                < meta name="viewport" content="width=device-width, initial-scale=1" />
                <body className="body">
                    <header className="flex justify-end items-center p-4 gap-4 h-16">
                        <SignInButton />
                        <SignUpButton />
                    </header>
                    {children}
                    <SpeedInsights />
                </body>
            </html>
        </ClerkProvider>
    )
}