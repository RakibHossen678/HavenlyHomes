import {  useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/Authprovider";
import toast from "react-hot-toast";
const Navbar = () => {
  const { user , logOut } = useContext(AuthContext);

  const handleLogOut=()=>{
    logOut()
    .then(result=>{
      toast.success('user Logged out successfully')
      console.log(result.user)
    })
    .catch(error=>{
      console.log(error)
    })
    
  }
 
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#00BCD4] border-[#00BCD4] border-2 px-2 py-1 rounded-lg"
              : "font bold"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "text-[#00BCD4] border-[#00BCD4] border-2 px-2 py-1 rounded-lg"
              : "font bold"
          }
        >
          Update Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "text-[#00BCD4] border-[#00BCD4] border-2 px-2 py-1 rounded-lg"
              : "font bold"
          }
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive
              ? "text-[#00BCD4] border-[#00BCD4] border-2 px-2 py-1 rounded-lg"
              : "font bold"
          }
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#00BCD4] border-[#00BCD4] border-2 px-2 py-1 rounded-lg"
              : "font bold"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="mt-3 z-50 ">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className=" lg:text-3xl text-xl bg-gradient-to-r from-[#00BCD4] via-blue-500 to-green-400 text-transparent bg-clip-text z-10 animate-gradient bg-300% font-semibold py-2"data-aos="zoom-in" data-aos-duration="2000"
          >
            HavenlyHomes
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-7 menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-3">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL || 
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT_7Nr1EC397vWcF9rTCB5DVERMFhc1LewgmbF2yyVHj1tTz4m5XGnCfX8O72BlNQ2aiA&usqp=CAU"} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[10] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40"
                >
                  <li>
                    <a className="">{user?.displayName}</a>
                  </li>
                </ul>
              </div>
              <button
              onClick={handleLogOut}
                type="submit"
                className="bg-[#00BCD4] text-white px-4 rounded-xl py-2"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-[#00BCD4] text-white px-4 rounded-xl py-2"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
