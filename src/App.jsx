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
import Internship from "./pages/Internship";
import InternshipDetails from "./pages/InternshipDetails";
import FreeCertification from "./pages/FreeCertification";
import FreeCertificationDetails from "./pages/FreeCertificationDetails";
import PostInternship from "./pages/PostInternship";
import PostFreeCertification from "./pages/PostFreeCertification";
import PrivacyPolicy from "./pages/PrivacyPolicy";
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
                  <Route path="about" element={<AboutUs />} />
                  <Route path="contact" element={<ContactUs />} />
                  <Route path="/job/:id" element={<JobDetails />} />
                  <Route path="login" element={<AdminLogin />} />
                  <Route path="/internship" element={<Internship />} />
                  <Route
                    path="/internship/:id"
                    element={<InternshipDetails />}
                  />
                  <Route
                    path="/free-certification"
                    element={<FreeCertification />}
                  />
                  <Route
                    path="/free-certification/:id"
                    element={<FreeCertificationDetails />}
                  />
                  <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
                  <Route
                    path="/admin/post-internship"
                    element={
                      <PrivateRoute>
                        <PostInternship />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/admin/post-free-certification"
                    element={
                      <PrivateRoute>
                        <PostFreeCertification />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/admin/"
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
