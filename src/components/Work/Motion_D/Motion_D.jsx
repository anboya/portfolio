import React from "react";
import {
  Root,
  VerticalFlex,
  HorizontalFlex,
  SubText,
  MyButton,
} from "../../Common/Base/Base";
import SubFooter from "../SubFooter/SubFooter";
import motionbgd from "../../../assets/image/motionbgd.png";
import Card from "../../Common/Card/Card";

export default function Motion_D() {
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
      </VerticalFlex>
      <VerticalFlex>
        <HorizontalFlex style={{ marginTop: 63 }}>
          <Card icon={"User"} title="Motion graphics design" />
          <Card icon={"Time"} title="2 weeks" />
          <Card
            icon={"Tool"}
            title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Illustrator&nbsp; &nbsp;&nbsp; After Effects"
          />
        </HorizontalFlex>
        <SubText
          style={{
            marginTop: 100,
          }}
        >
          Popcorn Movie Review is an opening title designed for Student TV
          (conceptual). The style is creative, pop culture and interesting
          because the target audiences are 50% male/female 18- to 30-year-old
          students and academic staff.
        </SubText>
        <MyButton
          target="_blank"
          href="https://drive.google.com/file/d/13wsUG259rwovdDWTI-XE7RZbJFLHg-jt/view?usp=sharing"
          style={{ margin: "80px 0" }}
        >
          View the storyboards
        </MyButton>

        <iframe
          style={{ marginBottom: 200 }}
          width="860"
          height="551"
          src="https://www.youtube.com/embed/QuTTTvvy6ao"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <SubFooter number={3}></SubFooter>
      </VerticalFlex>
    </Root>
  );
}
