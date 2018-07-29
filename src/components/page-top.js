import React, { Component } from 'react'
import styled from 'styled-components';

class PageTop extends Component {
	render() {
		return (
			<PageTopWrapper>
				<PageHeading>Alyssa Hope</PageHeading>
				<h3>A short intro to me</h3>
			</PageTopWrapper>
		)
	}
}

const PageTopWrapper = styled.section`
	height: 100vh
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url('/assets/images/about-top-background.jpg');
	background-size: cover;
	background-postion: 50% 70%;
	background-repeat: no-repeat;
`;

const PageHeading = styled.h1`
	font-family: 'Montserrat', sans-serif;
	font-size: 125px;
	padding-top: 16px;
	margin: 20px 0;
`

export default PageTop
