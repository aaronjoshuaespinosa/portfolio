import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>AJ Espinosa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full h-screen flex items-center justify-center bg-dark text-light font-space'>
        <p>Hello World</p>
      </main>
    </>
  )
}
