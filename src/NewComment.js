import React, { Component } from 'react'

class NewCommnent extends Component {
	state = {
		newComment: ''
	}

	handleChange = event => {
		this.setState({
			newComment: event.target.value
		})
	}

	sendComment = () => {
		this.props.sendComment(this.state.newComment)
		this.setState({
			newComment: ''
		})
	}

	render() {
		return (
			<form className='form-inline mt-2'>
				<input className='form-control mr-1 col-sm' value={this.state.newComment} onChange={this.handleChange} />
				<button type='button' className='btn btn-primary col-3' onClick={this.sendComment}>Enviar</button>
			</form>
		)
	}
}

export default NewCommnent