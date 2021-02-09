import React from 'react'
import Link from 'next/link'
import { Social } from './Social.js'

export function Nav() {

    const navLinkItems = [
        {
            page: 'Home',
            link: '/'
        },
        {
            page: 'About',
            link: '/about'
        },
        {
            page: 'Coaching',
            link: '/coaching'
        },
        {
            page: 'Retreats',
            link: '/retreats',
        },
        {
            page: 'Blog',
            link: '/blog',
        }
    ]

    const navAnchorItems = [
        {
            name: 'Store',
            link: 'https://bohemiangoddess.fi/'
        },
        {
            name: 'Contact',
            link: 'mailto:sara@bohemiangoddess.com',
        },
        // {
        //     name: 'Newsletter',
        //     link: '#',
        // }
    ]

    return (
        <nav className="relative container px-4 mx-auto flex md:flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between md:w-auto  px-4 md:static md:block md:justify-start">
                <Link href="/">
                    <a className="text-sm font-bold leading-relaxed inline-block p-2 mr-4 hover:opacity-50">
                        <h1 className="text-lg">
                            Sara Adolfsen
                        </h1>

                    </a>
                </Link>
            </div>
            <div className="md:flex items-center">
                <div className="flex flex-col md:flex-row list-none ml-auto">
                    <Social />
                    {navLinkItems.map((item, index) => (
                        <Link key={index} href={item.link}>
                            <a className="px-4 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-50">
                                {item.page}
                            </a>
                        </Link>
                    ))}
                    {navAnchorItems.map((item, index) => (
                        <a key={index} href={item.link} className="px-4 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-50">
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>

            <style jsx>{`
                        @font-face {
                            font-family: 'Zoxi';
                            src: url('/fonts/Fonts-zoxi-regular.ttf');
                        }
                        h1{
                            font-family: 'Zoxi';
                        }
            `} </style>

        </nav>
    )
}
