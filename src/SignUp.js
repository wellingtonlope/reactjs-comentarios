import React, { Component } from 'react'

class SignUp extends Component {
	state = {
		email: '',
		password: ''
	}

	handleChange = field => event => {
		this.setState({
			[field]: event.target.value
		})
	}

	createAccount = () => {
		this.props.createAccount(this.state.email, this.state.password)
	}

	render() {
		const errorMessages = {
			'auth/email-already-in-use': 'E-mail já foi utilizado.',
			'auth/weak-password': 'Senha muito fraca.',
			'auth/invalid-email': 'E-mail inválido'
		}
		return (
			<div>
				<h4>Criar conta</h4>
				<form className='form-inline'>
					<input type='email' className='form-control mr-1' onChange={this.handleChange('email')} placeholder='e-mail' />
					<input type='password' className='form-control mr-1' onChange={this.handleChange('password')} placeholder='senha' />
					<button type='button' className='btn btn-primary' onClick={this.createAccount}>Cadastrar</button>
					<button className='btn' onClick={() => this.props.changeScreen('login')}>Já tenho uma conta, entrar</button>
				</form>
				{
					this.props.isSignUpError &&
					<div className='card text-white bg-danger mt-3'>
						<div className='card-header'>Erro ao cadastrar</div>
						<div className='card-body'>
							{errorMessages[this.props.signUpError]}
						</div>
					</div>
				}
			</div>

		)
	}
}

export default SignUp