import React, { useEffect } from 'react'
import styled from 'styled-components';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Particle from '../Components/Particle';
import { init } from 'ityped';
import { Wave1 } from '../data/examples.js';


function HomePage() {

    useEffect(() => {
        const myElement = document.querySelector('#myElement')
      	init(myElement, { showCursor: false, strings: ['Public Relations & Outreach Programs Manager', 'Content Writer', 'Sales & Marketing Enthusiast' ] });
    },[]);
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h4 className='text'> <Wave1 /> </h4>
                <h3>Hi, I am a <span id='myElement'></span></h3>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/mdaquil/" rel="noreferrer" target="_blank" className="icon i-youtube">
                        <LinkedIcon />
                    </a>
                    <a href="https://twitter.com/Aquiluzzaman" rel="noreferrer" target="_blank" className="icon i-github">
                        <TwitterIcon />
                    </a>
                    <a href="https://www.facebook.com/mdaquiluzzaman/" rel="noreferrer" target="_blank" className="icon i-youtube">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.instagram.com/akeel_zama/" rel="noreferrer" target="_blank" className="icon i-github">
                        <InstagramIcon />
                    </a>
                  </div>
                <div className='icons'>
                    <a href="https://www.crunchbase.com/person/md-aquiluzzaman-ansari" rel="noreferrer" target="_blank" className="icon i-youtube">
                        <img src="data:image/png;base64,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" alt=""/>
                    </a>
                    <a href="https://angel.co/u/md-aquiluzzaman-ansari" rel="noreferrer" target="_blank" className="icon i-github">
                        <img src="https://cdn3.iconfinder.com/data/icons/ultimate-social/150/47_angel_list-512.png" alt=""/>
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;




        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            img{
              width: 50px;
              border: 2px solid var(--border-color);
              border-radius: 50%;
            }
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
