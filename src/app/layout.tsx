import { type Metadata } from 'next'
//Clerkware imports
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedOut,
    SignedIn,
    UserButton,
} from '@clerk/nextjs'
//Personalize CSS
import '@/app/styles/globals.css'


export const metadata: Metadata = {
    title: 'SPARK',
    description: 'Webpage for SPARK',
}


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body>
                <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
                    <html lang="en">
                        <body>
                            <header className="flex justify-end items-center p-4 gap-4 h-16">
                                <SignedOut>
                                    <SignInButton />
                                    <SignUpButton />
                                </SignedOut>
                                <SignedIn>
                                    <UserButton />
                                </SignedIn>
                            </header>
                            {children}
                        </body>
                    </html>

                </ClerkProvider>

            </body>
        </html>
    )
}
