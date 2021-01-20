import Head from 'next/head'
import Link from 'next/link'
import { Nav } from '../components/Nav'
import { GoddessTest } from '../components/GoddessTest.js'
import { Footer } from '../components/Footer.js'
import { Articles } from '../components/Articles.js'
import { Social } from '../components/Social.js'

const { BLOG_URL, CONTENT_API_KEY } = process.env

async function getPosts() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts?key=${CONTENT_API_KEY}&fields=title,slug`
  ).then(res => res.json())
  // returns an object with 'posts' key that contain an array of posts
  return res.posts
}

export async function getStaticProps({ params }) {
  const posts = await getPosts()
  return {
    props: { posts },
    revalidate: 10 //make a request to CMS backend every 10s
  }
}

export default function Home({ posts }) {

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

        <div className="flex flex-grow items-center justify-center border-dotted">
          <article className="relative flex flex-col items-center justify-center z-30 px-4 prose lg:prose-xl">
            <header>
              <h2>
                AWAKEN YOUR INNER GODDESS
              </h2>
            </header>
            <p>
              Are you ready to claim your own power, freedom and pleasure? Are you ready to fall in love with yourself? Find out how I can help you become empowered.
            </p>
            <div className="content">
              <Link href="/about">
                <a className="bg-pink-100 bg-opacity-50 hover:bg-pink-400 hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded-full mr-4">
                  READ MORE
                    </a>
              </Link>
              <a
                href="https://calendly.com/bohemiangoddess/maksuton-inspiraatiopuhelu-45min?month=2020-06"
                className="bg-pink-100 bg-opacity-50 hover:bg-pink-400 hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded-full mr-4"
              >
                BOOK AN APPOINTMENT
              </a>
            </div>
            <div className="hidden sm:flex justify-end p-2 z-30">
              <Social />
            </div>
          </article>
        </div>
        <video className="absolute z-10 w-auto min-h-full min-w-full max-w-none" src="/sexy-swirls3_hd.mp4" muted loop autoPlay></video>

      </main>

      <div>
        <GoddessTest />
      </div>

      <Articles posts={posts} />

      <Footer />

    </>
  )
}
