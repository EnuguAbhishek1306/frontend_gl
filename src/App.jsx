import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import { AuthProvider } from "./context/AuthContext";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/Footer";
import { AnalyticsProvider } from "./utils/analytics";
import { Job } from "./pages/job/tech/Job";
import JobDetails from "./pages/job/tech/JobDetails";
import NonTechJobs from "./pages/job/nontech/NonTechJob";
import NonTechJobDetails from "./pages/job/nontech/NonTechJobDetails";
import AdminLogin from "./pages/admin/AdminLogin";
import MajorProject from "./pages/projects/majorproject/MajorProject";
import Internship from "./pages/internship/Internship";
import InternshipDetails from "./pages/internship/InternshipDetails";
import PrivateRoute from "./components/PrivateRoute";

import FreeCertification from "./pages/free-certifications/FreeCertification";
import FreeCertificationDetails from "./pages/free-certifications/FreeCertificationDetails";
import PostInternship from "./pages/internship/PostInternship";
import PostFreeCertification from "./pages/free-certifications/PostFreeCertification";
import AdminDashboard from "./pages/admin/AdminDashboard";
import PostJob from "./pages/job/tech/PostJob";
import PostNonTechJob from "./pages/job/nontech/PostNonTechJob";
import AddAdmin from "./pages/admin/AddAdmin";
// import PostFreeCertification from "./pages/free-certifications/PostFreeCertification";
// import AdminDashboard from "./pages/admin/AdminDashboard";


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
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
                  <Route path="/job/techjob" element={<Job/>} />
                  <Route path="/job/techjob/:id" element={<JobDetails/>} />
                  <Route path="/job/nontechjob" element={<NonTechJobs/>} />
                  <Route path="/job/nontechjob/:id" element={<NonTechJobDetails/>} />
                  <Route path="/login" element={<AdminLogin/>} />
                  <Route path="/internship" element={<Internship/>} />
                  <Route path="/internship/:id" element={<InternshipDetails/>} />
                  <Route path="/majorproject" element={<MajorProject/>} />
                  <Route path="/free-certification" element={<FreeCertification/>}/>
                  <Route path="/free-certification/:id" element={<FreeCertificationDetails/>}  />
                  <Route
                    path="/admin/post-internship"
                    element={
                      <PrivateRoute>
                        <PostInternship/>
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/admin/post-free-certification"
                    element={
                      <PrivateRoute>
                        <PostFreeCertification/>
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/admin/"
                    element={
                      <PrivateRoute>
                        <AdminDashboard/>
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/admin/post-job"
                    element={
                      <PrivateRoute>
                        <PostJob/>
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/admin/post-nontechjob"
                    element={
                      <PrivateRoute>
                        <PostNonTechJob/>
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/admin/add-admin"
                    element={
                      <PrivateRoute>
                        <AddAdmin/>
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
