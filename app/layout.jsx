import '@fortawesome/fontawesome-free/css/all.css';
import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Sticky Notes</title>
            </head>
            <body className="min-h-screen h-full">
                {children}
            </body>
        </html>
    );
}
