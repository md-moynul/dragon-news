import AllCategory from "@/components/home/LeftSidebar";
import NewsSection from "@/components/home/NewsSection";
import RightSidebar from "@/components/home/RightSidebar";
import { getCategory } from "@/lib/data";
export async function generateMetadata({ params }) {
  const { id } = await params;
  const news = await getCategory();
  const category = news.news_category
  // console.log(category);
  
  const targetedCategory = category.filter(c => c.category_id == id)
  console.log(targetedCategory[0].category_name);
  

  return {
    title: `Dragon News | ${targetedCategory[0].category_name}`
  
  }
}
export default async function CategoryPage({ params }) {
  const { id } = await params;
  // console.log(id);

  return (
    <div className="container mx-auto grid grid-cols-14 gap-4 py-10 md:py-15">
      <div className="col-span-3 "><AllCategory id={id} /></div>
      <div className="col-span-8 "><NewsSection id={id} /></div>
      <div className="col-span-3 "><RightSidebar /></div>
    </div>
  );
}
