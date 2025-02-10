import React from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const faqs = [
    {
      question: "On average, how long does it take to find a home through Rentbird?",
      answer:
        "Sit back and relax as we scan +100 listing websites every minute. Less time searching, more time imagining where to put your couch.",
      isOpen: isOpen,
      toggle: () => setIsOpen(!isOpen),
    },
    {
      question: "How does WhatApartment work?",
      answer:
        "Sit back and relax as we scan +100 listing websites every minute. Less time searching, more time imagining where to put your couch.",
      isOpen: isOpen1,
      toggle: () => setIsOpen1(!isOpen1),
    },
    {
      question: "Do you also rent out homes?",
      answer:
        "Sit back and relax as we scan +100 listing websites every minute. Less time searching, more time imagining where to put your couch.",
      isOpen: isOpen2,
      toggle: () => setIsOpen2(!isOpen2),
    },
    {
      question: "Why should I pay for WhatApartment?",
      answer:
        "Sit back and relax as we scan +100 listing websites every minute. Less time searching, more time imagining where to put your couch.",
      isOpen: isOpen3,
      toggle: () => setIsOpen3(!isOpen3),
    },
    {
      question: "Do you guarantee it works?",
      answer:
        "Sit back and relax as we scan +100 listing websites every minute. Less time searching, more time imagining where to put your couch.",
      isOpen: isOpen4,
      toggle: () => setIsOpen4(!isOpen4),
    },
  ];

  return (
    <div className=" mt-5">
     <Header/>
      <div className="flex justify-between items-center mt-20 font-style ml-20 mr-20">
        <div className="text-start max-w-xl">
          <h1 className="font-bold text-4xl">Automate the search for</h1>
          <h1 className="font-bold text-4xl">your next rental home</h1>
          <h1 className="mt-5 text-lg">
            Easily find your long-term rental apartment in Madrid and Barcelona with WhatApartment.
          </h1>

          <div className="flex items-center space-x-2 mt-3">
            <img src="./time.png" alt="" className="h-6 w-6" />
            <div>
              <h1 className="font-bold">Save time and never miss a listing.</h1>
              <h1 className="text-sm">
                Specify your preferences and we will start looking for relevant matches on more than 30 websites.
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-2 mt-3">
            <img src="./spark.png" alt="" className="h-6 w-6" />
            <div>
              <h1 className="font-bold">Be the first to know.</h1>
              <h1 className="text-sm">
                Receive WhatsApp notifications as soon as a property that meets your criteria is listed on the market.
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-2 mt-3">
            <img src="./handshake.png" alt="" className="h-6 w-6" />
            <div>
              <h1 className="font-bold">Share your subscription.</h1>
              <h1 className="text-sm">
                Add a buddy to the hunt and stay in sync as both of you receive instant notifications.
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-2 mt-3">
            <img src="./star.png" alt="" className="h-6 w-6" />
            <div>
              <h1 className="font-bold">Trustpilot</h1>
              <div className="flex items-center space-x-1">
                <img src="./rating.png" alt="rating" className="h-5" />
                <h1 className="text-gray-600">Based on</h1>
                <h1 className="text-black">1009 Reviews</h1>
              </div>
            </div>
          </div>

          <button className="bg-blue-600 py-2 mt-5 px-4 text-white rounded-md text-base">
            Start Your Search Now
          </button>
        </div>

        <div className="flex-1 flex justify-end">
          <img src="./mobile.png" alt="mobile" className="h-full max-h-[500px] object-contain" />
        </div>
      </div>

      <div className="justify-center font-bold mt-16 text-lg bg-[#F7F7F7]">
        <h1 className="pt-6">On average, every rental property in Madrid and Barcelona receives more than 50 contact requests. </h1>
        <h1 >Be the first with WhatApartment as we scan more than 30 websites.</h1>
        <div className="flex justify-center space-x-3 mt-5">
          <img className="w-20 h-auto max-w-full" src="./txt1.png" alt="Text 1" />
          <img className="w-20 h-auto max-w-full" src="./txt2.png" alt="Text 2" />
        </div>
        <h1 className="font-bold text-4xl mt-5">How does WhatApartment work?</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center p-4">
            <img className="w-24 h-24 md:w-28 md:h-28" alt="" src="./person1.png" />
            <h1 className="text-blue-500 font-bold text-2xl mt-3">1</h1>
            <h1 className="text-xl text-black">Set your preferences</h1>
            <p className="text-sm mt-3 text-gray-400">
              Customize your search filtering by location, price, and size. Now, sit back while we scan more than 30 websites.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <img className="w-24 h-24 md:w-28 md:h-28" alt="" src="./person2.png" />
            <h1 className="text-blue-500 font-bold text-2xl">2</h1>
            <h1 className="text-xl text-black">Receive matches in real-time</h1>
            <h1 className="text-xl text-black">on WhatsApp and email</h1>
            <p className="text-sm mt-3 text-gray-400">
              As soon as a property fitting your requirements is listed, we will send it to you (and your buddy) on WhatsApp and email.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <img className="w-24 h-24 md:w-28 md:h-28" alt="" src="./person3.png" />
            <h1 className="text-blue-500 font-bold text-2xl mt-3">3</h1>
            <h1 className="text-xl text-black">Be the first to respond and secure your dream rental</h1>
            <p className="text-sm mt-3 text-gray-400">
              Quickly respond in a few clicks and guarantee your viewing.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#28214B] pt-5 mt-4 flex flex-col items-center">
        <h1 className="text-white text-4xl font-bold">Set Your Preferences</h1>
        <h1 className="text-lg text-white mt-3">Create your search profile in less than 5 minutes</h1>
        <div className="bg-white rounded-lg shadow-lg border-2 mt-10 p-8 w-[94%] max-w-3xl mb-10">
          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 border-2 border-blue-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <span className="text-blue-500 mt-2 text-sm">Location</span>
            </div>
            <div className="w-full h-[2px] bg-gray-300"></div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
              <span className="text-gray-400 mt-2 text-sm">Requirements</span>
            </div>
            <div className="w-full h-[2px] bg-gray-300"></div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
              <span className="text-gray-400 mt-2 text-sm">Start Search</span>
            </div>
          </div>

          <div className="flex justify-between mt-18">
            <div>
              <label className="block text-gray-600 text-start font-semibold">City</label>
              <select className="w-full border border-gray-300 p-2 mt-3 rounded-md">
                <option>Amsterdam</option>
              </select>
              <label className="block text-gray-600 font-semibold mt-3 text-start">Neighbourhoods</label>
              <select className="w-full border border-gray-300 p-2 mt-2 rounded-md mb-5">
                <option>Bos en Lommer, de Baarsjes, Houth...</option>
              </select>
            </div>
            <div>
              <img className="" src="./map.png" alt="" />
            </div>
          </div>
          <div className="flex justify-end border-t-2">
            <button className="bg-blue-500 text-white rounded-md py-2 px-6 mt-2">Next</button>
          </div>
        </div>

      </div>
      <div className="flex flex-col items-center px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center lg:justify-around w-full">
          <div className="flex justify-center lg:w-1/2">
            <img src="./mobile1.png" alt="Mobile" className="w-64 sm:w-80 lg:w-auto" />
          </div>
          <div className="lg:w-1/2 flex flex-col mt-8 lg:mt-0 space-y-6">
            <div className="flex items-start space-x-3">
              <img src="./timer.png" alt="Timer" className="h-10 w-10 sm:h-12 sm:w-12" />
              <div>
                <h1 className="font-bold text-xl sm:text-2xl text-start">No more endless scrolling</h1>
                <p className="text-md sm:text-lg text-[#757B8A] text-justify">
                  Stop spending countless hours to find a rental. We monitor over 30 websites for you.
                  Less time searching, more time imagining where to put your couch.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <img src="./bell.png" alt="Bell" className="h-10 w-10 sm:h-12 sm:w-12" />
              <div>
                <h1 className="font-bold text-xl sm:text-2xl text-start">Stay ahead of the rest</h1>
                <p className="text-md sm:text-lg text-[#757B8A] text-justify">
                  Discover the latest available apartments before anyone else with instant notifications.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <img src="./person4.png" alt="Person" className="h-10 w-10 sm:h-12 sm:w-12" />
              <div>
                <h1 className="font-bold text-xl sm:text-2xl text-start">Searching with someone?</h1>
                <p className="text-md sm:text-lg text-[#757B8A] text-justify">
                  Add your flatmate or partner so they get instant notifications too.
                  Split the effort, the excitement, and the bill.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <img src="./dollar.png" alt="Dollar" className="h-10 w-10 sm:h-12 sm:w-12" />
              <div>
                <h1 className="font-bold text-xl sm:text-2xl text-start">5-day money back guarantee</h1>
                <p className="text-md sm:text-lg text-[#757B8A] text-justify">
                  Unhappy with our service? Cancel during the first 5 days and get a full refund. No hard feelings.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="flex justify-center mt-8 mb-10">
          <button className="border border-blue-500 text-blue-500 py-2 px-6 rounded-md bg-transparent hover:bg-blue-500 hover:text-white transition">
            See pricing plans
          </button>
        </div>
      </div>
      <div className="bg-[#28214B] text-white ">
        <h1 className=" text-4xl pt-6">What others say about WhatApartment</h1>
        <div className="flex space-x-2 mt-8 justify-center">
          <img src='./star.png' alt=""></img>
          <h1 className="text-white font-bold text-base">Trustpilot</h1>
          <img src="./rating.png" alt=""></img>
          <h1>Based on 1096 reviews</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <img src="./coll.png" alt="Quote Icon" className="w-10 h-10 mb-4" />
            <h1 className="font-bold text-lg text-black leading-relaxed">
              “We found an apartment within 3 weeks with WhatApartment!”
            </h1>
            <p className="font-medium text-gray-500 mt-2 text-justify leading-relaxed">
              We received emails from WhatApartment at an amazing speed. And we often were one of the first to respond!
            </p>

            <div className="flex items-center space-x-3 mt-4">
              <img src="./a.png" alt="User" className="w-10 h-10 rounded-full border border-gray-300" />
              <div>
                <h1 className="text-black font-semibold text-start">Maria Brand</h1>
                <h1 className="text-gray-400 text-sm text-start">Written on Trustpilot</h1>
              </div>
            </div>
            <img src="./rating.png" alt="Rating" className="w-28 mt-3" />
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <img src="./coll.png" alt="Quote Icon" className="w-10 h-10 mb-4" />
            <h1 className="font-bold text-lg text-black leading-relaxed">
              “We found an apartment within 3 weeks with WhatApartment!”
            </h1>
            <p className="font-medium text-gray-500 mt-2 text-justify leading-relaxed">
              We received emails from WhatApartment at an amazing speed. And we often were one of the first to respond!
            </p>

            <div className="flex items-center space-x-3 mt-4">
              <img src="./a.png" alt="User" className="w-10 h-10 rounded-full border border-gray-300" />
              <div>
                <h1 className="text-black font-semibold text-start">Maria Brand</h1>
                <h1 className="text-gray-400 text-sm text-start">Written on Trustpilot</h1>
              </div>
            </div>
            <img src="./rating.png" alt="Rating" className="w-28 mt-3" />
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <img src="./coll.png" alt="Quote Icon" className="w-10 h-10 mb-4" />
            <h1 className="font-bold text-lg text-black leading-relaxed">
              “We found an apartment within 3 weeks with WhatApartment!”
            </h1>
            <p className="font-medium text-gray-500 mt-2 text-justify leading-relaxed">
              We received emails from WhatApartment at an amazing speed. And we often were one of the first to respond!
            </p>

            <div className="flex items-center space-x-3 mt-4">
              <img src="./a.png" alt="User" className="w-10 h-10 rounded-full border border-gray-300" />
              <div>
                <h1 className="text-black font-semibold text-start">Maria Brand</h1>
                <h1 className="text-gray-400 text-sm text-start">Written on Trustpilot</h1>
              </div>
            </div>
            <img src="./rating.png" alt="Rating" className="w-28 mt-3" />
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <img src="./coll.png" alt="Quote Icon" className="w-10 h-10 mb-4" />
            <h1 className="font-bold text-lg text-black leading-relaxed">
              “We found an apartment within 3 weeks with WhatApartment!”
            </h1>
            <p className="font-medium text-gray-500 mt-2 text-justify leading-relaxed">
              We received emails from WhatApartment at an amazing speed. And we often were one of the first to respond!
            </p>

            <div className="flex items-center space-x-3 mt-4">
              <img src="./a.png" alt="User" className="w-10 h-10 rounded-full border border-gray-300" />
              <div>
                <h1 className="text-black font-semibold text-start">Maria Brand</h1>
                <h1 className="text-gray-400 text-sm text-start">Written on Trustpilot</h1>
              </div>
            </div>
            <img src="./rating.png" alt="Rating" className="w-28 mt-3" />
          </div>



        </div>
        <div className="flex justify-center ">
          <button className="border mb-10 border-white text-white py-2 px-4 rounded-md bg-transparent">
            See all Reviews
          </button>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-black flex justify-center font-bold text-3xl">Frequently Asked Questions</h1>
        <div className="max-w-2xl mx-auto mt-8">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <div className="flex justify-center items-center cursor-pointer" onClick={faq.toggle}>
                <h1 className="font-semibold text-lg text-center">{faq.question}</h1>
                {faq.isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>

              {faq.isOpen && (
                <>
                  <p className="text-gray-500 text-center mt-2">{faq.answer}</p>
                  <div className="w-68 h-[2px] bg-gray-300 mx-auto mt-2"></div>
                </>
              )}
            </div>
          ))}
        </div>

      </div>

    <Footer/>

    </div>
  );
}

export default Home;
