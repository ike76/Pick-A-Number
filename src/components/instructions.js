import React from 'react'

export default function Instructions(props) {
	if (props.finished){
		return <div className='instructions'>
			<h2>{props.message}</h2>
				<button onClick={props.startOver}>Try Again</button>
				</div>
	}
	return <div className='instructions'>
			<h2>{props.message}</h2>
		</div>
	
}
