import React, { useState } from 'react'
import styled from 'styled-components'
import Arrow from 'assets/icons/Arrow.svg'

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
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const LanguagesList = styled.div`
    position: absolute;
    top: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    grid-template-rows: repeat(auto, 1fr);
    background-color: #3e3e3e;
    padding: 20px 0;
    transform: translateX(${({ open }) => (open ? '0' : '-200%')});
    transition: transform 0.3s;
    border-bottom: 2px solid #222;
    border-top: 2px solid #222;
    border-radius: 10px;
    @media (min-width: 600px) {
        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    }
`

const Button = styled.button`
    border: none;
    color: #fff;
    font-size: 20px;
    padding: 10px 0;
    border-radius: 5px;
    background-color: ${({ selected }) => (selected ? '#444' : 'transparent')};

    &:hover {
        background-color: #555;
    }
    &:focus {
        background-color: #555;
        outline: none;
    }
    cursor: pointer;
`

const Select = styled.div`
    background-color: #3e3e3e;
    height: auto;
    padding: 17px 20px;
    border-top: 2px solid #21cdae;
    color: #fff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    justify-content: space-between;
`

const Title = styled.h3`
    margin: 0;
    padding: 0 0 10px 0;
    color: #35776e;
`

const ArrowIcon = styled.img`
    width: 30px;
    transform: rotate(${({ open }) => (open ? '0.5turn' : '0')});
    transition: transform 0.3s;
    &::selection {
        background-color: transparent;
    }
`

const LanguageSelect = ({ language, select }) => {
    const [open, setOpen] = useState(false)
    const selectedLang = languages.find(({ short }) => short == language)
    return (
        <StyledLanguageSelect onClick={() => setOpen(!open)}>
            <Title>Wybierz język</Title>
            <Select>
                <span>{selectedLang.name}</span>
                <ArrowIcon open={open} src={Arrow} />
            </Select>
            <LanguagesList open={open}>
                {languages.map(({ name, short }, i) => (
                    <Button key={i} selected={selectedLang.short === short} onClick={() => select(short)}>
                        {name}
                    </Button>
                ))}
            </LanguagesList>
        </StyledLanguageSelect>
    )
}

export default LanguageSelect
