import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllCertifications } from "../services/api";
import { Search } from "lucide-react";
import { useTrackedClick } from '../utils/analytics'

const FreeCertification = () => {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        setLoading(true);
        const data = await getAllCertifications(page, search);
        setCertifications(data.certifications);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching certifications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCertifications();
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
            Free Certification Courses
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Enhance your skills with our curated selection of free certification courses.
            Learn from top platforms and earn recognized certificates to boost your career.
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
              placeholder="Search courses..."
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
            {certifications.map((certification) => (
              <Link
                key={certification._id}
                to={`/free-certification/${certification._id}`}
                onClick={() => trackJobClick(`certification_${certification._id}`)}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col md:flex-row items-center"
              >
                <div className="m-1 w-full md:w-auto">
                  <img
                    src={certification.img}
                    className="h-48 w-full md:w-60 rounded-xl"
                    alt="Course Cover"
                  />
                </div>
                <div className="my-1 mx-4 flex flex-col justify-between w-full text-center md:text-left">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {certification.title}
                    </h2>
                    <div className="mt-2 text-gray-600">
                      <p>
                        <strong>Platform:</strong> {certification.platform}
                      </p>
                      <p className="mt-2 line-clamp-2">
                        <strong>Outcomes:</strong> {certification.outcomes}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <span className="text-sm text-blue-500 font-semibold">
                      View Course Details →
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

export default FreeCertification;