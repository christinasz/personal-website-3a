import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import Icon from './Icon'

import {colors} from './../constants'

function randomDegree() {
  return Math.floor(Math.random() * 360);
}

const Art = styled.img`
  width: 100%;
  padding: 18px;

  ${props => props.show ? 'display:none;' : ''}

  @media only screen and (min-device-width: 768px) {
    display: inline-block;
  }
  ${props => props.spin ? `
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @media only screen and (min-device-width: 768px) {
      display: static;
      animation: 300s infinite normal spin;
      animation-timing-function: linear;
      &:hover {
        animation-play-state: paused;
      }
    }

    ` : ''}


  @media only screen and (min-device-width: 768px) {
    width: ${props => props.width ? props.width : '10vw'};
    transform: rotate(${props => props.degree}deg);
    padding: 28px;
  }
`;

const Container = styled(NavLink)`
  flex: 1;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.02, 1.02);
  }
  @media only screen and (min-device-width: 768px) {
    position: absolute;
    &:hover, &:visited, &:focus {
      text-decoration: none;
    }
  }
`;

const Title = styled.span`

  color:   ${props => props.show ? 'white' : colors.primary};
  display: inline-block;
  padding: 0px 8px;
//  border: 1px solid ${colors.primary};

  @media only screen and (min-device-width: 768px) {
    color:  ${colors.primary};
    font-size: 2em;
    font-weight: 100;
    margin: 24px;
    padding: 0 16px;
  }
`;


const ArtLink = (props) => (
  <Container to={'/' + props.path} style={props.style}>
      <Icon name={props.iconName} link={null}/>
      <Title name={props.name} show={props.showIconOnMobile}>{props.name}</Title>
      <Art className='Art' spin={props.spin} show={props.showIconOnMobile} src={props.src} degree={randomDegree()} width={props.width} name={props.name} />
  </Container>
)

export default ArtLink
