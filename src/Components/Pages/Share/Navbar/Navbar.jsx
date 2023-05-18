import React, { useContext, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("");
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then().catch();
  };
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  onClick={() => setActiveNav("/")}
                  className={
                    activeNav === "/" ? "font-bold  text-primary" : "font-bold"
                  }
                >
                  HOME{" "}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setActiveNav("/allToys")}
                  className={
                    activeNav === "/allToys"
                      ? "font-bold  text-primary"
                      : "font-bold"
                  }
                >
                  All Toys
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setActiveNav("/myToys")}
                  className={
                    activeNav === "/myToys"
                      ? "font-bold  text-primary"
                      : "font-bold"
                  }
                >
                  My Toys
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setActiveNav("/addAToy")}
                  className={
                    activeNav === "/addAToy"
                      ? "font-bold  text-primary"
                      : "font-bold"
                  }
                >
                  Add A Toy
                </Link>
              </li>
              <li tabIndex={0}>
                <Link
                  onClick={() => setActiveNav("/blog")}
                  className={
                    activeNav === "/blog"
                      ? "font-bold  text-primary"
                      : "font-bold justify-between "
                  }
                >
                  BLOG
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2">
                  <li>
                    <Link>Submenu 1</Link>
                  </li>
                  <li>
                    <Link>Submenu 2</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link>Item 3</Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl font-extrabold ">
            {" "}
            <span className="text-indigo-600"> KIDDOS</span>{" "}
            <span className="text-red-500"> TOY</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                onClick={() => setActiveNav("/")}
                className={
                  activeNav === "/" ? "font-bold  text-primary" : "font-bold"
                }
              >
                HOME{" "}
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setActiveNav("/llToys")}
                className={
                  activeNav === "/allToys"
                    ? "font-bold  text-primary"
                    : "font-bold"
                }
              >
                All Toys
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setActiveNav("/myToys")}
                className={
                  activeNav === "/myToys"
                    ? "font-bold  text-primary"
                    : "font-bold"
                }
              >
                My Toys
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setActiveNav("/addAToy")}
                className={
                  activeNav === "/addAToy"
                    ? "font-bold  text-primary"
                    : "font-bold"
                }
              >
                Add A Toy
              </Link>
            </li>

            <li tabIndex={0}>
              <Link
                to="/blog"
                onClick={() => setActiveNav("/blog")}
                className={
                  activeNav === "/blog"
                    ? "font-bold  text-primary"
                    : "font-bold justify-between "
                }
              >
                BLOG
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          {/* <p className="font-bold mx-3"> {user?.email} </p> */}

          {user ? (
            <>
              <div>
                <div className="avatar online">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              </div>
              <button
                className="btn btn-sm bg-blue-600 mx-3"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </>
          ) : (
            <Link className="btn btn-sm bg-blue-600">
              {" "}
              <Link to="/login">Login</Link>{" "}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
