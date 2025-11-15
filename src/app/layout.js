import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: 'Md Babul Hossain - MERN & Next.js Developer',
  description: 'Full-stack JavaScript developer specializing in Next.js, Node.js, and modern DevOps practices. Open to remote roles.',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
       >
        <div className="bg-gray-50 text-gray-900">
        {children}
        </div>
      </body>
    </html>
  );
}
