import React from "react";
import {
  Root,
  VerticalFlex,
  HorizontalFlex,
  SubText,
  MyButton,
} from "../../Common/Base/Base";
import SubFooter from "../SubFooter/SubFooter";
import logobgd from "../../../assets/image/logobgd.png";
import Card from "../../Common/Card/Card";
import bigbowl1 from "../../../assets/image/bigbowl1.png";
import bigbowl2 from "../../../assets/image/bigbowl2.png";
import bigbowl3 from "../../../assets/image/bigbowl3.png";
export default function Logo_D() {
  return (
    <Root>
      <VerticalFlex>
        <div style={{ width: "100%", position: "relative" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "contain",
            }}
            src={logobgd}
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
            Big Bowl
          </div>
        </div>
      </VerticalFlex>
      <VerticalFlex>
        <HorizontalFlex style={{ marginTop: 63 }}>
          <Card icon={"User"} title="Logo design" />
          <Card icon={"Time"} title="1 week" />
          <Card icon={"Tool"} title="Illustrator Photoshop" />
        </HorizontalFlex>
        <SubText
          style={{
            marginTop: 100,
          }}
        >
          When I was an intern, I was very glad to have the opportunity to be a
          part of the team in "Big bowl" brand upgrade project. "Big bowl" is a
          Chinese fast-food company that established since 1992. Our client
          wanted the brand to have both historical sense and modern design
          elements. Therefore, I combined a shape of bowl with Chinese
          traditional stamp artistic effect.
        </SubText>
        <MyButton
          target="_blank"
          href="https://drive.google.com/file/d/1TMeBu4EJciO8Q1hU3XBHGTiQxgBxo3_I/view?usp=sharing"
          style={{ margin: "80px 0" }}
        >
          Learn more
        </MyButton>
        <img
          alt=""
          style={{ display: "block", width: 1150, height: 704 }}
          src={bigbowl1}
        ></img>
        <img
          alt=""
          style={{ display: "block", width: 968, height: 483 }}
          src={bigbowl2}
        ></img>
        <img
          alt=""
          style={{
            display: "block",
            width: 1216,
            height: 729,
            marginBottom: 200,
          }}
          src={bigbowl3}
        ></img>
        <SubFooter number={2}></SubFooter>
      </VerticalFlex>
    </Root>
  );
}
