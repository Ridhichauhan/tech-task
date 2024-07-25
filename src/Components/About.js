import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <div>
        <Header name="Home" logo="bistro blast" />
      </div>

      <div>
        <div className="xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 xl:pl-40 lg:pl-20 md:pl-10 sm:pl-8 xs2:pl-6 xs:pl-4 xs:pr-4 xxs:pl-4 xxs:pr-4 xs2:pr-4 pt-28 pb-28">
          <div className="">
            <img
              className="w-[599px] h-[568px]"
              alt=""
              src="./eggfood.png"
            ></img>
          </div>
          <div className="pl-4">
            <h1 className="text-start text-textColor text-style xl:text-[44px] lg:text-[44px] md:text-[38px] sm:text-[38px] xs2:text-[34px] xs:text-[30px] xxs:text-[30px] font-semibold">
              We provide healthy
              <h1>food for your family.</h1>{" "}
            </h1>

            <h1 className="text-start pr-4 text-styyle text-textColor text-[20px] font-semibold pt-4">
              Our story began with a vision to create a unique dinning
              <h1>
                experience that merges fine dinning,expectational service and a{" "}
              </h1>
              <h1>
                vibrant ambiance.Rooted in city's culinary culture we aim to
              </h1>
              <h1>honor our local roots while infusing a global palate.</h1>
            </h1>

            <h1 className="text-start text-styyle text-textGrayy text-[18px] pt-6">
              At place,we believe that dinning is not just about food,also about
              the
              <h1>
                overall experience. our staff,renowned for their warmth and
                dedication
              </h1>
              strives to make every vist an unforgetabble event.
            </h1>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center w-screen  ">
          <video controls poster="" className="">
            <source src="/videoo.mp4" type="video/mp4" />{" "}
            <source src="" type="video/webm" />{" "}
          </video>
        </div>
        <div className="flex justify-center items-center w-screen p-2">
          <div className="xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 sm:grid sm:grid-cols-2 justify-center bg-white pt-14 pb-16">
            <div>
              <div className="flex space-x-4">
                <img alt="" className="" src="./multi.png" />
                <h1 className="text-styyle text-start text-textColor text-[20px] font-semibold">
                  Multi Cuisine
                </h1>
              </div>
              <div className="pl-16 text-styyle text-textGreen text-[18px]">
                <h1 className="text-start">
                  In the era of new technology we look in{" "}
                </h1>
                <h1 className="text-start">
                  the future with certainty of life.
                </h1>
              </div>
            </div>

            <div>
              <div className="flex space-x-4">
                <img alt="" className="" src="./order.png" />
                <h1 className="text-styyle text-start text-textColor text-[20px] font-semibold">
                  Easy to Order
                </h1>
              </div>
              <div className="pl-16 text-styyle text-textGreen text-[18px]">
                <h1 className="text-start">
                  In the era of new technology we look in{" "}
                </h1>
                <h1 className="text-start">
                  the future with certainty of life.
                </h1>
              </div>
            </div>

            <div className="">
              <div className="flex space-x-4 ">
                <img alt="" className="" src="./fast.png" />
                <h1 className="text-styyle text-start text-textColor text-[20px] font-semibold">
                  Fast Delivery
                </h1>
              </div>
              <div className="pl-16 text-styyle text-textGreen text-[18px]">
                <h1 className="text-start">
                  In the era of new technology we look in{" "}
                </h1>
                <h1 className="text-start">
                  the future with certainty of life.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1  bg-whiteBg pt-28 xl:pl-40 lg:pl-20 md:pl-6 sm:pl-8 xs2:pl-6 xs:pl-4 xxs:pl-4 pb-40">
        <div className="">
          <h1 className="text-[44px] text-textColor text-start font-semibold text-style">
            A Little information
            <h1>for our valueable guest.</h1>
          </h1>
          <div className="text-start text-[20px] text-styyle pt-4">
            <h1>
              At place, we believe that dining is not just about food, but also
              about the
              <h1>
                overall experience. Our staff, renowned for their warmth and
                dedication,
              </h1>
              <h1>strives to make every visit an unforgettable event.</h1>
            </h1>

            <div className="grid grid-cols-2 gap-y-6 gap-x-3 pt-8 pr-10">
              <card className="border text-center text-style border-lightGray xl:w-[263px] lg:w-[210px] h-[174px]">
                <h1 className=" text-[34px] pt-8">3</h1>
                <h1 className=" text-[24px]">Locations</h1>
              </card>
              <card className="border text-center text-style border-lightGray xl:w-[263px] lg:w-[210px] h-[174px]">
                <h1 className=" text-[34px] pt-8">1995</h1>
                <h1 className="text-[24px]">Founded</h1>
              </card>
              <card className="border border-lightGray text-center text-style  xl:w-[263px] lg:w-[210px] h-[174px]">
                <h1 className=" text-[34px] pt-8">65+</h1>
                <h1 className="text-[24px]">Staff Members</h1>
              </card>
              <card className="border  border-lightGray text-center text-style   xl:w-[263px] lg:w-[210px] h-[174px]">
                <h1 className=" text-[34px] pt-8">100% </h1>
                <h1 className="text-[24px]">Satisfied Customers</h1>
              </card>
            </div>
          </div>
        </div>

        <div className="pr-4 sm:flex sm:justify-center sm:pt-10 xs2:pt-8 xs:pt-8 xxs:pt-8">
          <img className="w-[555px] h-[680px]" alt="" src="./hand.png"></img>
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

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
