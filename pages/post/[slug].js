import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Nav } from '../../components/Nav.js'
import { Footer } from '../../components/Footer.js'

const { BLOG_URL, CONTENT_API_KEY } = process.env

async function getPost(slug) {
    const res = await fetch(
        `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,feature_image,html`
    ).then(res => res.json())
    // returns an object with 'posts' key that contain an array of posts; only one item in this array matching the slug.
    return res.posts[0]
}

// Ghost CMS request
export async function getStaticProps({ params }) {
    const post = await getPost(params.slug)
    return {
        props: { post },
        revalidate: 10 //make a request to CMS backend every 10s
    }
}

// On first request, Ghost CMS request is made.
// On subsequent requests, the filesystem is called.
export function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    }
}

export default function Post({ post }) {

    const [enableLoadComments, setEnableLoadComments] = useState(true)

    const router = useRouter()

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    function loadComments() {
        //load disqus

        setEnableLoadComments(false)

            ; (window).disqus_config = function () {
                this.page.url = window.location.href
                this.page.identifier = post.slug
            }

        const script = document.createElement('script')
        script.src = 'https://www-saraadolfsen-com.disqus.com/embed.js'
        script.setAttribute('data-timestamp', Date.now().toString())

        document.body.appendChild(script)
    }

    return (
        <div>
            <Nav />
            <article className="container prose lg:prose-xl p-4 mx-auto flex flex-col">
                <h1 className="pt-6">{post.title}</h1>
                <img src={post.feature_image} alt="" />
                <div
                    className="max-w-screen-md box-border"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                >
                </div>

                {enableLoadComments &&
                    <button
                        className="bg-pink-300 hover:bg-pink-400 text-pink-800 font-bold py-2 px-4 rounded"
                        onClick={loadComments}
                    >
                        <span>Share your thoughts ⇣ ⇣</span>
                    </button>
                }
                <div id="disqus_thread">
                    {/* Loads disqus commenting section */}
                </div>
            </article>
            <Footer />

        </div>
    )
}

