'use client '
import { getCategory } from "@/lib/data";
import Link from "next/link";

const AllCategory = async () => {
    const data = await getCategory()
    const newsCategory = data.news_category
    // console.log(newsCategory);
    const activeId =  null;

    return (
        <div>
            <h2 className="text-xl font-semibold pb-4"> All Category</h2>
            <ul className="space-y-1 text-center text-gray-500">
                {newsCategory.map(
                    news =>
                        <li
                            className={`${activeId === news.category_id && 'bg-slate-300'}`}
                            key={news.category_id}
                        >
                            <Link
                                className="block  py-2"
                                href={`/category/${news.category_id}`
                                }>
                                {news.category_name}
                            </Link>
                        </li>
                )}
            </ul>

        </div>
    );
};

export default AllCategory;