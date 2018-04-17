import React from 'react'
import './guessHistory.css'
import NumberSquare from './numberSquare'
export default function GuessHistory(props){
	let numberDivs = []
	const correctAnswer = props.correctAnswer
	for(let i = 1; i<=100; i++ ){
		const diff = Math.abs(correctAnswer - i)
		let temperature;
		if (props.history.includes(i)){
			temperature = 'cool'
			if(diff<15) temperature = 'warm'
			if(diff<10) temperature = 'hot'
			if(diff<5) temperature = 'smokin'
			if(diff===0) temperature = 'correct'
		} 
		numberDivs.push(<NumberSquare key={i} number={i} temperature={temperature} clicker={()=>props.getGuess(i)} />)
	}
	return (
		<div className='numberGrid'>
			{numberDivs}
		</div>
		)
}