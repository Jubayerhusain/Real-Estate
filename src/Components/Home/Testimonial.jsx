import React from "react";
import image from "../../assets/testimonial_image.jpg";
import quotation from "../../assets/quotation-mark.png";

const Testimonial = () => {
  return (
    <div className="bg-[#FFFFFF] py-10 px-4 sm:mt-20">
      <div className="max-w-[1,048px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-gray-900 text-center flex flex-col justify-center items-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            What our clietns say about us
          </h2>
            <img className="h-8 w-8 flex" src={quotation} alt="" />
          <p className="text-gray-800 mt-4 mb-6 max-w-md text-2xl">
            Arcu laoreet malesuada nunc eget. Fermentum ut dui etiam aliquam habitant elit euismod erat praesent. Tincidunt semper interdum fames cras 
          </p>

        </div>

        <div className="flex justify-center">
          <img
            src={image}
            alt="Team"
            className="rounded-xl w-[416px] h-[440px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
