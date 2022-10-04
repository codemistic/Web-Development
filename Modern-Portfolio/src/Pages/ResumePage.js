import React from 'react';
import Skills from '../Components/Skills';
import styled from 'styled-components';
import { MainLayout} from '../styles/Layouts';
import Resume from '../Components/Resume';
import PositionsOfResponsibility from '../Components/PositionsOfResponsibility';
import Particle from '../Components/Particle';

function ResumePage() {
    return (
        <MainLayout>
          <HomePageStyled>
            <div className="particle-con particles">
                <Particle />
            </div>
            <Resume />
            <Skills />
            <PositionsOfResponsibility />
          </HomePageStyled>
        </MainLayout>
    )
}

const HomePageStyled = styled.header`
        .particles{
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: -1;
      }
    `;

export default ResumePage
