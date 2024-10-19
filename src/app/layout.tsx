import localFont from "next/font/local";
import "./globals.css";
import QueryProvider from "@/lib/reactQuery/QueryProvider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`antialiased`}>
        <div className="fixed top-0 left-0 !w-full shadow-lg z-50">
          <Header />
          <Navbar />
        </div>
        <QueryProvider>{children}</QueryProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
