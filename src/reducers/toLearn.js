/**
 * Created by sushanta on 2/23/18.
 */
let initialState = {
  items: []
};
const toLearn = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_LEARN':
      return {...state, items: [action.item, ...state.items]};
    case 'ADD_TO_LEARNS':
      return {...state, items: action.items};
    default:
      return state
  }
};
export default toLearn;