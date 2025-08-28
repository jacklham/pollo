import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jack Lham - Portfolio",
  description: "Senior Software Developer specializing in full-stack development with modern technologies.",
  keywords: ["software developer", "full-stack", "react", "nextjs", "typescript"],
  authors: [{ name: "Jack Lham" }],
  icons: {
    icon: '/profile.jpg',
    shortcut: '/profile.jpg',
    apple: '/profile.jpg',
  },
  openGraph: {
    title: "Jack Lham - Portfolio",
    description: "Senior Software Developer specializing in full-stack development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
