import "./App.css";
import { Home } from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import { AboutMe } from "./components/aboutMe";
import { Projects } from "./components/projects";
import { Creative } from "./components/creative";

const App = () => {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutme" element={<AboutMe />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/creative" element={<Creative />} />
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  );
};
const AppWrapper = styled.body({ color: "black" });

export default App;
