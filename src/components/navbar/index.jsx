import React from 'react';
import { NavbarSction, Logo, LogoText, UlList, ListItem, Anchor, LinkStyle } from './style';

const Navbar = () => {
    return (
        <NavbarSction>
            <div className="container">
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                <UlList>
                    <ListItem><LinkStyle to="/">Home</LinkStyle></ListItem>
                    <ListItem><Anchor href="#">Work</Anchor></ListItem>
                    <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                    <ListItem><Anchor href="#">About</Anchor></ListItem>
                    <ListItem><LinkStyle to="/contact">Contact</LinkStyle></ListItem>
                </UlList>
            </div>
        </NavbarSction>
    );
};

export default Navbar;