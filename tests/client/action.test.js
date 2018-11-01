import actions from '../../client/actions'
import types from '../../client/reducers/foxImage'

describe('actions', () => {

  it('should create an action to receive a fox', () => {
    const action = 'RECEIVE_FOX'
    const expectedAction = {
      type: RECEIVE_FOX,
    }
    expect(actions.foxImage(action)).toEqual(expectedAction)
  })
})