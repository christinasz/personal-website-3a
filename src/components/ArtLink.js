import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import {colors} from './../constants'

const Art = styled.img`
  padding: 18px;
`;

const Container = styled(NavLink)`
  display: block;
  font-family: 'Montserrat', sans-serif;
	font-weight: 700;
	font-size: 30px;
	text-transform: uppercase;
  color: ${colors.text};
  &:visited {
    color: ${colors.text};
  }
  &:hover, &:focus {
    color: ${colors.textSecondary};
  }
`;

const Title = styled.span`
  display: inline-block;
`;


const ArtLink = (props) => (
  <Container to={props.to} style={props.style}>
      <Art src={props.src}/>      
      <Title>{props.children}</Title>
  </Container>
)

export default ArtLink
