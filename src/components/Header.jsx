import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { MyContext } from "../AuthContext";
import { CgProfile } from "react-icons/cg";
import toast from "react-hot-toast";
import { useState } from "react";
const Header = () => {
  // localStorage.setItem('themes', 'lit')
  const { user, Logout } = useContext(MyContext);
  const [mode, setmode] = useState(localStorage.getItem("themes"));
  const darkMode = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      localStorage.setItem("themes", "dark");
    } else {
      localStorage.setItem("themes", "light");
    }
    if (document.querySelector("html").classList.value.includes("light")) {
      document.querySelector("html").classList.remove("light");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
    const getMode = localStorage.getItem("themes");
    setmode(getMode);
  };
  document.querySelector("html").classList.add(mode);
  const BtnToggle =
    mode === "dark" ? (
      <input type="checkbox" className="toggle" onClick={darkMode} checked />
    ) : (
      <input type="checkbox" className="toggle" onClick={darkMode} />
    );
    console.log();
  const links = (
    <>
      <li>
        <NavLink to="/" className="font-medium hover:!text-[#687EFF]">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/AddProduct" className="font-medium hover:!text-[#687EFF]">
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink to="/MyCart" className="font-medium hover:!text-[#687EFF]">
          My Cart
        </NavLink>
      </li>
    </>
  );
  const handleLogout = () => {
    Logout()
      .then(() => toast.success("Logout Successfully"))
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar dark:text-white container mx-auto">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <button className="lg:hidden inline-block text-end">
              {BtnToggle}
            </button>
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-3xl font-Allura text-[#687EFF]"
        >
          Tech-Shop
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user.photoURL ? (
                  <img src={user.photoURL} />
                ) : (
                  <div className="flex justify-center items-center h-full">
                    <CgProfile className="text-2xl"></CgProfile>
                  </div>
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-slate-800 rounded-box w-52"
            >
              <li className="dark:hover:bg-slate-700 dark:rounded-lg">
                <a className="justify-between">{user?.displayName}</a>
              </li>
              <li
                className="dark:hover:bg-slate-700 dark:rounded-lg"
                onClick={handleLogout}
              >
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn hover:text-white bg-[#687EFF] border-none text-white hover:bg-[#687EFF]"
          >
            Login
          </Link>
        )}
        <button className="lg:inline-block hidden lg:pl-4 pl-0">
          {BtnToggle}
        </button>
      </div>
    </div>
  );
};

export default Header;
