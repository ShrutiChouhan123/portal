import React, { useState } from "react";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [initialStateData, setInitialState] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInitialState({
      ...initialStateData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!initialStateData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(initialStateData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!initialStateData.password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", initialStateData);
    } else {
      console.log("Form validation failed.");
    }
    setInitialState({
        email:'',
        password:''
    })
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ5mTXI5oNeNrpQKbliRvD2LfU0T5HhDSM8ipJzMJkM9FTY4-P5Dh5nfVYLA&s"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#"  onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                 value={initialStateData.email}
                  onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />

              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={initialStateData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
