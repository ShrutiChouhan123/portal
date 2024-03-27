import React from "react";
import Navigation from "./Navigation";

const people = [
  {
    title: "",
    role: "",
    email: "",
  },
];
const Daily_Status = () => {
  return (
    <div>
      <Navigation />
      <div className="max-w-8xl mt-8">
        <div className="flex justify-center">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-3/4">
            <div className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 ">
              All Status
            </div>
            <hr className="border-t-2 border-gray-200" />
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 ">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 ">
                    Status Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 ">
                    In-Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 ">
                    Out-Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 ">
                    Total Hours
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 ">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {people.map((person) => (
                  <>
                    <tr key={person.email} className="hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-xs text-gray-500">
                              {person.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">
                          {person.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          {person.department}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.role}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.role}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.role}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
                          type="button"
                        >
                          Show
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daily_Status;
