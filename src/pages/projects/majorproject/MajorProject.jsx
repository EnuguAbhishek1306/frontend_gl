import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { getAllMajorProjects } from "../../../services/api";

const MajorProject = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await getAllMajorProjects(page, search);
        setProjects(data.projects);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching major projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
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
            Major Projects Showcase
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Explore a collection of innovative major projects developed by
            talented individuals across various domains.
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
              placeholder="Search projects..."
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
            {projects.map((project) => (
              <Link
               
                to={`/majorproject/${project._id}`}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col md:flex-row items-center"
              >
                <div className="m-1 w-full md:w-auto">
                  <img
                    src={project.ouputImg}
                    className="h-48 w-full md:w-60 rounded-xl"
                    alt="Project Output"
                  />
                </div>
                <div className="my-1 mx-4 flex flex-col justify-between w-full text-center md:text-left">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {project.title}
                    </h2>
                    <div className="mt-2 text-gray-600">
                      <p>
                        <strong>Domain:</strong> {project.domain}
                      </p>
                      <p>
                        <strong>Tools:</strong> {project.tools.join(", ")}
                      </p>
                      <p>
                        <strong>Description:</strong> {project.description}
                      </p>
                      <p>
                        <strong>Created At:</strong>{" "}
                        {new Date(project.createdAt).toLocaleDateString(
                          "en-GB"
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-500 font-semibold"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page >= totalPages}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MajorProject;
