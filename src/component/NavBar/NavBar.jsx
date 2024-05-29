import { IoClose, IoMenu } from "react-icons/io5";
import { routes } from "../../Utils/utils";
import Links from "../Links/Links";
import { useState } from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="p-6">

        {/* Menu Icon  */}
        <div className="md:hidden text-2xl border-2 inline-block rounded-lg shadow-2xl " onClick={()=>setIsOpen(!isOpen)}>
            {
                isOpen ? <IoMenu /> : <IoClose  />
            }

        
        </div>

      <ul className={`md:flex absolute md:static  duration-500 ${isOpen? '-top-96': 'top-20 w-40'}`}>
        {routes?.map((route) => <Links key={route?.id} route={route}/>)}
      </ul>
    </nav>
  );
};

export default NavBar;
