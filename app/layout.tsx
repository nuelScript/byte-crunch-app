import RegisterModal from './components/Modals/RegisterModal';
import Navbar from './components/Navbar/Navbar';
import About from './container/About/About'
import Lpage from './container/Lpage/Lpage'
import Hpage from './container/Lpage/Hpage';
import Vpage from './container/Lpage/Vpage'
import Cpage from './container/Lpage/Cpage'
import './globals.css'
import { Lexend_Deca } from 'next/font/google';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/Modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';


export const metadata = {
  title: 'Byte & Crunch',
  description: 'Byte & Crunch is an e-commerce store for foods',
}

const font = Lexend_Deca({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body
        className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        {children}
        <About />
        <Lpage/>
        <Hpage/>
        <Vpage/>
        <Cpage/>
      </body>
    </html>
  )
}
