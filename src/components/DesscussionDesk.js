import React from "react";
import Navigation from "./Navigation";

const people = [
  {
    Beginner: "",
    Intermediate: "",
    Proficient: "",
  },
];
const DesscussionDesk = () => {
  return (
    <div>
      <Navigation />
      <div className="max-w-8xl mt-8">
        <div className="flex justify-center">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-3/4">
            <div className="flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                New Desscussion
              </button>
            </div>
            <div className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 mt-4 ">
              DiscussionDesk
            </div>
            <hr className="border-t-2 border-gray-200" />
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 ">
                    Topics
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 ">
                    Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 ">
                    DueDate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 ">
                    TalkWith
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 ">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 ">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {people.map((person) => (
                  <>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-xs text-gray-500"></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900"></div>
                        <div className="text-xs text-gray-500"></div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
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

export default DesscussionDesk;
