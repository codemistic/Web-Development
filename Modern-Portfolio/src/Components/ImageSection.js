import React from 'react'
import styled from 'styled-components';
import resume from '../img/me.jpg';
import PrimaryButton from './PrimaryButton';
import { Wave1 } from '../data/examples.js';
import Fade from 'react-reveal/Fade';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="resume"/>
                <PrimaryButton title={'Company Website'} link={'https://admisure.com'} />
            </div>
            <div className="right-content">
                <h4>I am <span> <Wave1 /></span></h4>
                <Fade top>
                  <p className="paragraph">
                  For a 22-year-old who’s freshly baked out of college, I hope you’ll find my about interesting.
                  I outwork. I outwork everyone because Herbert’s theory (yes, not Darwin’s) of the SURVIVAL OF THE FITTESThas been ingrained into my intellect for quite a long time.
                  </p>
                  <p className="paragraph">
                  The GET-THINGS-DONE mindset and the knack to speak, write and deliver were one of the key competenciesthat I have nurtured in the past 13 years to make it one of my biggest strengths.
                  </p>
                  <p className="paragraph">
                  Volunteered at many events in my university. Participated in Content Writing, a bit of Show biz and Drama,debates, cultural song events, MUN’s and more only with one motive, to sharpen the edges of my already knownstrengths. All of that has shaped me into Md Aquiluzzaman Ansari today.
                  Commenced my journey with Content Writing for various Startups, almost 5, made way for honing my marketingskills, and learned more about customer acquisition, lead generation, tactics used for rigorous word-of-mouth, andinorganic strategies for creating brand awareness, and more.
                  </p>
                  <p className="paragraph">
                  Co-Founded Arttreum Talent Space with a vision to bridge the gap between local artists and aggregate them tothe industry but couldn’t survive for long due to lack of experience, expertise which resulted in lonely nights ofutmost hardship to keep it running.
                  </p>
                  <p className="paragraph">
                  Currently serving as the CDO of Admisure and this time I’m putting in every inch of effort I have to scale this multi-billion-dollar product into the market. Can you help me raise funds for my baby?

                  Admisure is a test-prep marketplace mainly focused on government exams of India with a key focus on makingeducators self-reliable by easing out the hard-labored manual process of reviewing answer sheets.
                  I am back stronger. More powerful. And most certainly with a hell of a lot of experience to create a stir in thisstartup ecosystem.
                  </p>
                </Fade>
                <Fade bottom>
                <div className="about-info">
                    <div className="info-title">
                        <p>Nationality</p>
                        <p>Location</p>
                    </div>
                    <div className="info">
                        <p>: Indian </p>
                        <p>: Kolkata West Bengal</p>
                    </div>
                </div>
                </Fade>
                <PrimaryButton title={'Download Cv'} link={'https://drive.google.com/file/d/1-X4sDXo_1R05nHfOJNeOMhuKjqTQ9ee8/view?usp=sharing'} />
                <hr />
                <br />
                <PrimaryButton title={'Company Website'} link={'https://admisure.com'} />
            </div>

        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        padding: 40px;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 1.8rem;
            }
            @media screen and (max-width:500px){
              span{
                  font-size: 1.2rem;
              }
            }
            @media screen and (max-width:320px){
              span{
                  font-size: .95rem;
              }
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
