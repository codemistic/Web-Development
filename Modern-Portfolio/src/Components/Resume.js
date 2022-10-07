import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';
import PrimaryButton from './PrimaryButton';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'Jan 2021 - Present'}
                        title={'Co-Founder and Chief Development Officer (CDO)'}
                        subTitle={'Admisure Educational Services Pvt.Ltd.'}
                        text={'- Formulates short and long-term goals concerning the fundraising efforts of the organization.'}
                        text1={'- Develop actionable strategies for meeting and exceeding those goals through fundraising events.'}
                        text2={'- Structure the resource development team to best approach a variety of financial development goals.'}
                        text3={'- Raise awareness of the organization and its primary goals through outreach efforts, regular events in the community, publications, and media relations.'}
                        text4={'- Discover new and potentially lucrative revenue streams for expansion of the organization’s fundraisingefforts.'}
                        text5={'- Identifies top investment opportunities for existing holdings'}
                        text6={'- Tracks revenue and fundraising trends, then uses the information to predict future opportunities forexpansion efforts and avoid any downtrends in individual, corporate, or foundation gifts.'}
                        text7={'- Plan and oversees fundraising events to make sure all investor needs are met and fundraising goalsare achieved.'}
                        text8={'- Serves as primary contact for all fundraising events, coordinating vendors. Create schedules for each.'}
                        text9={'- Publishes regular updates on major events and success of the organization.'}
                        text10={''}
                    />
                    <PrimaryButton title={'Company Website'} link={'https://admisure.com'} />
                    <ResumeItem
                        year={'Aug 2017 - Jul 2021'}
                        title={'Content Writer'}
                        subTitle={'HITian Inside'}
                        text={'-E-Media of the college posting information at a highly effective rate'}
                        text1={'-Curating content for Facebook posts and Instagram posts'}
                        text2={'-Handling Social Media handles for better online presence'}
                        text3={'-Maintaining proficiency among writers'}
                        text4={'-Handling a dedicated team of juniors recruited for the college E-Media'}
                        text5={'-Organizing Fests and other cultural activities'}
                        text6={''}
                        text7={''}
                        text8={''}
                        text9={''}
                        text10={''}
                    />
                    <ResumeItem
                        year={'Aug 2017 - Jul 2021'}
                        title={'Public Relations Coordinator'}
                        subTitle={'HITian Inside'}
                        text={'-E-media of the college providing various news of Workshops, events, fests and the like inside of theinstitute premises.'}
                        text1={'-Conducted events like Extravaganza, almost a mini fest'}
                        text2={'-Responsible for handling a dedicated team of juniors'}
                        text3={'-Conducting Interviews of eminent personalities in college'}
                        text4={''}
                        text5={''}
                        text6={''}
                        text7={''}
                        text8={''}
                        text9={''}
                        text10={''}
                    />
                    <ResumeItem
                        year={'Jul 2020 - May 2021'}
                        title={'Co-Founder'}
                        subTitle={'Arttreum'}
                        text={''}
                        text1={'ARTTREUM is on a mission to act as a bridge between Artists and Agencies to relieve the massivemedia community of the conventional and unorganized “middle men” for the best talent-hiring in thecountry.'}
                        text2={' '}
                        text3={'It is a platform established to find raw and undiscovered talent from all across India. We believe, inevery person there is a star waiting to be born.'}
                        text4={'The Best Actor, The Best Singer, The Best Writer. Webelieve we provide the perfect launchpad for all of them.'}
                        text5={' '}
                        text6={'We aim to revolutionize the current dynamics of the Industry by allowing media houses, Production andCasting Agencies to get the best of talents Pan India on a single platform without the hassle of reachingout to mutual connections.'}
                        text7={''}
                        text8={''}
                        text9={''}
                        text10={''}
                    />
                    <ResumeItem
                        year={'Nov 2019 - Jan 2021'}
                        title={'Freelance Writer'}
                        subTitle={'Fiverr'}
                        text={''}
                        text1={''}
                        text2={''}
                        text3={''}
                        text4={''}
                        text5={''}
                        text6={''}
                        text7={''}
                        text8={''}
                        text9={''}
                        text10={''}
                    />
                    <ResumeItem
                        year={'Nov 2019 - Jan 2021'}
                        title={'Freelance Writer'}
                        subTitle={'Upwork'}
                        text={''}
                        text1={''}
                        text2={''}
                        text3={''}
                        text4={''}
                        text5={''}
                        text6={''}
                        text7={''}
                        text8={''}
                        text9={''}
                        text10={''}
                    />
                    <ResumeItem
                        year={'Nov 2019 - Dec 2020'}
                        title={'Marketing Team Member'}
                        subTitle={'Admisure Educational Services Pvt.Ltd.'}
                        text={'- overseeing and developing marketing campaigns'}
                        text1={'- conducting research and analyzing data to identify and define audiences'}
                        text2={'- devising and presenting ideas and strategies'}
                        text3={'- promotional activities'}
                        text4={'- compiling and distributing financial and statistical information'}
                        text5={'- writing and proofreading creative copy'}
                        text6={'- maintaining websites and looking at data analytics'}
                        text7={'- updating databases and using a customer relationship management (CRM) system'}
                        text8={'- coordinating internal marketing and an organization’s culture'}
                        text9={'- monitoring performance'}
                        text10={'- managing campaigns on social media.'}
                    />
                    <ResumeItem
                        year={'Jan 2020 - Oct 2020'}
                        title={'Marketing Manager'}
                        subTitle={'Fleapo'}
                        text={'-Generating leads for Business'}
                        text1={'-Building relationship with Clients'}
                        text2={'-Engaging new ideas for business'}
                        text3={'-Devising New Strategies for Business'}
                        text4={''}
                        text5={''}
                        text6={''}
                        text7={''}
                        text8={''}
                        text9={''}
                        text10={''}
                    />
                    <ResumeItem
                        year={'Dec 2019 - Jan 2020'}
                        title={'Vocational Trainee'}
                        subTitle={'Indian Oil Corporation Limited'}
                        text={'-2 weeks of Industrial Training at Haldia Refinery'}
                        text1={'-Learnt about the working of various instruments'}
                        text2={'-Had an overview of Crude Oil Processing'}
                        text3={'-Total Crude processing capacity of Haldia Refinery is 7.5 Million Metric Ton per Annum'}
                        text4={'-Various end products as LPG, Naptha, Bitumen, Furnace Oil and Aviation Turbine Fuel, Motor Spiritand many others being produced daily'}
                        text5={'-Thermal Power Station for generating Electricity from Turbines'}
                        text6={'-Control room for LPG for better understanding'}
                        text7={''}
                        text8={''}
                        text9={''}
                        text10={''}
                    />
                    <ResumeItem
                        year={'Nov 2019 - Feb 2020'}
                        title={'Freelance Writer'}
                        subTitle={'Collegedunia'}
                        text={'-Creating contents for College reviews of India and Abroad'}
                        text1={''}
                        text2={''}
                        text3={''}
                        text4={''}
                        text5={''}
                        text6={''}
                        text7={''}
                        text8={''}
                        text9={''}
                        text10={''}
                    />
                    <ResumeItem
                        year={'Aug 2019 - Jan 2020'}
                        title={'QnA Specialist'}
                        subTitle={'Careers360'}
                        text={'-Answering questions related to Engineering, Medical, Architecture and Marine fields'}
                        text1={'-Maintaining the proficiency of the answers'}
                        text2={'-Proofreading of already written answers'}
                        text3={''}
                        text4={''}
                        text5={''}
                        text6={''}
                        text7={''}
                        text8={''}
                        text9={''}
                        text10={''}
                    />
                    <ResumeItem
                        year={'Aug 2019 - Oct 2019'}
                        title={'Content Creator'}
                        subTitle={'eCraftIndia'}
                        text={'-Curating Content for Blog posts'}
                        text1={'-Writing SEO optimized content for articles listed on the website'}
                        text2={''}
                        text3={''}
                        text4={''}
                        text5={''}
                        text6={''}
                        text7={''}
                        text8={''}
                        text9={''}
                        text10={''}
                    />
                    <ResumeItem
                        year={'Oct 2017 - Oct 2019'}
                        title={'Content Writer'}
                        subTitle={'Admisure Educational Services Pvt.Ltd.'}
                        text={'- Conducting in-depth research on industry-related topics in order to develop original content.'}
                        text1={'- Developing content for blogs, articles, product descriptions, social media, and the company website.'}
                        text2={'- Assisting the marketing team in developing content for advertising campaigns.'}
                        text3={'- Proofreading content for errors and inconsistencies.'}
                        text4={'- Editing and polishing existing content to improve readability.'}
                        text5={'- Creating compelling headlines and body copy that will capture the attention of the target audience.'}
                        text6={'- Identifying customers’ needs and recommending new content to address gaps in the company current content.'}
                        text7={''}
                        text8={''}
                        text9={''}
                        text10={''}
                    />
                    <ResumeItem
                        year={'Oct 2018 - Nov 2018'}
                        title={'Content Writer'}
                        subTitle={''}
                        text={'-Giving articles on the basis of requirement'}
                        text1={'-Converting regular Resumes and CV to article form for establishment of authority'}
                        text2={'-CVs of eminent personalities from all over India for Teachers excellence award'}
                        text3={'-Bridging the gap between academics and Industry with fine contents to be posted on walls'}
                        text4={'-Internship duration of just a month'}
                        text5={''}
                        text6={''}
                        text7={''}
                        text8={''}
                        text9={''}
                        text10={''}
                    />
                    <ResumeItem
                        year={'Mar 2018 - Apr 2018'}
                        title={'Social Work'}
                        subTitle={'WERP-India'}
                        text={'-Developed engaging content for website'}
                        text1={'-Curated various blog posts'}
                        text2={'-Developed posts for Social media handles'}
                        text3={'-Engaging contents on Women Empowerment'}
                        text4={''}
                        text5={''}
                        text6={''}
                        text7={''}
                        text8={''}
                        text9={''}
                        text10={''}
                    />
                    <ResumeItem
                        year={'Mar 2017 - Sep 2017'}
                        title={'Content Writer'}
                        subTitle={'Content Writer Admisure Educational Services Pvt.Ltd.'}
                        text={'-Designing content marketing strategy for the team'}
                        text1={'-Making brand presence through online contents'}
                        text2={'-Facebook posts content creation'}
                        text3={'-Curating contents for subsidiary websites'}
                        text4={'-Maintaining work proficiency'}
                        text5={'-Suggestions for Social Media Marketing'}
                        text6={''}
                        text7={''}
                        text8={''}
                        text9={''}
                        text10={''}
                    />

                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem
                        year={'2017 - 2021'}
                        title={'Bachelor of Technology - BTech, Instrumentation and Control'}
                        subTitle={'Haldia Institute of Technology'}
                        text={'-Content Writer at HITian Inside'}
                        text1={'-Was the runner up at Extempore event in Annual Cultural Meet'}
                        text2={'-Volunteer at Annual Cultural Meet'}
                        text3={'-Delegate of Columbia at Model United Nations'}
                        text4={'-Core team member at HIT Literary Club'}
                        text5={'-Team member at ISA and ISOI'}
                    />
                    <ResumeItem
                        year={'2015 - 2017'}
                        title={'High School, Science'}
                        subTitle={'Gyan Bharati Vidyapith'}
                        text={''}
                        text1={''}
                        text2={''}
                        text3={''}
                        text4={''}
                        text5={''}
                    />
                    <ResumeItem
                        year={'2004 - 2015'}
                        title={'Matriculation'}
                        subTitle={'St Anthonys High School'}
                        text={''}
                        text1={''}
                        text2={''}
                        text3={''}
                        text4={''}
                        text5={''}
                    />

                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
