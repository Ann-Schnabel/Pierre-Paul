import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"


const StyledHeader = styled.header`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 680px) {
    display: block;
  }
`
const UlStyled = styled.ul`
  @media only screen and (max-width: 680px) {
    text-align: center;
  }
`
const LiStyled = styled.li`
  display: inline;
  margin-right: 15px;

  &:last-child {
    @media only screen and (max-width: 680px) {
      position: fixed;
      margin: 0;
      padding: 20px 0;
      width: 100%;
      bottom: 0;
      left: 0;
      z-index: 5;
      background-color: var(--lightOrange);
    }
  }
`
const LinkStyled = styled(AnchorLink)`
  text-decoration: none;
  color: var(--black);

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 680px) {
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`
const LinkStyledButton = styled(AnchorLink)`
  border: none;
  padding: 10px 30px;
  background: var(--orange);
  border-radius: 50px;
  font-size: 1.05em;
  text-decoration: none;
  color: var(--black);

  &:hover {
    background: white;
    border: 1px solid var(--orange);
    color: orange;
    padding: 9px 29px;
  }

  @media only screen and (max-width: 680px) {
    padding: 10px 40px;

    &:hover {
      padding: 10px 40px;
    }
  }
`
const BackgroundColorPiece = styled.div`
  position: absolute;
  width: 40%;
  height: 80vh;
  background-color: var(--lightOrange);
  z-index: -1;
  top: 0;
  left: 0;
`
const StyledAnchorLink = styled(AnchorLink)`
  text-decoration: none;
  color: var(--black)
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledAnchorLink to="/#hero"><h1>Pierre Paul</h1></StyledAnchorLink>
    <UlStyled>
      <LiStyled>
        <LinkStyled to="/#speaking">Speaking</LinkStyled>
      </LiStyled>
      <LiStyled>
        <LinkStyled to="/#wellPierre">Well Pierre</LinkStyled>
      </LiStyled>
      <LiStyled>
        <LinkStyled to="/#contact">Resume</LinkStyled>
      </LiStyled>
      <LiStyled>
        <LinkStyledButton to="/#contact">Contact</LinkStyledButton>
      </LiStyled>
    </UlStyled>
    <BackgroundColorPiece />
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
