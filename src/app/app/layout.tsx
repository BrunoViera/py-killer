import "@radix-ui/themes/styles.css";
import classNames from "classnames";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../globals.css";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={classNames(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}
    >
      {children}
    </div>
  );
}
