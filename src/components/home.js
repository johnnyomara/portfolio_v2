import { NavBar } from "./navbar";
import {
  Header,
  Headshot,
  HeaderWrapper,
  LogoWrapper,
  Logo,
  HomeText,
} from "./styled";
import johnny from "../images/johnny.jpeg";
import github from "../logos/github.png";
import linkedin from "../logos/linkedin.png";
import bluesky from "../logos/bluesky.png";
import instagram from "../logos/instagram.png";

export const Home = () => {
  return (
    <>
      <NavBar />
      <HeaderWrapper>
        <Header>Johnny O'Mara</Header>
        <Headshot
          src={johnny}
          alt={"A man sitting inside a Waffle House holding a mug of coffee"}
        />
      </HeaderWrapper>

      <HomeText>
        Hi! I'm Johnny. I'm a fullstack web developer, with a frontend focus. I
        also do a bunch of other cool stuff. Take a look around and why not drop
        me a line?
      </HomeText>
      <LogoWrapper>
        <a href={"https://github.com/johnnyomara"}>
          <Logo src={github} />
        </a>
        <a href={"https://www.linkedin.com/in/johnnyomara/"}>
          <Logo src={linkedin} />{" "}
        </a>
        <a href={"https://bsky.app/profile/johnnyinbriefs.bsky.social"}>
          <Logo src={bluesky} />
        </a>
        <a href={"https://instagram.com/JohnnyInBriefs"}>
          <Logo src={instagram} />
        </a>
      </LogoWrapper>
    </>
  );
};
