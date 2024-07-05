import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./style.css";

export const About = () => {
  return (
    <div className="wrapper">
      <div className="card">
        <Link to={"/about"}>
          <p>User</p>
        </Link>
        <Link to={"/about/info"}>
          <p>Info</p>
        </Link>
        <Link to={"/about/blog"}>
          <p>Blog</p>
        </Link>
      </div>
      <div className="card">
        <Outlet />
      </div>
    </div>
  );
};
