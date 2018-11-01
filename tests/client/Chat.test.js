import React from 'react'
import {shallow} from 'enzyme'
import '../setup.js'; // Setup Enzyme & Adapter

import Chat from '../../client/components/Chat'

describe('<Chat />', () => {

  test('renders without crashing', () => {
    shallow(<Chat />);
  });

})