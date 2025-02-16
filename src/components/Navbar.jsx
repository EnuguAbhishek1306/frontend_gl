import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { admin, logout } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-xl font-bold text-gray-800 hover:text-blue-600 transition duration-300"
            >
              Job Portal
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
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

            {admin ? (
              <>
                <Link
                  to="/admin/dashboard"
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
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
