import React, { Component } from 'react'
import styled from 'styled-components';

class Header extends Component {
	render() {
		return (
			<StyledHeader>Header</StyledHeader>
		)
	}
}

const StyledHeader = styled.header`
	position: fixed;
	height: 60px;
	min-width: 100%;
	background: rgba(255, 255, 255, .8);
	display: flex;
	align-items: center;
`

export default Header
