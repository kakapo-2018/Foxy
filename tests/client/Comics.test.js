import React from 'react'
import {shallow} from 'enzyme'
import '../setup.js'; // Setup Enzyme & Adapter

import Comics from '../../client/components/Comics'

describe('<Comics />', () => {

  test('renders without crashing', () => {
    shallow(<Comics />);
  });
})