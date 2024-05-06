// Circles.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layouts/partials/header';

export default function Circles() {
  const [circles, setCircles] = useState([
    {
      id: 1,
      name: "Circle A",
      type: "Lane Focus",
      drivers: [
        { id: 1, name: "John Doe", email: "john@example.com", phone: "(123)-4567890" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "(123)-4567890" }
      ]
    },
    {
      id: 2,
      name: "Circle B",
      type: "Lane Assist",
      drivers: [
        { id: 3, name: "David Mike", email: "mike@example.com", phone: "(123)-4567890" },
        { id: 4, name: "Crawley Jackson", email: "jackson@example.com", phone: "(123)-4567890" }
      ]
    },
    {
      id: 3,
      name: "Circle C",
      type: "Lane Change Assist",
      drivers: [
        { id: 5, name: "Emily Watson", email: "emily@example.com", phone: "(123)-4567890" },
        { id: 6, name: "Sophia Brown", email: "sophia@example.com", phone: "(123)-4567890" }
      ]
    }
  ]);

  return (
    <div>
      <Header header={"Circles"} />
      <div className="max-w-xl  mx-auto">
        <div className="mx-4 sm:mx-9 my-3">
          {circles.map(circle => (
            <Link key={circle.id} to={`/circles/details/${circle.id}`}>
              <div className="bg-white rounded-md p-4 my-4">
                <h2 className="text-lg font-semibold mb-2">{circle.name}</h2>
                <p className="text-md font-semibold mb-2">Type: {circle.type}</p>
                <p className="text-sm font-semibold">Total Drivers: {circle.drivers.length}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
