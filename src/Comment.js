import React from 'react'

const Comment = ({ comment }) => {
	let commentAux = 'vazio'
	let emailAux = 'vazio'
	if (comment) {
		if (comment.comment) {
			commentAux = comment.comment
		}
		if (comment.email) {
			emailAux = comment.email
		}
	}
	return (
		<div className='card mt-2'>
			<div className='card-body'>
				{commentAux}
				<br />
				<span className='text-muted'>Enviado por: {emailAux}</span>
			</div>
		</div>
	)
}

export default Comment