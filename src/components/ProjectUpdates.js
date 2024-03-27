import React from "react";
import Navigation from "./Navigation";

const people = [
  {
    project: "",
    date: "",
    actions: "",
  },
];
const ProjectUpdates = () => {
  return (
    <div>
      <Navigation />
      <div className="max-w-8xl mt-8">
        <div className="flex justify-center">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-3/4">
            <div className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              All Projects
            </div>
            <hr className="border-t-2 border-gray-200" />
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Project
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Due Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectUpdates;
