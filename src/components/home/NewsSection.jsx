import { getNewsByCategory } from '@/lib/data';
import React from 'react';
import NewsCard from './NewsCard';

const NewsSection = async ({ id }) => {
    // console.log(id);

    const newsByCategory = await getNewsByCategory(id)
    // console.log(newsByCategory);


    return (
        <div className='space-y-4'>
            <h2 className="font-bold text-2xl">Dragon News</h2>
            <div className='space-y-8'>
                {newsByCategory.length > 0 ?

                    newsByCategory.map(
                        (news, i) =>
                            <NewsCard
                                key={i}
                                news={news}
                            />
                    )
                    : <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
                        <h2 className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-4">Current Status</h2>
                        <div className="h-px w-12 bg-gray-300 mb-8"></div>
                        <h3 className="text-4xl md:text-5xl font-serif italic text-gray-900">
                            The feed is resting.
                        </h3>
                        <p className="mt-6 text-gray-500 font-light tracking-wide">
                            New inspirations are currently being curated.
                        </p>
                    </div>
                }

            </div>
        </div>
    );
};

export default NewsSection;