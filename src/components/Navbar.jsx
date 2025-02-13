import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { admin, logout } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Job Portal
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {admin ? (
              <>
                <Link
                  to="/admin/dashboard"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Dashboard
                </Link>
                <Link
                  to="/admin/post-job"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Post Job
                </Link>
                {admin.isSuper && (
                  <Link
                    to="/admin/add-admin"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    Add Admin
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
              <Link
                  to="login"
                  className=" text-black px-4 py-2 rounded "
                >
                  placement course
                </Link>
                <Link
                  to="login"
                  className=" text-black px-4 py-2 rounded "
                >
                  interships
                </Link>
                
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
