import React from 'react'
import Comment from './Comment'

//functional stateless components and pure-functions
const Comments = ({ comments }) => {
	const keys = Object.keys(comments)
	return (
		<div>
			{keys.map(key => (
				<Comment key={key} comment={comments[key]}></Comment>
			))}
		</div>
	)
}

export default Comments