'use client';

import NavBar from './(components)/NavBar';
import { ListStickyNotes } from './(components)/sticky-notes';

import '@fortawesome/fontawesome-free/css/all.css';
import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Sticky Notes</title>
            </head>
            <body className="min-h-screen h-full">
                <NavBar>
                    <ListStickyNotes />
                    {children}
                </NavBar>
            </body>
        </html>
    );
}
