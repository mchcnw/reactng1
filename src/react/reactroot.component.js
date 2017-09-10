import React from 'react';
import {actionSubject} from '../common/actionObservable.js';

export default class ReactRoot extends React.Component {
	constructor() {
		super();
		this.state = {
			txt: 'hello from react',
			message:''
		};
		this.subscription$ = null;
	}
	
	componentWillMount() {
		this.subscription$ = actionSubject.subscribe(newValue => this.setState({txt: newValue}));
	}

	submit(){
		actionSubject.next(this.state.message);
	}

	updateInputValue(e) {
    	this.setState({
     		message: e.target.value
    	});
  	}

	render() {
		
		return (
			<div  style={{marginTop: '200px'}}>
				<div className="row">
					<h4 className="light">
						React example
					</h4>
					<p className="caption">
						This is a sample application written with React.
					</p>
				</div>
				<div>
					This was rendered by React. {this.state.txt}
				</div>
				<div>
					<label>Please send a message to AngularJs</label>
					<input type="text" name="message" value={this.state.message} onChange={this.updateInputValue.bind(this)}/><br />
					<input type="button" onClick={this.submit.bind(this)} value="Send" />
				</div>
			</div>
		);

		
	}
}
