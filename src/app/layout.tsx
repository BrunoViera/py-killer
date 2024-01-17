import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import classNames from "classnames";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

// import "./globals.css";
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Theme
          appearance="inherit"
          accentColor="mint"
          grayColor="gray"
          panelBackground="solid"
          scaling="100%"
          radius="full"
        >
          {children}
        </Theme>
      </body>
    </html>
  );
}
