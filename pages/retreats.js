import React from 'react'
import { Footer } from '../components/Footer.js'
import { Nav } from '../components/Nav.js'

export default function Retreats() {
    return (
        <div className="flex flex-col h-screen">
            <Nav />
            <main className="p-4 flex-grow">
                <div className="container prose p-4 mx-auto flex flex-col">
                    <h1 className="pt-6">
                        Retreats:
                    </h1>
                </div>
            </main>
            <Footer />
        </div>
    )
}
