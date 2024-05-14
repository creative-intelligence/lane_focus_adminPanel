import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../layouts/partials/header";
import { FaArrowLeft } from "react-icons/fa6";

export default function AdministratorProfile() {
  const { id } = useParams();

  const [blockedAdministrators, setBlockedAdministrators] = useState(new Set());

  const blockAdministrator = (adminId) => {
    const updatedBlockedAdministrators = new Set(blockedAdministrators);
    updatedBlockedAdministrators.add(adminId);
    setBlockedAdministrators(updatedBlockedAdministrators);
  };

  const unblockAdministrator = (adminId) => {
    const updatedBlockedAdministrators = new Set(blockedAdministrators);
    updatedBlockedAdministrators.delete(adminId);
    setBlockedAdministrators(updatedBlockedAdministrators);
  };


  const administrators = [
    {
        id: 1,
        name: "Administrator 1",
        email: "admin1@hotmail.com",
        plan: "$ Monthly",
        drivers: "3",
        dob: "1975-05-12",
        address: "123 Main St, City, Country",
        gender: "Male",
        registeredOn: "2020-01-01",
      },
      {
        id: 2,
        name: "Administrator 2",
        email: "admin2@hotmail.com",
        plan: "$ Weekly",
        drivers: "5",
        dob: "1980-08-22",
        address: "456 Elm St, City, Country",
        gender: "Female",
        registeredOn: "2019-12-15",
      },
      {
        id: 3,
        name: "Administrator 3",
        email: "admin3@hotmail.com",
        plan: "$ Yearly",
        drivers: "2",
        dob: "1992-04-01",
        address: "789 Oak St, City, Country",
        gender: "Male",
        registeredOn: "2021-02-10",
      },
    
  ];

  const administrator = administrators.find((admin) => admin.id === parseInt(id));

  if (!administrator) {
    return <div>Administrator not found</div>;
  }

  const isBlocked = blockedAdministrators.has(administrator.id);

  const renderActionButton = () => {
    if (isBlocked) {
      return (
        <button
          onClick={() => unblockAdministrator(administrator.id)}
          className="px-4 py-1 bg-green-500 text-white rounded-md font-semibold"
        >
          Unblock
        </button>
      );
    } else {
      return (
        <button
          onClick={() => blockAdministrator(administrator.id)}
          className="px-4 py-1 bg-red-500 text-white rounded-md font-semibold"
        >
          Block
        </button>
      );
    }
  };

  return (
    <div>
      <Header header={"Administrator Profile"} />
      <div className="max-w-screen-2xl mx-auto">
      <div className="mx-4 sm:mx-9 my-3">
        <div className="bg-white px-4 py-2 rounded-md">
          <div className="flex justify-between items-center">
            <Link to={"/administrators"}>
              <div className="flex items-center gap-2">
                <FaArrowLeft />
                <h3 className="text-base sm:text-xl font-medium">Administrator Information</h3>
              </div>
            </Link>
            <div>{renderActionButton()}</div>
          </div>
        </div>
      </div>
        <div className="mx-4 sm:mx-9 my-3">
          <div className="bg-white max-w-2xl px-4 xl:px-6 py-5">
            <div className="flex justify-between ">
              <div className="flex items-center gap-4">
                <div>
                  <img
                    className="w-16 h-16 rounded-full ring-2 ring-gray-250 object-cover border"
                    src={`https://randomuser.me/api/portraits/men/${administrator.id}.jpg`}
                    alt="administrator"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{administrator.name}</h2>
                  <p className="text-sm text-gray-600"> {administrator.email}</p>
                </div>
              </div>
              <div className="">
                <h2 className="text-lg font-semibold text-gray-800">Plan: {administrator.plan}</h2>
               
              </div>
            </div>
          </div>
          <div className="bg-white w-full max-w-2xl">
            <div className="border-b px-4 xl:px-6 py-3">
              <div>
                <h5 className="uppercase text-xl font-bold">Personal Information</h5>
              </div>
            </div>
            <div className="px-4 xl:px-6 py-8 grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
              <div>
                <p className="text-xs text-gray-600">Date of Birth</p>
                <h6 className="text-sm font-medium">{administrator.dob}</h6>
              </div>
              <div>
                <p className="text-xs text-gray-600">Address</p>
                <h6 className="text-sm font-medium">{administrator.address}</h6>
              </div>
              <div>
                <p className="text-xs text-gray-600">Gender</p>
                <h6 className="text-sm font-medium">{administrator.gender}</h6>
              </div>
              <div>
                <p className="text-xs text-gray-600">Registered On</p>
                <h6 className="text-sm font-medium">{administrator.registeredOn}</h6>
              </div>
              <div>
                <p className="text-xs text-gray-600">#No of Drivers</p>
                <h6 className="text-sm font-medium lg:px-6 px-2">{administrator.drivers}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
