import { type Metadata } from 'next'
//Clerkware imports
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
} from '@clerk/nextjs'
//Personalize CSS
import '@/app/styles/globals.css'
//SPARK logo
import logo from '@/app/Images/logo.png'
//SPARK background image
import Link from 'next/link'
import Image from 'next/image'

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
                    <ul className="topnav">
                        <Link href="/">
                            <Image src={logo} alt='SPARK logo' />
                        </Link>
                        <li><a href="https://www.rva.gov/parks-recreation/powhatan-community-center">Contact Us</a></li>
                        <li><a href="/sessions">Events & Sessions</a></li>
                        <li style={{ float: 'right' }}><a href="https://quick-gull-37.accounts.dev/sign-in"><SignInButton /></a></li>
                        <li style={{ float: 'right' }}><a href="https://quick-gull-37.accounts.dev/sign-up"><SignUpButton /></a></li>
                    </ul>
                    <main>{children}</main>
                </ClerkProvider>

            </body>
        </html>
    )
}
