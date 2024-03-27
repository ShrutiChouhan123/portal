import React from "react";
import Navigation from "./Navigation";

const SendDailyStatus = () => {
  return (
    <div>
      <Navigation />
      <div className="max-w-8xl mt-8">
        <div className="flex justify-center">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-3/4">
            <div className="">
              <div className="px-6 py-3 bg-gray-100 text-left text-2xl  justify-center bg-gray-100 p-4">
                Send Daily Status Update
              </div>
              <hr></hr>
              <p className="mt-5 ml-5 text-2xl font-bold text-left">
                Do you want change your availability?
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 ml-5 mt-3 h-64">
              <div>
                <label for="to" class="block">
                  To
                </label>
                <input
                  class="shadow appearance-none border rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full sm:w-auto"
                  id="to"
                  type="email"
                />
              </div>

              <div>
                <p class="block">CC</p>
                <p class="block">status@bestpeers.com</p>
              </div>

              <div>
                <label for="from" class="block">
                  Status Date
                </label>
                <input
                  class="shadow appearance-none border rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full sm:w-auto"
                  type="date"
                  id="datePicker"
                />
              </div>
            </div>

            <hr></hr>

            <div class="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 ml-5 mt-3 h-80 border border-gray 300">
              <div>
                <p className="ml-1 text-2xl  text-left">
                  ADD YOUR TASK DETAILS
                </p>

                <div class="inline-flex flex-wrap gap-4 sm:gap-10 mt-3">
                  <div class="w-full sm:w-auto">
                    <label for="project" class="block">
                      Project
                    </label>
                    <select
                      class="w-full appearance-none bg-white border border-gray-300 rounded-md py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
                      id="project"
                    >
                      <option value="Selected Project">Selected Project</option>
                      <option value="option3">None</option>
                    </select>
                  </div>

                  <div class="w-full sm:w-auto">
                    <label for="workingHours" class="block">
                      Working Hours
                    </label>
                    <input
                      type="text"
                      value="00:00"
                      class="w-full appearance-none bg-white border border-gray-300 rounded-md py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
                      id="workingHours"
                    />
                  </div>

                  <div class="w-full sm:w-auto">
                    <label for="status" class="block">
                      Status
                    </label>
                    <select
                      class="w-full appearance-none bg-white border border-gray-300 rounded-md py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
                      id="status"
                    >
                      <option value="Selected Status">Selected Status</option>
                      <option value="option2">In Processing</option>
                      <option value="option3">Done</option>
                      <option value="option3">Testing</option>
                      <option value="option3">Deployed</option>
                    </select>
                  </div>
                </div>

                <div class="bg-white rounded-lg shadow-md p-6">
                  <input
                    type="text"
                    class="w-full min-h-32  border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
              </div>
            </div>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline ml-5 mt-3"
              type="button"
            >
              Add More Skills
            </button>
            <hr className="mt-3"></hr>
            <div class="flex justify-center  md:items-center">
              <div>
                <button
                  class="bg-orange-300 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline ml-5 mt-3"
                  type="button"
                >
                  Save To Draft
                </button>
              </div>
              <div>
                <button
                  class="bg-green-400 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline ml-5 mt-3"
                  type="button"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendDailyStatus;
