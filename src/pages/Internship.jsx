import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllInternships } from "../services/api";
import { Search } from "lucide-react";
import { useTrackedClick } from '../utils/analytics'

const Internship = () => {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        setLoading(true);
        const data = await getAllInternships(page, search);
        setInternships(data.internships);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching internships:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInternships();
  }, [page, search]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-gray-100 my-6 py-12 px-6 w-full flex justify-center">
        <div className="max-w-6xl text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Internship Opportunities
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Discover exciting internship opportunities to kickstart your career. 
            We offer a wide range of positions across various industries and locations.
          </p>
        </div>
      </div>

      <div className="mb-8 mx-auto">
        <form onSubmit={handleSearch} className="flex gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search internships..."
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
            {internships.map((internship) => (
              <Link
                key={internship._id}
                to={`/internship/${internship._id}`}
                onClick={() => trackJobClick(`internship_${internship._id}`)}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col md:flex-row items-center"
              >
                <div className="m-1 w-full md:w-auto">
                  <img
                    src={internship.img}
                    className="h-48 w-full md:w-60 rounded-xl"
                    alt="Company Logo"
                  />
                </div>
                <div className="my-1 mx-4 flex flex-col justify-between w-full text-center md:text-left">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {internship.title}
                    </h2>
                    <div className="mt-2 text-gray-600">
                      <p>
                        <strong>Role:</strong> {internship.jobRole}
                      </p>
                      <p>
                        <strong>Duration:</strong> {internship.duration}
                      </p>
                      <p>
                        <strong>Stipend:</strong> {internship.stipend}
                      </p>
                      <p>
                        <strong>Location:</strong> {internship.location}
                      </p>
                      <p>
                        <strong>Work Mode:</strong> {internship.workMode}
                      </p>
                      <p>
                        <strong>Last Date:</strong>{" "}
                        {new Date(internship.lastDateToApply).toLocaleDateString("en-GB")}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <span className="text-sm text-blue-500 font-semibold">
                      View Details →
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
  );
};

export default Internship;