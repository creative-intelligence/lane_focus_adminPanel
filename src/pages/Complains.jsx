import React, { useState } from "react";
import Header from "../layouts/partials/header";
import { Link } from "react-router-dom";

export default function Complains() {
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      title: "Unethical Behaviour",
      complainBy: "Jane Doe",
      status: "Pending",
      date: "02/03/23",
      description: "Description of unethical behavior complaint.",
    },
    {
      id: 2,
      title: "Late Pickup",
      complainBy: "John Smith",
      status: "Pending",
      date: "02/05/23",
      description: "Description of late pickup complaint.",
    },
    {
      id: 3,
      title: "Rash Driving",
      complainBy: "Alice Johnson",
      status: "Pending",
      date: "02/06/23",
      description: "Description of rash driving complaint.",
    },
  ]);

  const handleComplaintViewed = (id) => {
    setComplaints((prevComplaints) =>
      prevComplaints.map((complaint) =>
        complaint.id === id ? { ...complaint, status: "Viewed" } : complaint
      )
    );
  };

  return (
    <div>
      <Header header={"Complains/Reports"} />
      <div className="max-w-screen-2xl mx-auto overflow-x-auto drop-shadow-xl">
        <div className="mx-4 sm:mx-9 my-5">
          <div className="flex flex-col w-full bg-white py-3 px-3 rounded-lg sm:w-auto sm:flex-row sm:items-center gap-4">
            <div className="relative w-full sm:w-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full px-4 py-2 outline-none pl-10 text-sm text-gray-900 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search report..."
                required
              />
            </div>
            {/* <Filterdropdown /> */}
          </div>

          <div className="my-5">
            <div className="overflow-x-auto bg-white rounded-lg shadow">
              <table className="w-full text-sm text-gray-500">
                <thead className="text-xs text-gray-700 uppercase border-b-2 bg-white">
                  <tr>
                    <th className="px-6 py-3">Title</th>

                    <th className="px-6 py-3">Complaint by</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Date </th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {complaints.map((complaint) => (
                    <tr
                      key={complaint.id}
                      className="border-b hover:bg-gray-100"
                    >
                      <td className="px-6 py-4 text-center">
                        {complaint.title}
                      </td>

                      <td className="px-6 py-4 text-center">
                        {complaint.complainBy}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`inline-block px-2 py-1 font-semibold ${
                            complaint.status === "Pending"
                              ? "text-yellow-900 bg-yellow-200"
                              : "text-green-900 bg-green-200"
                          } rounded-full`}
                        >
                          {complaint.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        {complaint.date}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Link
                          to={`/complains/details/${complaint.id}`}
                          onClick={handleComplaintViewed}
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
