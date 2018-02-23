/**
 * Created by sushanta on 2/21/18.
 */
let initialState = {
  errorMessage: null,
  isAuthenticated: !!sessionStorage.getItem('userId'),
  email: sessionStorage.getItem('email') || '',
  userId: sessionStorage.getItem('userId') || ''
};
const user = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REGISTER_USER_DONE':
      if (action.success) {
        sessionStorage.setItem('email', action.email);
        sessionStorage.setItem('userId', action.id);
        return {
          ...state, isAuthenticated: true, email: action.email, errorMessage: null, userId: action.id
        };
      } else {
        return {
          ...state, isAuthenticated: false, email: '', errorMessage: action.errorMessage
        }
      }
    case 'LOGOUT_USER':
      sessionStorage.clear();
      return {
        ...state, isAuthenticated: false, email: '', userId: ''
      };
    default:
      return state
  }
};
export default user;