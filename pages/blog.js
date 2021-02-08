import React, { useState } from 'react'
import Link from 'next/link'
import { Nav } from '../components/Nav.js'
import { ArticleCard } from '../components/ArticleCard.js'
import { Footer } from '../components/Footer.js'


const { BLOG_URL, CONTENT_API_KEY } = process.env

async function getPosts() {
    const res = await fetch(
        `${BLOG_URL}/ghost/api/v3/content/posts?key=${CONTENT_API_KEY}&fields=title,custom_excerpt,feature_image,slug,featured`
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

    const [enableLoadAllPosts, setEnableLoadAllPosts] = useState(false)

    function loadAllPosts() {
        setEnableLoadAllPosts(true)
    }

    function renderPosts(posts) {
        return (
            posts.map(post =>
                <Link
                    key={post.slug}
                    href="/post/[slug]"
                    as={`/post/${post.slug}`}
                >
                    <a className="hover:opacity-50">
                        <ArticleCard
                            title={post.title}
                            feature_image={post.feature_image}
                            excerpt={post.custom_excerpt}
                        />
                    </a>
                </Link>
            )
        )

    }

    return (
        <div className="flex flex-col h-screen">
            <Nav />

            <div className="mx-auto flex flex-col p-4">

                {!enableLoadAllPosts &&
                    <div>
                        <h1 className="text-4xl font-extrabold pt-6 pb-6">
                            Featured Articles:
                        </h1>

                        {renderPosts(posts.filter(post => post.featured))}

                    </div>
                }

                {!enableLoadAllPosts &&
                    <button
                        className="bg-pink-300 hover:bg-pink-400 text-gray-800 text-xl font-bold py-2 px-4 rounded"
                        onClick={loadAllPosts}
                    >
                        <span>View All Articles ⇣ ⇣</span>
                    </button>
                }

                {enableLoadAllPosts &&
                    <div>
                        <h1 className="text-4xl font-extrabold pt-6 pb-6">
                            All Articles:
                        </h1>

                        {renderPosts(posts)}

                    </div>
                }

            </div>

            <Footer />
        </div >
    )
}