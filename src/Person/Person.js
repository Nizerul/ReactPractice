import React from 'react';

const person = (props) => {
	return (
		<div>
			<h2>My name is {props.name}! And my hobby is {props.hobby}</h2>
			<div>{props.children}</div>
		</div>
	)
}

export default person;