import React from 'react';
import styled from 'styled-components';
import {colors} from './../constants'

const IconLink = styled.a`
  padding: 8px;
  color:  ${colors.primary};
  transition: all 0.2s;
  &:hover {
    color: ${colors.secondary};
  }
  &:visited, &:focus {
    color: ${colors.primary}
  }
`;

const Icon = (props) => (
  <IconLink href={props.link} target='_blank'>
    <i className={'fa fa-lg fa-' + props.name}></i>
  </IconLink>
)

export default Icon
