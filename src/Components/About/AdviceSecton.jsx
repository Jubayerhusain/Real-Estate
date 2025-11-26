import React from "react";

const AdviceSection = () => {
  return (
    <>
      <div className=" w-full sm:w-9/12 mx-auto mt-20 sm:mt-25 px-5 sm:px-0">
        <div className=" flex flex-col sm:flex-row justify-between">
          <div className=" w-full sm:w-6/12 h-auto sm:h-80">
            <img
              src="https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=612x612&w=0&k=20&c=ujyGdu8jKI2UB5515XZA33Tt4DBhDU19dKSTUTMZvrg="
              alt=""
              className="w-full sm:w-[416px] rounded-xl object-cover"
            />
          </div>
          <div className="w-full sm:w-6/12 mt-5 sm:mt-8 text-center sm:text-left ">
            <h1 className=" font-bold text-[30px]  sm:text-[40px] ">
              Expert advice for all your real estate needs
            </h1>
            <h1 className="  text-[16px] ">
              Pretium interdum risus risus facilisis cras pellentesque ipsum
              suspendisse venenatis. Morbi posuere semper etiam imperdiet orci
              ut. Lacus odio arcu massa porttitor curabitur a in. Faucibus ipsum
              lacinia aenean nec.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdviceSection;
