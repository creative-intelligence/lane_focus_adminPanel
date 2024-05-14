import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../layouts/partials/header";

export default function CircleDetail() {
  const { circleId } = useParams();

  // Dummy data for drivers (you can replace it with actual data from your backend)
  const initialDrivers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "(123)-4567890",
    },
    {
      id: 2,
      name: "Jack hussey",
      email: "jack@example.com",
      phone: "(123)-4567890",
    },
    {
      id: 3,
      name: "David Mike",
      email: "mike@example.com",
      phone: "(123)-4567890",
    },
    {
      id: 4,
      name: "Crawley Jackson",
      email: "jackson@example.com",
      phone: "(123)-4567890",
    },
    {
      id: 5,
      name: "mitchel marsh",
      email: "marsh@example.com",
      phone: "(123)-4567890",
    },
  ];

  const [drivers, setDrivers] = useState(initialDrivers);


  const circleDrivers = drivers.filter(driver => driver.id % 2 === 0); 

  const handleRemoveDriver = (driverId) => {
   
    const updatedDrivers = drivers.filter(driver => driver.id !== driverId);
  
    setDrivers(updatedDrivers);
    
    console.log(`Removed driver with id ${driverId}`);
  };

  return (
    <div>
      <Header header={"List of Drivers"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-3">
          <div className="my-10">
            <div className="relative overflow-x-auto drop-shadow-xl bg-white sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase border-b-2 bg-white">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {circleDrivers.map((driver) => (
                    <tr
                      key={driver.id}
                      className="bg-white border-b hover:bg-gray-150/30"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {driver.name}
                      </td>
                      <td className="px-6 py-4 max-w-xs truncate">
                        {driver.email}
                      </td>
                      <td className="px-6 py-4 max-w-xs truncate">
                        {driver.phone}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleRemoveDriver(driver.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
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
