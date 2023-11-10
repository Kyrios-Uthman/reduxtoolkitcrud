import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../redux/UserSlice";

const Navbar = () => {
  const allusers = useSelector((state) => state.app.users);
  const [searchData, setsearchUser] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img width={35} height={35} src="https://redux-toolkit.js.org/img/redux.svg" alt="" />

          <span className="ml-3 text-xl">ReduxToolkit</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to={"/"} className="mr-5 hover:text-gray-900 cursor-pointer">
            Create Post
          </Link>
          <Link
            to={"/read"}
            className="mr-5 hover:text-gray-900 cursor-pointer"
          >
            All Post ({allusers && allusers.length})
          </Link>
        </nav>
        <input
          type="text"
          class="border-2 border-gray-300 p-2 px-5 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Search"
          onChange={(e) => setsearchUser(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Navbar;
