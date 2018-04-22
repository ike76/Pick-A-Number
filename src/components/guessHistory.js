import React from 'react'
import './guessHistory.css'
import NumberSquare from './numberSquare'
export default function GuessHistory(props){
	const correctAnswer = props.correctAnswer
	const numberDivs = [...Array(100).keys()].map((num, i)=> {
		const diff = Math.abs(correctAnswer - i-1)
		let temperature;
		if (props.history.includes(i+1)){
			switch (true) {
				case (diff===0):
					temperature = 'correct';
					break
				case (diff<5):
					temperature = 'smokin';
					break
				case (diff<10):
					temperature = 'hot';
					break
				case (diff<15):
					temperature = 'warm';
					break
				default:
					temperature = 'cool';
					break
			}
		}
		return <NumberSquare key={i} number={i+1} temperature={temperature} clicker={()=>props.getGuess(i+1)} />
		
	})
	
	return (
		<div className='numberGrid'>
			{numberDivs}
		</div>
		)
}


