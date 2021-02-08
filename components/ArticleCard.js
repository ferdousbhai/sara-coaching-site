import React from 'react'

export function ArticleCard({ title, feature_image, excerpt }) {
    return (
        <div className="max-w-screen-lg w-full lg:flex">
            <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${feature_image})` }} title={title}
            >
            </div>
            <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-black font-bold text-xl mb-2">{title}</div>
                    <p className="text-grey-darker text-base">
                        {excerpt}
                    </p>
                </div>
            </div>
        </div >
    )
}


