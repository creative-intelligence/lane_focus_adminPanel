import React, { useState } from "react";
import Header from "../layouts/partials/header";
import { Link } from "react-router-dom";

export default function Complains() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Header header={"Complains/Reports"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-5">
          <div className="flex justify-between bg-white py-4 px-6 rounded">
            <div className="relative flex items-center">
              <svg
                className="w-5 h-5 text-gray-500 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.5-4.5"
                />
                <circle cx="10" cy="10" r="8" />
              </svg>
              <input
                type="text"
                className="block w-full border border-gray-300 rounded py-2 pl-8 pr-4 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                placeholder="Search report..."
              />
            </div>
          </div>

          <div className="my-5">
            <div className="overflow-x-auto bg-white rounded-lg shadow">
              <table className="w-full text-sm text-gray-500">
                <thead className="text-xs text-gray-700 uppercase border-b-2 bg-white">
                  <tr>
                    <th className="px-6 py-3">Title</th>
                    <th className="px-6 py-3">Type</th>
                    <th className="px-6 py-3">Complaint by</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Date & Time</th>
                    <th className="px-6 py-3"></th>
                  </tr>
                </thead>

                <tbody>
                  {[...Array(5)].map((_, index) => (
                    <tr key={index} className="border-b hover:bg-gray-100">
                      <td className="px-6 py-4">Unethical Behaviour</td>
                      <td className="px-6 py-4">Lane</td>
                      <td className="px-6 py-4">Jane Doe</td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-2 py-1 font-semibold text-green-900 bg-green-200 rounded-full">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4">02/03/23</td>
                      <td className="px-6 py-4">
                        <Link
                          to="/complains/details/1"
                          className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded hover:bg-blue-200"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
