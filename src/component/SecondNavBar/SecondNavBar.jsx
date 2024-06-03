import { routes } from "../../Utils/utils";

const SecondNavBar = () => {
  return (
    <nav className="flex justify-between items-center px-5 bg-gradient-to-r from-[#f09819] to-[#ff512f] shadow-xl text-white border">
      <div className="text-3xl font-bold leading-[70px] capitalize">company logo</div>
      <ul className="flex justify-between items-center gap-6">
        {routes?.map((route) => (
          <li key={route} className="">
            <a href={route?.path} className="leading-[70px] text-lg py-2 px-4 hover:shadow-[#33ffff_0px_0px_5px] hover:text-cyan-500 rounded-md">{route?.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SecondNavBar;
