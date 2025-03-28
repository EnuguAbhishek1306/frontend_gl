import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllCertifications } from "../../services/api";
import { Search } from "lucide-react";
import { Pagination } from "../../components/Pagination";

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
    <div className="max-w-5xl mx-auto">
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
        <div className="flex justify-center">
        <div className="flex space-x-2">
          <div className="w-4 h-8 bg-blue-500 rounded-full animate-bounce [animation-delay:0.6s]"></div>
          <div className="w-4 h-8 bg-blue-500 rounded-full animate-bounce [animation-delay:0.3s]"></div>
          <div className="w-4 h-8 bg-blue-500 rounded-full animate-bounce"></div>
        </div>
      </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((certification) => (
              <Link
                key={certification._id}
                to={`/free-certification/${certification._id}`}
                onClick={() => trackJobClick(`certification_${certification._id}`)}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col md:flex-row items-center"
              >
                <div className="m-1 w-full">
                  <img
                    src={certification.img}
                    className="h-48 w-full rounded-xl object-cover"
                    alt="Company Logo"
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
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            setPage={setPage}
          />
          
        </>
      )}
    </div>
  );
};

export default FreeCertification;