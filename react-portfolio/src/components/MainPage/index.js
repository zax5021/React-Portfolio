import React from "react";
import AboutMe from "../AboutMe.js";
import HeadingSection from "../HeadingSection";
import Section from "../Section";
import ContentWrapper from "../ContentWrapper";
import projects from "../../assets/projects";
import ProjectCard from "../ProjectCard/index.js";
import Article from "../Article/index.js";

function MainPage() {
  return (
    <main>
      <Section>
        <HeadingSection id="AboutMe" headingTitle="About Me">
          <AboutMe />
        </HeadingSection>
      </Section>
      <Section id="contentRow">
        <HeadingSection id="Selected Works" headingTitle="Selected Works">
          <ContentWrapper>
            <Article id="heroContentRow">
              <ProjectCard project={projects[1]} id="heroContent" />
            </Article>
            <Article class="regularContent">
              <ProjectCard project={projects[0]} />
              <ProjectCard project={projects[4]} />
            </Article>
            <Article class="regularContent">
              <ProjectCard project={projects[3]} />
              <ProjectCard project={projects[2]} />
            </Article>
          </ContentWrapper>
        </HeadingSection>
      </Section>
    </main>
  );
}

export default MainPage;
