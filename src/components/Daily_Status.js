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
          <div className="px-6 py-3 bg-gray-100 text-left text-3xl font-medium text-gray-500 uppercase tracking-wider">
          All Status

          </div>
          <hr className="border-t-2 border-gray-200" />
          <table className="min-w-full">
            <thead>
              <tr className="bg-black-900 border border-gray border-9  ">
                <th className="px-6 py-3 text-left text-2xl font-semibold text-white uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-2xl font-semibold text-white uppercase tracking-wider">
                Status Date
                </th>
                <th className="px-6 py-3 text-left text-2xl font-semibold text-white uppercase tracking-wider">
                  In-time
                </th>
                <th className="px-6 py-3 text-left text-2xl font-semibold text-white uppercase tracking-wider">
                Out-time
              </th>
              <th className="px-6 py-3 text-left text-2xl font-semibold text-white uppercase tracking-wider">
              Total-hours
            </th>
            <th className="px-6 py-3 text-left text-2xl font-semibold text-white uppercase tracking-wider">
            Actions
          </th>
              </tr>
            </thead>
            <tbody >
            {people.map((person) => (
              <>
                <tr key={person.email} className="">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-xl font-semibold text-white">
                          jkdjsk
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-xl font-semibold text-white">
                      ckldc
                    </div>
                   
                  </td>
                  <td className="text-xl font-semibold text-white">
                    sdklsl
                  </td>
                  <td className="text-xl font-semibold text-white">
                  sdklsl
                </td>
                <td className="text-xl font-semibold text-white">
                sdklsl
              </td>
             
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      className=" w-32 bg-white hover:bg-gray-700 hover:text-white text-black font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
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
