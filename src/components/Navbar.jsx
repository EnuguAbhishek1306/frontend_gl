// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const Navbar = () => {
//   const { admin, logout } = useAuth();

//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link
//               to="/"
//               className="text-xl font-bold text-gray-800 hover:text-blue-600 transition duration-300"
//             >
//               Job Portal
//             </Link>
//           </div>

//           {/* Navigation Links */}
//           <div className="flex items-center space-x-6">
//           <Link
//               to="/internship"
//               className="text-gray-700 hover:text-blue-600 transition duration-300"
//             >
//               Internship
//             </Link>
//             <Link
//               to="/free-certification"
//               className="text-gray-700 hover:text-blue-600 transition duration-300"
//             >
//               Free-certification
//             </Link>
//             <Link
//               to="/about"
//               className="text-gray-700 hover:text-blue-600 transition duration-300"
//             >
//               About Us
//             </Link>
//             <Link
//               to="/contact"
//               className="text-gray-700 hover:text-blue-600 transition duration-300"
//             >
//               Contact
//             </Link>
            


//             {admin ? (
//               <>
              
//                 <Link
//                   to="/admin"
//                   className="text-gray-700 hover:text-blue-600 transition duration-300"
//                 >
//                   Dashboard
//                 </Link>
//                 <Link
//                   to="/admin/post-job"
//                   className="text-gray-700 hover:text-blue-600 transition duration-300"
//                 >
//                   Post Job
//                 </Link>
//                 {admin.isSuper && (
//                   <Link
//                     to="/admin/add-admin"
//                     className="text-gray-700 hover:text-blue-600 transition duration-300"
//                   >
//                     Add Admin
//                   </Link>
//                 )}
//                 <button
//                   onClick={logout}
//                   className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : null}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { admin, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-800">Job Portal</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              to="/internship"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Internship
            </Link>
            <Link
              to="/free-certification"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Free-certification
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Contact
            </Link>

            {admin && (
              <>
                <Link
                  to="/admin"
                  className="text-gray-700 hover:text-blue-600 transition duration-300"
                >
                  Dashboard
                </Link>
                <Link
                  to="/admin/post-job"
                  className="text-gray-700 hover:text-blue-600 transition duration-300"
                >
                  Post Job
                </Link>
                {admin.isSuper && (
                  <Link
                    to="/admin/add-admin"
                    className="text-gray-700 hover:text-blue-600 transition duration-300"
                  >
                    Add Admin
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/internship"
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition duration-300"
            onClick={toggleMenu}
          >
            Internship
          </Link>
          <Link
            to="/free-certification"
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition duration-300"
            onClick={toggleMenu}
          >
            Free-certification
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition duration-300"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition duration-300"
            onClick={toggleMenu}
          >
            Contact
          </Link>

          {admin && (
            <>
              <Link
                to="/admin"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition duration-300"
                onClick={toggleMenu}
              >
                Dashboard
              </Link>
              <Link
                to="/admin/post-job"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition duration-300"
                onClick={toggleMenu}
              >
                Post Job
              </Link>
              {admin.isSuper && (
                <Link
                  to="/admin/add-admin"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition duration-300"
                  onClick={toggleMenu}
                >
                  Add Admin
                </Link>
              )}
              <button
                onClick={() => {
                  logout();
                  toggleMenu();
                }}
                className="w-full text-left px-3 py-2 text-red-500 hover:text-red-600 hover:bg-gray-100 rounded-md transition duration-300"
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