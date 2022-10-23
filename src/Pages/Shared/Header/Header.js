import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthProvider";
const Header = () => {
  const { User, LogOut } = useContext(AuthContext);
  // agei destructre kore AuthInfo theke user ta ke ber kore nilam
  const HandleLogout = () => {
    LogOut()
      .then(() => {
        alert("Sign-out successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="mb-5">
      <div className="navbar bg-slate-700 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            Kora News
          </Link>
        </div>
        <div className="navbar-end">
          {User?.uid ? (
            <div className="flex flex-col">
              <p className="text-lg mr-3">{User.displayName}</p>
              <button onClick={HandleLogout} className="btn btn-ghost">
                Log Out
              </button>
            </div>
          ) : (
            <>
              <button className="btn btn-ghost">
                <Link to={"/login"}>Login</Link>
              </button>
              <button className="btn btn-ghost">
                <Link to={"/register"}>Register</Link>
              </button>
            </>
          )}
          <div>
            <Link to={"/profile"}>
              {User?.photoURL ? (
                <img src={User.photoURL} alt="" className="w-14 rounded-full" />
              ) : (
                <FaUserAlt />
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
