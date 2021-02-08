import React from 'react'
import Link from 'next/link'
import { ArticleCard } from './ArticleCard.js'

export function FeaturedArticles({ posts }) {
    return (
        <div className="container mx-auto">

            <h1 className="py-6 text-gray-800 text-2xl font-semibold">
                Featured Articles:
            </h1>

            <div className="flex flex-wrap items-center justify-between">
                {posts.map(post =>
                    <Link
                        key={post.slug}
                        className="pl-6"
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
                )}
            </div>




        </div>
    )
}
