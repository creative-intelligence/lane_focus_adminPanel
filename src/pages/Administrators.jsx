import { Link } from "react-router-dom";
import Header from "../layouts/partials/header";

export default function Administrators() {
  const administrators = [
    {
      id: 1,
      name: "Administrator 1",
      plan: "$ Monthly",
      circles: "3",
    },
    {
      id: 2,
      name: "Administrator 2",
      plan: "$ Weekly",
      circles: "3",
    },
    {
      id: 3,
      name: "Administrator 3",
      plan: "$ Yearly",
      circles: "3",
    },
   
      
  ];

  return (
    <div>
      <Header header={"Manage Adminintrators"} />
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
                      Plan
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      #No of Circles
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {administrators.map((admin) => (
                    <tr
                      key={admin.id}
                      className="bg-white border-b hover:bg-gray-150/30"
                      x
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {admin.name}
                      </td>
                      <td className="px-6 py-4">{admin.plan}</td>
                      <td className="px-16 py-4 ">{admin.circles}</td>
                      <td className="px-6 py-4">
                        <Link
                          to={`/administrators/details/${admin.id}`}
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
