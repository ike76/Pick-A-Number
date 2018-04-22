import React from 'react'
import {shallow, mount} from 'enzyme'
import Game from './game'

describe('<Game />', () => {
	it('should mount without crashing', () => {
		shallow(<Game />)
	})
	it('should add a guess', () => {
		const wrapper = shallow(<Game />);
		wrapper.instance().addGuess(5)
		expect(wrapper.state('guesses')).toEqual([5])
	})
	it('should reset game', () => {
		const wrapper = shallow(<Game />);
		wrapper.setState({guesses: [1,2,3], correctAnswer: 99})
		wrapper.instance().startOver()
		expect(wrapper.state('guesses')).toEqual([])
		expect(wrapper.state('finished')).toBe(false)
	})
	it('should end game with correct guess', () => {
		const wrapper = shallow(<Game />);
		wrapper.setState({correctAnswer: 91})
		wrapper.instance().addGuess(88)
		expect(wrapper.state('finished')).toBe(false)
		wrapper.instance().addGuess(91)
		expect(wrapper.state('finished')).toBe(true)
	})
})