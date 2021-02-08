import Head from 'next/head'
import { Nav } from '../components/Nav'
import { HomePageButtons } from '../components/HomePageButtons'

export default function Home() {

  return (
    <>
      <Head>
        <title>Sara Adolfsen - Coaching</title>
        <link
          rel="preload"
          href="/fonts/Fonts-zoxi-regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <main className="relative flex flex-col h-screen overflow-hidden">

        <div className="z-30">
          <Nav />
        </div>

        <div className="flex flex-col flex-grow items-center justify-center border-dotted z-30">
          <article className="relative flex flex-col items-center justify-center px-4 prose lg:prose-xl">
            <header>
              <h2>
                AWAKEN YOUR INNER GODDESS
              </h2>
            </header>
            <p className="text-gray-900">
              Are you ready to claim your own power, freedom and pleasure? Are you ready to fall in love with yourself? Find out how I can help you become empowered.
            </p>
          </article>
          <HomePageButtons />
        </div>
        <video className="absolute z-10 w-auto min-h-full min-w-full max-w-none" src="/sexy-swirls3_hd.mp4" muted loop autoPlay></video>

      </main >

    </>
  )
}
