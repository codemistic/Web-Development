import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ReviewItem from '../Components/ReviewItem';
import Fade from 'react-reveal/Fade';

function ReviewsSetion() {
    return (
        <ReviewsStyled>
            <Title title={'Field of Interest'} span={'Field of Interest'} />
            <InnerLayout>
              <Fade>
                <div className="reviews">
                    <ReviewItem
                        text={'Entrepreneurship'}
                    />
                    <ReviewItem
                        text={'Public Speaking'}
                    />
                    <ReviewItem
                        text={'Content Creation'}
                    />
                    <ReviewItem
                        text={'Sales and Marketing'}
                    />
                </div>
              </Fade>
            </InnerLayout>
        </ReviewsStyled>
    )
}

const ReviewsStyled = styled.section`
    .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
            padding: 40px;
        }
    }
`;

export default ReviewsSetion;
