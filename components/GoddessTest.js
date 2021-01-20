import React from 'react'

export function GoddessTest() {
    return (
        <section className="flex items-center bg-pink-200">
            <div className="max-w-7xl mx-auto py-6 px-3 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between prose">
                    <h1 className="">Did you take the goddess test?</h1>
                    <p>
                        Which goddess are you? Are you an abundance loving Lakshmi, a creative and artistic Saraswati, a warrior Durga, a warm and loving Parvati or a wild and free Kali?
                    </p>
                    <a
                        href="https://app.involve.me/bohemian-goddess/kuka-jumalatar-sina-olet"
                        target="_blank"
                        className="flex items-center justify-center px-4 py-2 border-transparent rounded-full shadow-sm text-sm font-medium bg-white hover:bg-pink-100 border border-pink-500 hover:border-transparent"
                    >
                        TAKE THE TEST!
                </a>
                </div>
            </div>
        </section>
    )
}
