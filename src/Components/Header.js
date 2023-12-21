import React,{useState} from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import { IoCallOutline, IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Header = ({ name = "Home" ,logo="bistro bliss" }) => {

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
          <h1 className="mt-2 font-style text-3xl font-bold">{logo}</h1>
        </div>
        <div className="flex 3xl:space-x-2  2xl:space-x-2 xl:space-x-2 lg:ml-[2vw]  lg:space-x-4 text-md mt-3 md:ml-[-4vw] md:space-x-4 sm:ml-[-4vw] sm:space-x-2">
          <Link to="/home">
          <h1 className="nav-hover w-[6.5vw] h-[3vh]">{name}</h1>
          </Link>
         
          <Link to="/about">
          <h1 className="nav-hover w-[6.5vw] h-[3vh]">About</h1>
          </Link>
          <h1 className="nav-hover w-[6.5vw] h-[3vh]">Menu</h1>
          <h1 className="nav-hover w-[6.5vw] h-[3vh]">Pages</h1>
          <h1 className="nav-hover w-[7vw] h-[3vh]">Contact</h1>
        </div>
        <div className="3xl:mr-[10vw] 2xl:mr-[10vw] xl:mr-[10vw] lg:mr-[10vw] md:mr-[2vw] sm:mt-2">
          <button className=" border border-black rounded-full 3xl:w-[6vw] 2xl:w-[8vw] xl:w-[8vw] lg:w-[10vw] md:w-[14vw] sm:w-[16vw] h-[4vh] text-md">
            Book a Table
          </button>
        </div>
      </div>
       
     {/* mobile view */}
      <div className="relative xs:block xxs:block hidden sm:hidden lg:hidden md:hidden xl:hidden  h-[6vh] pt-2">
          <IoIosMenu
            onClick={openModal}
            className="text-navBar ml-[4vw]"
            size="2em"
          />
          {modalIsOpen && (
            <div className=" top-0 left-0 right-0 bg-navBar h-screen xs:w-[52vw] xxs:w-[64vw]">
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
              <div className="grid grid-cols-6 bg-whiteBg py-16 mt-4 p-2">
                <div className="w-[52vw] ">
                  <img
                    src="food.png"
                    alt=""
                    className="absolute  h-[12vh] w-[18vw] ml-[16vw] mt-[6vh] "
                  ></img>
                  <h1 className="font-stylee text-3xl font-bold mt-4 ">
                    Bistro Bliss
                  </h1>
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
                  <div className=" py-8">
                    <button className="rounded-full text-xs border border-black h-[4vh] w-[19vw] mt-4">
                      Book a Table
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
    </div>
  );
};

export default Header;
