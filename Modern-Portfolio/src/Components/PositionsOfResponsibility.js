import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ResumeItem from '../Components/ResumeItem';
import PrimaryButton from './PrimaryButton';

function PositionOfResponsibility() {
    return (
        <ResumeStyled>
            <Title title={'Position of Responsibility'} span={''} />
            <InnerLayout>
                <div className="resume-content">
                    <ResumeItem
                        year={'Jan 2021 - Present'}
                        title={'Co-founder & Chief Development Officer'}
                        subTitle={'Admisure'}
                    />
                    <PrimaryButton title={'Company Website'} link={'https://admisure.com'} />
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default PositionOfResponsibility;
