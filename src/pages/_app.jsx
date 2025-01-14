import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { appWithTranslation } from 'next-i18next'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import { Analytics } from '@vercel/analytics/react'

import '@/styles/tailwind.css'
import 'focus-visible'
import '@/styles/styles.css'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

const App = ({ Component, pageProps, router }) => {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
          <Analytics />
        </main>
        <Footer />
      </div>
    </>
  )
}
export default appWithTranslation(App)
