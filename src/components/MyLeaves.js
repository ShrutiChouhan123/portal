import React from "react";
import Navigation from "./Navigation";

const MyLeaves = () => {
  return (
    <>
      <Navigation />
      <div className="max-w-8xl mt-8 w-full">
        <div className="flex justify-center">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-3/4">
            <div className="px-6 py-3 bg-gray-100 text-left text-2xl font-medium text-gray-500 tracking-wider">
              Leave Balance
            </div>
            <hr className="border-t-2 border-gray-200" />
            <div className="max-w-9xl mt-8 inline-flex">
              <div className="flex justify-between ml-7">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-full">
                  <div className="px-6 py-3 bg-gray-100 text-left text-2xl font-medium text-gray-500 uppercase tracking-wider">
                    Alloted Balance
                  </div>

                  <hr className="border-t-2 border-gray-200" />
                  <div class="container mx-auto flex flex-wrap justify-between">
                    <div class="w-5/12 p-4">
                      <table class="w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead>
                          <tr>
                            <th class="px-4 py-2 bg-gray-200">Month </th>
                            <th class="px-4 py-2 bg-gray-200">Credit</th>
                            <th class="px-4 py-2 bg-gray-200">Leave</th>
                            <th class="px-4 py-2 bg-gray-200">Loss</th>
                            <th class="px-4 py-2 bg-gray-200">Penalty</th>
                            <th class="px-4 py-2 bg-gray-200">Compoff</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="px-4 py-2">jan</td>
                            <td class="px-4 py-2">0.0</td>
                            <td class="px-4 py-2">0.0</td>
                            <td class="px-4 py-2">0.0</td>
                            <td class="px-4 py-2">0.0</td>
                            <td class="px-4 py-2">0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-right ml-14">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <div className="px-6 py-3 bg-gray-100 text-left text-2xl font-medium text-gray-500 uppercase tracking-wider">
                    All Leaves
                  </div>

                  <hr className="border-t-2 border-gray-200" />
                  <div class="container mx-auto flex flex-wrap justify-between">
                    <div class="w-5/12 p-4">
                      <table class="w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead>
                          <tr>
                            <th class="px-4 py-2 bg-gray-200">Applied By</th>
                            <th class="px-4 py-2 bg-gray-200">Leave</th>
                            <th class="px-4 py-2 bg-gray-200">From</th>
                            <th class="px-4 py-2 bg-gray-200">To</th>
                            <th class="px-4 py-2 bg-gray-200">Reason</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="px-4 py-2">none</td>
                            <td class="px-4 py-2">none</td>
                            <td class="px-4 py-2">none</td>
                            <td class="px-4 py-2">none</td>
                            <td class="px-4 py-2">none</td>
                            <td class="px-4 py-2">
                              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline">
                                Approved
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyLeaves;
