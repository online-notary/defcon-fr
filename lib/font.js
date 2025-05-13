import { Nunito, Montserrat_Alternates } from 'next/font/google'

export const nunito = Nunito({
    weight: ['300', '400', '500', '600', '700', '800','900',],
    subsets: ['latin'],
    variable: "--nunito",
    display: 'swap',
})

export const montserrat_alternates = Montserrat_Alternates({
    weight: ['300', '400', '500', '600', '700', '800','900',],
    subsets: ['latin'],
    variable: "--montserrat_alternates",
    display: 'swap',
})
