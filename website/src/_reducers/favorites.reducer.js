import { favoritesConstants } from '../_constants';

const initalstate = []
export function favorites(state = initalstate, action) {
  switch (action.type) {
    case favoritesConstants.FAVORITES_FETCH:
      return action.music

    case favoritesConstants.FAVORITES_ADD:
      return [ ...state, action.music ]

    case favoritesConstants.FAVORITES_REMOVE:
      return [ ...state.filter(item => item._id !== action.music._id) ]
    default:
      return state
  }
}



