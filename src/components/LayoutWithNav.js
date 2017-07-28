import React from "react";
import BaseComponent from "./BaseComponent.js";
import Nav from './meta/Nav'
import Layout from './meta/Layout'
import PropTypes from 'prop-types'

export default class LayoutWithNav extends BaseComponent {
	static propTypes={
		navOptions:PropTypes.object
	};
	static defaultProps={
		navOptions:{}
	};
	render() {
		return (
			<Layout>
				<Nav {...this.props.navOptions}/>
				{this.props.children}
			</Layout>
		);
	}
}