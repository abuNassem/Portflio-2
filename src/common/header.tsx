import {useState } from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { LuListVideo } from "react-icons/lu";

const Header = () => {
  const [current,setCurrent]=useState('Hero')
  
  const sections = ["Hero", "Projects", "Skills", "Contact"];
  return (
    <div className="w-[95%] fixed z-[30] bg-black h-[60px] mx-5 rounded-sm flex items-center px-4 top-2 ">
      <div className="flex h-[70%] w-full ">
        <div className="w-[20%]  flex items-center  highLight">logo</div>
        <div className="w-[80%] h-full text-white flex justify-end items-center">
          <ul className="flex h-full w-full  items-center justify-center gap-10 hidden md:flex">
            {sections.map((ele, index) => (
              <li
                key={index}
                onClick={()=>{setCurrent(ele);window.location.hash=ele}}
                className={`font-[500] text-sm duration-500 cursor-pointer  hover:text-white ${
                  ele === current ? "text-white" : "text-white/60"
                }`}
              >
                {ele}
              </li>
            ))}
          </ul>
          <button className="block md:hidden me-10 w-[30px] h-[30px] text-sm rounded-full flex items-center justify-center bg-white/40 duration-[0.5s] hover:bg-white cursor-pointer hover:text-black text-white">
            <LuListVideo className="font-bold"/>
          </button>
        </div>
        <div className="flex  gap-5 items-center">
          <a href="https://wa.me/962797917763"><button className="btnLink  "><FaWhatsapp/></button></a>
                   <a href="https://web.facebook.com/qutaibh.mohamd"><button className="btnLink "><FaFacebook/></button></a> 
          <a href="https://www.linkedin.com/in/qutaibah-mohamed-188162357/"><button className="btnLink "><FaLinkedin/></button></a>

        </div>
      </div>
    </div>
  );
};

export default Header;
