import React from 'react'
import {shallow} from 'enzyme'
import '../setup.js'; // Setup Enzyme & Adapter

import Secret from '../../client/components/Secret'

describe('<Secret />', () => {

  test('renders without crashing', () => {
    shallow(<Secret />);
  });
})