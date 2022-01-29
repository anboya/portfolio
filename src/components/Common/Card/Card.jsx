import React from "react";
import { VerticalFlex } from "../Base/Base";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import toolImg from "../../../assets/icon/tool.png";
export default function Card(props) {
  return (
    <VerticalFlex
      style={{
        width: 170,
        height: 167,
        background: "#F4F4F4",
        border: "1px solid #DBDBDB",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "3px",
        paddingTop: 34,
        justifyContent: "stretch",
        margin: "auto 50px",
      }}
    >
      {props.icon === "User" ? (
        <PersonOutlineIcon fontSize="large" style={{ width: 50, height: 50 }} />
      ) : props.icon === "Time" ? (
        <AccessTimeIcon fontSize="large" style={{ width: 50, height: 50 }} />
      ) : (
        <img
          alt=""
          src={toolImg}
          style={{ width: 50, height: 50, display: "block" }}
        />
      )}
      <div
        style={{
          fontWeight: 700,
          fontSize: 18,
          marginTop: 15,
          textAlign: "center",
        }}
      >
        {props.title}
      </div>
    </VerticalFlex>
  );
}
