import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllJobs } from "../services/api";
import { Search } from "lucide-react";


const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const data = await getAllJobs(page, search);
        setJobs(data.jobs);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [page, search]);

  // Disable Right Click
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <>
    <div className="max-w-3xl mx-auto">
      {/* Website Description */}
      <div className="bg-gray-100 my-6 py-12 px-6 w-full flex justify-center">
        <div className="max-w-6xl text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to Our Job Portal
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our platform is a <strong>one-stop destination</strong> for
            off-campus job opportunities, interview questions, and study
            materials related to <strong>programming languages</strong>. We
            provide{" "}
            <strong>
              detailed job listings, salary insights, and essential resources
            </strong>{" "}
            like company patterns and expert interview tips. <br />
            <br />
            🚀 Stay updated with{" "}
            <strong>
              free certification courses, internship opportunities, and
              career-enhancing resources
            </strong>
            . Our website ensures <strong>easy navigation</strong>, helping you
            explore jobs with <strong>precise details and deadlines</strong>.
            Find everything you need <strong>in one place</strong>! <br />
            <br />
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-8 mx-auto">
        <form onSubmit={handleSearch} className="flex gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search jobs..."
              className="w-full px-4 py-2 border rounded-lg"
            />
            <Search
              className="absolute right-3 top-2.5 text-gray-400 pointer-events-none"
              size={20}
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Search
          </button>
        </form>
      </div>

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <>
          <div className="grid gap-4">
            {jobs.map((job) => (
              <Link
                key={job._id}
                to={`/job/${job._id}`}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col md:flex-row items-center"
              >
                <div className="m-1 w-full md:w-auto">
                  <img
                    src={job.img}
                    className="h-48 w-full md:w-60 rounded-xl"
                    alt="Company Logo"
                  />
                </div>
                <div className="my-1 mx-4 flex flex-col justify-between w-full text-center md:text-left">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {job.role} at {job.companyName}
                    </h2>
                    <div className="mt-2 text-gray-600">
                      <p>
                        <strong>Role:</strong> {job.role}
                      </p>
                      <p>
                        <strong>Salary:</strong> {job.salary}
                      </p>
                      <p>
                        <strong>Location:</strong> {job.location}
                      </p>
                      <p>
                        <strong>Deadline:</strong>{" "}
                        {new Date(job.deadline).toLocaleDateString("en-GB")}
                      </p>
                      <p>
                        <strong>Posted On:</strong>{" "}
                        {new Date(job.createdAt).toLocaleDateString("en-GB")}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <span className="text-sm text-blue-500 font-semibold">
                      View & Apply →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setPage(num)}
                className={`px-4 py-2 rounded ${
                  page === num
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </>
      )}


    </div>
   


      
    </>
  );
};

export default Home;
