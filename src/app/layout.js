import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CODERIT',
  description: 'Prestigious Coding Club of RIT',
}

const mystyle={
  minHeight:'100vh',
  display: 'flex',
  flexDirection: 'column'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={mystyle}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
