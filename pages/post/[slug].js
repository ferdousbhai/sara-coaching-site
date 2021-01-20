import React, { useState } from 'react'
import { Nav } from '../../components/Nav'
import { useRouter } from 'next/router'

const { BLOG_URL, CONTENT_API_KEY } = process.env

async function getPost(slug) {
    const res = await fetch(
        `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,feature_image,html`
    ).then(res => res.json())
    // returns an object with 'posts' key that contain an array of posts; only one item in this array.
    return res.posts[0]
}

//Ghost CMS request
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
        script.src = 'https://sara-gz2rsninm0.disqus.com/embed.js'
        script.setAttribute('data-timestamp', Date.now().toString())

        document.body.appendChild(script)
    }

    return (
        <div>
            <Nav />
            <main>
                <article className="prose">
                    <h1>{post.title}</h1>
                    <div
                        className="max-w-full box-border"
                        dangerouslySetInnerHTML={{ __html: post.html }}
                    >
                    </div>

                    {enableLoadComments &&
                        <p className="" onClick={loadComments}>
                            Load comments.
                        </p>
                    }

                    <div id="disqus_thread">
                        {/* Loads disqus commenting section */}
                    </div>

                </article>
            </main>


        </div>
    )
}

