import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';

import {colors} from './../constants'

const Navbar = styled.ul `
    background-color: ${colors.primary};
    padding: 0;
    margin: 0;
    text-align: center;
    list-style-type: none;
`;

const StyledNavLink = styled(NavLink)`
    padding: 8px;
    display: inline-block;
    font-weight: 600;
    color: ${colors.link};
    &:visited {
        color: ${colors.link};
    }
    &:hover, &:focus {
        color: ${colors.linkHover};
    }
`;

const activeStyle = {
  borderBottom: '3px solid white',
  color: '#fff'
}

class NavHeader extends Component {
    render() {
        return (
            <Navbar>
                <StyledNavLink to='/' exact activeStyle={activeStyle}>Home</StyledNavLink>
                <StyledNavLink to='/resume' activeStyle={activeStyle}>Résumé</StyledNavLink>
                <StyledNavLink to='/projects' activeStyle={activeStyle}>Projects</StyledNavLink>
                <StyledNavLink to='/lecture-notes' activeStyle={activeStyle}>Lecture Notes</StyledNavLink>
            </Navbar>
        )
    }
}

export default NavHeader;