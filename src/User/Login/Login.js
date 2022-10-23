import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { Login } = useContext(AuthContext);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const HandleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    Login(email, password)
      .then(() => {
        console.log("Login Successful");
        form.reset();
        setError("");
        navigate(from, { replace: true });
        // navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="flex justify-center">
      <div className="w-1/2">
        <form
          className=" shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={HandleForm}
        >
          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="hasan@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-red-700 text-xl">{error}</p>
      </div>
    </div>
  );
};

export default Login;
