import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import web_icon from "../../assets/icon/Logo_pink.gif";
import { HoverSpanNoUnderline } from "../Common/Base/Base";
export default function Header() {
  return (
    <div className="header" style={{ display: "flex" }}>
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
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        <NavLink to="/work">
          <HoverSpanNoUnderline>WORK</HoverSpanNoUnderline>
        </NavLink>
        <NavLink to="/about">
          <HoverSpanNoUnderline>ABOUT</HoverSpanNoUnderline>
        </NavLink>
        <a href="" download="Boya An.pdf">
          <HoverSpanNoUnderline>RESUME</HoverSpanNoUnderline>
        </a>
      </div>
    </div>
  );
}
