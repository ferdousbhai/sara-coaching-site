import React from 'react'
import Link from 'next/link'
import { usePosts } from '../context/PostContext';

export function Articles() {
    return (
        <div className="container prose p-4 mx-auto flex flex-col">
            <h1 className="pt-6">
                Articles:
            </h1>
            <ArticlesList />
        </div>
    )
}

const ArticlesList = () => {

    // Use hook to access context
    const { data, error } = usePosts()

    // Error and loading states
    if (error) return (
        <div>Error loading posts</div>
    )

    if (!data) return (
        <div>Loading...</div>
    )

    return (
        <>
            {
                data.posts.map(post =>
                    <Link
                        key={post.slug}
                        className="pl-6"
                        href="/post/[slug]"
                        as={`/post/${post.slug}`}
                    >
                        <a className="hover:opacity-50">{post.title}</a>
                    </Link>
                )
            }
        </>
    )
}
