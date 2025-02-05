
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Fabric Gallery",
  description: "Elegant fabric and clothing gallery",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className="container mx-auto px-4 py-8">{children}</body>
    </html>
  )
}

