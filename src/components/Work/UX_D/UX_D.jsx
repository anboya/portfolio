import React from "react";
import threePhone from "../../../assets/image/threephones.png";
import {
  Root,
  HorizontalFlex,
  VerticalFlex,
  SubTitle,
  SubText,
  MainTitle,
} from "../../Common/Base/Base";
import Card from "../../Common/Card/Card";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import PieChart from "../../Work/UX_D/PieChart/PieChart";
import persona1 from "../../../assets/image/persona1.png";
import persona2 from "../../../assets/image/persona2.png";
import valueproposition1 from "../../../assets/image/valueproposition1.png";
import valueproposition2 from "../../../assets/image/valueproposition2.png";
import userjourney from "../../../assets/image/userjourney.png";
import audit from "../../../assets/image/audit.png";
import architecture from "../../../assets/image/architecture.png";
import userflow from "../../../assets/image/userflow.png";
import wireframes from "../../../assets/image/wireframes.png";
import digital from "../../../assets/image/digital.png";
import usability from "../../../assets/image/usability.png";
import Itemdetails from "../../../assets/image/Itemdetails.png";
import ordercompleted from "../../../assets/image/ordercompleted.png";
import Andy from "../../../assets/image/Andy.png";
import Daniel from "../../../assets/image/Daniel.png";
import Louise from "../../../assets/image/Louise.png";
import app1 from "../../../assets/image/app1.png";
import app2 from "../../../assets/image/app2.png";
import app3 from "../../../assets/image/app3.png";
import { Button } from "@mui/material";
import SubFooter from "../SubFooter/SubFooter";
function NumberCard(props) {
  return (
    <VerticalFlex
      style={{
        width: 250,
        height: 300,
        background: "#FFFFFF",
        border: "1px solid #DBDBDB",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "3px",
        paddingTop: 38,
        justifyContent: "stretch",
        margin: "auto 20px",
      }}
    >
      {props.number === 1 ? (
        <LooksOneIcon
          fontSize="large"
          color="primary"
          style={{ width: 50, height: 50 }}
        />
      ) : props.number === 2 ? (
        <LooksTwoIcon
          fontSize="large"
          color="primary"
          style={{ width: 50, height: 50 }}
        />
      ) : props.number === 3 ? (
        <Looks3Icon
          fontSize="large"
          color="primary"
          style={{ width: 50, height: 50 }}
        />
      ) : (
        <Looks4Icon
          fontSize="large"
          color="primary"
          style={{ width: 50, height: 50 }}
        />
      )}

      <div
        style={{
          fontWeight: 700,
          marginTop: 20,
          width: 210,
          textAlign: "center",
        }}
      >
        {props.title}
      </div>
      <div
        style={{
          fontSize: 14,
          marginTop: props.number % 2 === 0 ? 24 : 44,
          width: 200,
          textAlign: "center",
        }}
      >
        {props.text}
      </div>
    </VerticalFlex>
  );
}

