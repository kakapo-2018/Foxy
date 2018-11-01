import React from 'react'
import {shallow, mount} from 'enzyme'
import '../setup.js'; // Setup Enzyme & Adapter

import App from '../../client/components/App'
import Secret from '../../client/components/Secret'

describe('<App />', () => {

  test('renders without crashing', () => {
    shallow(<App />);
  });
  test(`have the authentication state set as false`, () => {
    const expected = false
    const wrapper = shallow(<App />)
    expect(wrapper.state('authentication')).toBe(expected)
  })
  test('contains all : <Login/>" component on landing page', () => {
    const expected = '<Login />';
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toMatch(expected);
  });
  test('renders <Secret /> on authentication', () => {
    const expected = '<Secret />';
    const wrapper = shallow(<App />);
    wrapper.setState({ authentication: true })
    expect(wrapper.text()).toMatch(expected);
  });
  test(`contains 'Refresh page'`, () => {
    const expected = 'Refresh Page'
    const wrapper = shallow(<App />)
    expect(wrapper.text()).toContain(expected)
  })

  test(`I can see non registered content`, () => {
    const expected = '<Login />Refresh Page<Connect(ArticleWithFox) />Chat to me, sweetie!<ChatApp /><TrumpQuote /><Connect(Advertising) /><Connect(Comics) />'
    const wrapper = shallow(<App />)
    expect(wrapper.text()).toContain(expected)
  })
  test(`have state of foxImage, comics, article, quote, names, ad and authentication`, () => {
    const expected = '{\"foxImage\":\"\",\"comics\":\"\",\"article\":\"\",\"quote\":\"\",\"names\":\"\",\"ad\":\"\",\"authentication\":false}'
    const wrapper = shallow(<App />)
    expect(JSON.stringify(wrapper.state())).toMatch(expected)
  })

});
