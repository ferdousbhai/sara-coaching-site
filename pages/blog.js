import React from 'react'
import Link from 'next/link'
import { Nav } from '../components/Nav.js'
import { Footer } from '../components/Footer.js'


const { BLOG_URL, CONTENT_API_KEY } = process.env

async function getPosts() {
    const res = await fetch(
        `${BLOG_URL}/ghost/api/v3/content/posts?key=${CONTENT_API_KEY}&fields=title,custom_excerpt,feature_image,slug`
    ).then(res => res.json())
    // returns an object with 'posts' key that contain an array of post objects
    return res.posts
}

export async function getStaticProps() {
    const posts = await getPosts()
    return {
        props: { posts },
        revalidate: 10 //make a request to CMS backend every 10s
    }
}

export default function Blog({ posts }) {
    return (
        <div className="flex flex-col h-screen">
            <Nav />
            <main className="p-4 flex-grow">
                <div className="container prose p-4 mx-auto flex flex-col">
                    <h1 className="pt-6">
                        Articles:
                    </h1>

                    {posts.map(post =>
                        <Link
                            key={post.slug}
                            className="pl-6"
                            href="/post/[slug]"
                            as={`/post/${post.slug}`}
                        >
                            <a className="hover:opacity-50">{post.title}</a>
                        </Link>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    )
}