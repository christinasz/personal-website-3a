import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import {colors} from './constants'
import {BrowserRouter as Router, NavLink} from 'react-router-dom';

import ArtLink from './components/ArtLink.js'
import Icon from './components/Icon.js'
import NavHeader from './components/NavHeader.js'

import Laptop from './assets/Laptop.svg'
import Notebook from './assets/Notebook.svg'
import Resume from './assets/Resume.svg'

const Background = styled.div `
  background-color: ${colors.background};
  text-align: center;
  position: absolute;
  height: 100%;
  width: 100%;
`;

const Name = styled.h1 `
  color: ${colors.text};
  text-align: right;
  font-weight: 100;
	font-size: 3.2em;
  font-family: 'Playlist', sans-serif;
	text-align: right;
	@media only screen and (min-width: 768px) {
  	font-size: 6.2em;
	}
`;

const Subtitle = styled.h3 `
  color: ${colors.text};
  padding: 8px 0px;
  text-align: left;
  text-transform: uppercase;
  font-size: 1.8vh;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
`;

const Square = styled.div `
  width: 35%;
	max-width: 500px;
	align-self: flex-start;
`;

const Icons = styled.div `
  text-align:center;
	width: 100%;
	position: absolute;
	bottom: 16px;
`;

const Content = styled.div `
	display: flex;
	justify-content: space-evenly;
`;

const stuffs = [
	{
		position: "Software Developer Co-op",
		location: "Visier, Inc."
	}, {
		position: "3B Computer Science",
		location: "University of Waterloo"
	}, {
		position: "Amateur baker",
		location: ""
	}, {
		position: "Wannabe artist",
		location: ""
	}
]

const Navigation = styled.ul `
		display: block;
		text-align: right;
		width: 50%;
		list-style-type: none;
		align-self: flex-end;
`;

const Home = () => (
	<Background>
  <MediaQuery query="(max-device-width: 768px)">
		<NavHeader/>
	</MediaQuery>
		<Content className="verticalCenter">
			<Square>
					<Name>Christina Zhang</Name>
					<Subtitle>
						{stuffs[0].position}
						<br/>
						@ {stuffs[0].location}
					</Subtitle>
			</Square>
			<MediaQuery query="(min-device-width: 768px)">
				<Navigation>
					<ArtLink to='/resume' src={Resume}>Résumé</ArtLink>
					<ArtLink to='/projects' src={Laptop}>Projects</ArtLink>
					<ArtLink to='/lecture-notes'src={Notebook}>Lecture Notes</ArtLink>
				</Navigation>
			</MediaQuery>
		</Content>

		<Icons>
			<Icon name='github' link='https://github.com/christinasz'/>
			<Icon name='linkedin' link='https://linkedin.com/in/christinaszhang'/>
			<Icon name='envelope' link='mailto:christina.s.zhang@uwaterloo.ca'/>
		</Icons>
	</Background>
	)

export default Home
