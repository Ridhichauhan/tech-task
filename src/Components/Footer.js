import React from 'react'

const Footer = () => {
  return (
    <div>
     <div className="bg-bgGray">
        <div className="xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 xs2:grid xs2:grid-cols-2 xs:grid xs:grid-cols-2 xxs:justify-center">
          <div>
            <div className="flex space-x-4 pl-20  pt-20">
              <img className="" alt="" src="./vector.png"></img>
              <h1 className="font-stylee text-3xl font-bold mt-3 text-textWhite ">
                Bistro Bliss
              </h1>
            </div>
            <div className="flex justify-start pl-24 pt-6">
              <p className="text-start text-styyle text-lg text-lightGray ">
                In the new era of technology we look a
                <h1>in the future with certainty and pride</h1>
                <h1>to for our company and.</h1>{" "}
              </p>
            </div>
            <div className="flex space-x-4 justify-start pl-24 pt-6">
              <img className="" alt="" src="./t.png"></img>
              <img className="" alt="" src="./f.png"></img>
              <img className="" alt="" src="./i.png"></img>
              <img className="" alt="" src="./g.png"></img>
            </div>
          </div>

          <div>
            <div className="flex  pl-32 pt-20">
              <h1 className="text-styyle text-xl font-bold mt-3 text-textWhite ">
                Pages
              </h1>
            </div>
            <div className="flex text-start text-lg text-styyle justify-start pl-32 pt-6 text-lightGray">
              <div className=" ">
                <h1 className="">Home</h1>
                <h1 className="pt-4">About</h1>
                <h1 className="pt-4">Menu</h1>
                <h1 className="pt-4">Pricing</h1>
                <h1 className="pt-4">Blog</h1>
                <h1 className="pt-4">Contact</h1>
                <h1 className="pt-4">Delivery</h1>
              </div>
            </div>
          </div>

          <div>
            <div className="flex space-x-4 pl-24 pt-20">
              <h1 className="text-styyle text-xl font-bold mt-3 text-textWhite ">
                Utility Pages
              </h1>
            </div>
            <div className="flex text-start text-lg text-styyle justify-start pl-24 pt-6 text-lightGray">
              <div className=" ">
                <h1 className="">Start Here</h1>
                <h1 className="pt-4">Styleguided</h1>
                <h1 className="pt-4">Password Protected</h1>
                <h1 className="pt-4">404 Not Found</h1>
                <h1 className="pt-4">Licenses</h1>
                <h1 className="pt-4">Changelog</h1>
                <h1 className="pt-4">View More</h1>
              </div>
            </div>
          </div>

          <div>
            <div className="flex space-x-4 pl-2 pt-20 mr-8">
              <h1 className="text-styyle text-xl font-bold mt-3 text-textWhite xxs:pl-6">
                Follow us on Instagram
              </h1>
            </div>
            <div className="flex justify-start pl-22 pt-6 text-textWhite pr-8 xxs:pl-6">
              <div className="grid grid-cols-2 gap-x-3 gap-y-3 ">
                <img className="" src="./hunny.png" alt=""></img>
                <img className="" src="./roti.png" alt=""></img>
                <img className="" src="./french.png" alt=""></img>
                <img className=" rounded-xl" src="./egg.png" alt=""></img>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center text-lg pb-28 mt-32">
          <h1 className="text-limeGray">
            Copyright © 2023 Hashtag Developer. All Rights Reserved
          </h1>
        </div>
      </div>

    </div>
  )
}

export default Footer