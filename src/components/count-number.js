import React from "react"
const CountNumber = ({ value, label }) => (
  <div className="text-center text-white font-body mx-2 text-md sm:text-lg">
    <p className="mb-0 text-red-500">{value}</p>
    <p className="mb-0">{label}</p>
  </div>
);

export default CountNumber;