import React from "react";
import Navigation from "./Navigation";

const people = [
  {
    title: "",
    role: "",
    email: "",
  },
];
const Holiday = () => {
  return (
    <div>
      <Navigation />
      <div className="max-w-8xl mt-8">
        <div className="flex justify-center">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-3/4 ">
            <div className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Holiday Calendar 2024
            </div>
            <hr className="border-t-2 border-gray-200" />
            <table className="min-w-full h-96">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Occasion
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Day
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mt-8">
      <div className="flex justify-center">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-3/4 ">
          <div className="px-6 py-3 bg-gray-100 text-left text-xl font-medium text-gray-500  tracking-wider">
          Note
          <ul className="ml-3 mt-2">
          <li>1. For the year 2024, There would be 1 optional holiday that can be used only on any of the festival day.</li>
          <li>2. Need to apply 15 days prior.</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Holiday;
