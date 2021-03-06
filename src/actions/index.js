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

export const toggleLoading = () => ({
  type: 'TOGGLE_LOADING'
});

export const clearErrorMessage = () => ({
  type: 'CLEAR_ERROR_MESSAGE'
});

export const saveToLearnText = (text) => ({
  type: 'SAVE_TO_LEARN_TEXT', text
});

export const getTopToLearns = () => ({
  type: 'GET_TOP_TO_LEARNS'
});

export const addToLearn = (item) => ({
  type: 'ADD_TO_LEARN', item
});

export const updateToLearn = (item) => ({
  type: 'UPDATE_TO_LEARN', item
});

export const voteToLearn = (key, alreadyVoted) => ({
  type: 'VOTE_TO_LEARN', key, alreadyVoted
});

export const addToLearns = (items) => ({
  type: 'ADD_TO_LEARNS', items
});