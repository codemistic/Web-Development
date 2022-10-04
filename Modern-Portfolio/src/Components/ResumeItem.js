import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function ResumeItem({year, title, subTitle, text, text1, text2, text3, text4, text5, text6, text7, text8, text9, text10}) {
    return (
        <ResumeItemStyled>
          <Fade top>
            <div className="left-content">
                <p>{year}</p>
            </div>
          </Fade>
            <Fade right>
              <div className="right-content">
                  <h5>{title}</h5>
                  <h6>{subTitle}</h6>
                  <p>{text}</p>
                  <p>{text1}</p>
                  <p>{text2}</p>
                  <p>{text3}</p>
                  <p>{text4}</p>
                  <p>{text5}</p>
                  <p>{text6}</p>
                  <p>{text7}</p>
                  <p>{text8}</p>
                  <p>{text9}</p>
                  <p>{text10}</p>
              </div>
            </Fade>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
    display: flex;
    &:not(:last-child){
        padding-bottom: 3rem;
    }
    .left-content{
        width: 50%;
        padding-left: 20px;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: -10px;
            top: 5px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background-color: var(--background-dark-color);
        }
        p{
            display: inline-block;
            font-size: 1rem;
        }
    }
    .right-content{
        padding-left: 5rem;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 15px;
            height: 2px;
            width: 3rem;
            background-color: var(--border-color);
        }
        h5{
            color: var(--primary-color);
            font-size: 2rem;
            padding-bottom: .5rem;
        }
        h6{
            padding-bottom: .7rem;
            font-size: 1.5rem;
        }
    }
`;
export default ResumeItem;
