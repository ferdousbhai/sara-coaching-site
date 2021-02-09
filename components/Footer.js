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
        <footer className="bg-pink-100  w-full px-4">
            <div className="px-4 pt-3 pb-4 -mx-4">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-xl text-left inline-block font-semibold text-pink-800">Subscribe to Sara Adolfsen's blog</h2>
                    <p className="text-pink-700 text-xs pl-px">
                        Get the latest posts delivered right to your inbox
                    </p>
                    <form action="#" className="mt-2">
                        <div className="flex items-center">
                            <input type="email" className="w-full px-2 py-4 mr-2  bg-pink-100 shadow-inner rounded-md border border-pink-400 focus:outline-none" required />
                            <button className="bg-pink-600 text-pink-200 px-5 py-2 rounded shadow hover:opacity-50">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <p className="text-pink-700 p-2 text-center text-sm">
                    Sara Adolfsen<br />
                    Bohemian Goddess<br />
                    Meripuistotie 4, 00200 Helsinki<br />
                    Phone: +358 40 8400701
                </p>
            </div>
        </footer>



    )
}


