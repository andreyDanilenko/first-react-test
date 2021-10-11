const SET_BRANDS = "SET_BRANDS"

const defaultState = {
  brands: [],
  isFetching: true,
}

export default function reposReducer(state = defaultState, action) {
  console.log(action);

  switch (action.type) {
    case SET_BRANDS:
      return {
        ...state,
        brands: action.payload
      }
    default:
      return state
  }
}
