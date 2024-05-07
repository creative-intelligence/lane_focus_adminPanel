import React from "react";
import Header from "../layouts/partials/header";
import { useParams } from "react-router-dom";

const complaints = [
  {
    id: 1,
    title: "Unethical Behaviour",
    type: "Lane",
    complainBy: "Jane Doe",
    status:"Active",
    date: "02/03/23",
    description: "Description of unethical behavior complaint.",
  },
  {
    id: 2,
    title: "Late Pickup",
    type: "Service",
    complainBy: "John Smith",
    status:"Active",
    date: "02/05/23",
    description: "Description of late pickup complaint.",
  },
  {
    id: 3,
    title: "Rash Driving",
    type: "Lane",
    complainBy: "Alice Johnson",
    status:"Active",
    date: "02/06/23",
    description: "Description of rash driving complaint.",
  },
];

export default function ComplainBox() {
  const { id } = useParams();
  const complaint = complaints.find((complaint) => complaint.id === parseInt(id));

  if (!complaint) {
    return <div>Complaint not found</div>;
  }

  return (
    <div>
      <Header header={"Complaint Details"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-5">
          <div
            className="bg-white rounded-lg shadow p-6 mb-4"
          >
            <h2 className="text-xl font-semibold mb-4">{complaint.title}</h2>
            <p className="text-gray-700 mb-2">Type: {complaint.type}</p>
            <p className="text-gray-700 mb-2">
              Complaint by: {complaint.complainBy}
            </p>
            <p className="text-gray-700 mb-2">Status: {complaint.status}</p>
            <p className="text-gray-700 mb-2">
              Date: {complaint.date}
            </p>
            <p className="text-gray-700">
              Description: {complaint.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}