import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Menu = () => {
  return (
    <div>
      <div>
        <Header name="Home" logo="bistro blast" />
      </div>

      <div className="flex justify-center p-4">
        <h1 className="text-style text-[60px]">Our Menu</h1>
      </div>
      <h1>We Consider all the drivers of change gives you the components</h1>
      <h1>you need to change to create a truly happens.</h1>
      <div className="flex space-x-2 justify-center mt-8 pr-4 pl-4">
        <button className="border rounded-full xl:w-[7vw] xl:h-[4vh] lg:w-[10vw] lg:h-[4vh] md:w-[12vw] md:h-[4vh] sm:w-[14vw] sm:h-[4vh] xs2:w-[18vw] xs2:h-[4vh] xs:w-[24vw] xs:h-[4vh] xxs:w-[20vw] xxs:h-[4vh] font-semibold hover:bg-red hover:text-white">
          All
        </button>
        <button className="border rounded-full xl:w-[7vw] xl:h-[4vh] lg:w-[10vw] lg:h-[4vh] md:w-[12vw] md:h-[4vh] sm:w-[14vw] sm:h-[4vh] xs2:w-[18vw] xs2:h-[4vh] xs:w-[24vw] xs:h-[4vh] xxs:w-[20vw] xxs:h-[4vh] font-semibold hover:bg-red hover:text-white">
          Breakfast
        </button>
        <button className="border rounded-full xl:w-[7vw] xl:h-[4vh] lg:w-[10vw] lg:h-[4vh] md:w-[12vw] md:h-[4vh] sm:w-[14vw] sm:h-[4vh] xs2:w-[18vw] xs2:h-[4vh] xs:w-[24vw] xs:h-[4vh] xxs:w-[20vw] xxs:h-[4vh] font-semibold hover:bg-red hover:text-white">
          Dishes
        </button>
        <button className="border rounded-full xl:w-[7vw] xl:h-[4vh] lg:w-[10vw] lg:h-[4vh] md:w-[12vw] md:h-[4vh] sm:w-[14vw] sm:h-[4vh] xs2:w-[18vw] xs2:h-[4vh] xs:w-[24vw] xs:h-[4vh] xxs:w-[20vw] xxs:h-[4vh] font-semibold hover:bg-red hover:text-white">
          Drinks
        </button>
        <button className="border rounded-full xl:w-[7vw] xl:h-[4vh] lg:w-[10vw] lg:h-[4vh] md:w-[12vw] md:h-[4vh] sm:w-[14vw] sm:h-[4vh] xs2:w-[18vw] xs2:h-[4vh] xs:w-[24vw] xs:h-[4vh] xxs:w-[20vw] xxs:h-[4vh] font-semibold hover:bg-red hover:text-white">
          Desserts
        </button>
      </div>

      <div
        className="xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 gap-y-8 sm:grid sm:grid-cols-1 xs2:grid xs2:grid-cols-1 
      xs:grid xs:grid-cols-1 xxs:grid xxs:grid-cols-1 xl:justify-between lg:justify-between md:justify-between xl:ml-[10vw] lg:ml-[10vw] md:ml-[4vw] mt-[6vh] pb-16"
      >
        <card className="xl:w-[76%] lg:w-[88%] md:w-[94%] sm:mt-6 xl:mt-0 lg:mt-0 md:mt-0 xs:mt-6 xxs:mt-6 xs2:mt-6 xl:ml-[0vw] lg:ml-[0vw] md:ml-[4vw] sm:ml-[28vw] xs2:ml-[24vw] xs:ml-[12vw] xxs:ml-[8vw] rounded-xl">
          <img src="./eggs.png" alt=""></img>
        </card>
        <card className="xl:w-[76%] lg:w-[88%] md:w-[94%] sm:mt-6 xl:mt-0 lg:mt-0 md:mt-0 xs:mt-6 xxs:mt-6 xs2:mt-6 xl:ml-[0vw] lg:ml-[0vw] md:ml-[4vw] sm:ml-[28vw] xs2:ml-[24vw] xs:ml-[12vw] xxs:ml-[8vw] rounded-xl">
          <img src="./pizzzaa.png" alt=""></img>
        </card>

        <card className="xl:w-[76%] lg:w-[88%] md:w-[94%] sm:mt-6 xl:mt-0 lg:mt-0 md:mt-0 xs:mt-6 xxs:mt-6 xs2:mt-6 xl:ml-[0vw] lg:ml-[0vw] md:ml-[4vw] sm:ml-[28vw] xs2:ml-[24vw] xs:ml-[12vw] xxs:ml-[8vw] rounded-xl">
          <img src="./cocktail.png" alt=""></img>
        </card>
        <card className="xl:w-[76%] lg:w-[88%] md:w-[94%] sm:mt-6 xl:mt-0 lg:mt-0 md:mt-0 xs:mt-6 xxs:mt-6 xs2:mt-6 xl:ml-[0vw] lg:ml-[0vw] md:ml-[4vw] sm:ml-[28vw] xs2:ml-[24vw] xs:ml-[12vw] xxs:ml-[8vw] rounded-xl">
          <img src="./cakee.png" alt=""></img>
        </card>
      </div>

      <div
        className="xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 gap-y-8 sm:grid sm:grid-cols-1 xs2:grid xs2:grid-cols-1 
      xs:grid xs:grid-cols-1 xxs:grid xxs:grid-cols-1 xl:justify-between lg:justify-between md:justify-between xl:ml-[10vw] lg:ml-[10vw] md:ml-[4vw] mt-[6vh] pb-16"
      >
        <card className="xl:w-[76%] lg:w-[88%] md:w-[94%] sm:mt-6 xl:mt-0 lg:mt-0 md:mt-0 xs:mt-6 xxs:mt-6 xs2:mt-6 xl:ml-[0vw] lg:ml-[0vw] md:ml-[4vw] sm:ml-[28vw] xs2:ml-[24vw] xs:ml-[12vw] xxs:ml-[8vw] rounded-xl">
          <img src="./coffeee.png" alt=""></img>
        </card>
        <card className="xl:w-[76%] lg:w-[88%] md:w-[94%] sm:mt-6 xl:mt-0 lg:mt-0 md:mt-0 xs:mt-6 xxs:mt-6 xs2:mt-6 xl:ml-[0vw] lg:ml-[0vw] md:ml-[4vw] sm:ml-[28vw] xs2:ml-[24vw] xs:ml-[12vw] xxs:ml-[8vw] rounded-xl">
          <img src="./burgerrr.png" alt=""></img>
        </card>

        <card className="xl:w-[76%] lg:w-[88%] md:w-[94%] sm:mt-6 xl:mt-0 lg:mt-0 md:mt-0 xs:mt-6 xxs:mt-6 xs2:mt-6 xl:ml-[0vw] lg:ml-[0vw] md:ml-[4vw] sm:ml-[28vw] xs2:ml-[24vw] xs:ml-[12vw] xxs:ml-[8vw] rounded-xl">
          <img src="./mint.png" alt=""></img>
        </card>
        <card className="xl:w-[76%] lg:w-[88%] md:w-[94%] sm:mt-6 xl:mt-0 lg:mt-0 md:mt-0 xs:mt-6 xxs:mt-6 xs2:mt-6 xl:ml-[0vw] lg:ml-[0vw] md:ml-[4vw] sm:ml-[28vw] xs2:ml-[24vw] xs:ml-[12vw] xxs:ml-[8vw] rounded-xl">
          <img src="./waffles.png" alt=""></img>
        </card>
      </div>
      {/* 
      <div className="bg-whiteBg">
        <div className="flex justify-around text-textColor">
          <div className="text-style  text-start font-semibold p-16 ">
            <h1 className="text-[48px]">You can order </h1>
            <h1 className="text-[48px]">through apps </h1>
            <h1 className="stanza-text text-[18px]">
              Lorem ipsum dolor sit amet consectetur
              <h1>adipiscing elitenim bibendum sed et aliquet</h1>
              <h1>aliquet risus tempor semper.</h1>
            </h1>
          </div>
          <div>
            <div className="grid grid-cols-3 p-16">
              <button className="flex space-x-2  pl-10 text-[22px] font-bold bg-white rounded-xl p-4 shadow-xl mr-4">
                <h1 className="text-black ">Uber</h1>
                <h1 className="text-green ">Eats</h1>
              </button>
              <button className="flex space-x-2 pl-10 bg-white text-[22px] text-purered font-bold rounded-xl p-4 shadow-xl mr-4">
               GRUBHUB
              </button>
              <button className="bg-white rounded-xl text-[22px] text-black font-bold p-4 shadow-xl mr-4">
                POSTMATES
              </button>
            </div>
            <div className="grid grid-cols-3 pt-0">
              <button className="flex space-x-2 text-[22px] font-bold text-purered bg-white rounded-xl pt-3 shadow-xl mr-4">
               <img src="./ddd.png" alt="done" className="h-8 w-16"></img> DOORDASH
              </button>
              <button className="flex space-x-2 bg-white text-[22px] text-margenta font-bold rounded-xl p-4 shadow-xl mr-4">
               <img src="./panda.png" alt="" className="h-8 w-13"></img>foodpanda
              </button>
              <button className="flex bg-white rounded-xl text-[22px] text-cyan font-bold p-4 shadow-xl mr-4">
                <img className="h-8 w-12" src="./delivery.png" alt="done"></img>deliveroo
              </button>
            </div>
            <div className="grid grid-cols-3 p-16">
              <button className="flex space-x-2 text-[22px] font-bold text-lightgreen bg-white rounded-xl p-4 shadow-xl mr-4">
              <img src="./carrot.png" alt="done" className="h-8 w-14"></img> Insta Cart
              </button>
              <button className="flex space-x-2 bg-white text-[22px] text-purered font-bold rounded-xl p-4 pl-10 shadow-xl mr-4">
               JUST EAT
              </button>
              <button className="flex bg-white rounded-xl text-textColor  text-[22px] font-bold p-4 shadow-xl mr-4">
              <img src="./d.png" alt=" " className="h-8 w-14"></img>
                DiDi Food
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Menu;
