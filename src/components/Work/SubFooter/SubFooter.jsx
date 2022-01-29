import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import UX_Pet from "../../../assets/image/submenuimg1.png";
import UX_Logo from "../../../assets/image/submenuimg2.png";
import UX_Motion from "../../../assets/image/submenuimg3.png";
import UX_Video from "../../../assets/image/submenuimg4.png";
import { NavLink } from "react-router-dom";

import {
  MainTitle,
  VerticalFlex,
  HorizontalFlex,
  HoverDiv,
} from "../../Common/Base/Base";

export function WorkCard(props) {
  const { title1, title2, detail, img, backgroundColor } = props;
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 260,
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
          sx={{ fontSize: 12, fontWeight: 400 }}
          color="text.secondary"
          gutterBottom
        >
          {title1}
        </Typography>
        <Typography
          style={{ marginTop: 5 }}
          sx={{ fontSize: 18, fontWeight: 700 }}
          component="div"
        >
          {title2}
        </Typography>
        <Typography
          style={{ marginTop: 13 }}
          sx={{ fontSize: 12, lineHeight: "150%", fontWeight: 500 }}
        >
          {detail}
        </Typography>
      </CardContent>
      <img
        alt=""
        style={{ width: 260, height: 168, display: "block" }}
        src={img}
      ></img>
    </Card>
  );
}
export default function SubFooter(props) {
  return (
    <div style={{ backgroundColor: "#EBEBEB", width: "100%", height: 500 }}>
      <VerticalFlex>
        <MainTitle style={{ marginTop: 50, marginBottom: 50 }}>
          Other Projects
        </MainTitle>
        <HorizontalFlex style={{ marginBottom: 50 }}>
          {props.number === 1 ? null : (
            <HoverDiv style={{ margin: "0 20px" }}>
              <NavLink to="/work/ux">
                <WorkCard
                  hidden
                  title1="01 - UX DESIGN"
                  title2="Pet Food Delivery App"
                  detail=" A mobile app allows users to schedule products delivery time."
                  img={UX_Pet}
                  backgroundColor="FFFFFF"
                />
              </NavLink>
            </HoverDiv>
          )}
          {props.number === 2 ? null : (
            <HoverDiv style={{ margin: "0 20px" }}>
              <NavLink to="/work/logo">
                <WorkCard
                  hidden
                  title1="02 - LOGO DESIGN"
                  title2="Big Bowl"
                  detail=" A brand upgrade project for a local fast-food restaurant."
                  img={UX_Logo}
                  backgroundColor="FFFFFF"
                />
              </NavLink>
            </HoverDiv>
          )}
          {props.number === 3 ? null : (
            <HoverDiv style={{ margin: "0 20px" }}>
              <NavLink to="/work/motion">
                <WorkCard
                  title1="03 - MOTION GRAPHICS DESIGN"
                  title2="Popcorn Movie Review"
                  detail="An opening title designed for Student TV (conceptual)."
                  img={UX_Motion}
                  backgroundColor="FFFFFF"
                />
              </NavLink>
            </HoverDiv>
          )}
          {props.number === 4 ? null : (
            <HoverDiv style={{ margin: "0 20px" }}>
              <NavLink to="/work/video">
                <WorkCard
                  title1="04 - VEDIO EDITING"
                  title2="Daydreamer"
                  detail="A seven-minute short film that tells the psychological journey of a girl."
                  img={UX_Video}
                  backgroundColor="FFFFFF"
                />
              </NavLink>
            </HoverDiv>
          )}
        </HorizontalFlex>
      </VerticalFlex>
    </div>
  );
}
