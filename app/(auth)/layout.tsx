import type { Metadata } from "next";
import { Inter } from "next/font/google";

const fontInter = Inter({
  subsets: ["latin"],
  weight: ["100", '200', "300", '400', '500', '600', '700', '800', '900']
})



export const metadata: Metadata = {
  title: "sign in",
  description: "wasabi admin sign in",

};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div
      className={`${fontInter.className} antialiased`}
    >
      {children}
    </div>

  );
}
