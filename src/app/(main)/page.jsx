import AllCategory from "@/components/home/LeftSidebar";
import NewsSection from "@/components/home/NewsSection";
import RightSidebar from "@/components/home/RightSidebar";

export default function Home() {
  return (
    <div className="container mx-auto grid grid-cols-14 gap-4 py-10 md:py-15">
      <div className="col-span-3 "><AllCategory/></div>
      <div className="col-span-8 "><NewsSection/></div>
      <div className="col-span-3 "><RightSidebar/></div>
    </div>
  );
}
