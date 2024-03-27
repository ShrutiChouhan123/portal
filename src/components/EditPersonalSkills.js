import React from "react";
import Navigation from "./Navigation";

const EditPersonalSkill = () => {
  return (
    <div>
      <Navigation />
      <div className="max-w-5xl mt-8 container mx-auto ">
        <div className="flex justify-center ">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-3/4">
            <div className="px-6 py-3 bg-gray-100 text-left text-2xl font-medium text-gray-500 tracking-wider">
              Personal Information
            </div>
            <hr className="border-t-2 border-gray-200" />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <form
                className="space-y-6 md:flex md:flex-wrap md:justify-between"
                action="#"
              >
                <div className="flex flex-col mb-6 md:w-1/2 md:pr-3 mt-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Father Name
                  </label>
                  <div>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      autoComplete="email"
                      required
                      className="block w-full h-12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="flex flex-col mb-6 md:w-1/2 md:pl-3">
                  <label
                    htmlFor="fname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Mother Name
                  </label>
                  <div>
                    <input
                      id="fname"
                      name="fname"
                      type="text"
                      autoComplete="current-fname"
                      required
                      className="block w-full h-12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="flex flex-col mb-6 md:w-1/2 md:pr-3 mt-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Personal email
                  </label>
                  <div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full h-12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="flex flex-col mb-6 md:w-1/2 md:pl-3">
                  <label
                    htmlFor="fname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Blood group
                  </label>
                  <div>
                    <select className="block w-full h-12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      <option>O+</option>
                      <option>A+</option>
                      <option>B+</option>
                      <option>AB</option>
                      <option>B+</option>
                      <option>AB+</option>
                    </select>
                  </div>
                </div>

								<div className="flex flex-col mb-6 md:w-1/2 md:pr-3 mt-6">
								<label
									htmlFor="email"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
								Personal contact
								</label>
								<div>
									<input
										id="email"
										name="email"
										type="number"
										autoComplete="email"
										required
										className="block w-full h-12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="flex flex-col mb-6 md:w-1/2 md:pl-3">
								<label
									htmlFor="fname"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
								Emergency contact
								</label>
								<div>
									<input
										id="fname"
										name="fname"
										type="number"
										autoComplete="current-fname"
										required
										className="block w-full h-12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="flex flex-col mb-6 md:w-1/2 md:pr-3 mt-6">
								<label
									htmlFor="email"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
								Date of birth
								</label>
								<div>
									<input
										id="email"
										name="email"
										type="date"
										autoComplete="email"
										required
										className="block w-full h-12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="flex flex-col mb-6 md:w-1/2 md:pl-3">
								<label
									htmlFor="fname"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
								Birthday
								</label>
								<div>
									<input
										id="fname"
										name="fname"
										type="date"
										autoComplete="current-fname"
										required
										className="block w-full h-12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<label
							className="block text-sm font-medium  text-gray-900"
						>
						Permanent address
						</label>
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="block h-12 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>

							<div className="w-full max-w-xs gap-10 flex">
							<div>
								<button
									type="submit"
									className="flex bg-green-500 w-24 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Update
								</button>
							</div>
							<div>
								<button
									type="submit"
									className="flex w-24 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
								Back
								</button>
							</div>
						</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPersonalSkill;
