"use client";

import ShowDataComponent from "@/components/ShowDataComponent";
import Navbar from "@/components/Navbar";

const Page = () => {
  return (
    <div className="px-20 py-10">
      <Navbar />      
      <ShowDataComponent />
    </div>
  );
}
 
export default Page;