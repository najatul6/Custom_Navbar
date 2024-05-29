import { routes } from "../../Utils/utils";

const NavBar = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        Logo
      </a>

      {/* Navbar Section  */}
      <nav className="nav">
        <ul className="nav-list">
          {routes?.map((route) => (
            <li key={route?.id} className="nav-item">
              <a href={route?.path} className="nav-link">
                {route?.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
