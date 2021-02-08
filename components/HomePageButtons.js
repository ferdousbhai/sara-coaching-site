import React from 'react'
import Link from 'next/link'

export function HomePageButtons() {
    return (
        <div className="my-8">
            <Link href="/coaching">
                <a className="bg-pink-100 bg-opacity-50 hover:bg-pink-400 hover:text-pink-100 focus:underline font-semibold py-2 px-4 border border-pink-500 hover:border-transparent rounded-full mr-4">
                    Coaching
                </a>
            </Link>
            <Link href="/retreats">
                <a className="bg-pink-100 bg-opacity-50 hover:bg-pink-400 hover:text-pink-100 focus:underline font-semibold py-2 px-4 border border-pink-500 hover:border-transparent rounded-full mr-4">
                    Retreats
                </a>
            </Link>
            <a
                href="https://bohemiangoddess.fi/"
                className="bg-pink-100 bg-opacity-50 hover:bg-pink-400 hover:text-pink-100 focus:underline font-semibold py-2 px-4 border border-pink-500 hover:border-transparent rounded-full mr-4"
            >
                Jewelry
        </a>
        </div>
    )
}

