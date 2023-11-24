import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    console.log("Opening modal");
    setModalIsOpen(true);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className="  ">
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
        <div className="flex justify-between bg-whiteBg p-4">
          <div className="flex space-x-2 3xl:ml-[8vw] 2xl:ml-[8vw] xl:ml-[8vw] lg:ml-[8vw] md:ml-[4vw] sm:ml-[1vw]"> 
            <img className="" src="food.png" alt=""></img>
            <h1 className="mt-2 font-style text-3xl font-bold">Bistro Bliss</h1>
          </div>
          <div className="flex 3xl:space-x-6  2xl:space-x-6 xl:space-x-6 text-md mt-3 md:space-x-2 sm:space-x-2">
           <h1  className="hover:bg-neutral hover:w-[4vw] hover:h-[3vh] hover:rounded-full">Home</h1>
           <h1  className="hover:bg-neutral hover:w-[4vw] hover:h-[3vh] hover:rounded-full">About</h1>
           <h1  className="hover:bg-neutral hover:w-[4vw] hover:h-[3vh] hover:rounded-full">Menu</h1>
           <h1  className="hover:bg-neutral hover:w-[4vw] hover:h-[3vh] hover:rounded-full">Pages</h1>
           <h1  className="hover:bg-neutral hover:w-[4vw] hover:h-[3vh] hover:rounded-full">Contact</h1>
          </div>
          <div className="3xl:mr-[10vw] 2xl:mr-[10vw] xl:mr-[10vw] lg:mr-[10vw] md:mr-[2vw] sm:mt-2">
           <button className=" border border-black rounded-full 3xl:w-[6vw] 2xl:w-[8vw] xl:w-[8vw] lg:w-[10vw] md:w-[14vw] sm:w-[16vw] h-[4vh] text-md">Book a Table</button>
          </div>
        </div>

        <div className="flex relative ">
         <img className=" w-screen h-[78vh] " src="./mainbg.png" alt=""></img>
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-style text-[56px] font-bold">
         <h1 className="">Best food for</h1>
         <h1 className=" ">your taste</h1>
         <div className="text-xl mt-8 font-bold">
         <h1>Discover delectable cuisine and unforgetabble moments</h1>
         <h1>In our welcome culinary haven.</h1>
         </div>
         </div> 
         <div className="flex space-x-4 absolute mt-[58vh] md:mt-[60vh] sm:mt-[60vh] xs:mt-[66vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-semibold">
         <button className="bg-red rounded-full 3xl:w-[8vw] 2xl:w-[8vw] xl:w-[8vw] lg:w-[10vw] md:w-[14vw] sm:w-[18vw] xs:w-[18vw] xs2:w-[28vw]  h-[6vh] text-white">Book a Table</button>
         <button className="border border-black rounded-full  3xl:w-[8vw] 2xl:w-[8vw] xl:w-[8vw] lg:w-[10vw] md:w-[14vw] sm:w-[18vw] xs:w-[18vw] xs2:w-[28vw] h-[6vh] text-black ">Explore Menu</button>
         </div>
        </div>

        <div className="xs:block xxs:block hidden sm:hidden lg:hidden md:hidden xl:hidden  h-[6vh] pt-2">
          <IoIosMenu
            onClick={openModal}
            className="text-navBar  ml-[4vw]"
            size="2em"
          />
          {modalIsOpen && (
            <div className="bg-navBar h-screen w-[44vw]">
              <IoCloseSharp
                onClick={closeModal}
                className="text-white pt-2 ml-[32vw]"
                size="2em"
              />
              <div className="grid grid-rows-4 justify-center gap-y-2 mt-4">
                <img src="./twitter.png" alt="" className="h-8 w-8"></img>
                <img src="./insta.png" alt="" className="h-8 w-8"></img>
                <img src="./fb.png" alt="" className="h-8 w-8"></img>
                <img src="./git.png" alt="" className="h-8 w-8"></img>
              </div>
              <div className="text-white text-sm mt-6 ml-4">
                <h1 className="flex space-x-2 mt-2 ml-4">
                  <IoCallOutline className="mt-1 mr-2" />
                  (414)857-0107
                </h1>
                <h1 className="flex space-x-2 mt-1 ml-2">
                  <AiOutlineMail className="mt-1 mr-2" />
                  yummy@bistrobliss
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
