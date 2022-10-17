import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  return (
    <header className="bg-blue-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 hover:bg-blue-700 text-4xl font-bold cursive tracking-widest active:bg-grey-700"
          >
            {" "}
            Olaleye
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-red-100 bg-red-700"
            className="inflex-flex items-center py-6 px-3 text-red-200 hover:text-green-800 hover:bg-blue-700"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-red-100 bg-red-700"
            className="inflex-flex items-center py-6 px-3 text-red-200 hover:text-green-800 hover:bg-blue-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-red-100 bg-red-700"
            className="inflex-flex items-center py-6 px-3 text-red-200 hover:text-green-800 hover:bg-blue-700 "
          >
            About Me!
          </NavLink>
        </nav>
        <div className="in-line-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.linkedin.com/in/olaleye-oyewunmi-4967a5223"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/Junnygram"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://api.whatsapp.com/send/?phone=08055408100&text&type=phone_number&app_absent=0"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
