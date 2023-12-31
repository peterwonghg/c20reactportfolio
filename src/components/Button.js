import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
    margin-top: 2rem;
    .button {
        font-size: 3rem;
        font-weight: bold;
        color: #BCB4B4;
        background-color: #383838;
        padding: 0.5em 1em;
        border-radius: 8px;
        display: inline-block;
        border: 2px solid #BCB4B4;
    }
`;

export default function Button({btnLink, btnText}) {
  return (
    <ButtonStyle>
        <Link className="button" to={btnLink}>{btnText}</Link>
    </ButtonStyle>
  )
}
