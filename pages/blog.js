import React, { useState } from 'react'
import Link from 'next/link'
import { Layout } from '../components/Layout.js'
import { ArticleCard } from '../components/ArticleCard.js'



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

        <Layout>
            <main className="mx-auto p-4 flex flex-col flex-grow">
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
                        className="text-gray-800 text-xl font-bold py-2 px-4 rounded hover:opacity-50"
                        onClick={loadAllPosts}
                    >
                        <span className="underline">View All Articles</span>
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
            </main>
        </Layout>

    )
}