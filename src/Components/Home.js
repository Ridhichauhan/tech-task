import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";

const Home = () => {
  return (
    <div>
      <div className="">
        <div className="hidden sm:flex justify-between bg-navBar h-[6vh] w-screen">
          <div className="flex space-x-6  text-textWhite ml-[8vw] mt-[1vh]">
            <h1 className="flex space-x-2 mt-2">
              <IoCallOutline className="mt-1 mr-2" />
              (414)857-0107
            </h1>
            <h1 className="flex space-x-2 mt-1">
              <AiOutlineMail className="mt-2 mr-2" />
              yummy@bistrobliss
            </h1>
          </div>

          <div className="flex space-x-2 mt-3 xl:mr-[8vw] lg:mr-[8vw] md:mr-[8vw] sm:mr-[8vw]">
            <img src="./twitter.png" alt="" className="h-8 w-8"></img>
            <img src="./insta.png" alt="" className="h-8 w-8"></img>
            <img src="./fb.png" alt="" className="h-8 w-8"></img>
            <img src="./git.png" alt="" className="h-8 w-8"></img>
          </div>
        </div>

        <div className="xs:block xxs:block hidden sm:hidden lg:hidden md:hidden xl:hidden bg-navBar h-[6vh]">
          <IoIosMenu color="white" className="flex " />
        </div>
      </div>
    </div>
  );
};

export default Home;
