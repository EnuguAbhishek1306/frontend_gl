import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import PostJob from "./pages/PostJob";
import AddAdmin from "./pages/AddAdmin";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/Footer";
import { AnalyticsProvider } from "./utils/analytics";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <AnalyticsProvider>
            <div className="min-h-screen bg-gray-50">
              <Navbar />
              <main className="container mx-auto ">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="about" element={<AboutUs/>} />
                  <Route path="contact" element={<ContactUs/>} />
                  <Route path="/job/:id" element={<JobDetails />} />
                  <Route path="login" element={<AdminLogin />} />
                  <Route
                    path="/admin/dashboard"
                    element={
                      <PrivateRoute>
                        <AdminDashboard />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/admin/post-job"
                    element={
                      <PrivateRoute>
                        <PostJob />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/admin/add-admin"
                    element={
                      <PrivateRoute>
                        <AddAdmin />
                      </PrivateRoute>
                    }
                  />
                </Routes>
              </main>
              <Footer />
            </div>
          </AnalyticsProvider>
        </Router>
      </AuthProvider>
      <Analytics />
    </>
  );
};

export default App;
