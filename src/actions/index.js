/**
 * Created by sushanta on 2/21/18.
 */

export const registerUser = (email, password) => ({
  type: 'REGISTER_LOGIN', email, password
});

export const loginUser = (email, password) => ({
  type: 'USER_LOGIN', email, password
});

export const loginUserDone = (authData) => ({
  type: 'LOGIN_USER_DONE', ...authData
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
});