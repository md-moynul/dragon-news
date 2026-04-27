import { getNewsByCategory } from '@/lib/data';
import React from 'react';
import NewsCard from './NewsCard';

const NewsSection = async() => {
    
    const newsByCategory = await getNewsByCategory('01')
    console.log(newsByCategory);
    

    return (
        <div className='space-y-4'>
            <h2 className="font-bold text-2xl">Dragon News Home</h2>
            <div className='space-y-8'>
                {newsByCategory.map((news , i) => <NewsCard key={i} news={news} />)}
            </div>
        </div>
    );
};

export default NewsSection;