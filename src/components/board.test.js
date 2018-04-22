import React from 'react'
import {shallow, mount} from 'enzyme'
import Board from './board'

describe('<Board />', () => {
	it('should mount without crashing', () => {
		shallow(<Board />)
	})

})