import './globals.css'
import { Figtree } from 'next/font/google'
import Sidebar from '@/Components/Sidebar'
import SupabaseProvider from '@/Providers/SupabaseProvider'
import UserProvider from '@/Providers/UserProvider'
import ModalProvider from '@/Providers/ModalProvider'
import ToasterProvider from '@/Providers/ToasterProvider'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone',
  description: 'Listen to Music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <SupabaseProvider>

          <UserProvider>

            <ModalProvider/>
            
            <Sidebar>
              {children}
            </Sidebar>

          </UserProvider>

        </SupabaseProvider>
        </body>
    </html>
  )
}
