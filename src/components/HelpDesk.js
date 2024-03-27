import React from "react";
import Navigation from "./Navigation";

const people = [
  {
   
  },
];
const HelpDesk = () => {
  return (
    <div>
      <Navigation />
      <div className="max-w-8xl mt-8">
        <div className="flex justify-center">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-3/4">
            <div className="px-6 py-3 bg-gray-100 text-left text-2xl font-medium text-gray-500 mt-4 ">
              HR Help Desk
            </div>
            <hr className="border-t-2 border-gray-200" />
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 ">
                    Query Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 ">
                    TAT to respond
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 ">
                    TAT for closure
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 ">
                    1st Escalation Point
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 ">
                    2nd Escalation Point
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

export default HelpDesk;
