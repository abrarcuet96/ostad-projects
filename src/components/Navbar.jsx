import { Link, NavLink } from "react-router-dom";
import userStore from "../store/user.store";

const Navbar = () => {
  const { logoutRequest } = userStore();
  const userToken = localStorage.getItem("user-token");
  const handleLogout = async () => {
    console.log("Inside Logout Func");
    await logoutRequest();
  };
  const navLink = (
    <>
      <NavLink
        to="/"
        className={(link) =>
          link.isActive
            ? "text-white px-2 py-1 mr-2 bg-pink-600 rounded-md hover:bg-pink-800"
            : "text-white px-2 py-1 mr-2 bg-pink-400 rounded-md hover:bg-pink-800"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={(link) =>
          link.isActive
            ? "text-white px-2 py-1 mr-2 bg-pink-600 rounded-md hover:bg-pink-800"
            : "text-white px-2 py-1 mr-2 bg-pink-400 rounded-md hover:bg-pink-800"
        }
      >
        About Us
      </NavLink>
      <NavLink
        to="/blog/1"
        className={(link) =>
          link.isActive
            ? "text-white px-2 py-1 mr-2 bg-pink-600 rounded-md hover:bg-pink-800"
            : "text-white px-2 py-1 mr-2 bg-pink-400 rounded-md hover:bg-slate-800"
        }
      >
        Blog
      </NavLink>
      <NavLink
        to="/contact"
        className={(link) =>
          link.isActive
            ? "text-white px-2 py-1 mr-2 bg-pink-600 rounded-md hover:bg-pink-800"
            : "text-white px-2 py-1 mr-2 bg-pink-400 rounded-md hover:bg-pink-800"
        }
      >
        Contact
      </NavLink>
      <NavLink
        to="/portfolio"
        className={(link) =>
          link.isActive
            ? "text-white px-2 py-1 mr-2 bg-pink-600 rounded-md hover:bg-pink-800"
            : "text-white px-2 py-1 mr-2 bg-pink-400 rounded-md hover:bg-pink-800"
        }
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/service"
        className={(link) =>
          link.isActive
            ? "text-white px-2 py-1 mr-2 bg-pink-600 rounded-md hover:bg-pink-800"
            : "text-white px-2 py-1 mr-2 bg-pink-400 rounded-md hover:bg-pink-800"
        }
      >
        Service
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-pink-200 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-400 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        {userToken ? (
          <Link to="/">
            <button
              onClick={handleLogout}
              className="px-2 py-1 bg-pink-600 hover:bg-pink-800 rounded-md text-white cursor-pointer"
            >
              Logout
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="px-2 py-1 bg-pink-600 hover:bg-pink-800 rounded-md text-white cursor-pointer">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
