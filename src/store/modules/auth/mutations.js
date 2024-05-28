export default {
  setToken(state, payload) {
    state.token = payload.token;
  },
  setUserData(state, payload){
    state.user = payload;
  },
  saveSignupEmail: (state, data) => {
    state.signupData.email = data;
  },
  saveSignupPassword: (state, data) => {
    state.signupData.password = data;
  },
};