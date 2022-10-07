import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>

                <Title title={'Skills'} span={'skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar
                            title={'Marketing'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar
                            title={'Sales'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar
                            title={'Content Writing'}
                            width={'95%'}
                            text={'95%'}
                        />
                        <ProgressBar
                            title={'Public Speaking'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar
                            title={'Social Media Optimization (SMO)'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar
                            title={'Search Engine Optimization (SEO)'}
                            width={'90%'}
                            text={'90%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
            padding: 40px;
        }
    }
`;

export default Skills;
