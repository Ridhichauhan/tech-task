import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

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
        <div className="hidden sm:flex justify-between bg-whiteBg p-4">
          <div className="flex space-x-2 3xl:ml-[8vw] 2xl:ml-[8vw] xl:ml-[8vw] lg:ml-[8vw] md:ml-[4vw] sm:ml-[1vw]">
            <img className="" src="food.png" alt=""></img>
            <h1 className="mt-2 font-style text-3xl font-bold">Bistro Bliss</h1>
          </div>
          <div className="flex 3xl:space-x-6  2xl:space-x-6 xl:space-x-6 text-md mt-3 md:space-x-2 sm:space-x-2">
            <h1 className="hover:bg-neutral hover:w-[4vw] hover:h-[3vh] hover:rounded-full">
              Home
            </h1>
            <h1 className="hover:bg-neutral hover:w-[4vw] hover:h-[3vh] hover:rounded-full">
              About
            </h1>
            <h1 className="hover:bg-neutral hover:w-[4vw] hover:h-[3vh] hover:rounded-full">
              Menu
            </h1>
            <h1 className="hover:bg-neutral hover:w-[4vw] hover:h-[3vh] hover:rounded-full">
              Pages
            </h1>
            <h1 className="hover:bg-neutral hover:w-[4vw] hover:h-[3vh] hover:rounded-full">
              Contact
            </h1>
          </div>
          <div className="3xl:mr-[10vw] 2xl:mr-[10vw] xl:mr-[10vw] lg:mr-[10vw] md:mr-[2vw] sm:mt-2">
            <button className=" border border-black rounded-full 3xl:w-[6vw] 2xl:w-[8vw] xl:w-[8vw] lg:w-[10vw] md:w-[14vw] sm:w-[16vw] h-[4vh] text-md">
              Book a Table
            </button>
          </div>
        </div>

        <div className="flex relative ">
          <img className=" w-screen h-[78vh] " src="./mainbg.png" alt=""></img>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-style xs2:text-[52px] xs:text-[44px] xxs:text-[34px] font-bold">
            <h1 className="">Best food for</h1>
            <h1 className=" ">your taste</h1>
            <div className="xl:text-2xl xs2:text-xl xs:text-md xxs:text-sm xxs:mt-4 xs2:mt-4 xs:mt-4 font-bold">
              <h1>Discover delectable cuisine and unforgetabble moments</h1>
              <h1>In our welcome culinary haven.</h1>
            </div>
          </div>
          <div className="flex space-x-4 absolute xl:text-xl xs:text-sm  md:mt-[60vh] sm:mt-[60vh] xs:mt-[64vh] xxs:mt-[58vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-semibold">
            <button className="bg-red rounded-full 3xl:w-[10vw] 2xl:w-[10vw] xl:w-[10vw] lg:w-[10vw] md:w-[14vw] sm:w-[18vw] xs:w-[25vw] xs2:w-[22vw] xxs:w-[33vw] xxs:h-[5vh] xs2:h-[6vh] xs:h-[6vh] text-white">
              Book a Table
            </button>
            <button className="border border-black rounded-full  3xl:w-[10vw] 2xl:w-[10vw] xl:w-[10vw] lg:w-[10vw] md:w-[14vw] sm:w-[18vw] xs:w-[25vw] xs2:w-[22vw] xxs:w-[33vw] xxs:h-[5vh] xs2:h-[6vh] xs:h-[6vh] text-black ">
              Explore Menu
            </button>
          </div>
        </div>

        <div className="xs:block xxs:block hidden sm:hidden lg:hidden md:hidden xl:hidden  h-[6vh] pt-2">
          <IoIosMenu
            onClick={openModal}
            className="text-navBar  ml-[4vw]"
            size="2em"
          />
          {modalIsOpen && (
            <div className="bg-navBar h-screen xs:w-[52vw] xxs:w-[64vw]">
              <IoCloseSharp
                onClick={closeModal}
                className="text-white pt-2 xs:ml-[40vw] xxs:ml-[52vw]"
                size="2em"
              />
              <div className="grid grid-rows-4 justify-center gap-y-2 mt-4">
                <img src="./twitter.png" alt="" className="h-8 w-8"></img>
                <img src="./insta.png" alt="" className="h-8 w-8"></img>
                <img src="./fb.png" alt="" className="h-8 w-8"></img>
                <img src="./git.png" alt="" className="h-8 w-8"></img>
              </div>
              <div className="text-white text-md mt-6 ml-12">
                <h1 className="flex space-x-2 mt-2 ml-4">
                  <IoCallOutline className="mt-1 mr-2" />
                  (414)857-0107
                </h1>
                <h1 className="flex space-x-2 mt-1 ml-2">
                  <AiOutlineMail className="mt-1 mr-2" />
                  yummy@bistrobliss
                </h1>
              </div>

              <div className="grid grid-cols-6 bg-whiteBg mt-4 p-2">
                <div className="w-[52vw] ">
                  <img
                    src="food.png"
                    alt=""
                    className="h-[12vh] w-[18vw] ml-[16vw]  "
                  ></img>
                  <h1 className="font-stylee text-3xl font-bold mt-4 ">Bistro Bliss</h1>
                </div>
                <div className="grid grid-rows-4 ml-[8vw] gap-y-2 text-md mt-[20vh] font-semibold">
                  <h1 className="hover:bg-neutral xs:hover:w-[18vw] xxs:hover:w-[18vw]  hover:h-[3vh] hover:rounded-full">
                    Home
                  </h1>
                  <h1 className="hover:bg-neutral xs:hover:w-[18vw] xxs:hover:w-[18vw]  hover:h-[3vh] hover:rounded-full">
                    About
                  </h1>
                  <h1 className="hover:bg-neutral xs:hover:w-[18vw] xxs:hover:w-[18vw]  hover:h-[3vh] hover:rounded-full">
                    Menu
                  </h1>
                  <h1 className="hover:bg-neutral xs:hover:w-[18vw] xxs:hover:w-[18vw]  hover:h-[3vh] hover:rounded-full">
                    Pages
                  </h1>
                  <h1 className="hover:bg-neutral xs:hover:w-[18vw] xxs:hover:w-[18vw] hover:h-[3vh] hover:rounded-full">
                    Contact
                  </h1>
                  <div className="">
                  <button className="rounded-full text-xs border border-black h-[4vh] w-[19vw] mt-4">Book a Table</button>
                  </div>
                  
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="">
        <h1 className="text-black font-bold mt-8 text-[44px] texxt-menu">Browse Our Menu</h1>
        <div className="flex justify-around mt-10">
        <div className="xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 xs2:grid xs2:grid-cols-1 xs:grid xs:grid-cols-1 xxs:grid xxs:grid-grid-cols-1 gap-x-4 gap-y-4 ">
        <card className="border-2 xl:w-[16vw] lg:w-[18vw] md:w-[28vw] sm:w-[32vw] xs2:w-[60vw] xs:w-[60vw] rounded-lg">
          <img className="h-20 w-20 xl:ml-[6vw] lg:ml-[6vw] md:ml-[8vw] sm:ml-[10vw] xs2:ml-[23vw] xs:ml-[22vw] xxs:ml-[37vw] mt-[4vh]" alt="" src="break.png"></img>
          <h1 className="text-lg text-textColor font-bold mt-3">Breakfast</h1>
          <h1 className="xl:w-[14vw] lg:w-[14vw] sm:w-[16vw] xl:ml-4 lg:ml-4 md:ml-10 sm:ml-[8vw] xs2:w-[30vw] xs2:ml-[16vw] mt-4">In the new era of technology we look in the future with certainty and pride for our life.</h1>
          <h1 className="text-red font-bold text-md mt-4 pb-4">Explore Menu</h1>
        </card>
        <card className=" border-2 xl:w-[16vw] lg:w-[18vw] md:w-[28vw] sm:w-[32vw]  xs:w-[60vw] rounded-lg">
          <img className="h-20 w-20 xl:ml-[6vw] lg:ml-[6vw] md:ml-[8vw] sm:ml-[10vw] xs2:ml-[23vw] xs:ml-[22vw] xxs:ml-[37vw] mt-[4vh]" alt="" src="dishes.png"></img>
          <h1 className="text-lg text-textColor font-bold mt-3">Main Dishes</h1>
          <h1 className="xl:w-[14vw] lg:w-[14vw] sm:w-[16vw]  xl:ml-4 lg:ml-4 md:ml-10 sm:ml-[8vw] xs2:w-[30vw] xs2:ml-[16vw] mt-4">In the new era of technology we look in the future with certainty and pride for our life.</h1>
          <h1 className="text-red font-bold text-md mt-4 pb-4">Explore Menu</h1>
        </card>
        <card className=" border-2  xl:w-[16vw] lg:w-[18vw] md:w-[28vw] sm:w-[32vw] xs:w-[60vw] rounded-lg">
          <img className="h-20 w-20 xl:ml-[6vw] lg:ml-[6vw] md:ml-[8vw] sm:ml-[10vw] xs2:ml-[23vw] xs:ml-[22vw] xxs:ml-[37vw] mt-[4vh]" alt="" src="drinks.png"></img>
          <h1 className="text-lg text-textColor font-bold mt-3">Drinks</h1>
          <h1 className="xl:w-[14vw] lg:w-[14vw] sm:w-[16vw] xl:ml-4 lg:ml-4 md:ml-10 sm:ml-[8vw] xs2:w-[30vw] xs2:ml-[16vw]  mt-4">In the new era of technology we look in the future with certainty and pride for our life.</h1>
          <h1 className="text-red font-bold text-md mt-4 pb-4">Explore Menu</h1>
        </card>
        <card className=" border-2 xl:w-[16vw] lg:w-[18vw] md:w-[28vw] sm:w-[32vw] xs:w-[60vw] rounded-lg">
          <img className="h-20 w-20xl:ml-[6vw] lg:ml-[6vw] md:ml-[8vw]  sm:ml-[10vw] xs2:ml-[23vw] xs:ml-[22vw] xxs:ml-[37vw] mt-[4vh]" alt="" src="desserts.png"></img>
          <h1 className="text-lg text-textColor font-bold mt-3">Desserts</h1>
          <h1 className="xl:w-[14vw] lg:w-[14vw] sm:w-[16vw]  xl:ml-4 lg:ml-4 md:ml-10 sm:ml-[8vw] xs2:w-[30vw] xs2:ml-[16vw]  mt-4">In the new era of technology we look in the future with certainty and pride for our life.</h1>
          <h1 className="text-red font-bold text-md mt-4 pb-4">Explore Menu</h1>
        </card>
        </div>
        </div>
     
        </div>
        <div className="grid grid-cols-2    bg-whiteBg  mt-[8vh] ">
        <div className="relative  ml-[14vw]">
        <img className="h-[40vh] w-[28vw] mt-[8vh]" alt="" src="./image.png">
        </img>
        <div className="bg-bgGray w-[18vw] rounded-lg h-[22vh] absolute top-[30vh]   left-1/2 transform -translate-x-14  translate-y-4 ">
          <h1 className="text-white mt-[2vh] font-bold text-lg">Come and visit us</h1>
          <div className="flex space-x-2 ml-8 mt-4">
          <IoCallOutline color="white" className="mt-2" size="1em"/>
          <h1 className="text-white ml-6 mt-1">434 90983 308</h1>
          </div>
          <div className="flex space-x-2 ml-8 mt-4">
          <MdOutlineEmail color="white" className="mt-2"  size="1em"/>
          <h1 className="text-white ml-6 mt-1">happytummy@restaurent.com</h1>
          </div>
          <div className="flex space-x-2 ml-8 mt-4">
          <CiLocationOn color="white" className="mt-2"  size="1em"/>
          <h1 className="text-white ml-6 mt-1">Chd</h1>
          </div>
        </div>
        </div>
        <div className="text-textColor mt-[8vh] font-bold text-[42px] texxt-menu pb-[14vh]">
        <h1 >We provide healthy</h1>
        <h1>food for your family.</h1>
        <div className=" w-[22vw] ml-[15vw] text-sm font-bold">
        <h1 className="stanza-text ">
         Our story began with a vision to create a unique dinning experince that merges fine dinning,
         expectational service,and a vibrant ambiance.Rooted in city's rich cullinary culture,
         we aim to honor our local roots while infusing a global palate.
        </h1>
        <h1 className="text-textGreen w-[22vw] text-sm mt-[3vh]">
        At place,we believe that dinning is not just about good food,but also about the overall experience.
        Our staff,renowned for their warmth and dedication, strives to make every visit an unforgetabble event.
        </h1>
        </div>
        <button className="h-[4vh] 2xl:w-[10vw] xl:w-[10vw] lg:w-[12vw] md:w-[16vw] sm:w-[24vw] xs2:w-[24vw] text-[18px] rounded-full border border-black ml-[-10vw] ">More About Us</button>
        </div>
        </div>
      </div>
      <div className=" bg-red ">nhkhj</div>
    </div>
  );
};

export default Home;
