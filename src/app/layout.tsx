import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

import '@/styles/layout.scss'

const dmSans = DM_Sans({
    variable: '--font-dm-sans',
    subsets: ['latin'],
    weight: ['400', '500', '600','700'],
})

export const metadata: Metadata = {
    title: 'Weltenters Test',
    description: "Let's see what you can do!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${dmSans.variable}`}>
                {children}
            </body>
        </html>
    );
}
