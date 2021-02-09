import React from 'react'
import Link from 'next/link'

export function HomePageButtons() {
    return (
        <div className="my-8">
            <Link href="/coaching">
                <a className="bg-pink-100 bg-opacity-50 font-semibold py-2 px-4 border border-pink-500 rounded-full mr-4 hover:bg-opacity-30 hover:border-transparent hover:text-gray-600 focus:underline">
                    Coaching
                </a>
            </Link>
            <Link href="/retreats">
                <a className="bg-pink-100 bg-opacity-50 font-semibold py-2 px-4 border border-pink-500 rounded-full mr-4 hover:bg-opacity-30 hover:border-transparent hover:text-gray-600 focus:underline">
                    Retreats
                </a>
            </Link>
            <a
                href="https://bohemiangoddess.fi/"
                className="bg-pink-100 bg-opacity-50 font-semibold py-2 px-4 border border-pink-500 rounded-full mr-4 hover:bg-opacity-30 hover:border-transparent hover:text-gray-600 focus:underline"
            >
                Jewelry
        </a>
        </div>
    )
}

