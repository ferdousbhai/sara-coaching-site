import React from 'react'

export function Social() {
    return (

        <div className="flex items-center">
            <a
                href="https://www.facebook.com/SpiritualCoachSara"
                className="hover:opacity-50"
            >
                <img className="mr-4" src="facebook.png" alt="facebook" />
            </a>
            <a
                href="https://www.instagram.com/saraadolfsen/"
                className="hover:opacity-50"
            >
                <img className="mr-4" src="instagram.png" alt="instagram" />
            </a>
        </div>

    )
}
