export default {
  token(state) {
    return state.token;
  },
  userData(state){
    return state.user;
  },
  getSignupEmail(state) {
    return state.signupData.email
  },
  getSignupPassword(state) {
    return state.signupData.password
  },
};