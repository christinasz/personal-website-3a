import React, { Component } from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import {TransitionMotion, spring, presets} from 'react-motion';

import {colors} from './constants'

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
	font-size: 2.5em;
  font-family: 'Playlist', sans-serif;
	text-align: center;
	@media only screen and (min-width: 495px) {
		text-align: right;
		font-size: 3.2em;
	}
	@media only screen and (min-width: 495px) {
		text-align: right;
		font-size: 4em;
	}
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
	max-width: 450px;
`;

const Icons = styled.div `
  text-align:center;
	width: 100%;
	position: absolute;
	bottom: 16px;
`;

const Content = styled.div `
	display: flex;
	justify-content: center;
	max-width: 1080px;
`;

const blurbs = [
	{
		position: "3B Computer Science, HCI Option",
		location: "University of Waterloo"
	}, 
	{
		position: "Software Developer Co-op",
		location: "Visier, Inc."
	}, {
		position: "Amateur baker",
		location: ""
	}, {
		position: "Animation enthusiast",
		location: ""
	}
]

const Navigation = styled.ul `
		display: block;
		text-align: right;
		width: 50%;
		list-style-type: none;
`;

class Home extends Component {
	constructor(props) {
    super(props);
    this.state = {currentDescIndex: 0}; 
	}
	
	componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      4500
    );
	}
	
	tick() {
    this.setState({
      currentDescIndex: (this.state.currentDescIndex + 1) % blurbs.length
    });
	}
	
  willLeave() {
    return {
		};
	}
	
	willEnter() {
    return {
			opacity: 0,
			height: 14,
		};
	};

	getStyles = () => {
			return  [{
				key: 's' + this.state.currentDescIndex.toString(),
				data: blurbs[this.state.currentDescIndex],
				style: {
					opacity: spring(1, presets.gentle),
					height: spring(14, presets.gentle),
				},
				verticalAlign: "top",
			}];
  };
	
	render() {
		return (
			<Background>
				<MediaQuery query="(max-device-width: 768px)">
					<NavHeader/>
				</MediaQuery>
					<Content className="verticalCenter">
						
								<TransitionMotion
									styles={this.getStyles()}
									willLeave={this.willLeave}
									willEnter={this.willEnter}>
									{interpolatedStyles =>
										<Square>
										<Name>Christina Zhang</Name>
											{interpolatedStyles.map(({key, data, style}) =>
												<Subtitle style={style}>
													{data.position}
													<br/>
													{data.location === "" ? "" : "@ " + data.location}
												</Subtitle>
											)}
										</Square>
										}
								</TransitionMotion>
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
	}
}
export default Home
