import React from "react";
import {
  Root,
  VerticalFlex,
  HorizontalFlex,
  SubTitle,
  SubText,
  MainTitle,
  HoverSpan,
} from "../Common/Base/Base";
import { NavLink } from "react-router-dom";
import avatar from "../../assets/image/avatar.png";
import lamp from "../../assets/image/lamp.png";
import more1 from "../../assets/image/more1.png";
import more2 from "../../assets/image/more2.png";
import more3 from "../../assets/image/more3.png";
export default function About() {
  return (
    <Root>
      <VerticalFlex>
        <HorizontalFlex style={{ marginTop: 100 }}>
          <img
            alt=""
            style={{
              display: "block",
              width: 282,
              height: 346,
              marginRight: 180,
            }}
            src={avatar}
          ></img>
          <VerticalFlex
            style={{ width: 400, alignItems: "normal", marginLeft: 50 }}
          >
            <MainTitle style={{ marginTop: 0, textAlign: "left" }}>
              Nice to meet you! I’m Boya.
            </MainTitle>
            <SubText
              style={{
                width: 400,
                textAlign: "left",
                fontWeight: 500,
                fontSize: 16,
                marginTop: 30,
              }}
            >
              I am a UX designer and currently live in Melbourne. As a life-long
              learner of design, I enjoy finding and solving problems through
              the design process. I believe that good design can reach a perfect
              balance between aesthetics and utility.
            </SubText>
            <SubTitle
              style={{ marginTop: 50, textAlign: "left", marginBottom: 10 }}
            >
              Contact me at:
            </SubTitle>
            <a href="mailto:an.boya01@gmail.com">
              <HoverSpan
                style={{ color: "#E9168C", fontWeight: 500, fontSize: 18 }}
              >
                an.boya01@gmail.com
              </HoverSpan>
            </a>
            <div style={{ color: "#E9168C", fontWeight: 500, fontSize: 18 }}>
              0416 971 392
            </div>
          </VerticalFlex>
        </HorizontalFlex>
        <HorizontalFlex style={{ marginTop: 150 }}>
          <VerticalFlex style={{ width: 390, marginRight: 120 }}>
            <div style={{ fontSize: 24, fontWeight: 700, width: 390 }}>
              It all started with a LAMP
            </div>
            <div
              style={{
                width: 390,
                fontSize: 16,
                fontWeight: 500,
                marginTop: 30,
              }}
            >
              My interest in user experience design initially comes from my
              teaching experience at a special school. Students in the class
              suffered from disabilities and many of them cannot communicate
              with others verbally, while a speech-generating device,{" "}
              <a target="_blank" rel="noreferrer" href="https://lampwflapp.com">
                <HoverSpan
                  style={{ color: "#E9168C", fontWeight: 700, fontSize: 16 }}
                >
                  LAMP (Language Acquisition through Motor Planning)
                </HoverSpan>
              </a>{" "}
              can help these students to express themselves. I was amazed by the
              great user experience design in this device and the immeasurable
              and positive impact it brings to people’s life. I wish that I
              could be part of the design that helps and empowers others. After
              that, I started to work as a UX design intern while doing
              self-paced study online. During that time, I finished my first
              user experience design project, a{" "}
              <NavLink to="/work/ux">
                <HoverSpan
                  style={{ color: "#E9168C", fontWeight: 700, fontSize: 16 }}
                >
                  pet food delivery app
                </HoverSpan>
              </NavLink>
              .
            </div>
          </VerticalFlex>
          <img
            alt=""
            style={{
              display: "block",
              width: 400,
              height: 557,
            }}
            src={lamp}
          ></img>
        </HorizontalFlex>
        <MainTitle>More about me</MainTitle>
        <div
          style={{
            fontWeight: 500,
            fontSize: 16,
            marginTop: 50,
            width: 920,
          }}
        >
          In my free time, I love doing some voluntary work related to art and
          education in the local community. I’m an animal lover and love
          drawing, I draw comics to record my life with my pets (a rabbit and a
          guinea pig). When I’m not creating, you can find me walking outdoors
          and getting more inspiration.
        </div>
        <HorizontalFlex style={{ margin: "50px 0 150px 0" }}>
          <img
            alt=""
            style={{
              display: "block",
              width: 266,
              height: 295,
            }}
            src={more1}
          ></img>
          <img
            alt=""
            style={{
              display: "block",
              width: 392,
              height: 295,
              margin: "0 12px",
            }}
            src={more2}
          ></img>
          <img
            alt=""
            style={{
              display: "block",
              width: 238,
              height: 295,
            }}
            src={more3}
          ></img>
        </HorizontalFlex>
      </VerticalFlex>
    </Root>
  );
}
