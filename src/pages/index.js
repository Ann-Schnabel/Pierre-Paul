import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Slider from "react-slick"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Resume from "../images/Pierre_Paul_Resume.pdf"

import Img from "gatsby-image"

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 960px;
  padding: 0 15px;

  @media only screen and (max-width: 680px) {
    display: block;
  }
`
const StyledImg = styled(Img)`
  width: 60%;
  max-width: 500px;
  min-width: 300px;
  bottom: 0;
`
const DivStyled = styled.div`
  max-width: 600px;
  width: 50%;

  @media only screen and (max-width: 680px) {
    width: 100%;
    margin: auto;
  }
`
const PStyled = styled.p`
  margin-left: 15px;
  max-width: 35em;

  @media only screen and (max-width: 680px) {
    margin-left: 0;
    margin-bottom: 25px;
  }
`
const FloatingBallOne = styled.div`
  background-color: var(--lightOrange);
  height: 100px;
  width: 100px;
  min-width: 100px;
  border-radius: 200px;
  position: absolute;
  top: 30%;
  right: 30%;
  z-index: -1;
`
const FloatingBallTwo = styled.div`
  background-color: var(--lightOrange);
  height: 50px;
  width: 50px;
  min-width: 50px;
  border-radius: 50px;
  position: absolute;
  top: 25%;
  right: 10%;
  z-index: -1;
`
const FloatingBallThree = styled.div`
  background-color: var(--lightOrange);
  height: 25px;
  width: 25px;
  min-width: 25px;
  border-radius: 25px;
  position: absolute;
  top: 15%;
  right: 30%;
  z-index: -1;
`
const StandardSection = styled.section`
  background-color: var(--lightBlue);
  width: 100%;
  padding: 100px;
  box-sizing: border-box;

  @media only screen and (max-width: 680px) {
    padding: 25px 15px;
  }
`
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;

  @media only screen and (max-width: 680px) {
    display: block;
  }
`
const BoxDiv = styled.div`
  background-color: white;
  width: 40%;
  margin-right: 100px;
  padding: 0px 30px 0px 20px;

  @media only screen and (max-width: 680px) {
    width: 80%;
    margin: 0 auto;
  }
`
const BlockText = styled.p`
  max-width: 200px;
`
const SideImg = styled(Img)`
  width: 60%;
  max-width: 250px;
  min-width: 150px;
  bottom: 0;

  @media only screen and (max-width: 680px) {
    margin-top: 50px;
  }
`
const StyledAnchor = styled.a`
  background-color: var(--orange);
  color: var(--black);
  padding: 10px 30px;
  border-radius: 10px;
  display: inline-block;
  margin-top: 25px;
  width: 180px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;

  & + & {
    margin-left: 25px;

    @media only screen and (max-width: 680px) {
      margin-left: 0;
      display: block;
      margin-top: 10px;
    }
  }

  &:hover {
    background: white;
    border: 1px solid var(--orange);
    color: orange;
    padding: 9px 29px;
  }
`

const IndexPage = ({ data }) => {
  const emailPierre = () => {}

  return (
    <Layout>
      <SEO title="Pierre Paul | Passionate Speaker" />
      <HeroSection id="pierre">
        <StyledImg fluid={data.fileName.childImageSharp.fluid} />
        <DivStyled>
          <h2>Poised &amp; Passionate</h2>
          <PStyled>
            CEO and MBA candidate, Pierre Paul, began speaking for audiences in
            high school. After positioning himself as a top speaker in the USA,
            Pierre’s bringing his voice to public and private stages. Please
            contact Pierre directly for speaking requests.
          </PStyled>
        </DivStyled>
        <FloatingBallOne />
        <FloatingBallTwo />
        <FloatingBallThree />
      </HeroSection>
      <StandardSection id="speaking">
        <FlexDiv>
          <DivStyled style={{ marginRight: "50px" }}>
            <h2 style={{ marginTop: 0 }}>Varied &amp; Engaging</h2>
            <p>
              Pierre speaks on a variety of topics and creates a vibrant space
              for people to learn and ask questions. Some of the subject matter
              Pierre talks on includes race, religion, social justice, politics,
              music, history, his immigration experience, and change.
            </p>
          </DivStyled>
          <SideImg fluid={data.side.childImageSharp.fluid} />
        </FlexDiv>
      </StandardSection>
      <StandardSection style={{ backgroundColor: "white" }} id="wellPierre">
        <h2 style={{ marginTop: 0, textAlign: "center", marginBottom: "50px" }}>
          Well Pierre PBS Special
        </h2>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/QsiJOxmyK7Q"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/nY2xBD4jxfI"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </StandardSection>
      <StandardSection
        style={{
          backgroundColor: "var(--lightOrange)",
          paddingBottom: "100px",
        }}
        id="contact"
      >
        <DivStyled style={{ marginRight: "50px", minWidth: "350px" }}>
          <h2 style={{ marginTop: 0, marginBottom: "25px" }}>
            Contact &amp; Resume
          </h2>
          <p>
            Interested in having Pierre speak at your event? Just want to get to
            know him better? Send an email his way. He loves to meet new people
            and learn about new speaking opportunities.
          </p>
        </DivStyled>
        <StyledAnchor href="mailto:pierrepaul71@gmail.com">
          Email Pierre
        </StyledAnchor>
        <StyledAnchor href={Resume} download>
          Download Resume
        </StyledAnchor>
      </StandardSection>
    </Layout>
  )
}

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "Pierre-Tall-Compressed.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    side: file(relativePath: { eq: "pierre-side.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage

/**
 * <SpeakingSection>
      <FlexDiv>
        <BoxDiv>
          <h2>
            Race. Religion. Social Justice. Politics. Music. Black History.
            Immigrating. Change.
          </h2>
        </BoxDiv>
        <PStyled>
          Pierre speaks on a variety of topics and is open to taking on new
          subject matter.
        </PStyled>
      </FlexDiv>
    </SpeakingSection>
 */
