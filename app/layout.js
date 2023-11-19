
import './globals.css';
import Navbar from '@/components/Navbar';


export const metadata = {
  title: 'getlinked',
  description: 'Designrd by Mickerl_Codes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#150e28] text-white'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
