import React from 'react'
import { Nav } from './Nav.js'
import { Footer } from './Footer.js'

export function Layout({ children }) {
    return (
        <div className="flex flex-col h-screen">
            <Nav />
            {children}
            <Footer />
        </div>
    )
}
