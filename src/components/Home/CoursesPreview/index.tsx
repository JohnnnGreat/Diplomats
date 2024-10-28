import React from "react";
import { coursesPreview } from "./constant";

const CoursesPreview = () => {
   return (
      <div className="min-h-screen overflow-hidden bg-[#000000c2] flex flex-col items-center justify-center p-8">
         <div className="max-w-[1000px]">
            {" "}
            {/* Heading */}
            <div className="flex gap-x-4 items-center mb-6">
               <div className="w-[15px] bg-brandColor rounded-[10px] h-[70px]"></div>
               {/* Title */}
               <h2 className="text-3xl font-bold text-white max-w-[200px]">Our Courses Preview</h2>
            </div>
            {/* Courses Grid */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
               {coursesPreview.map((course: string, index: number) => (
                  <div
                     key={index}
                     className="inline-block px-6 py-3 border border-[#ffffff60] text-white text-lg rounded-lg hover:bg-[#00000050] transition-transform transform hover:scale-105 whitespace-nowrap"
                  >
                     {course}
                  </div>
               ))}
            </div>
            <div className="flex justify-center">
               {/* View All Button */}
               <button className="px-8 py-4 bg-brandColor text-white text-lg rounded-lg hover:brandColor transition-transform transform hover:scale-105">
                  View all Courses
               </button>
            </div>
         </div>
      </div>
   );
};

export default CoursesPreview;
