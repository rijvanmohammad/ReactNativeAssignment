import { SET_NAME } from '../actions/actionTypes'

const initialState = {
  name: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.name,
      }
    default:
      return state
  }
}