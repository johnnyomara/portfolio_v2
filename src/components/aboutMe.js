import { NavBar } from "./navbar";
import {
  Header,
  HeaderWrapper,
  AboutMeText,
  InlineLink,
  LeftWrapper,
  RightWrapper,
  AboutMeWrapper,
  Photo,
  Caption,
} from "./styled";
import resume from "../documents/Resume.pdf";
import buster from "../images/buster.jpeg";

export const AboutMe = () => {
  return (
    <>
      <NavBar />
      <HeaderWrapper>
        <Header>About Me</Header>
      </HeaderWrapper>
      <AboutMeWrapper>
        <LeftWrapper>
          <Photo src={buster} alt={"A handsome orange cat"} />
          <Caption>This is not a photo of me. It is a photo of my cat.</Caption>
        </LeftWrapper>
        <RightWrapper>
          <AboutMeText>
            If you want the tl;dr you can check out my{" "}
            <InlineLink href={resume}>resume</InlineLink> here. If you're a fan
            of a good origin story, read on.
          </AboutMeText>
          <AboutMeText>
            I was born in New York and at the age of 2 retired to Florida, where
            I spent my formative years. I attended the University of Florida
            where I studied theater and French. After college I packed up and
            headed north to Chicago. Since moving here I've performed improv and
            sketch comedy, and appeared on more podcasts than any one person
            should.
          </AboutMeText>
          <AboutMeText>
            After spending most of my professional career in office
            administration I decided to make a shift towards something more
            fulfilling, and that started my journey with web development. After
            completing{" "}
            <InlineLink href={"https://www.fullstackacademy.com/"}>
              Fullstack Academy
            </InlineLink>
            's coding bootcamp, I worked with them as a senior teaching fellow,
            helping the next generation of web developers learn the skills
            they'll need to succeed!
          </AboutMeText>
          <AboutMeText>
            More recently I've worked at{" "}
            <InlineLink href={"https://www.sayrhino.com/"}>Rhino</InlineLink> and <InlineLink href={"https://www.optum.com/"}>Optum</InlineLink> as
            a frontend software engineer. There I helped develop and ship new
            features while maintaining internal component libraries, and
            implementing frontend testing to ensure a consistent and reliable
            user experience.
          </AboutMeText>
        </RightWrapper>
      </AboutMeWrapper>
    </>
  );
};
