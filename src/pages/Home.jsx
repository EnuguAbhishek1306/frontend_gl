import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaTelegramPlane } from "react-icons/fa";

const Home = () => {
  const scrollToServices = () => {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen  max-w-7xl mx-auto">
     
      

      {/* Main Banner Section */}
      <motion.div
        className=" text-white my-4 py-8 sm:py-12 mx-6 flex flex-col items-center justify-center text-center  px-12 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          background: "linear-gradient(to right, #4299E1, #805AD5)", // Blue to Purple
        }}
      >
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">Welcome to Gitam Legends</h1>
        <h2 className="text-2xl sm:text-3xl font-bold">Empowering Students & Job Seekers</h2>
        <p className="mt-4 max-w-5xl text-lg font-medium">
          Gitam Legend is your all-in-one platform designed to help students and young professionals
          achieve their career goals. We provide a centralized hub for job listings, internship opportunities,
          free certifications, and hands-on project experiences.
        </p>
        <button onClick={scrollToServices} className="mt-6 bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition-all">
          Get Started
        </button>
      </motion.div>

      {/* Services Section */}
      <motion.div id="services" className="mt-10 px-6 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
        <h3 className="text-2xl font-semibold text-gray-800">What We Offer</h3>
        <p className="mt-2 text-lg text-gray-600">
          Our platform provides extensive resources to guide you through your career journey:
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Tech jobs", color: "bg-blue-500", link: "/job/techjob" },
            { title: "Non Tech jobs", color: "bg-red-500", link: "/job/nontechjob" },
            { title: "Internships", color: "bg-green-500", link: "/internship" },
            { title: "Certifications", color: "bg-rose-500", link: "/free-certification" },
            { title: "Projects", color: "bg-purple-500", link: "/" },
            { title: "Resources", color: "bg-indigo-500", link: "/" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`p-6 ${item.color} text-white shadow-lg rounded-lg transform hover:scale-105 transition-all`} // Corrected here
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="mt-2">Get access to valuable {item.title.toLowerCase()} resources and opportunities.</p>
              <Link to={item.link} className="block mt-4 bg-white text-black py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-all">Apply</Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Roadmaps Section */}
      <div id="roadmaps" className="mt-16 px-6 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Career Roadmaps</h3>
        <div className="text-left max-w-4xl mx-auto relative">
          <div className="border-l-4 border-blue-500 pl-4 space-y-6">
            {[
              { title: "Full Stack Development", description: "Learn front-end (HTML, CSS, JavaScript, React), back-end (Node.js, Express), databases (MongoDB, SQL), and deployment." },
              { title: "Data Science & AI", description: "Master Python, statistics, machine learning, deep learning frameworks (TensorFlow, PyTorch), and data visualization." },
              { title: "Cyber Security", description: "Understand network security, ethical hacking, penetration testing, and risk management." },
              { title: "DevOps Engineering", description: "Learn CI/CD, Docker, Kubernetes, cloud computing (AWS, Azure), and automation tools." },
              { title: "Cloud Computing", description: "Gain expertise in AWS, Azure, Google Cloud, serverless computing, and cloud architecture." },
              { title: "Software Testing", description: "Learn manual and automation testing, Selenium, API testing, and performance testing." }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative flex items-center group"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="absolute -left-6 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="bg-white p-4 shadow-lg rounded-lg w-full hover:bg-blue-50 transition-all">
                  <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modified Join With Us Section */}
      <div id="joinus" className="mt-16 px-6 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Join With Us</h3>
        <p className="text-lg text-gray-600 mb-6">
          Stay connected with us on social media. Get the latest updates and exclusive resources!
        </p>
        <div className="flex flex-col md:flex-row md:justify-center items-center gap-10 flex-wrap">
          {[
            {
              platform: "WhatsApp",
              icon: <FaWhatsapp size={60} className="text-green-500" />,
              bgColor: "bg-green-100",
              link: "https://chat.whatsapp.com/JbT1GyTK0GRFQj8N6Ymyjz",
              content: ["Stay on WhatsApp", "Exclusive job alerts!"],
            },
            {
              platform: "Instagram",
              icon: <FaInstagram size={60} className="text-pink-500" />,
              bgColor: "bg-pink-100",
              link: "https://www.instagram.com/gitam_legends",
              content: ["Follow us on Instagram", "Latest internships & tips"],
            },
            {
              platform: "Telegram",
              icon: <FaTelegramPlane size={60} className="text-blue-500" />,
              bgColor: "bg-blue-100",
              link: "#joinus",
              content: ["Join us on Telegram", "Certification updates & more"],
            },
            {
              platform: "WhatsApp Channel",
              icon: <FaWhatsapp size={60} className="text-green-600" />,
              bgColor: "bg-green-200",
              link: "#joinus",
              content: ["WhatsApp Channel Alerts", "Exclusive project info!"],
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col justify-between items-center p-6 rounded-lg shadow-md ${item.bgColor} text-gray-800 w-64 transform hover:scale-105 transition-all h-full`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
            >
              <div className="flex flex-col items-center mb-4">
                <div>{item.icon}</div>
                <p className="text-lg mt-4 mb-1 text-center">{item.content[0]}</p>
                <p className="text-md mb-4 text-center">{item.content[1]}</p>
              </div>
              <a
                href={item.link}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-all mt-auto"
              >
                Join {item.platform}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;