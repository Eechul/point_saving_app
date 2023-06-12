import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode,
  modal: React.ReactNode,
}) {

  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
        {modal}
      </body>
    </html>
  )
}
