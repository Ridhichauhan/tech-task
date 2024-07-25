import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Pages = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="bg-lightGray ">
        <div className="p-8 bg-whiteBg ">
          <h1 className="text-[56px] stanza-text text-textColor ">
            Book A Table
          </h1>
          <div className="text-[24px]  stanza-text text-gray pb-8">
            <h1>
              We consider all the drivers of changes gives you the components
            </h1>
            <h1>you need to change to create a truly happens.</h1>
          </div>
        </div>
        <div className="flex justify-center mx-auto">
          <card className=" bg-white w-[28vw] h-[36vh] rounded-xl">
            <div className="flex justify-around">
               <h1>Date</h1>
               <h2>Time</h2>
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

export default Pages;
