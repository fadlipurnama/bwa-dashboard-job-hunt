import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import SidebarComponent from "@/components/layouts/Sidebar";
import { Epilogue } from "next/font/google";
import Header from "@/components/layouts/Header";

const epilogue = Epilogue({ subsets: ["latin"] });

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          // ${geistSans.variable} ${geistMono.variable}
          `${epilogue.className}
          antialiased`
        }
      >
        <main>
          <div className="border-t">
            <div className="bg-background">
              <div className="flex flex-row">
                <div className="hidden lg:block w-[18%]">
                  <SidebarComponent />
                </div>
                <div className="col-span-3 overflow-auto lg:col-span-5 lg:border-l w-[82%]">
                  <div className="p-6 lg:px-8">
                    <Header />
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
