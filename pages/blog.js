import React from 'react'
import { Footer } from '../components/Footer'
import { Articles } from '../components/Articles'
import { Nav } from '../components/Nav'

// Need to implement getStaticProps here too??? 

export default function blog() {
    return (
        <div className="flex flex-col h-screen">
            <Nav />
            <main className="p-4 flex-grow">
                <Articles posts={posts} />
            </main>
            <Footer />
        </div>
    )
}
