import { Inter, Nunito, Poppins } from 'next/font/google'
import '../globals.css'
import AuthProvider from '@/Providers/AuthProvider'


export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
})

export const metadata = {
    title: 'Clean Jobs',
    description: 'Generated by create next app',
}


export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '900'],
    variable: '--font-poppins',
})

export const nunito = Nunito({
    subsets: ['latin'],
    weight: ['400', '500', '600', '900'],
    variable: '--font-nunito',
})



export default function RootLayout({ children }) {
    return (
        <html lang="en" >
            <body className={`${inter.variable} ${poppins.variable} ${nunito.variable}`}>
                <main className='bg-white overflow-hidden'>
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </main>
            </body>
        </html>
    )
}
