import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql, withPrefix } from "gatsby"
// import Img from "gatsby-image"
import { Linkedin, GitHub, Twitter, Mail } from "react-feather"

import { Screen, Color } from "../constants"
import { useSiteMetadata } from "../hooks"

export const Sidebar = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "photo.jpg" }) {
  //       childImageSharp {
  //         fixed(width: 80, height: 80, quality: 100) {
  //           ...GatsbyImageSharpFixed_withWebp
  //         }
  //       }
  //     }
  //   }
  // `)
  // const { fixed: avatar } = data.file.childImageSharp
  const { author, menu } = useSiteMetadata()
  return (
    <Container>
      <InnerContainer>
        <Link to="/">
          <AvatarImg
            src={withPrefix("photo.jpg")}
            alt="A dashing photo of David Bergeron"
          />
        </Link>

        <MyName>{author.name}</MyName>

        <BioText>
          I like solving problems and building stuff for the web.
        </BioText>

        <Nav menu={menu} />

        <Contacts contacts={author.contacts} />
      </InnerContainer>
    </Container>
  )
}

const Nav = ({ menu }) => {
  return (
    <StyledNav>
      {menu.map(item => (
        <StyledLink to={item.path} key={item.path}>
          {item.label}
        </StyledLink>
      ))}
    </StyledNav>
  )
}

const Contacts = ({ contacts }) => {
  const { email, linkedin, twitter, github } = contacts
  return (
    <ContactList>
      <li>
        <IconLink href={`mailto:${email}`}>
          <Mail size={24} />
        </IconLink>
      </li>
      <li>
        <IconLink href={`https://www.linkedin.com/in/${linkedin}`}>
          <Linkedin size={24} />
        </IconLink>
      </li>
      <li>
        <IconLink href={`https://www.twitter.com/${twitter}`}>
          <Twitter size={24} />
        </IconLink>
      </li>
      <li>
        <IconLink href={`https://github.com/${github}`}>
          <GitHub size={24} />
        </IconLink>
      </li>
    </ContactList>
  )
}

const Container = styled.div`
  display: block;
  width: 100%;
  padding: 1.5625rem 1.25rem 0;
  @media (min-width: ${Screen.md}) {
    padding: 2.1875rem;
    width: 30%;
  }
`

const InnerContainer = styled.div`
  padding: 30px 20px 0;
  position: relative;
  &:after {
    background: linear-gradient(
      180deg,
      #fff,
      ${Color.primary} 0,
      ${Color.primary} 48%,
      #fff
    );
    position: absolute;
    content: "";
    width: 1px;
    height: 34rem;
    top: 30px;
    right: -10px;
    bottom: 0;
  }
`

const AvatarImg = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`

const MyName = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.82813rem;
  margin: 0.8125rem 0;
`

const BioText = styled.p`
  color: #888;
  line-height: 1.4rem;
  margin-bottom: 1rem;
  font-size: 0.825rem;
`

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #222;
  margin-bottom: 0.5rem;
  transition: 0.15s ease;
  &:hover {
    color: ${Color.primary};
  }
`

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.825rem;
`

const ContactList = styled.ul`
  display: flex;
  list-style: none;
  width: 9rem;
  justify-content: space-between;
`

const IconLink = styled.a`
  color: #555;
  padding: 0.3rem;
  border: 1px solid #d3d3d3;
  border-radius: 50%;
  display: flex;
  align-items: baseline;
  transition: color 0.15s ease-in-out;
  &:hover {
    color: ${Color.primary};
  }
`
