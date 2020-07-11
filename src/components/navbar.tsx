import React from "react"
import styled from "styled-components"
import { Menu } from "react-feather"
import { dark } from "../design/colors"

const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 2px ${dark[20]};
  margin-bottom: 4rem;
  padding: 0 10px;
`

const NavbarLogo = styled.h1`
  font-size: 2em;
`

const Navbar = (): JSX.Element => (
  <NavbarWrapper>
    <NavbarLogo>Quill Writers</NavbarLogo>
    <Menu />
  </NavbarWrapper>
)

export default Navbar
