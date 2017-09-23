import React from 'react';
import styled from 'styled-components';
import {colors} from './../constants'

const IconLink = styled.i`
  padding: 8px;
  color:  white;
  transition: all 0.2s;
  &:hover {
    color: #FFD4F3;
  }
  &:visited, &:focus {
    color: #FFD4F3;
  }
  ${props => props.showIconOnMobile ?
    `
    @media only screen and (min-device-width: 768px) {
        display:none;
      }
      `: `
      color: ${colors.primary};
      &:hover {
        color: ${colors.secondary};
      }
      &:visited, &:focus {
        color: ${colors.primary}
      }
      `
    }

`;

const Icon = (props) => {
  if(props.link) { return (
    <a href={props.link} target='_blank'>
      <IconLink className={'fa fa-lg fa-' + props.name}></IconLink>
    </a>
  ) }
  else return (
    <IconLink className={'fa fa-lg fa-' + props.name} showIconOnMobile></IconLink>
  )
}

export default Icon