export default function UX_D() {
  return (
    <Root>
      <VerticalFlex
        style={{
          height: 480,
          paddingTop: 57,
          backgroundColor: "#E0E4FF",
        }}
      >
        <img
          alt=""
          style={{ height: 381, width: 1152, display: "block" }}
          src={threePhone}
        ></img>
        <HorizontalFlex>
          <div style={{ margin: "auto 30px" }}>Project Overview</div>
          <div style={{ margin: "auto 30px" }}>Understanding the user</div>
          <div style={{ margin: "auto 30px" }}>Starting the design</div>
          <div style={{ margin: "auto 30px" }}>Refining the design</div>
        </HorizontalFlex>
      </VerticalFlex>
      <VerticalFlex style={{ height: 840 }}>
        <MainTitle>- Project Overview -</MainTitle>
        <HorizontalFlex style={{ marginTop: 63 }}>
          <Card icon={"User"} title="UX design" />
          <Card icon={"Time"} title="Sep-Dec, 2021" />
          <Card icon={"Tool"} title="Figma" />
        </HorizontalFlex>
        <SubText
          style={{
            marginTop: 100,
          }}
        >
          The Pet food delivery app is a mobile app that allows users to order
          pet food online and schedule the delivery time. Our target users are
          pet owners across Australia.
        </SubText>
        <HorizontalFlex style={{ marginTop: 60 }}>
          <div style={{ width: 335 }}>
            <span style={{ fontWeight: 700 }}>The problem: </span> <br />
            <div style={{ marginTop: 20 }}>
              Pet food delivery delays cause many inconvenience for pet owners,
              especially when there is no left pet food
            </div>
          </div>
          <div style={{ width: 335, marginLeft: 50 }}>
            <span style={{ fontWeight: 700 }}>The goal: </span> <br />
            <div style={{ marginTop: 20 }}>
              Find users’ pain points and create a product that can compete in
              the market and increase customer satisfaction.
            </div>
          </div>
        </HorizontalFlex>
      </VerticalFlex>
      <VerticalFlex style={{ backgroundColor: "#F4F4F4" }}>
        <div style={{ fontSize: 24, fontWeight: 700, marginTop: 25 }}>
          - Understanding the user -
        </div>
        <SubTitle>User research</SubTitle>
        <SubText>
          According to the research from animal medicines Australia (2019),
          almost two-thirds of Australian households have a pet. The Australian
          pet food market is projected to witness a compound annual growth
          rate (CAGR) of 2.7% from 2021 to 2025 (Mordor intelligence, 2020).  
        </SubText>

        <SubTitle>Pain points</SubTitle>
        <HorizontalFlex>
          <NumberCard
            number={1}
            title="Delivery delays"
            text="Many participants mentioned that they had experienced pet food delivery delays."
          />
          <NumberCard
            number={2}
            title="Incomplete product information"
            text="Some participants had bad online shopping experience. It is not convincing for them to shop online just by seeing the product images."
          />
          <NumberCard
            number={3}
            title="Limited pet supplies"
            text="Participants who own a mixed group of pets struggled in finding a one-stop online shop for all pets."
          />
          <NumberCard
            number={4}
            title="Free shipping promotion"
            text="Almost all participants wanted to spend less money to get free shipping promotion."
          />
        </HorizontalFlex>
        <SubTitle>Survey sample composition</SubTitle>
        <SubText>
          I conducted one-on-one online interviews with 12 participants for two
          days. The participants are between the age of 21-39 who reside in
          metropolitan and suburb areas in Sydney and Melbourne. Some of them
          only own one pet and some own a mixed group of pets. Their pets
          include dogs, cats, birds, small animals, and fish.
        </SubText>
        <PieChart />
        <SubTitle>Personas</SubTitle>
        <HorizontalFlex style={{ marginTop: 200 }}>
          <VerticalFlex
            style={{
              width: 320,
              height: 650,
              background: "#FFFFFF",
              border: "1px solid #DBDBDB",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "3px",
              paddingTop: 34,
              justifyContent: "stretch",
              margin: "auto 50px",
            }}
          >
            <img
              alt=""
              style={{
                display: "block",
                width: 109,
                marginTop: -90,
              }}
              src={persona1}
            ></img>
            <div style={{ fontSize: 20, fontWeight: 700, marginTop: 50 }}>
              John Smith, 39
            </div>
            <div style={{ marginTop: 10 }}>Project Manager, married</div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 500,
                fontStyle: "italic",
                width: 250,
                textAlign: "center",
                marginTop: 30,
              }}
            >
              “As a product manager, I want to make sure everything is getting
              done properly. Sometimes I have to work overtime at weekends. But
              I always try to spend more time with my family.”
            </div>
            <div
              style={{
                fontSize: 12,
                width: 250,
                textAlign: "center",
                marginTop: 50,
              }}
            >
              John is a product manager who works for a technology company. They
              are married and have two children. They live in a big house with
              their family in Canberra rural area and have a dog Molly. John’s
              house is far from the nearest pet shop, they drive there every two
              months. John often stock up a lot of dog food whenever they go to
              the shop so the dog food can be very heavy. When John is very
              busy, they may forget to stock up dog food. John worried about the
              delivery time so they don’t buy pet food online very frequently.
            </div>
          </VerticalFlex>
          <VerticalFlex
            style={{
              width: 320,
              height: 650,
              background: "#FFFFFF",
              border: "1px solid #DBDBDB",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "3px",
              paddingTop: 34,
              justifyContent: "stretch",
              margin: "auto 50px",
            }}
          >
            <img
              alt=""
              style={{
                display: "block",
                width: 109,
                marginTop: -90,
              }}
              src={persona2}
            ></img>
            <div style={{ fontSize: 20, fontWeight: 700, marginTop: 50 }}>
              Cindy Li, 26
            </div>
            <div style={{ marginTop: 10 }}>Ph.D. student, single</div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 500,
                fontStyle: "italic",
                width: 250,
                textAlign: "center",
                marginTop: 30,
              }}
            >
              “Time management is very important for a research degree student
              like me. I always manage to spend more time being with my pets.
              They comfort me when I amnot feeling well.”
            </div>
            <div
              style={{
                fontSize: 12,
                width: 250,
                textAlign: "center",
                marginTop: 50,
              }}
            >
              Cindy is a second-year PhD student and lives with her pets (a cat,
              a rabbit and two birds) in an aprtment in the city close to the
              university. Cindy enjoys being with their pets, they always buy
              their pets food on line but it’s difficult to find an online pet
              supply to meet all their pets’ needs. If they buy pet food
              separately from different websites, it’s very time-consuming and
              less likely to get free shipping promotion on their order.
            </div>
          </VerticalFlex>
        </HorizontalFlex>
        <SubTitle>User journey maps</SubTitle>
        <img
          alt=""
          style={{
            display: "block",
            width: 950,
          }}
          src={userjourney}
        ></img>
        <SubTitle>Value proposition</SubTitle>
        <HorizontalFlex>
          <img
            alt=""
            style={{
              display: "block",
              width: 480,
              margin: "0 10px",
            }}
            src={valueproposition1}
          ></img>
          <img
            alt=""
            style={{
              display: "block",
              width: 480,
              margin: "0 10px",
            }}
            src={valueproposition2}
          ></img>
        </HorizontalFlex>
        <SubTitle>Competitive audit</SubTitle>
        <SubText style={{ marginBottom: 40 }}>
          I created a competitive audit that informs my design process and
          reveals gaps in the market. It helps me identify key competitors’
          strengths and weaknesses based on my research. My competitive audit
          goal is to compare the user experience of each competitor’s website
          and app.
        </SubText>
        <Button variant="contained">Learn more</Button>
        <img
          alt=""
          style={{
            display: "block",
            width: 960,
            marginTop: 100,
            marginBottom: 120,
          }}
          src={audit}
        ></img>
      </VerticalFlex>
      <VerticalFlex>
        <MainTitle>- Starting the design -</MainTitle>
        <SubTitle>Information architecture</SubTitle>
        <img
          alt=""
          style={{
            display: "block",
            width: 750,
          }}
          src={architecture}
        ></img>
        <HorizontalFlex>
          <VerticalFlex style={{ width: 420, margin: "0 10px" }}>
            <SubTitle style={{ marginBottom: 20 }}>User flow</SubTitle>
            <img
              alt=""
              style={{
                display: "block",
                width: 420,
              }}
              src={userflow}
            ></img>
          </VerticalFlex>
          <VerticalFlex style={{ width: 420, margin: "0 10px" }}>
            <SubTitle style={{ marginBottom: 20 }}>Paper wireframes</SubTitle>
            <img
              alt=""
              style={{
                display: "block",
                width: 420,
              }}
              src={wireframes}
            ></img>
          </VerticalFlex>
        </HorizontalFlex>
        <SubTitle>Digital wireframes</SubTitle>
        <img
          alt=""
          style={{
            display: "block",
            width: 900,
          }}
          src={digital}
        ></img>
        <HorizontalFlex style={{ marginTop: 100, marginBottom: 140 }}>
          <img
            alt=""
            style={{
              display: "block",
              width: 500,
            }}
            src={usability}
          ></img>
          <VerticalFlex style={{ width: 360, marginLeft: 48 }}>
            <SubTitle style={{ marginTop: 0, marginBottom: 20 }}>
              Usability studies
            </SubTitle>
            <SubText
              style={{
                width: 360,
                textAlign: "left",
                fontSize: 16,
                // lineHeight: "120%",
                marginBottom: 30,
              }}
            >
              To create a product that meets the users’ real needs, I conducted
              moderated usability studies with 5 participants. They are one male
              and four females between the ages of 18-35 who reside in
              metropolitan and suburb areas in Australia. All the participants
              had at least one online shopping experience for pet food.
              <br />
              <br />
              Each study took around 15-30 minutes remotely. Users were asked to
              order dry dog food on a low-fidelity prototype.
            </SubText>
            <Button variant="contained">Learn more</Button>
          </VerticalFlex>
        </HorizontalFlex>
      </VerticalFlex>
      <VerticalFlex style={{ backgroundColor: "#F4F4F4" }}>
        <HorizontalFlex>
          <VerticalFlex style={{ width: 590, marginTop: 90 }}>
            <div style={{ fontWeight: 700 }}>
              People want to know product availability
            </div>
            <div style={{ width: 364, fontSize: 16, marginTop: 36 }}>
              There were 60% of participants said they wanted to know if the
              item was available before they added it to the shopping cart.
            </div>
            <HorizontalFlex style={{ marginTop: 50, marginRight: -100 }}>
              <img
                alt=""
                style={{
                  display: "block",
                  width: 94,
                  height: 94,
                  marginTop: 10,
                  marginRight: -50,
                }}
                src={Andy}
              ></img>
              <VerticalFlex>
                <div
                  style={{
                    backgroundColor: "#E0E4FF",
                    borderRadius: "20px 20px 20px 0px",
                    width: 380,
                    fontStyle: "italic",
                    fontSize: 12,
                    padding: 20,
                    fontWeight: 600,
                  }}
                >
                  “As a customer, I also want to see how many products are in
                  stock. If we have enough dog food, we can order and there is
                  no need to worry too much about the delivery time. But if our
                  dog food is almost finished, we need to pick the in-stock dog
                  food.”
                </div>
                <div style={{ fontSize: 14, marginRight: 250, marginTop: 10 }}>
                  — Andy, Victoria
                </div>
              </VerticalFlex>
            </HorizontalFlex>
          </VerticalFlex>
          <VerticalFlex style={{ width: 590 }}>
            <img
              alt=""
              style={{ display: "block", width: 590 }}
              src={Itemdetails}
            ></img>
          </VerticalFlex>
        </HorizontalFlex>
        <HorizontalFlex>
          <VerticalFlex style={{ width: 590 }}>
            <img
              alt=""
              style={{ display: "block", width: 590 }}
              src={ordercompleted}
            ></img>
          </VerticalFlex>
          <VerticalFlex style={{ width: 590, marginTop: 90 }}>
            <div style={{ fontWeight: 700 }}>
              People want to check order status
            </div>
            <div style={{ width: 364, marginTop: 36 }}>
              There were 60% of participants noted that they wanted to check
              their order status after payment.
            </div>
            <HorizontalFlex style={{ marginTop: 50, marginRight: -100 }}>
              <img
                alt=""
                style={{
                  display: "block",
                  width: 94,
                  height: 94,
                  marginTop: 10,
                  marginRight: -50,
                }}
                src={Daniel}
              ></img>
              <VerticalFlex>
                <div
                  style={{
                    backgroundColor: "#E0E4FF",
                    borderRadius: "20px 20px 20px 0px",
                    width: 380,
                    fontStyle: "italic",
                    fontSize: 12,
                    padding: 20,
                    fontWeight: 600,
                  }}
                >
                  “Can I check my order after payment succeeded?”
                </div>
                <div style={{ fontSize: 14, marginRight: 220, marginTop: 10 }}>
                  — Andy, Victoria
                </div>
              </VerticalFlex>
            </HorizontalFlex>
            <HorizontalFlex style={{ marginTop: 50, marginRight: -100 }}>
              <img
                alt=""
                style={{
                  display: "block",
                  width: 94,
                  height: 94,
                  marginTop: 10,
                  marginRight: -50,
                }}
                src={Louise}
              ></img>
              <VerticalFlex>
                <div
                  style={{
                    backgroundColor: "#E0E4FF",
                    borderRadius: "20px 20px 20px 0px",
                    width: 380,
                    fontStyle: "italic",
                    fontSize: 12,
                    padding: 20,
                    fontWeight: 600,
                    marginTop: 30,
                  }}
                >
                  “I think you can add another test case for seller to double
                  confirm after users placed their orders. Fresh pet food also
                  takes time to prepare, if users do not receive seller's
                  confirmation, users can also pick other food and the app
                  proceed to next step”
                </div>
                <div style={{ fontSize: 14, marginRight: 140, marginTop: 10 }}>
                  — Louise, New South Wales
                </div>
              </VerticalFlex>
            </HorizontalFlex>
          </VerticalFlex>
        </HorizontalFlex>
      </VerticalFlex>
      <VerticalFlex>
        <img
          alt=""
          style={{ display: "block", width: 650, marginTop: 115 }}
          src={app1}
        ></img>
        <img
          alt=""
          style={{ display: "block", width: 900, marginTop: 115 }}
          src={app2}
        ></img>
        <Button
          variant="contained"
          style={{ marginTop: 46, padding: "10px 30px", fontSize: 14 }}
        >
          View More
        </Button>
        <VerticalFlex style={{ background: "#E0E4FF", marginTop: 140 }}>
          <img alt="" style={{ display: "block", width: 880 }} src={app3}></img>
        </VerticalFlex>
        <MainTitle>- What I learned -</MainTitle>
        <SubText style={{ marginTop: 47, fontWeight: 500, marginBottom: 135 }}>
          Through this project, I realized the importance of doing user
          interviews, and how to extract the most useful information for product
          positioning from fragmented interview records and tap into the real
          needs of potential users. A quote from a book I read exemplifies this
          process perfectly, "When you convert nouns into verbs of your
          intentions, you will find what you really care about.” In addition, I
          have learned that not to interfere with the judgment of the
          interviewees with my assumptions. With open-ended questions, you may
          foster independent thinking and get more unexpected answers.
        </SubText>
        <SubFooter number={1}></SubFooter>
      </VerticalFlex>
    </Root>
  );
}
