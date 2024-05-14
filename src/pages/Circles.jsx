import { Link } from "react-router-dom";
import Header from "../layouts/partials/header";

export default function Circles() {
  
  const circles = [
    {
      id: 1,
      name: "Circle A",
      zone: "Location ABC",
      drivers:"2"
    },
    {
      id: 2,
      name: "Circle B",
      zone: "Location EFG",
      drivers:"2"
    },
    {
      id: 3,
      name: "Circle C",
      zone: "Location XYZ",
      drivers:"2"
    },
    
  ];

  return (
    <div>
      <Header header={"Manage Circles"} />
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
                      Zone
                    </th>
                    <th scope="col" className="px-6 py-3">
                      #No  of Drivers
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {circles.map((circle) => (
                    <tr
                      key={circle.id}
                      className="bg-white border-b hover:bg-gray-150/30"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {circle.name}
                      </td>
                      <td className="px-6 py-4">
                        {circle.zone}
                      </td>
                      <td className="px-16 py-4">
                        {circle.drivers}
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          to={`/administrators/details/${circle.id}`}
                          className="font-medium bg-primary text-black  px-3 py-1 rounded-md hover:text-gray-250 bg-opacity-20"
                        >
                          Details
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
