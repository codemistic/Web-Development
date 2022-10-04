import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function ServiceCard({image, title, paragraph}) {
    return (
        <ServiceCardStyled >
            <div className="container">
                <img src={image} alt=""/>
                <Fade top>
                  <h2>{title}</h2>
                  <p>{paragraph}</p>
                </Fade>
            </div>
        </ServiceCardStyled >
    )
}

const ServiceCardStyled = styled.div`
    background-color: var(--background-dark-grey);
    border-left: 1px solid var(--border-color);
    border-top: 8px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    transition: all .4s ease-in-out;
    &:hover{
        border-top: 8px solid var(--primary-color);
        transform: translateY(3px);
        background-color: lightyellow;
    }
    .container{
        padding: 1.2rem;
        h4{
            color: var(--white-color);
            font-size: 1.6rem;
            padding: 1rem 0;
            position: relative;
            &::after{
                content: "";
                width: 4rem;
                background-color: var(--border-color);
                height: 3px;
                position: absolute;;
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }
        h2{
          font-size: 1.6rem;
          padding: 1rem 0;
        }

        p{
            padding: .8rem 0;
        }
    }
`;

export default ServiceCard;
