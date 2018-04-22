import React, {Component} from 'react'
import './game.css'
import Instructions from './instructions'
import InputForm from './inputForm'
import GuessHistory from './guessHistory'
export default class Game extends Component {

	constructor(){
		super()
		this.state = {
			guesses: [],
			correctAnswer: Math.floor(Math.random() * 100 +1),
			message: 'make a guess!',
			finished: false,
		}
	}
	addGuess(value){
		let diff = Math.abs(this.state.correctAnswer - value)
		let message = "frosty"
		if (diff < 15) {message='warm...'}
		if (diff < 10) {message='very warm...'}
		if (diff < 5) {message='HOT HOT HOT!!'}
		if (diff === 0) {
			message=`🕺 YESSS!! ${value} is correct! 🕺`
			this.setState({finished: true})
		}
		this.setState({
			guesses: [...this.state.guesses, value],
			message
		})
	}
	startOver(){
		this.setState({
			guesses: [],
			correctAnswer: Math.floor(Math.random() * 100 +1),
			message: 'make a guess!',
			finished: false,
		})
	}
	render(){
		return (
			<div className="game">
				<Instructions message={this.state.message} finished={this.state.finished} startOver={()=>{this.startOver()}} />
				<InputForm onChange={value=> this.addGuess(value)} count={this.state.guesses.length} finished={this.state.finished}  />
				<GuessHistory history={this.state.guesses} correctAnswer={this.state.correctAnswer} getGuess={num => this.addGuess(num)} />

			</div>
			)
	}
}