import { IoClose, IoMenu } from "react-icons/io5";
import { routes } from "../../Utils/utils";
import { useState } from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 w-full py-[1.3rem] px-[2%] lg:py-5 lg:px-[2%] md:flex md:justify-between md:items-center z-[100] before:content-[''] before:top-0 before:left-0 before:absolute before:w-full before:h-full before:bg-gradient-back before:backdrop-blur-[50px] before:z-[-1] ">
      <a href="/" className="text-4xl text-white font-bold">
        Logo
      </a>
    <label htmlFor="" className="text-4xl text-white cursor-pointer md:hidden absolute right-[5%] inline-flex duration-300" onClick={()=>setIsOpen(!isOpen)}>
       {
        isOpen ? <IoClose /> : <IoMenu/>
       }
    </label>
      {/* Navbar Section  */}
      <nav className={`${isOpen? 'h-[17.7rem]':'h-0 overflow-hidden'} top-full  absolute left-0 w-full bg-gradient-back backdrop-blur-2xl shadow-2xl shadow-gradient-back duration-500 md:h-auto md:static md:w-auto md:bg-transparent md:backdrop-blur-0 md:shadow-none`}>
        <ul className="md:flex gap-6">
          {routes?.map((route) => (
            <li key={route?.id} className="text-white font-medium text-lg md:text-xl my-[1.5rem] md:my-0 mx-0 md:ml-10 block text-center duration-1000">
              <a href={route?.path} className="">
                {route?.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="hover:bg-white hover:text-yellow-700 border-2 rounded-xl text-lg md:text-xl capitalize font-bold text-white px-5 py-2 ml-16 md:ml-0">
        hello world
      </button>
    </header>
  );
};

export default NavBar;
