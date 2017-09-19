import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import {colors} from './../constants'


function randomDegree() {
  return Math.floor(Math.random() * 360);
}

const Art = styled.img`
  width: ${props => props.width ? props.width : '100%'};
  padding: 28px;
  transform: rotate(${props => props.degree}deg);
`;

const Container = styled(NavLink)`
  position: absolute;
  span {
    opacity: 0;
  }
  &:hover {
    span {
      opacity: 1;
    }
  }
  &:hover, &:visited, &:focus {
    text-decoration: none;
  }
`;

const Title = styled.span`
  font-size: 2em;
  font-weight: 100;
  transition: all 0.3s;
  color:  ${colors.primary};
  margin: 16px;
`;


const ArtLink = (props) => (
  <Container to={'/' + props.path} style={props.style}>
      <Art src={props.src} degree={randomDegree()} width={props.width} />
      <Title name={props.name}>{props.name}</Title>
  </Container>
)

export default ArtLink
