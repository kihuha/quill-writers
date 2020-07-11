import React, { Fragment } from "react"
import { RouteComponentProps } from "@reach/router"
import Navbar from "../components/navbar"
import { Card, CardWrapper } from "../components/card"
import styled from "styled-components"
import Typed from "react-typed"

import { primary, light } from "../design/colors"
import Hero from "../assets/Hero.svg"

const Section = styled.section`
  padding: 0 10px;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`

const SectionTitle = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 31.5px;
  line-height: 1.5;
`

const Landing = styled(Section)`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`

const LandingHero = styled.img`
  width: 100%;
`
const LandingContent = styled.div`
  margin-bottom: 2.5rem;
`

const LandingTitle = styled(SectionTitle)`
  min-height: 141px;
`

const LandingParagraph = styled.p`
  line-height: 1.65;
`

const LandingTyped = styled.span`
  color: ${primary[100]};
`

const ContactSection = styled(Section)`
  background: ${primary[100]};
  color: ${light[100]};
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home = (props: RouteComponentProps): JSX.Element => {
  return (
    <Fragment>
      <Navbar />
      <Landing>
        <LandingHero src={Hero} alt="Woman and Board illustration" />
        <LandingContent>
          <LandingTitle>
            Your one stop shop for professional{" "}
            <LandingTyped>
              <Typed
                strings={["Resume Writing", "Ghost Writing", "Editing", "Grant Writing", "Publishing"]}
                typeSpeed={100}
                backSpeed={60}
                loop
                backDelay={3000}
              />
            </LandingTyped>
          </LandingTitle>
          <LandingParagraph>
            we are a full-service writing agency with a small team of writers dedicated to providing quick turn around and the best quality
            of work. We believe in creativity, dedication and putting our clients first.
          </LandingParagraph>
        </LandingContent>
      </Landing>
      <Section>
        <SectionTitle>Services</SectionTitle>
        <CardWrapper>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardWrapper>
      </Section>
      <ContactSection>
        <SectionTitle>Contact</SectionTitle>
        <p>Contact details here</p>
      </ContactSection>
    </Fragment>
  )
}

export default Home
