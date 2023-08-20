import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import ToasterContext from "@/app/context/ToasterContext";
import AuthContext from "@/app/context/AuthContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Messenger Clone ',
  description: 'a Chat application with next, React, Tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthContext>
          <ToasterContext />
          {children}
      </AuthContext>
      </body>
    </html>
  )
}
