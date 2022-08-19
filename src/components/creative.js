import { NavBar } from "./navbar";
import {
  CreativeWrapper,
  Header,
  HeaderWrapper,
  ProjectCaption,
  ProjectHeader,
  ProjectPhoto,
  ProjectWrapper,
  SubHead,
} from "./styled";
import billbuds from "../images/billbuds.jpg";
import skyjacks from "../images/skyjacks.jpg";

export const Creative = () => {
  return (
    <>
      <NavBar />
      <HeaderWrapper>
        <Header>Creative Stuff</Header>
        <SubHead>
          In addition to being a web developer I'm also a pretty funny guy. Here
          are a couple of the creative projects I've worked on.
        </SubHead>
      </HeaderWrapper>
      <CreativeWrapper>
        <ProjectWrapper>
          <ProjectHeader>Billbuds Podcast</ProjectHeader>
          <a href={"https://billbudspod.com/"}>
            <ProjectPhoto src={billbuds} alt={"A logo styled to resemble the artwork for the 'Now That's What I Call Music' albums."}/>
          </a>
          <ProjectCaption>
            Billbuds is a pop music review podcast by two unlikely pop music
            enthusiasts.
          </ProjectCaption>
        </ProjectWrapper>
        <ProjectWrapper>
          <ProjectHeader>Campaign Podcast</ProjectHeader>
          <a href={"http://oneshotpodcast.com/actual-play/campaign/skyjacks/"}>
            {" "}
            <ProjectPhoto src={skyjacks} alt={"A pirate ship with wings flying above the sea."}/>
          </a>
          <ProjectCaption>
            Skyjacks is an anti-colonial RPG actual play podcast about folktales
            and sky pirates. (Think Dungeons {"&"} Dragons in flying boats)
          </ProjectCaption>
        </ProjectWrapper>
      </CreativeWrapper>
    </>
  );
};
