import styled from "@emotion/styled";
import { isMobile } from "../utils/utils";

export const Header = styled.h1({
  display: "flex",
  margin: "auto",
  textAlign: "center",
  color: "white",
  padding: 15,
});

export const Headshot = styled.img({
  height: 400,
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: 25,
});

export const HeaderWrapper = styled.div({
  display: "flex",
  margin: "auto",
  textAlign: "center",
  flexDirection: "column",
});

export const LogoWrapper = styled.div({
  display: "flex",
  margin: "auto",
  textAlign: "center",
  flexDirection: "row",
  justifyContent: "center",
});

export const Logo = styled.img({
  height: 32,
  margin: 5,
});

export const HomeText = styled.p({
  color: "white",
  width: isMobile() ? "80%" : "33%",
  textAlign: "center",
  margin: "auto",
  padding: 10,
});

export const NavbarText = styled.a({
  color: "white",
  padding: 15,
  textAlign: "right",
  textDecoration: "none",
  "&:hover": { textDecoration: "underline" },
});

export const NavbarWrapper = styled.div({
  marginRight: 0,
  marginLeft: "auto",
  paddingTop: 20,
  paddingBottom: 20,
  width: "100%",
  textAlign: isMobile() ? "center" : "right",
  backgroundColor: "rgb(29, 28, 28)",
});

export const InlineLink = styled.a({
  color: "white",
  ":visited": "none",
});

export const RightWrapper = styled.div({
  width: isMobile() ? "100%" : "50%",
  justifyContent: "center",
  alignContent: "center",
  textAlign: "center",
  margin: "auto",
});
export const LeftWrapper = styled.div({
  margin: "auto",
});
export const AboutMeWrapper = styled.div({
  display: "flex",
  flexDirection: isMobile() ? "column" : "row",
});

export const AboutMeText = styled.p({
  color: "white",
  width: "80%",
  textAlign: isMobile() ? "center" : "left",
  justifyContent: "center",
  padding: "auto",
  paddingLeft: 10,
  marginRight: "auto",
  marginLeft: "auto",
});

export const Photo = styled.img({
  height: isMobile() ? 300 : 500,
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: 25,
});

export const Caption = styled.p({
  color: "white",
  textAlign: "center",
  margin: "auto",
  padding: 5,
  fontSize: 10,
});

export const CreativeWrapper = styled.div({
  display: "Flex",
  flexDirection: isMobile() ? "column" : "row",
  marginTop: 20,
});

export const ProjectWrapper = styled.div({
  display: "Flex",
  flexDirection: "column",
  alignContent: "center",
  margin: "auto",
  justifyContent: "center",
  textAlign: "center",
  backgroundColor: "rgb(29, 28, 28)",
  width: isMobile() ? "85%" : "40%",
  marginTop: 10,
  marginBottom: 10,
  borderRadius: 25,
});

export const ProjectHeader = styled.h4({ color: "White" });

export const ProjectPhoto = styled.img({
  height: 300,
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: 25,
});

export const ProjectCaption = styled.p({ color: "White", padding: 10 });

export const SubHead = styled.h3({
  display: "flex",
  margin: "auto",
  textAlign: "center",
  color: "white",
  paddingLeft: 15,
});
