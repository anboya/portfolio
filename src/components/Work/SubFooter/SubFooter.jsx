import React from "react";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import UX_Pet from "../../../assets/image/submenuimg1.png";
import UX_Logo from "../../../assets/image/submenuimg2.png";
import UX_Motion from "../../../assets/image/submenuimg3.png";
import UX_Video from "../../../assets/image/submenuimg4.png";
import { NavLink } from "react-router-dom";

import {
  MainTitle,
  VerticalFlex,
  HorizontalFlex,
  Root,
} from "../../Common/Base/Base";

export function WorkCard(props) {
  const { title1, title2, detail, img, nav, backgroundColor } = props;
  return (
    <Card
      variant="outlined"
      sx={{
        width: 260,
        backgroundColor: { backgroundColor },
        border: "none",
        margin: "0 20px",
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
        <NavLink to={`/work/${nav}`}>
          <Typography
            style={{ marginTop: 5 }}
            sx={{ fontSize: 20, fontWeight: 700 }}
            component="div"
          >
            {title2}
          </Typography>
        </NavLink>
        <Typography
          style={{ marginTop: 13 }}
          sx={{ fontSize: 14, lineHeight: "150%" }}
        >
          {detail}
        </Typography>
      </CardContent>
      <NavLink to={`/work/${nav}`}>
        <img style={{ width: 260, display: "block" }} src={img}></img>
      </NavLink>
    </Card>
  );
}
export default function SubFooter(props) {
  return (
    <Root style={{ backgroundColor: "#EBEBEB" }}>
      <VerticalFlex>
        <MainTitle style={{ marginTop: 50, marginBottom: 50 }}>
          Other Projects
        </MainTitle>
        <HorizontalFlex style={{ marginBottom: 50 }}>
          {props.number === 1 ? null : (
            <WorkCard
              hidden
              title1="01 - UX DESIGN"
              title2="Pet Food Delivery App"
              detail=" A mobile app allows users to schedule products delivery time."
              img={UX_Pet}
              nav="ux"
              backgroundColor="FFFFFF"
            />
          )}
          {props.number === 2 ? null : (
            <WorkCard
              hidden
              title1="02 - LOGO DESIGN"
              title2="Big Bowl"
              detail=" A brand upgrade project for a local fast-food restaurant."
              img={UX_Logo}
              nav="logo"
              backgroundColor="FFFFFF"
            />
          )}
          {props.number === 3 ? null : (
            <WorkCard
              title1="03 - MOTION GRAPHICS DESIGN"
              title2="Popcorn Movie Review"
              detail="An opening title designed for Student TV (conceptual)."
              img={UX_Motion}
              nav="motion"
              backgroundColor="FFFFFF"
            />
          )}
          {props.number === 4 ? null : (
            <WorkCard
              title1="04 - VEDIO EDITING"
              title2="Daydreamer"
              detail="A seven-minute short film that tells the psychological journey of a girl."
              img={UX_Video}
              nav="video"
              backgroundColor="FFFFFF"
            />
          )}
        </HorizontalFlex>
      </VerticalFlex>
    </Root>
  );
}
