import React from 'react'
import './board.css';
import Game from './game'
export default function Board(){
	return (
		<div className='container'>
			<section className='gameSquare'><Game /></section>
		</div>
		)
}