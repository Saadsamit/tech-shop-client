import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { MyContext } from "../AuthContext";
import { CgProfile } from "react-icons/cg";
import toast from "react-hot-toast";
const Header = () => {
  const { user, Logout } = useContext(MyContext);
  const links = (
    <>
      <li>
        <NavLink to="/" className="font-medium">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/AddProduct" className="font-medium">
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink to="/MyCart" className="font-medium">
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
    <div className="navbar bg-base-100 container mx-auto">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">{user?.displayName}</a>
              </li>
              <li onClick={handleLogout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn bg-[#687EFF] text-white hover:bg-[#687EFF] hover:text-black"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
