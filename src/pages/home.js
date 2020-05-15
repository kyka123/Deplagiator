import React, { useState } from 'react'
import styled from 'styled-components'

const Textarea = styled.textarea`
    resize: none;
    width: 40%;
    height: 80%;
    border: none;
    border-radius: 20px;
    padding: 20px;
    outline: none;
    box-shadow: 0 5px 5px 5px #3d4043;
    background-color: #181a1b;
    font-size: ${({ len }) => checkLen(len)};
    color: #fff;
    font-weight: 200;
    font-family: arial;
    @media (max-width: 800px) {
        width: 90%;
        height: 45%;
    }
    &::placeholder {
        font-family: 'Ms Gothic';
    }
`
const StyledHome = styled.div`
    position: relative;
    height: calc(100vh - 150px);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width: 800px) {
        flex-direction: column;
        height: calc(100vh - 105px);
    }
`

const Home = () => {
    const [responseText, setResponseText] = useState('')
    const [loading, setLoading] = useState(false)
    const [textLen, setTextLen] = useState(0)
    const write = ({ target }) => {
        send(target.value)
    }

    const send = debounce(text => {
        setLoading(true)
        setTextLen(text.length)
        const url = '/api/'
        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                text,
                language: 'pl',
            }),
        }
        try {
            fetch(url, options)
                .then(response => {
                    response
                        .json()
                        .then(({ text }) => {
                            setResponseText(text)
                        })
                        .catch(err => setResponseText('Błąd servera'))
                })
                .catch(err => setResponseText('Błąd servera'))
                .finally(() => {
                    setLoading(false)
                })
        } catch (error) {
            setResponseText('Błąd servera')
        }
    }, 2000)

    return (
        <StyledHome>
            <Textarea
                onChange={write}
                placeholder="Write here"
                len={textLen}
            ></Textarea>
            <Textarea
                disabled
                placeholder="Your Response"
                len={textLen}
                value={loading ? '...loading' : responseText || ''}
            ></Textarea>
        </StyledHome>
    )
}

function checkLen(len) {
    if (len < 600) {
        return `1.5em`
    } else if (len <= 1200) {
        return `1.2em`
    } else if (len < 1200) {
        return `1em`
    }
}

function debounce(func, wait, immediate) {
    var timeout
    return function () {
        var context = this,
            args = arguments
        var later = function () {
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        var callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}

export default Home
