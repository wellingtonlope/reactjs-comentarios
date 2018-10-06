import React from 'react'

const User = ({ email, logout }) => {
	return (
		<div className='row justify-content-end align-items-center mr-1'>
			<span className='mr-2'>{email}</span>
			<button className='btn btn-light col-2' onClick={logout}>Sair</button>
		</div>
	)
}

export default User