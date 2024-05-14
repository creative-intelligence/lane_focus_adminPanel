import { Link } from "react-router-dom";
import Header from "../layouts/partials/header";

export default function Drivers() {
  
  const drivers = [
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

  return (
    <div>
      <Header header={"Manage Drivers"} />
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
                     Profile
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {drivers.map((driver) => (
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
                      <td className="px-6 py-4 space-x-2">
                        <Link
                          to={`/drivers/details/${driver.id}`}
                          className="font-medium bg-gray-400 text-black  px-3 py-1 rounded-md hover:text-gray-250 bg-opacity-50"
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
