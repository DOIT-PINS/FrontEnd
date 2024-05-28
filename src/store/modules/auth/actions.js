
export default {
  signupTempEmail(context, payload) { 
    context.commit('saveSignupEmail', payload);
  },
  signupTempPassword(context, payload) { 
    context.commit('saveSignupPassword', payload);
  },
  saveUserToken(context, payload) {
    context.commit('setToken', payload);
  }
}