import { NavbarText, NavbarWrapper } from "./styled";

export const NavBar = () => {
  return (
    <NavbarWrapper>
      <NavbarText href={"/"}>Home</NavbarText>
      <NavbarText href={"/aboutme"}>About Me</NavbarText>
      {/* <NavbarText href={"/projects"}>Projects</NavbarText> */}
      <NavbarText href={"/creative"}>Creative</NavbarText>
    </NavbarWrapper>
  );
};
