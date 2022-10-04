import React from 'react'
import styled from 'styled-components';
import Image from '../Components/ImageSection';
import Title from '../Components/Title';
import {MainLayout} from '../styles/Layouts';
import Services from '../Components/ServicesSection';
import Reviews from '../Components/ReviewsSetion';
import Particle from '../Components/Particle';

function AboutPage() {
    return (
        <MainLayout>
        <HomePageStyled>
                <div className="particle-con particles">
                    <Particle />
                </div>
                <Title title={'About Me'} span={'About Me'} />
                <Image />
                <Services />
                <Reviews />
        </HomePageStyled>
        </MainLayout>
    )
}

const HomePageStyled = styled.header`
        position: relative;
        .particles{
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: -1;
      }
    `;

export default AboutPage;
