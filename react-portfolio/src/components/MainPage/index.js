import React from "react";
import AboutMe from "../AboutMe.js";
import HeadingSection from "../HeadingSection";
import Section from "../Section";
import ContentWrapper from "../ContentWrapper";

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
          <ContentWrapper></ContentWrapper>
        </HeadingSection>
      </Section>
    </main>
  );
}

export default MainPage;
