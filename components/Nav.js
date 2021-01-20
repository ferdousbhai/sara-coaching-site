import React from 'react'
import Link from 'next/link'

export function Nav() {

    const navLinkItems = [
        {
            page: 'About',
            link: '/about'
        },
        {
            page: 'Services',
            link: '/services',
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
        {
            name: 'Newsletter',
            link: '#',
        }
    ]

    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 bg-transparent mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                    <Link href="/">
                        <a className="text-sm font-bold leading-relaxed inline-block p-2 mr-4 uppercase">
                            <h1 className="h-16 w-16 text-lg">
                                Sara Adolfsen
                            </h1>

                        </a>
                    </Link>
                </div>
                <div className="lg:flex items-center">
                    <div className="flex flex-col lg:flex-row list-none ml-auto">
                        {navLinkItems.map((item, index) => (
                            <Link key={index} href={item.link}>
                                <a className="mx-3 px-4 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-50">
                                    {item.page}
                                </a>
                            </Link>
                        ))}
                        {navAnchorItems.map((item, index) => (
                            <a key={index} href={item.link} className="mx-3 px-4 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-50">
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                        @font-face {
                            font-family: 'Zoxi';
                            src: url('fonts/Fonts-zoxi-regular.ttf');
                        }
                        h1{
                            font-family: 'Zoxi';
                        }
            `} </style>


        </nav >
    )
}
