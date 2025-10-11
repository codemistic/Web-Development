import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function ProgressBar({title, width, text}) {
    return (
        <ProgressBarStyled>
            <h6>{title}</h6>
            <Fade top>
              <div className="progress-bar">
                  <p>{text}</p>
                  <div className="progress">
                      <span style={{width: width}}></span>
                  </div>
              </div>
            </Fade>
        </ProgressBarStyled>
    )
}

const ProgressBarStyled = styled.div`
    .progress-bar{
        display: flex;
        align-items: center;
        p{
            padding-right: 1.1rem;
        }
        .progress{
            position: relative;
            width: 100%;
            height: .4rem;
            background-color: var(--border-color);
            span{
                position: absolute;
                left: 0;
                bottom: 0;
                height: 100%;
                background-color: var(--primary-color)
            }
        }
    }
`;

export default ProgressBar;
