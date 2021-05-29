import React from 'react';
import { HomeSection, HomeInformation, HomeTitle, HomeInfo, HomeDesc, SpanSection, HomeBtn, } from './style.jsx';

const Home = () => {
    return (
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Hamza Nabil</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <SpanSection>UX Designer</SpanSection> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you.
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>

    );
};

export default Home;