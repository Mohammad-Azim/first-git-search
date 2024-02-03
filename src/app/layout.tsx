import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRegistry from "../utils/ThemeRegistry";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GitHub Search",
  description: "GitHub search next app",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {<ThemeRegistry options={{ key: 'mui-theme' }}>{children}</ThemeRegistry>}
      </body>
    </html>
  );
}
