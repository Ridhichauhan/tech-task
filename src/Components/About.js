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
        <div className="grid grid-cols-3 bg-white pt-14 pl-72 pb-16">
        <div>
        <div className="flex space-x-4">
          <img alt="" className="" src="./multi.png"></img>
          <h1 className="text-styyle text-start text-textColor text-[20px] font-semibold">Multi Cusine</h1>
          </div>
          <div className="pl-16 text-styyle text-textGreen text-[18px] ">
          <h1 className="text-start">In the era of new technology we look in </h1>
          <h1 className="text-start ">the future with certainty of life.</h1>
          </div>
        </div>

        <div>
        <div className="flex space-x-4">
          <img alt="" className="" src="./multi.png"></img>
          <h1 className="text-styyle text-start text-textColor text-[20px] font-semibold">Easy to Order</h1>
          </div>
          <div className="pl-16 text-styyle text-textGreen text-[18px]">
          <h1 className="text-start">In the era of new technology we look in </h1>
          <h1 className="text-start ">the future with certainty of life.</h1>
          </div>
        </div>
          
        <div>
        <div className="flex space-x-4">
          <img alt="" className="" src="./multi.png"></img>
          <h1 className="text-styyle text-start text-textColor text-[20px] font-semibold">Fast Delivery</h1>
          </div>
          <div className="pl-16 text-styyle text-textGreen text-[18px]">
          <h1 className="text-start">In the era of new technology we look in </h1>
          <h1 className="text-start ">the future with certainty of life.</h1>
          </div>
        </div>
        </div>
      </div>
     
     <div className="grid grid-cols-2 bg-whiteBg ">

     </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
