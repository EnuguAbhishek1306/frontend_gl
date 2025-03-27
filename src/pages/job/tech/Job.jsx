import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllJobs } from "../../../services/api";
import { Search } from "lucide-react";
import { Pagination } from "../../../components/Pagination";

export const Job = () => {
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

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Search Bar */}
      <div className="mb-8 mt-4 mx-auto z-0">
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
            {jobs.map((job) => (
              <Link
                key={job._id}
                to={`/job/techjob/${job._id}`}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col"
              >
                <div className="m-1 w-full">
                  <img
                    src={job.img}
                    className="h-48 w-full rounded-xl object-cover"
                    alt="Company Logo"
                  />
                </div>
                <div className="my-1 mx-4 flex flex-col justify-between w-full text-center md:text-left">
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
                  <div className="mt-4 flex justify-center">
                    <span className="text-sm text-blue-500 font-semibold">
                      View & Apply →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination Component */}
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
