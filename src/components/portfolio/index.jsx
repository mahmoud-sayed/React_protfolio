import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PortfolioSection, PortfolioTitle, PortfolioTitleSpan, PortfolioList, PortfolioItem, BoxDiv, BoxDivImg, BoxDivOverlay, BoxDivOverlaySpan} from './style';

const Portfolio = () => {
    const [Images, setImages] = useState([]);

    useEffect(()=>{
        axios.get('data/data.json').then(res => setImages(res.data.portfolio))
    }, []);

    const portfolioImages = Images.map((imageItem)=>{
        
        return(
            <BoxDiv key={imageItem.id}>
                <BoxDivImg src={imageItem.image} alt="" />
                <BoxDivOverlay>
                    <BoxDivOverlaySpan>
                        Show Image
                        </BoxDivOverlaySpan>
                </BoxDivOverlay>
            </BoxDiv>
        );
    });
    return (
        <PortfolioSection>

            <PortfolioTitle><PortfolioTitleSpan>My</PortfolioTitleSpan> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>

            <div className="box">
                {portfolioImages}
            </div>

        </PortfolioSection>
    );
};

export default Portfolio;