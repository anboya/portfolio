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
              width: 461,
              height: 346,
              marginRight: 60,
              borderRadius: 10,
              marginTop: 20,
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
              I am a creative, open-minded and detail-oriented UX designer in
              Melbourne. My design background has made me a life-long learner of
              design. I enjoy exploring the reasons behind things and constantly
              examining the structure through critical thinking. On the other
              hand, my teaching experience has built my resilience improved my
              communication and empathy skills. I believe that those skills make
              me a good UX designer.
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
          <VerticalFlex style={{ width: 390, marginRight: 180 }}>
            <div style={{ fontSize: 24, fontWeight: 700, width: 390 }}>
              It all started with a LAMP
            </div>
            <div
              style={{
                width: 400,
                fontSize: 16,
                fontWeight: 500,
                marginTop: 30,
              }}
            >
              My interest in user experience design initially came from my
              teaching experience at a special school. Students in the class
              suffered from disabilities, and many of them couldn't communicate
              with others verbally. At the same time, a speech-generating
              device,{" "}
              <a target="_blank" rel="noreferrer" href="https://lampwflapp.com">
                <HoverSpan
                  style={{ color: "#E9168C", fontWeight: 700, fontSize: 16 }}
                >
                  LAMP (Language Acquisition through Motor Planning)
                </HoverSpan>
              </a>{" "}
              , can help these students to express themselves. I was amazed by
              this device's excellent user experience design and its
              immeasurable and positive impact on people's lives. As a result, I
              wish I could be one of the people who made a fantastic design that
              helps and empowers others. After that, I started to work as a UX
              design intern while doing self-paced study online. During that
              time, I finished my first user experience design project,{" "}
              <NavLink to="/work/ux">
                <HoverSpan
                  style={{ color: "#E9168C", fontWeight: 700, fontSize: 16 }}
                >
                  a pet food delivery app.
                </HoverSpan>
              </NavLink>
            </div>
          </VerticalFlex>
          <VerticalFlex style={{ width: 400 }}>
            <img
              alt=""
              style={{
                display: "block",
                width: 400,
                height: 557,
              }}
              src={lamp}
            ></img>
            <div
              style={{
                fontStyle: "italic",
                color: "#5e5e5e",
                fontSize: 16,
                textAlign: "left",
              }}
            >
              A boy is using his LAMP device. Image by Boya
            </div>
          </VerticalFlex>
        </HorizontalFlex>
        <VerticalFlex style={{ backgroundColor: "#F2F2F2", marginTop: 50 }}>
          <MainTitle>More about me</MainTitle>
          <div
            style={{
              fontWeight: 500,
              fontSize: 16,
              marginTop: 50,
              width: 950,
            }}
          >
            I love doing some voluntary work related to art and education in the
            local community in my free time. I'm an animal lover and love
            drawing. I draw{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://anboya.github.io/piggybunny/#/comics"
            >
              <HoverSpan
                style={{ color: "#E9168C", fontWeight: 700, fontSize: 16 }}
              >
                comics
              </HoverSpan>
            </a>{" "}
            to record my pets' lives. When I'm not creating artwork, you can
            find me walking outdoors and getting more inspiration.
          </div>
          <HorizontalFlex style={{ margin: "50px 0 150px 0" }}>
            <VerticalFlex style={{ width: 266, alignItems: "flex-start" }}>
              <img
                alt=""
                style={{
                  display: "block",
                  width: 266,
                  height: 295,
                }}
                src={more1}
              ></img>
              <div
                style={{
                  fontStyle: "italic",
                  color: "#5e5e5e",
                  fontSize: 16,
                  textAlign: "left",
                  marginTop: 5,
                }}
              >
                Hand drawn tote bag
              </div>
            </VerticalFlex>
            <VerticalFlex
              style={{ width: 392, margin: "0 12px", alignItems: "flex-start" }}
            >
              <img
                alt=""
                style={{
                  display: "block",
                  width: 392,
                  height: 295,
                }}
                src={more2}
              ></img>
              <div
                style={{
                  fontStyle: "italic",
                  color: "#5e5e5e",
                  fontSize: 16,
                  textAlign: "left",
                  marginTop: 5,
                }}
              >
                Graphite drawing
              </div>
            </VerticalFlex>
            <VerticalFlex style={{ width: 238, alignItems: "flex-start" }} s>
              <img
                alt=""
                style={{
                  display: "block",
                  width: 238,
                  height: 295,
                }}
                src={more3}
              ></img>
              <div
                style={{
                  fontStyle: "italic",
                  color: "#5e5e5e",
                  fontSize: 16,
                  textAlign: "left",
                  marginTop: 5,
                  lineHeight: "20px",
                }}
              >
                My mentee and I attended the art exhibition of the Future
                Foundations Creative Mentoring Program
              </div>
            </VerticalFlex>
          </HorizontalFlex>
        </VerticalFlex>
      </VerticalFlex>
    </Root>
  );
}
