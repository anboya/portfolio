import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import UX_Pet from "../../../assets/image/submenuimg1.png";
import UX_Logo from "../../../assets/image/submenuimg2.png";
import UX_Motion from "../../../assets/image/submenuimg3.png";
import UX_Video from "../../../assets/image/submenuimg4.png";
import { NavLink } from "react-router-dom";
import ReactHover, { Trigger, Hover } from "react-hover";
import {
  MainTitle,
  VerticalFlex,
  HorizontalFlex,
  Root,
  Mask,
} from "../../Common/Base/Base";

const optionsCursorTrueWithMargin = {
  followCursor: false,
  shiftX: 0,
  shiftY: 0,
};
export function WorkCard(props) {
  const { title1, title2, detail, img, backgroundColor } = props;
  return (
    <Card
      variant="outlined"
      sx={{
        width: 260,
        backgroundColor: { backgroundColor },
        border: "none",
        margin: 0,
        padding: 0,
        borderRadius: "0 0 10px 10px",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 12, fontWeight: 300 }}
          color="text.secondary"
          gutterBottom
        >
          {title1}
        </Typography>
        <Typography
          style={{ marginTop: 5 }}
          sx={{ fontSize: 20, fontWeight: 700 }}
          component="div"
        >
          {title2}
        </Typography>
        <Typography
          style={{ marginTop: 13 }}
          sx={{ fontSize: 14, lineHeight: "150%" }}
        >
          {detail}
        </Typography>
      </CardContent>
      <img style={{ width: 260, display: "block" }} src={img}></img>
    </Card>
  );
}
export default function SubFooter(props) {
  return (
    <div style={{ backgroundColor: "#EBEBEB", width: "100%" }}>
      <VerticalFlex>
        <MainTitle style={{ marginTop: 50, marginBottom: 50 }}>
          Other Projects
        </MainTitle>
        <HorizontalFlex style={{ marginBottom: 50 }}>
          {props.number === 1 ? null : (
            <div style={{ position: "relative", margin: "0 20px" }}>
              <ReactHover options={optionsCursorTrueWithMargin}>
                <Trigger type="trigger">
                  <WorkCard
                    hidden
                    title1="01 - UX DESIGN"
                    title2="Pet Food Delivery App"
                    detail=" A mobile app allows users to schedule products delivery time."
                    img={UX_Pet}
                    backgroundColor="FFFFFF"
                  />
                </Trigger>
                <Hover type="hover">
                  <NavLink to="/work/logo">
                    <Mask></Mask>
                  </NavLink>
                </Hover>
              </ReactHover>
            </div>
          )}
          {props.number === 2 ? null : (
            <div style={{ position: "relative", margin: "0 20px" }}>
              <ReactHover options={optionsCursorTrueWithMargin}>
                <Trigger type="trigger">
                  <WorkCard
                    hidden
                    title1="02 - LOGO DESIGN"
                    title2="Big Bowl"
                    detail=" A brand upgrade project for a local fast-food restaurant."
                    img={UX_Logo}
                    backgroundColor="FFFFFF"
                  />
                </Trigger>
                <Hover type="hover">
                  <NavLink to="/work/logo">
                    <Mask></Mask>
                  </NavLink>
                </Hover>
              </ReactHover>
            </div>
          )}
          {props.number === 3 ? null : (
            <div style={{ position: "relative", margin: "0 20px" }}>
              <ReactHover options={optionsCursorTrueWithMargin}>
                <Trigger type="trigger">
                  <WorkCard
                    title1="03 - MOTION GRAPHICS DESIGN"
                    title2="Popcorn Movie Review"
                    detail="An opening title designed for Student TV (conceptual)."
                    img={UX_Motion}
                    backgroundColor="FFFFFF"
                  />
                </Trigger>
                <Hover type="hover">
                  <NavLink to="/work/motion">
                    <Mask></Mask>
                  </NavLink>
                </Hover>
              </ReactHover>
            </div>
          )}
          {props.number === 4 ? null : (
            <div style={{ position: "relative", margin: "0 20px" }}>
              <ReactHover options={optionsCursorTrueWithMargin}>
                <Trigger type="trigger">
                  <WorkCard
                    title1="04 - VEDIO EDITING"
                    title2="Daydreamer"
                    detail="A seven-minute short film that tells the psychological journey of a girl."
                    img={UX_Video}
                    backgroundColor="FFFFFF"
                  />
                </Trigger>
                <Hover type="hover">
                  <NavLink to="/work/video">
                    <Mask></Mask>
                  </NavLink>
                </Hover>
              </ReactHover>
            </div>
          )}
        </HorizontalFlex>
      </VerticalFlex>
    </div>
  );
}
