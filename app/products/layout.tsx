
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
      <body className={`${inter.className} bg-white text-black`}>
        <header className="py-6 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center">Elegant Fabrics</h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="py-6 border-t border-gray-200">
          <div className="container mx-auto px-4 text-center text-sm text-gray-600">
            © 2023 Elegant Fabrics. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}

