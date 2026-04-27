import NewsCard from '@/components/home/NewsCard';
import { getNewsById } from '@/lib/data';
import React from 'react';

const CategoryPage = async() => {
    const news =await getNewsById('f69a695f037cd9484cecaea37ca71012')
    console.log(news);
    
    return (
        <div>
            <NewsCard news={news} />
        </div>
    );
};

export default CategoryPage;