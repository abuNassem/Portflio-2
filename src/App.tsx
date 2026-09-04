import { useEffect } from "react";
import Header from "./common/header";
import Contact from "./section/contact";
import Home from "./section/home";
import Project from "./section/project";
import Skils from "./section/skils";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const App = () => {
    const sections = ["Hero", "Projects", "Skills", "Contact"];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (!hash) return;
      const element = document.getElementById(hash);
      if (element)
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className=" py-1 bg-gradient-to-b from-zinc-800 to-zinc-600 ">
      <Header />
      <div className="mt-[50px] px-4 py-20">
        <Home />
        <Project />
        <Skils />
        <Contact />
      </div>
      <div className="py-3 bg-black flex flex-col gap-5 items-center justify-center">
        <div>
          <ul className="flex h-full w-full  items-center justify-center gap-10 hidden md:flex">
            {sections.map((ele, index) => (
              <li
                key={index}
               
                className={`font-[500] text-sm text-white`}
              >
                {ele}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex  gap-5 items-center">
          <a href="https://wa.me/962797917763">
            <button className="btnLink  ">
              <FaWhatsapp />
            </button>
          </a>
          <a href="https://web.facebook.com/qutaibh.mohamd">
            <button className="btnLink ">
              <FaFacebook />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/qutaibah-mohamed-188162357/">
            <button className="btnLink ">
              <FaLinkedin />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
