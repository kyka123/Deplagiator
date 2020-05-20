import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Title = styled.h1`
    margin: 30px;
    padding: 0;
    font-size: 4em;
    @media (max-width: 800px) {
        font-size: 3em;
        margin: 20px;
    }
    @media (max-width: 600px) {
        font-size: 1.5em;
    }
`

const StyledHeader = styled.header`
    color: #000;
    background-color: #21cdae;
    position: relative;
    top: 0;
    left: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

const Nav = styled.nav`
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 30px;
    margin-bottom: 20px;
    @media (max-width: 800px) {
        margin-right: 20px;
    }
`

const White = styled.span`
    color: #fff;
`

const StyledNavLink = styled(NavLink)`
    margin-left: 50px;
    color: #000;
    text-decoration: none;
    font-size: 1.2em;
    @media (max-width: 800px) {
        margin-left: 20px;
    }
    @media (max-width: 600px) {
        font-size: 1em;
        margin-left: 15px;
    }
    &.active {
        border-bottom: 2px solid #000;
    }
`

const Header = () => (
    <StyledHeader>
        <Title>
            <White>De</White>plagiator
        </Title>
        <Nav>
            <StyledNavLink to="/home" activeClassName="active">
                Home
            </StyledNavLink>
            <StyledNavLink to="/about" activeClassName="active">
                About
            </StyledNavLink>
        </Nav>
    </StyledHeader>
)

export default Header
