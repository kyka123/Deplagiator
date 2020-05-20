import React from 'react'
import styled from 'styled-components'

const AboutTitle = styled.h2`
    font-size: 3em;
    color: #fff;
    transform: translateX(-100px);
    padding: 0;
    margin: 0 0 0 0;
    @media (max-width: 800px) {
        transform: translateX(-20px);
    }
`

const StyledAbout = styled.div`
    padding: 40px 100px 0 100px;
    font-size: 20px;
    @media (max-width: 800px) {
        padding: 40px 5px 0 5px;
        font-size: 16px;
        margin: 0;
    }
`

const AboutParagraph = styled.p`
    text-align: justify;
    color: #21cdae;
    margin: 60px 0 0 0;
`

const AboutContainer = styled.div`
    padding: 0 15%;
    @media (max-width: 800px) {
        padding: 0 10%;
    }
`

const ContactContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 120px 0 0 0;
    @media (max-width: 800px) {
        margin: 50px 20px 0 20px;
        flex-direction: column;
    }
`

const ContactParagraph = styled.p`
    width: 40%;
    color: #fff;
    text-align: ${({ secondary }) => (secondary ? 'right' : 'left')};
    border-right: ${({ secondary }) => (secondary ? 'none' : '2px solid #fff')};
    border-left: ${({ secondary }) => (!secondary ? 'none' : '2px solid #fff')};
    @media (max-width: 800px) {
        width: 100%;
        margin-bottom: 50px;
    }
`

const Green = styled.span`
    color: #21cdae;
`

const About = () => (
    <StyledAbout>
        <AboutContainer>
            <AboutTitle>About US:</AboutTitle>
            <AboutParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                elementum luctus lorem, ac ornare quam tempor eu. Suspendisse id
                efficitur tellus, nec interdum ante. Fusce vehicula augue mollis
                cursus pharetra. In id faucibus ex, molestie rhoncus arcu. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu
                nulla, varius et turpis eu, feugiat sollicitudin elit. Fusce
                tincidunt vel velit ut venenatis. Vestibulum ultrices eros
                augue, ut aliquam leo porttitor nec. Nulla sed tempor nulla.
                Phasellus dignissim rhoncus nulla, vel vestibulum magna
                elementum non.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nulla elementum luctus lorem, ac ornare quam tempor eu.
                Suspendisse id efficitur tellus, nec interdum ante. Fusce
                vehicula augue mollis cursus pharetra. In id faucibus ex,
                molestie rhoncus arcu. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Donec arcu nulla, varius et turpis eu, feugiat
                sollicitudin elit. Fusce tincidunt vel velit ut venenatis.
                Vestibulum ultrices eros augue, ut aliquam leo porttitor nec.
                Nulla sed tempor nulla. Phasellus dignissim rhoncus nulla, vel
                vestibulum magna elementum non.
            </AboutParagraph>
        </AboutContainer>
        <ContactContainer>
            <ContactParagraph>
                If for you wloud like to report a <Green>bug</Green> or share
                some <Green>geat ideas</Green>, you can reach us here:
                <br />
                <br /> <Green>example@emai.com</Green>
                <br />
                <br /> <Green>example@emai.com</Green>
            </ContactParagraph>
            <ContactParagraph secondary>
                If you want to <Green>help improve</Green> this website,
                <Green>support</Green>
                our future projects or maybe just say <Green>thanks</Green>:
                <br />
                <br /> <Green>www.paypal.com/accountname</Green>
            </ContactParagraph>
        </ContactContainer>
    </StyledAbout>
)

export default About
