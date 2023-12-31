import React from 'react'
import styled from 'styled-components';

const PStyle = styled.div`
    color: #BCB4B4;
    max-width: 1000px;
    margin: 0 auto;
    font-size: 1.8rem;
    line-height: 2rem;
    text-align: center;
    @media only screen and (max-width: 768px) {
      font-size: 1.4rem;    
`;


export default function PText(props) {
  return (
    <PStyle>
        <p>{props.children}</p>
    </PStyle>
  )
}
