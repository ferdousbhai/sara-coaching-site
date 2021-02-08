import React from 'react'
import { Nav } from '../components/Nav.js'
import { Footer } from '../components/Footer.js'


export default function Coaching() {
    return (
        <div className="flex flex-col h-screen">
            <Nav />
            <main className="p-4 flex-grow">
                <div className="container prose p-4 mx-auto flex flex-col">
                    <h1 className="pt-6">
                        Coaching:
                    </h1>
                </div>
            </main>
            <Footer />
        </div>
    )
}
