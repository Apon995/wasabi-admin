import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
 
  icons: {
    icon: "/hat-icon.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased `}>{children}</body>
    </html>
  );
}
