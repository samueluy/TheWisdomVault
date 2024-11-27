import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'TheWisdomVault',
  description: 'Share and discover daily wisdom from around the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


