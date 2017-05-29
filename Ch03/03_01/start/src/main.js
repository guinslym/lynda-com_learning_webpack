var React = require('react');
var ReactDom = require('react-dom');
require('./style.css');

class Message extends React.Component {
	render(){
		return (
			<div>
				<h1>{this.props.title}</h1>
				<p>{this.props.message}</p>
			</div>
			);
	}
}
ReactDom.render(<Message title='Email Joe' message='Can you email me?'/>,
document.getElementById('react-container'));