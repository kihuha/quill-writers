import React, { Fragment } from "react"
import { RouteComponentProps } from "@reach/router"
import styled from "styled-components"
import Typed from "react-typed"
import { Mail, Phone } from "react-feather"

import Navbar from "../components/navbar"
import { CardWrapper, Card, CardImg, CardFilter, CardTitle } from "../components/card"
import { primary, light } from "../design/colors"
import Hero from "../assets/Hero.svg"
import ImageOne from "../assets/image1.jpg"
import ImageTwo from "../assets/image2.jpg"
import ImageThree from "../assets/image3.jpg"
import ImageFour from "../assets/image4.jpg"

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
  padding-bottom: 2rem;
`

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  span {
    margin-left: 1rem;
  }
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
                strings={["Resume Writing", "Editing", "Grant Writing", "Publishing"]}
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
          <Card>
            <CardFilter>
              <CardTitle>Resume Writing</CardTitle>
            </CardFilter>
            <CardImg src={ImageOne} alt="writing material" />
          </Card>
          <Card>
            <CardFilter>
              <CardTitle>Editing</CardTitle>
            </CardFilter>
            <CardImg src={ImageTwo} alt="writing material" />
          </Card>
          <Card>
            <CardFilter>
              <CardTitle>Grant Writing</CardTitle>
            </CardFilter>
            <CardImg src={ImageThree} alt="writing material" />
          </Card>
          <Card>
            <CardFilter>
              <CardTitle>Publishing</CardTitle>
            </CardFilter>
            <CardImg src={ImageFour} alt="writing material" />
          </Card>
        </CardWrapper>
      </Section>
      <ContactSection>
        <SectionTitle>Contact</SectionTitle>
        <div className="div">
          <ContactDetail>
            <Mail /> <span>quillwriters@info.com</span>
          </ContactDetail>
          <ContactDetail>
            <Phone /> <span>+254 717 123 456</span>
          </ContactDetail>
        </div>
      </ContactSection>
    </Fragment>
  )
}

export default Home
