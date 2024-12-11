import { useState } from "react";

const FourthMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Logo Configuration (Add image URL or leave empty for text logo)
  const logoUrl = ""; // Add your logo image URL here or leave empty for text logo
  const logoText = "MyLogo";
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <a href="#" className="flex items-center">
          {logoUrl ? (
            <img src={logoUrl} alt="Logo" className="h-10 w-auto" />
          ) : (
            <span className="text-xl font-bold text-gray-800">{logoText}</span>
          )}
        </a>

        {/* Menu Button for Mobile */}
        <button onClick={toggleMobileMenu} className="lg:hidden text-gray-800">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Home
          </a>
          <div className="relative group">
            <button className="text-gray-700 hover:text-gray-900 flex items-center">
              Pages
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-40">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Blog
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Contact
          </a>
        </nav>

        {/* Log In Button */}
        <div>
          <a
            href="#"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Log In
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-50 shadow-md">
          <nav className="flex flex-col space-y-2 p-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              About Us
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Blog
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default FourthMenu;
