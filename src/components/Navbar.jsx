import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const { admin, logout } = useAuth();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [applyDropdownOpen, setApplyDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Close mobile menu when clicking a link
  const closeMenu = () => {
    setIsOpen(false);
    setApplyDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setApplyDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinks = [
    { name: "Internship", to: "/internship" },
    { name: "Free Certification", to: "/free-certification" },
    { name: "About Us", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-md top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-blue-600 dark:text-blue-400"
        >
          Gitam Legends
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-[17px] font-medium">
          {/* Apply Job Dropdown */}
          <div className="relative group" ref={dropdownRef}>
            <button
              onClick={() => setApplyDropdownOpen(!applyDropdownOpen)}
              className="flex items-center gap-1 relative after:block after:h-[2px] after:bg-blue-600 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform"
            >
              Apply Job{" "}
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  applyDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute z-10 bg-white rounded-xl shadow-xl py-2 w-52 mt-2 space-y-2 transition-all duration-300 ${
                applyDropdownOpen
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              } origin-top`}
            >
              <Link
                to="/job/techjob"
                onClick={closeMenu}
                className="block px-4 py-2 hover:bg-blue-50 rounded-md transition"
              >
                Technical Jobs
              </Link>
              <Link
                to="/job/nontechjob"
                onClick={closeMenu}
                className="block px-4 py-2 hover:bg-blue-50 rounded-md transition"
              >
                Non-Technical Jobs
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative after:block after:h-[2px] after:bg-blue-600 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform ${
                location.pathname === link.to
                  ? "text-blue-600 font-semibold"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Admin Dashboard & Logout */}
          {admin && (
            <>
              <Link to="/admin" className="hover:text-blue-600 transition">
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white transition-transform duration-300 shadow-md  ${
          isOpen ? "h-auto opacity-100" : "h-0 opacity-0 overflow-hidden "
        }`}
      >
        <div className="flex flex-col space-y-3 px-4 mb-2">
        <button
            onClick={() => setApplyDropdownOpen(!applyDropdownOpen)}
            className="text-lg flex items-center"
          >
            Apply Job{" "}
            <ChevronDown
              size={16}
              className={`ml-2 ${applyDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {applyDropdownOpen && (
            <div className="ml-4 space-y-2">
              <Link
                to="/job/techjob"
                onClick={closeMenu}
                className="block text-gray-700"
              >
                Technical Jobs
              </Link>
              <Link
                to="/job/nontechjob"
                onClick={closeMenu}
                className="block text-gray-700"
              >
                Non-Technical Jobs
              </Link>
            </div>
          )}
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className="text-lg"
            >
              {link.name}
            </Link>
          ))}
          {/* Dropdown inside Mobile Menu */}
         

          {admin && (
            <>
              <Link to="/admin" onClick={closeMenu} className="text-lg">
                Dashboard
              </Link>
              <button
                onClick={() => {
                  logout();
                  closeMenu();
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
