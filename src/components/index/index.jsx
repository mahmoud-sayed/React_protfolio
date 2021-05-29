import React from 'react';
import About from './../about/index';
import Footer from './../footer/index';
import Home from './../home/index';
import Portfolio from './../portfolio/index';
import Profile from './../profile/index';
import SocialMedia from './../socialMedia/index';
import Work from './../work/index';

const App = () => {
    return (
        <div>
            <Home />
            <Work />
            <Portfolio />
            <Profile />
            <About />
            <SocialMedia />
            <Footer />
        </div>
    );
};

export default App;