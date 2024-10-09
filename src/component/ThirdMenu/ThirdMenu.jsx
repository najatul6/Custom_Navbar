import { AiFillAndroid } from "react-icons/ai";
import { NavMenu } from "../../Utils/utils";
import { CiSearch } from "react-icons/ci";

const ThirdMenu = () => {
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8">
          {/* Logo Section  */}
          <div className="text-2xl font-bold uppercase flex items-center gap-2">
            <AiFillAndroid />
            <p>Android</p>
            <p className="text-secondary">Hub</p>
          </div>
          {/* Menu Section  */}
          <div className="hidden md:block">
            <ul className="flex justify-center items-center gap-6 text-white">
              {NavMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a href={item.link} className="inline-block py-1 px-3 font-semibold hover:text-primary">{item.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Icons Section  */}
          <div>
            <button className="text-2xl hover:text-primary hover:bg-white p-2 rounded-full">
                <CiSearch/>
            </button>
          </div>
          {/* Mobile hamburger Menu Section  */}
        </div>
      </nav>
      {/* Mobile Sidebar section  */}
    </>
  );
};

export default ThirdMenu;
