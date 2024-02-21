import Footer from '@/components/Footer'
import NavBar from '@/components/navBar'
import '@/styles/globals.css'

import { Lato } from 'next/font/google'

const lato = Lato({
   weight:['100','300','400','700','900'],
    display: 'swap',
    preload: true,

    subsets: ['latin-ext','latin'],

})

export const metadata = {
    title: 'Eventos Power Zone',
    description:
        'Hacemos su evento especial y realmente inolvidable',
    icons: [{ rel: 'icon', url: '/icon.ico' }],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`font-sans ${lato.className}`}>
                <NavBar />
                {children}
                <Footer/>
            </body>

        </html>
    )
}
