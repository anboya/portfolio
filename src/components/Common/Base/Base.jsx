import { fontWeight, styled } from "@mui/system";
import Typography from "@mui/material/Typography";
export const Root = styled("div")({
  width: "100%",
  height: "100%",
  position: "relative",
  overflow: "hidden",
});
export const HorizontalFlex = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

export const VerticalFlex = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});
export const MainTitle = styled("div")({
  marginTop: 110,
  fontSize: 24,
  fontWeight: 700,
});
export const SubTitle = styled("div")({
  marginTop: 100,
  marginBottom: 50,
  fontWeight: 700,
});
export const SubText = styled("div")({
  width: 750,
  textAlign: "center",
});
