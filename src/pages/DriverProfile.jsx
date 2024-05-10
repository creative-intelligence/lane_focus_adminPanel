import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../layouts/partials/header";
import { FaArrowLeft } from "react-icons/fa6";
import Administrators from "./Administrators";

export default function DriverProfile() {
  const { id } = useParams();

  const [blockedDrivers, setBlockedDrivers] = useState(new Set());

  const blockDriver = (driverId) => {
    const updatedBlockedDrivers = new Set(blockedDrivers);
    updatedBlockedDrivers.add(driverId);
    setBlockedDrivers(updatedBlockedDrivers);
  };

  const unblockDriver = (driverId) => {
    const updatedBlockedDrivers = new Set(blockedDrivers);
    updatedBlockedDrivers.delete(driverId);
    setBlockedDrivers(updatedBlockedDrivers);
  };

  const drivers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "(123)-4567890",
      dob: "1990-01-01",
      address: "123 Main St, City, Country",
      insurance: "ABC Insurance",
      gender: "Male",
      registeredOn: "2022-01-01",
      administrator:"Administrator 1",
      circle:"Circle A"
    },
    {
      id: 2,
      name: "Jack Hussey",
      email: "jack@example.com",
      phone: "(123)-4567890",
      dob: "1985-05-15",
      address: "456 Elm St, City, Country",
      insurance: "XYZ Insurance",
      gender: "Male",
      registeredOn: "2021-12-15",
      administrator:"Administrator 3",
      circle:"Circle B"
    },
    {
      id: 3,
      name: "David Mike",
      email: "mike@example.com",
      phone: "(123)-4567890",
      dob: "1982-09-20",
      address: "789 Oak St, City, Country",
      insurance: "DEF Insurance",
      gender: "Male",
      registeredOn: "2022-02-10",
      administrator:"Administrator 1",
      circle:"Circle C"
    },
    {
      id: 4,
      name: "Crawley Jackson",
      email: "jackson@example.com",
      phone: "(123)-4567890",
      dob: "1978-03-12",
      address: "987 Pine St, City, Country",
      insurance: "GHI Insurance",
      gender: "Male",
      registeredOn: "2021-11-30",
      administrator:"Administrator 2",
      circle:"Circle A"
    },
    {
      id: 5,
      name: "Mitchel Marsh",
      email: "marsh@example.com",
      phone: "(123)-4567890",
      dob: "1995-07-28",
      address: "654 Birch St, City, Country",
      insurance: "JKL Insurance",
      gender: "Male",
      registeredOn: "2022-03-05",
      administrator:"Administrator 2",
      circle:"Circle B"
    },
  ];
  const driver = drivers.find((driver) => driver.id === parseInt(id));

  if (!driver) {
    return <div>Driver not found</div>;
  }

  const isBlocked = blockedDrivers.has(driver.id);

  const renderActionButton = () => {
    if (isBlocked) {
      return (
        <button
          onClick={() => unblockDriver(driver.id)}
          className="px-4 py-1 bg-green-500 text-white rounded-md font-semibold"
        >
          Unblock
        </button>
      );
    } else {
      return (
        <button
          onClick={() => blockDriver(driver.id)}
          className="px-4 py-1 bg-red-500 text-white rounded-md font-semibold"
        >
          Block
        </button>
      );
    }
  };

  return (
    <div>
      <Header header={"Driver Profile"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-3">
          <div className="space-y-1.5">
            <div className="bg-white px-4 py-2 rounded-md">
              <div className="flex justify-between items-center">
                <Link to={"/drivers"}>
                  <div className="flex items-center gap-2">
                    <FaArrowLeft />
                    <h3 className="text-base sm:text-xl font-medium">
                      Driver Information
                    </h3>
                  </div>
                </Link>
                <div>{renderActionButton()}</div>
              </div>
            </div>
            <div className="bg-white max-w-2xl px-4 xl:px-6 py-5">
              <div className="flex justify-between ">
                <div className="flex items-center gap-4">
                  <div>
                    <img
                      className="w-16 h-16 rounded-full ring-2 ring-gray-250 object-cover border"
                      src={`https://randomuser.me/api/portraits/men/${driver.id}.jpg`}
                      alt="users"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{driver.name}</h2>
                    <p className="text-xs text-gray-600">{driver.email}</p>
                  </div>
                </div>

                <div className="">
                  <h2 className="text-lg font-semibold text-gray-800">{driver.administrator}</h2>
                  <p className="text-sm text-gray-600 text-center">{driver.circle}</p>
                </div>
              </div>
            </div>
            <div className="bg-white w-full max-w-2xl">
              <div className="border-b px-4 xl:px-6 py-3">
                <div>
                  <h5 className="uppercase text-xl font-bold">
                    Personal Information
                  </h5>
                </div>
              </div>
              <div className="px-4 xl:px-6 py-8 grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                <div>
                  <p className="text-xs text-gray-600">Date of Birth</p>
                  <h6 className="text-sm font-medium">{driver.dob}</h6>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Address</p>
                  <h6 className="text-sm font-medium">{driver.address}</h6>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Insurance</p>
                  <h6 className="text-sm font-medium">{driver.insurance}</h6>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Gender</p>
                  <h6 className="text-sm font-medium">{driver.gender}</h6>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Phone Number</p>
                  <h6 className="text-sm font-medium">{driver.phone}</h6>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Registered On</p>
                  <h6 className="text-sm font-medium">{driver.registeredOn}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
