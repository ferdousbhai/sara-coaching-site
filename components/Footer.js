import React from 'react'
import Link from 'next/link'

export function Footer() {
    const footerItems = [
        {
            item: 'Store',
            link: 'https://bohemiangoddess.fi/',
        },
        {
            item: 'Contact',
            link: 'mailto:sara@bohemiangoddess.com',
        },
        {
            item: 'Newletter',
            link: '#',
        },

    ]
    return (
        <footer className="bg-pink-100 shadow">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    <Link href="/">
                        <a>
                            <img
                                className="inline-block h-16 w-16 rounded-full ring-2 ring-white"
                                src="avatar.jpg"
                                alt="HOME"
                            />
                        </a>
                    </Link>
                    <div className="hidden sm:flex sm:items-center">
                        {footerItems.map((obj, index) => (
                            <a key={index} href={obj.link} className="text-gray-800 text-sm font-semibold hover:text-pink-600 mr-4">{obj.item}</a>
                        ))}
                    </div>

                    <div className="block sm:hidden py-2">
                        <div className="flex flex-col">
                            <a href="https://bohemiangoddess.fi/" className="text-gray-800 text-sm font-semibold hover:text-pink-600 mb-1">Store</a>
                            <a href="mailto:sara@bohemiangoddess.com" className="text-gray-800 text-sm font-semibold hover:text-pink-600 mb-1">Contact</a>
                            <a href="#" className="text-gray-800 text-sm font-semibold hover:text-pink-600">Newsletter</a>
                        </div>
                    </div>



                </div>
            </div>
        </footer >

    )
}


