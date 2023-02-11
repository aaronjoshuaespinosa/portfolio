import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>AJ Espinosa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full h-screen flex flex-col text-8xl font-bold items-center justify-center bg-dark text-light font-space'>
        <p className='text-primary'>Hello World</p>
        <p className='text-secondary'>Hello World</p>
        <p className='text-accent'>Hello World</p>
      </main>
    </>
  )
}
