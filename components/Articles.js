import React from 'react'
import Link from 'next/link'

export function Articles({ posts }) {
    return (
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
    )
}
