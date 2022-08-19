import styled from "@emotion/styled";

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
  width: "33%",
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
  textAlign: "right",
  backgroundColor: "rgb(29, 28, 28)",
});

export const InlineLink = styled.a({
  color: "white",
  ":visited": "none",
});

export const LeftWrapper = styled.div({
  width: "50%",
});
export const RightWrapper = styled.div({
  margin: "auto",
});
export const AboutMeWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
});

export const AboutMeText = styled.p({
  color: "white",
  width: "80%",
  textAlign: "left",
  padding: 10,
  marginRight: "auto",
  marginLeft: 0,
});

export const Photo = styled.img({
  height: 500,
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
  flexDirection: "row",
  marginTop: 20
});

export const ProjectWrapper = styled.div({
  display: "Flex",
  flexDirection: "column",
  alignContent: "center",
  margin: "auto",
  justifyContent: "center",
  textAlign: "center",
  backgroundColor: "rgb(29, 28, 28)",
  width: "40%",
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
