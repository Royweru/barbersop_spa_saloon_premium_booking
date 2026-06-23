import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rolin Barbershop & Spa - Premium Grooming in Nairobi",
  description: "Experience the perfect blend of traditional barbering and modern spa therapies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Montserrat:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-surface antialiased text-body-md overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
