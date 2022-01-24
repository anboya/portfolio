import React from "react";
import { Root, VerticalFlex } from "../../Common/Base/Base";
import SubFooter from "../SubFooter/SubFooter";
import motionbgd from "../../../assets/image/motionbgd.png";
export default function Logo_D() {
  return (
    <Root>
      <VerticalFlex style={{ backgroundColor: "#000000" }}>
        <div style={{ width: "100%", position: "relative" }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "contain",
            }}
            src={motionbgd}
          ></img>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
              backgroundColor: "rgba(82, 82, 82, 0.54)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              width: "100%",
              textAlign: "center",
              fontWeight: 700,
              fontSize: 40,
              zIndex: 10,
              color: "#FFFFFF",
            }}
          >
            Popcorn Movie Review
          </div>
        </div>
        <SubFooter number={3}></SubFooter>
      </VerticalFlex>
    </Root>
  );
}
