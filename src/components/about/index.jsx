import React from 'react';
import { CreativeSection, CreativeInfo, InfoTitle, InfoTitleSpan, InfoDir, InfoDesc, A} from './style';

const About = () => {
    return (
        <CreativeSection>
            <div className="container">
                <CreativeInfo>
                    <InfoTitle><InfoTitleSpan>This is</InfoTitleSpan> Me</InfoTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <A>explicabo</A> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </CreativeInfo>
            </div>
        </CreativeSection>
    );
};

export default About;