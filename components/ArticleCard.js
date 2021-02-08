import React from 'react'

export function ArticleCard({ title, excerpt, feature_image }) {
    return (
        <div className="flex flex-col items-end justify-end relative max-w-sm h-96 m-4 rounded overflow-hidden shadow-lg">
            <img className="w-full h-auto" src={feature_image} />
            <div className="absolute px-6 py-4 bg-red-50">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {excerpt}
                </p>
            </div>
        </div>
    )
}


