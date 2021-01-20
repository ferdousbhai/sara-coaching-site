import React from 'react'
import Link from 'next/link'

export function Articles({ posts }) {
    return (
        <div className="prose">
            <h1 className="p-6">
                Articles
            </h1>
            {posts.map(post =>
                <Link
                    key={post.slug}
                    className="pl-6"
                    href="/post/[slug]"
                    as={`/post/${post.slug}`}
                >
                    <a>{post.title}</a>
                </Link>
            )}
            {console.log(posts)}


        </div>
    )
}
