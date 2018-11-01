import React from 'react'
import {shallow} from 'enzyme'
import '../setup.js'; // Setup Enzyme & Adapter

import ArticleWithFox from '../../client/components/ArticleWithFox'

describe('<ArticleWithFox />', () => {

  test('renders without crashing', () => {
    shallow(<ArticleWithFox />);
  });
})