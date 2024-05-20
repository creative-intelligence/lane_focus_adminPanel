import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/partials/header";
import { BsCartCheckFill } from "react-icons/bs";
import { HiMiniUsers } from "react-icons/hi2";
import { GiSteeringWheel } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import ChartOne from "../components/chartOne";

export default function Home() {
  const [dateRange, setDateRange] = useState("05.01.2023 - 05.31.2023");
  const [aggregationType, setAggregationType] = useState("Monthly");
  const [dataType, setDataType] = useState("Total Users");

  const handleDateRangeChange = (range) => {
    setDateRange(range);
  };

  const handleAggregationChange = (type) => {
    setAggregationType(type);
  };

  const handleDataTypeChange = (type) => {
    setDataType(type);
  };

  return (
    <div>
      <Header header={"Dashboard"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
          <Link to="/drivers" className="w-full">
              <div className="rounded-sm border border-stroke bg-white py-6 px-7 shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black bg-opacity-10">
                  <GiSteeringWheel className="w-6 h-6 text-gray-250" />
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <h4 className="text-title-md font-bold text-black ">05</h4>
                    <span className="text-sm font-medium text-gray-500">
                      Drivers
                    </span>
                  </div>
                  {/* <span className="flex items-center gap-1 text-sm font-medium text-green-500">
                    0.43%
                  </span> */}
                </div>
              </div>
            </Link>
            <Link to="/administrators" className="w-full">
              <div className="rounded-sm border border-stroke bg-white py-6 px-7 shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black bg-opacity-10">
                  <HiMiniUsers className="w-6 h-6 text-gray-250" />
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <h4 className="text-title-md font-bold text-black ">03</h4>
                    <span className="text-sm font-medium text-gray-500">
                      Administrators
                    </span>
                  </div>
                  {/* <span className="flex items-center gap-1 text-sm font-medium text-green-500">
                    0.43%
                  </span> */}
                </div>
              </div>
            </Link>
            {/* <Link to="/content" className="w-full">
              <div className="rounded-sm border border-stroke bg-white py-6 px-7 shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black bg-opacity-10">
                  <IoSettingsSharp className="w-6 h-6 text-gray-250" />
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <h4 className="text-title-md font-bold text-black ">07</h4>
                    <span className="text-sm font-medium text-gray-500">
                      App Settings
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-medium text-green-500">
                    0.43%
                  </span>
                </div>
              </div>
            </Link> */}
          </div>

          <div className="mt-5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7">
            <ChartOne
              dateRange={dateRange}
              onDateRangeChange={handleDateRangeChange}
              aggregationType={aggregationType}
              onAggregationChange={handleAggregationChange}
              dataType={dataType}
              onDataTypeChange={handleDataTypeChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

