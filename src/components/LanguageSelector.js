import React, { useState } from 'react'
import styled from 'styled-components'

const languages = [
    {
        name: 'Anglia',
        short: 'en',
    },
    {
        name: 'Polska',
        short: 'pl',
    },
    {
        name: 'Polska',
        short: 'pl',
    },
    {
        name: 'Polska',
        short: 'pl',
    },
    {
        name: 'Polska',
        short: 'pl',
    },
    {
        name: 'Polska',
        short: 'pl',
    },
    {
        name: 'Polska',
        short: 'pl',
    },
    {
        name: 'Polska',
        short: 'pl',
    },
    {
        name: 'Polska',
        short: 'pl',
    },
    {
        name: 'Polska',
        short: 'pl',
    },
    {
        name: 'Polska',
        short: 'pl',
    },
    {
        name: 'Polska',
        short: 'pl',
    },
    {
        name: 'Polska',
        short: 'pl',
    },
    {
        name: 'Polska',
        short: 'pl',
    },
    {
        name: 'Polska',
        short: 'pl',
    },
    {
        name: 'Polska',
        short: 'pl',
    },
    {
        name: 'Polska',
        short: 'pl',
    },
    {
        name: 'Polska',
        short: 'pl',
    },

    {
        name: 'Polska',
        short: 'pl',
    },
    {
        name: 'Polska',
        short: 'pl',
    },
    {
        name: 'Polska',
        short: 'pl',
    },
    {
        name: 'Polska',
        short: 'pl',
    },
    {
        name: 'Polska',
        short: 'pl',
    },
    {
        name: 'Polska',
        short: 'pl',
    },
    {
        name: 'Polska',
        short: 'pl',
    },
    {
        name: 'Polska',
        short: 'pl',
    },
    {
        name: 'Polska',
        short: 'pl',
    },

    {
        name: 'Polska',
        short: 'pl',
    },
]

const StyledLanguageSelect = styled.div`
    position: relative;
    background-color: #fff;
`

const LanguagesList = styled.div`
    position: absolute;
    top: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    background-color: #3e3e3e;
    padding: 20px;
    transform: translateX(${({ open }) => (open ? '0' : '-200%')});
    transition: transform 0.5s;
    border: 2px solid #222;
`

const Button = styled.button`
    border: none;
    background-color: transparent;
    color: #fff;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    &:hover {
        background-color: #555;
    }
    cursor: pointer;
`

const LanguageSelect = ({ language, select }) => {
    const [open, setOpen] = useState(false)

    return (
        <StyledLanguageSelect>
            <h3>Wybrany język: {languages.find(({ short }) => short == language).name}</h3>
            <p onClick={() => setOpen(!open)}>Zmień wybrany język</p>

            <LanguagesList open={open}>
                {languages.map(({ name, short }, i) => (
                    <Button
                        key={i}
                        onClick={() => {
                            select(short)
                            setOpen(!open)
                        }}
                    >
                        {name}
                    </Button>
                ))}
            </LanguagesList>
        </StyledLanguageSelect>
    )
}

export default LanguageSelect
