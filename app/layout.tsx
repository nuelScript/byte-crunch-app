import RegisterModal from './components/Modals/RegisterModal';
import Navbar from './components/Navbar/Navbar';
import './globals.css'
import { Lexend_Deca } from 'next/font/google';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/Modals/LoginModal';

export const metadata = {
  title: 'Byte & Crunch',
  description: 'Byte & Crunch is an e-commerce store for foods',
}

const font = Lexend_Deca ({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
      className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <Navbar />       
        {children}
        </body>
    </html>
  )
}
