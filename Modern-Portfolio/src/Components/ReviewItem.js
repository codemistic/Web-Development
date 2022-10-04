import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function ReviewItem({text}) {
    return (
      <Fade left>
          <RevivewItemStyled>
              <p>{text}</p>
          </RevivewItemStyled>
          </Fade>
    )
}

const RevivewItemStyled = styled.div`
    padding: 2rem 1rem;
    border-left: 6px solid var(--border-color);
    background-color: var(--background-dark-grey);
    position: relative;
    width: 100%;
    &:not(:first-child){

    }
    &:hover{
      background-color: lightyellow;
      color: black;
    }
    &::after{
        content: "";
        position: absolute;
        left: 2rem;
        border-width: .8rem;
        top: 100%;
        border-style: solid;
        border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey);
    }
    p{
        padding: 1rem 0;
    }
`;

export default ReviewItem;
