import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'
import Newsletter from '@/components/Newsletter'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>
          <div className='relative min-h-screen'>
            <Navbar />

            <main className='h-full'>
              {children}
            </main>

            <footer className='absolute bottom-[-26.5rem] w-full'>
              <Newsletter />

              <Footer />
            </footer>
          </div> 
        </Providers>
      </body>
    </html>
  )
}
