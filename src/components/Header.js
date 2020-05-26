import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Title = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 4em;
    @media (max-width: 800px) {
        font-size: 2em;
    }
`

const StyledHeader = styled.header`
    background-color: #21cdae;
    position: relative;
    height: 100px;
    padding: 20px;
    top: 0;
    left: 0;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    @media (max-width: 800px) {
        height: 60px;
        padding: 10px;
        align-items: center;
    }
`

const Nav = styled.nav``

const White = styled.span`
    color: #fff;
`

const StyledNavLink = styled(NavLink)`
    margin-left: 50px;
    color: #000;
    text-decoration: none;
    font-size: 1.2em;

    @media (max-width: 800px) {
        margin-left: 10px;
        font-size: 1em;
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
            <StyledNavLink to="/contact" activeClassName="active">
                Contact
            </StyledNavLink>
        </Nav>
    </StyledHeader>
)

export default Header
