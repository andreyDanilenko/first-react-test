const actionType = {
  SET_COUNT: 'SET_COUNT',
};

const defaultState = {
  items: [],
  isFetching: true,
  count: 0,
};

export default function companyReducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.SET_COUNT:
      return {
        ...state,
        count: action.payload
      }
    default:
      return state;
  }
};

export const setCount = (count) => ({ type: actionType.SET_COUNT, payload: count });