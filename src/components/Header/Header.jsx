import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Grid } from "@mui/material";
import "./Header.css";
import web_icon from "../../assets/Logo_pink.png";
export default function Header() {
  return (
    <div style={{ display: "flex" }}>
      <NavLink to="/work" style={{ marginLeft: 100, paddingTop: 20 }}>
        <img style={{ width: 150 }} src={web_icon} alt="" />
      </NavLink>
      <div style={{ flex: 1 }}></div>
      <div
        className="links"
        style={{
          display: "flex",
          marginRight: 100,
          width: 300,
          justifyContent: "space-around",
          paddingTop: 42,
          textAlign: "center",
        }}
      >
        <NavLink to="/work">Work</NavLink>

        <NavLink to="/about">About</NavLink>

        <div>Resume</div>
      </div>
    </div>
  );
}
