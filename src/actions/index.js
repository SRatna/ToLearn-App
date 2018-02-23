/**
 * Created by sushanta on 2/21/18.
 */

export const registerUser = (email, password) => ({
  type: 'REGISTER_USER', email, password
});

export const loginUser = (email, password) => ({
  type: 'LOGIN_USER', email, password
});

export const loginOrRegisterUserDone = (authData) => ({
  type: 'LOGIN_REGISTER_USER_DONE', ...authData
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
});