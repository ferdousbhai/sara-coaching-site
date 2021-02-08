import React from 'react'

export function Social() {
    return (

        <div className="flex items-center space-x-4 px-4 py-2">
            <a
                href="https://www.facebook.com/SpiritualCoachSara"
                className="hover:opacity-50"
            >
                <img src="/facebook.png" alt="facebook" width="50%" height="50%" />
            </a>
            <a
                href="https://www.instagram.com/saraadolfsen/"
                className="hover:opacity-50"
            >
                <img src="/instagram.png" alt="instagram" width="50%" height="50%" />
            </a>
        </div>

    )
}
