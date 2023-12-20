import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className=" ">
        <Header name="Home" logo="bistro blast" />
        <div className="flex relative">
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
            <button className=" rounded-full bg-red 3xl:w-[10vw] 2xl:w-[10vw] xl:w-[10vw] lg:w-[10vw] md:w-[14vw] sm:w-[18vw] xs:w-[25vw] xs2:w-[22vw] xxs:w-[33vw] xxs:h-[5vh] xs2:h-[6vh] xs:h-[6vh] text-white">
              Book a Table
            </button>
            <button className="border border-black rounded-full  3xl:w-[10vw] 2xl:w-[10vw] xl:w-[10vw] lg:w-[10vw] md:w-[14vw] sm:w-[18vw] xs:w-[25vw] xs2:w-[22vw] xxs:w-[33vw] xxs:h-[5vh] xs2:h-[6vh] xs:h-[6vh] text-black ">
              Explore Menu
            </button>
          </div>
        </div>

        <div className="">
          <h1 className="text-black font-bold mt-8 text-[44px] texxt-menu">
            Browse Our Menu
          </h1>
          <div className="flex justify-around mt-10">
            <div className="xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 xs2:grid xs2:grid-cols-1 xs:grid xs:grid-cols-1 xxs:grid xxs:grid-grid-cols-1 gap-x-4 gap-y-4 ">
              <card className="border-2 xl:w-[16vw] lg:w-[18vw] md:w-[28vw] sm:w-[32vw] xs2:w-[60vw] xs:w-[60vw] rounded-lg">
                <img
                  className="h-20 w-20 xl:ml-[6vw] lg:ml-[6vw] md:ml-[8vw] sm:ml-[10vw] xs2:ml-[23vw] xs:ml-[22vw] xxs:ml-[37vw] mt-[4vh]"
                  alt=""
                  src="break.png"
                ></img>
                <h1 className="text-lg text-textColor font-bold mt-3">
                  Breakfast
                </h1>
                <h1 className="xl:w-[14vw] lg:w-[14vw] sm:w-[16vw] xl:ml-4 lg:ml-4 md:ml-10 sm:ml-[8vw] xs2:w-[30vw] xs2:ml-[16vw] mt-4">
                  In the new era of technology we look in the future with
                  certainty and pride for our life.
                </h1>
                <h1 className="text-red font-bold text-md mt-4 pb-4">
                  Explore Menu
                </h1>
              </card>
              <card className=" border-2 xl:w-[16vw] lg:w-[18vw] md:w-[28vw] sm:w-[32vw]  xs:w-[60vw] rounded-lg">
                <img
                  className="h-20 w-20 xl:ml-[6vw] lg:ml-[6vw] md:ml-[8vw] sm:ml-[10vw] xs2:ml-[23vw] xs:ml-[22vw] xxs:ml-[37vw] mt-[4vh]"
                  alt=""
                  src="dishes.png"
                ></img>
                <h1 className="text-lg text-textColor font-bold mt-3">
                  Main Dishes
                </h1>
                <h1 className="xl:w-[14vw] lg:w-[14vw] sm:w-[16vw]  xl:ml-4 lg:ml-4 md:ml-10 sm:ml-[8vw] xs2:w-[30vw] xs2:ml-[16vw] mt-4">
                  In the new era of technology we look in the future with
                  certainty and pride for our life.
                </h1>
                <h1 className="text-red font-bold text-md mt-4 pb-4">
                  Explore Menu
                </h1>
              </card>
              <card className=" border-2  xl:w-[16vw] lg:w-[18vw] md:w-[28vw] sm:w-[32vw] xs:w-[60vw] rounded-lg">
                <img
                  className="h-20 w-20 xl:ml-[6vw] lg:ml-[6vw] md:ml-[8vw] sm:ml-[10vw] xs2:ml-[23vw] xs:ml-[22vw] xxs:ml-[37vw] mt-[4vh]"
                  alt=""
                  src="drinks.png"
                ></img>
                <h1 className="text-lg text-textColor font-bold mt-3">
                  Drinks
                </h1>
                <h1 className="xl:w-[14vw] lg:w-[14vw] sm:w-[16vw] xl:ml-4 lg:ml-4 md:ml-10 sm:ml-[8vw] xs2:w-[30vw] xs2:ml-[16vw]  mt-4">
                  In the new era of technology we look in the future with
                  certainty and pride for our life.
                </h1>
                <h1 className="text-red font-bold text-md mt-4 pb-4">
                  Explore Menu
                </h1>
              </card>
              <card className=" border-2 xl:w-[16vw] lg:w-[18vw] md:w-[28vw] sm:w-[32vw] xs:w-[60vw] rounded-lg">
                <img
                  className="h-20 w-20xl:ml-[6vw] lg:ml-[6vw] md:ml-[8vw]  sm:ml-[10vw] xs2:ml-[23vw] xs:ml-[22vw] xxs:ml-[37vw] mt-[4vh]"
                  alt=""
                  src="desserts.png"
                ></img>
                <h1 className="text-lg text-textColor font-bold mt-3">
                  Desserts
                </h1>
                <h1 className="xl:w-[14vw] lg:w-[14vw] sm:w-[16vw]  xl:ml-4 lg:ml-4 md:ml-10 sm:ml-[8vw] xs2:w-[30vw] xs2:ml-[16vw]  mt-4">
                  In the new era of technology we look in the future with
                  certainty and pride for our life.
                </h1>
                <h1 className="text-red font-bold text-md mt-4 pb-4">
                  Explore Menu
                </h1>
              </card>
            </div>
          </div>
        </div>

        <div className="xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 bg-whiteBg mt-[8vh]">
          <div className="relative xl:ml-[14vw] lg:ml-[14vw] md:ml-[8vw] sm:ml-[6vw] xs:ml-[14vw] xxs:ml-[14vw]">
            <img
              className="pt-[9vh] h-[70%] w-[88%]  "
              alt=""
              src="./new.png"
            ></img>
          </div>

          <div className="text-start xl:ml-[54px]  lg:ml-[6vw] md:ml-[4vw] sm:ml-[2vw] text-textColor mt-[8vh] font-bold xl:text-[42px] lg:text-[42px] md:text-[38px] sm:text-[34px] xs:ml-[14vw] xs:text-[34px] texxt-menu pb-[16vh] xxs:text-[30px] xxs:ml-[14vw]">
            <div className="">
              <h1>We provide healthy</h1>
              <h1>food for your family.</h1>
            </div>
            <div className="xl:text-[18px] lg:text-[18px] md:text-[15px] sm:text-[15px] xs:text-[15px] xxs:text-[15px] mr-[4vw]">
              <h1 className=" ">
                Our story began with a vision to create a unique dinning
              </h1>
              <h1 className="">
                experince that merges fine dinning, expectational service,and a
              </h1>
              <h1 className="">
                vibrant ambiance.Rooted in city's rich cullinary culture, we aim
                to
              </h1>
              <h1 className="">
                honor our local roots while infusing a global palate.
              </h1>
              <h1 className="text-textGreen text-[14px] mt-[2vh]">
                At place,we believe that dinning is not just about good food,but
                also about the
                <h1>
                  overall experience. Our staff,renowned for their warmth and
                  dedication,
                </h1>
                <h1>strives to make every visit an unforgetabble event.</h1>
              </h1>
            </div>

            <button className="px-3 py-2 text-[18px] rounded-full border border-black">
              More About Us
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="ml-[14vw] text-start xl:text-[42px] lg:text-[42px] md:text-[42px] sm:text-[38px] xs:text-[30px] xxs:text-[24px]  mt-[4vh] font-semibold">
          <h1>We also offer unique</h1>
          <h1>Service for your events</h1>
        </div>

        <div className="xl:grid xl:grid-cols-4 xl:ml-[14vw] xl:mr-[8vw] lg:ml-[14vw] lg:mr-[8vw]  lg:grid lg:grid-cols-4 md:ml-[14vw] md:mr-[8vw] md:grid md:grid-cols-2 sm:ml-[10vw] sm:mr-[8vw] sm:grid sm:grid-cols-2 xs2:grid xs2:grid-cols-1 xs2:ml-[18vw] xs:ml-[16vw] xs:mr-[16vw] xxs:ml-[8vw] xxs:mr-[8vw] mt-[4vh] ">
          <card className="bg-white mt-3 px-3">
            <img
              className="rounded-lg px-1 py-1"
              alt=""
              src="./catering.png"
            ></img>
            <h1 className="text-[18px] text-start font-bold mt-4 ">
              Caterings
            </h1>
            <h1 className="text-[14px] text-start">
              In the new era of technology we look
            </h1>
            <h1 className="text-[14px] text-start">
              In the future with certainty for life.
            </h1>
          </card>
          <card className="bg-white  mt-3 px-4">
            <img
              className="rounded-lg px-1 py-1"
              alt=""
              src="./birth.png"
            ></img>
            <h1 className="text-[18px] text-start font-bold mt-4 ">
              Birthdays
            </h1>
            <h1 className="text-[14px] text-start">
              In the new era of technology we look
            </h1>
            <h1 className="text-[14px] text-start">
              In the future with certainty for life.
            </h1>
          </card>
          <card className="bg-white  mt-3 px-4">
            <img
              className="rounded-lg px-1 py-1"
              alt=""
              src="./wedding.png"
            ></img>
            <h1 className="text-[18px] text-start font-bold mt-4 ">Weddings</h1>
            <h1 className="text-[14px] text-start">
              In the new era of technology we look
            </h1>
            <h1 className="text-[14px] text-start">
              In the future with certainty for life.
            </h1>
          </card>
          <card className="bg-white  mt-3 px-2">
            <img
              className="rounded-lg px-1 py-1"
              alt=""
              src="./event.png"
            ></img>
            <h1 className="text-[18px] text-start font-bold mt-4 ">Events</h1>
            <h1 className="text-[14px] text-start">
              In the new era of technology we look
            </h1>
            <h1 className="text-[14px] text-start">
              In the future with certainty for life.
            </h1>
          </card>
        </div>
      </div>

      <div className=" xl:pl-[10vw] lg:pl-[10vw] md:pl-[10vw] xl:p-[0vw] lg:p-[0vw] md:p-[0vw] sm:p-[6vw] xs2:p-[8vw] xs:p-[8vw] xxs:p-[8vw] xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2  bg-whiteBg mt-[8vh] ">
        <div className="flex ml-[4vw] pt-[10vh] pb-12">
          <img alt=" " src="./img.png" className=""></img>
        </div>
        <div className="xl:mt-[24vh] lg:mt-[20vh] md:mt-[18vh] text-[42px] ml-[4vw] text-start">
          <h1 className="font-semibold">Fastest Food</h1>
          <h1 className="font-semibold">Delivery in City</h1>
          <div className="text-[20px]  ">
            <h1>Our visual desinger lets you quickly and of drag a down</h1>
            <h1>your way to customapps for both keep desktop.</h1>
          </div>
          <div className="">
            <div className="flex space-x-4 mt-[4vh]">
              <img alt="" src="./time.png" className="w-[30px] h-[30px] "></img>
              <h1 className="text-[18px]">Delivery within 30 minutes.</h1>
            </div>
            <div className="flex space-x-4 mt-[1vh]">
              <img
                alt=""
                src="./offer.png"
                className="w-[30px] h-[30px] "
              ></img>
              <h1 className="text-[18px]">Best offer & Prices.</h1>
            </div>
            <div className="flex space-x-4 mt-[1vh]">
              <img
                alt=""
                src="./online.png"
                className="w-[30px] h-[30px] "
              ></img>
              <h1 className="text-[18px]">Online servies avilable.</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-[10vh]">
        <h1 className="text-style text-[44px] mt-[6vh] ">
          What Our Customers Say
        </h1>
        <div className="xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3  md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 xs2:grid xs2:grid-cols-1 xs:grid xs:grid-cols-1 xxs:grid xxs:grid-cols-1 justify-between xl:ml-[10vw] lg:ml-[10vw] md:ml-[4vw] mt-[6vh]">
          <card className="bg-whiteBg  xl:w-[76%] lg:w-[88%] md:w-[94%] md:[88%] xl:ml-[0vw] lg:ml-[0vw] md:ml-[0vw] rounded-xl">
            <h1 className="text-red text-[20px] font-semibold  mt-[4vh]">
              ``The Best Restaurent``
            </h1>
            <p className="text-start ml-4 mt-4 border-b-2 p-2">
              Last night,we dinned at place and where simple blown away from the
              moment we stepped in,we were enveloped in an inviting atmosphere
              and greeted with warm smiles.
            </p>
            <div className="flex space-x-4 pl-6 pt-8 pb-6">
              <img src="./s.png" alt="" className=""></img>
              <div className="mt-3">
                <h1 className="font-bold text-[14px]">Sophire Robson</h1>
                <h1>Los Angles,CA</h1>
              </div>
            </div>
          </card>
          <card className="bg-whiteBg xl:w-[76%] lg:w-[88%] md:w-[94%] sm:mt-6 xl:mt-0 lg:mt-0 md:mt-0 xs:mt-6 xxs:mt-6 xs2:mt-6 xl:ml-[0vw] lg:ml-[0vw] md:ml-[0vw] rounded-xl">
            <h1 className="text-red text-[20px] font-semibold  mt-[4vh]">
              ``Simply Delecious``
            </h1>
            <p className="text-start ml-4 mt-4 border-b-2 p-2">
              Place exceeded my expectations on all fronts.The ambiance was cozy
              and relaxed making it a perfect venue for our anniversay
              dinner.Each dish was prepared and beautifully presentend.
            </p>
            <div className="flex space-x-4 pl-6 pt-8 pb-6">
              <img src="./m.png" alt="" className=""></img>
              <div className="mt-3">
                <h1 className="font-bold text-[14px]">Matt Cannon</h1>
                <h1 className="ml-2">San Diego,CA</h1>
              </div>
            </div>
          </card>

          <card className="bg-whiteBg xl:w-[76%] lg:w-[88%] md:w-[94%] sm:mt-6 xl:mt-0 lg:mt-0 xs2:mt-6 xxs:mt-6 xs:mt-6 md:mt-6 xl:ml-[0vw] lg:ml-[0vw] md:ml-[22vw]  rounded-xl">
            <h1 className="text-red text-[20px] items-end  font-semibold mt-[4vh]">
              ``The One Kind of a Restaurent``
            </h1>
            <p className="text-start ml-4 mt-4 border-b-2 p-2">
              The culinary experience at place is first at none.The atmosphere
              is vibrant ,the food nothing short for extraordinary.The food was
              the highlight of our evening.Highly recommended.
            </p>
            <div className="flex space-x-4 pl-6 pt-8 pb-6">
              <img src="./a.png" alt="" className=""></img>
              <div className="mt-3 ml-2">
                <h1 className="font-bold text-[14px]">Anndy Smith</h1>
                <h1 className="">San Francisco,CA</h1>
              </div>
            </div>
          </card>
        </div>
      </div>

      <div className="bg-whiteBg p-[8vh]">
        <div className="flex justify-around">
          <h1 className="text-style  text-[40px] font-semibold">
            Our Blog & Articles
          </h1>
          <div>
            <button className="bg-red text-textWhite rounded-full mt-2 px-4 py-2 h-9">
              {" "}
              Read All Articles
            </button>
          </div>
        </div>

        <div className="xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2  md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 mt-16 xl:ml-20 lg:ml-10 md:ml-10 ">
          <div>
            <card className="rounded-xl bg-red">
              <img className="" alt="" src="./burgerr.png"></img>
            </card>
          </div>

          <div className="grid grid-cols-2 mt-12">
            <card className=" ">
              <img className="" alt="" src="./fries.png"></img>
            </card>
            <card className="">
              <img className="" alt="" src="./pizzza.png"></img>
            </card>
            <card className="">
              <img className="" alt="" src="./cookiess.png"></img>
            </card>
            <card className="">
              <img className="" alt="" src="./chicken.png"></img>
            </card>
          </div>
        </div>
      </div>

     <Footer/>
    </div>
  );
};

export default Home;
