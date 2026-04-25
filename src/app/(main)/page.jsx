import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4">
      <div className="col-span-3 bg-amber-200">All Category</div>
      <div className="col-span-6 bg-sky-200">Dragon News Home</div>
      <div className="col-span-3 bg-blue-200">log in</div>
    </div>
  );
}
