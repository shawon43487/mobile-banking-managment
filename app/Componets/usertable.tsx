import React from "react";

const UserTable = ({ users }) => {
  return (
    <table className="min-w-full table-auto">
      <thead className="justify-between">
        <tr className="bg-gray-800">
          <th className="px-16 py-2">
            <span className="text-gray-300">Admin Name</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-300">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {users.map((admin, index) => (
          <tr key={index} className="bg-white border-4 border-gray-200">
            <td className="px-16 py-2">
              <span className="text-center ml-2 font-semibold">
                {admin.name}
              </span>
            </td>
            <td className="px-16 py-2 flex justify-around">
              <button className="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                Show Details
              </button>
              <button className="bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-green-500 hover:text-black ">
                Update
              </button>
              <button className="bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-red-500 hover:text-black ">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
