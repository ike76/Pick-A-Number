import React from 'react'

export default function NumberSquare(props) {
	return (<div onClick={props.clicker} className={props.temperature}>{props.number}</div>)
}