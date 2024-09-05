import { Inter } from "next/font/google";
import "./globals.css";
import UserProvider from "./context/user-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>{children}</UserProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
