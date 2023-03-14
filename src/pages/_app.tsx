import '@/styles/globals.css'
import Navigation from "../comps/Nav/Nav.jsx"

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navigation></Navigation>
      <Component {...pageProps} />
    </div>
  )
}
