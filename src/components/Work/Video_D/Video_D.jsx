import React from "react";
import {
  Root,
  VerticalFlex,
  HorizontalFlex,
  SubText,
} from "../../Common/Base/Base";
import SubFooter from "../SubFooter/SubFooter";
import videobgd from "../../../assets/image/videobgd.png";
import Card from "../../Common/Card/Card";

export default function Video_D() {
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
            src={videobgd}
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
            Daydreamer
          </div>
        </div>
      </VerticalFlex>
      <VerticalFlex>
        <HorizontalFlex style={{ marginTop: 63 }}>
          <Card icon={"User"} title="Audio recording, video editing" />
          <Card icon={"Time"} title="4 weeks" />
          <Card icon={"Tool"} title="Final Cut Pro" />
        </HorizontalFlex>
        <SubText
          style={{
            marginTop: 100,
            marginBottom: 100,
          }}
        >
          "Daydreamer" is a group project (group of three), and my
          responsibility was audio recording and video editing. It is a
          seven-minute short film that tells the psychological journey of a girl
          who is tired of her work and life she lives and rethinking about value
          and happiness of her life.
        </SubText>
        <iframe
          style={{ marginBottom: 200 }}
          width="860"
          height="551"
          src="https://www.youtube.com/embed/gLmcYv2CyDQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <SubFooter number={4}></SubFooter>
      </VerticalFlex>
    </Root>
  );
}
