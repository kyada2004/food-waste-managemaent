import React, { useEffect, useState } from "react";

const DonerRegFood = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const storedRequests = JSON.parse(localStorage.getItem("foodRequests")) || [];
    setRequests(storedRequests);
  }, []);

  const deleteRequest = (index) => {
    const updatedRequests = requests.filter((_, i) => i !== index);
    setRequests(updatedRequests);
    localStorage.setItem("foodRequests", JSON.stringify(updatedRequests));
  };

  return (
    <div className="bg-gradient-to-r from-pink-300 to-purple-400 h-full overflow-auto">
      <div className="w-full p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Submitted Requests</h1>
        
        {requests.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                {Object.keys(requests[0] || {}).map((key) => (
                  <th
                    className="border border-gray-300 px-4 py-2 text-left"
                    key={key}
                  >
                    {key.charAt(0).toUpperCase() +
                      key.slice(1).replace(/([A-Z])/g, " $1")}
                  </th>
                ))}
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request, index) => (
                <tr key={index}>
                  {Object.values(request).map((value, i) => (
                    <td className="border border-gray-300 px-4 py-2" key={i}>
                      {value}
                    </td>
                  ))}
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => deleteRequest(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500">No requests available.</p>
        )}
      </div>
    </div>
  );
};

export default DonerRegFood;
