"use client";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-indigo-500  mt-0">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 text-center mb-12">
          My Projects
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <Link
            href="https://react-zoo-omega.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between p-6 bg-white rounded-2xl shadow-md border border-indigo-100 hover:shadow-lg hover:-translate-y-1 transition group"
          >
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">
              Zoo App
            </h3>
            <p className="text-sm text-gray-500 mt-2">Personal Project</p>
          </Link>

          {/* Project 2 */}
          <Link
            href="https://beeo-restaurant.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between p-6 bg-white rounded-2xl shadow-md border border-indigo-400 hover:shadow-lg hover:-translate-y-1 transition group"
          >
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">
              Restaurant App
            </h3>
            <p className="text-sm text-gray-500 mt-2">Personal Project</p>
          </Link>

          {/* Project 3 */}
          <Link
            href="https://learn-state-seven.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between p-6 bg-white rounded-2xl shadow-md border border-indigo-100 hover:shadow-lg hover:-translate-y-1 transition group"
          >
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">
              Learn State App
            </h3>
            <p className="text-sm text-gray-500 mt-2">Personal Project</p>
          </Link>

          {/* Group Project 1 */}
          <Link
            href="https://rosvik.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between p-6 bg-white rounded-2xl shadow-md border border-indigo-100 hover:shadow-lg hover:-translate-y-1 transition group"
          >
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">
              Rosvik Website
            </h3>
            <p className="text-sm text-gray-500 mt-2">Group Project</p>
          </Link>

          {/* Group Project 2 */}
          <Link
            href="https://gp-3-project1.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between p-6 bg-white rounded-2xl shadow-md border border-indigo-100 hover:shadow-lg hover:-translate-y-1 transition group"
          >
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">
              GP-3 Project 1
            </h3>
            <p className="text-sm text-gray-500 mt-2">Group Project</p>
          </Link>

          {/* Group Project 3 */}
          <Link
            href="https://australia-zoo-team-grade.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between p-6 bg-white rounded-2xl shadow-md border border-indigo-100 hover:shadow-lg hover:-translate-y-1 transition group"
          >
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">
              Australia Zoo Team Project
            </h3>
            <p className="text-sm text-gray-500 mt-2">Group Project</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
