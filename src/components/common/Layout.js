import React from "react";
import classNames from "classnames";
import Base from "../Base";

/**
 * Layout - 所有的页面必须以Layout(或者是实现了Layout布局的其他组件,如LayoutWithNav)作为Root节点
 *
 * @example
 *
 * class XX extends React.PureComponent{
 * 		render(){
 * 			return (
 * 				<Layout>
 * 				    <div>do something</div>
 * 				</Layout>
 * 			);
 * 		}
 * }
 *
 * */
export default class Layout extends Base {
	render() {
		let props = Object.assign({}, this.props);
		props.className = classNames("layout", props.className);
		return (
			<div {...props}>
				{this.props.children}
			</div>
		);
	}
}
