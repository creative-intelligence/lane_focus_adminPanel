// CircleDetails.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layouts/partials/header';

export default function CircleDetail({ circle, removeDriverFromCircle }) {
  return (
    <div>
      <Header header={`Circle: ${circle.name}`} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-3">
          <div className="bg-white rounded-md p-4 my-4">
            <h2 className="text-lg font-semibold mb-2">{circle.name}</h2>
            <p className="text-md font-semibold mb-2">Type: {circle.type}</p>
            <div>
              <h3 className="text-md font-semibold mb-2">Drivers:</h3>
              <ul>
                {circle.drivers.map(driver => (
                  <li key={driver.id} className="flex items-center justify-between">
                    <span>{driver.name}</span>
                    <button
                      onClick={() => removeDriverFromCircle(circle.id, driver.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded-md font-semibold"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/circles" className="text-blue-500 mt-4 inline-block">Back to Circles</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
