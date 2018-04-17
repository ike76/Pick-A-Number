import React from 'react'
import './inputForm.css'
export default function InputForm(props) {
	const handleSubmit = (e) => {
		e.preventDefault()
		let value = document.getElementById('guess').value
		console.log('typeof', typeof value)
		document.getElementById('guess').value = ''
		console.log(value)
		props.onChange(parseInt(value))
	}
	if (!props.finished){
		return (
		<section >
			<form action="#!"  className='form' onSubmit={handleSubmit}>
				<input name='guess' id="guess" className="guessBox" type='text' placeholder='Enter Your Guess' />
				<button type='submit'>Guess</button>
			</form >
				<h3>Guess #{props.count}</h3>
		</section>
		)
	} else {
		return (
			<section><h2>Play again?</h2></section>
			)
	}
}