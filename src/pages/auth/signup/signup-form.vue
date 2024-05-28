<template>
  <div id="signup-page">
    <base-page-vue
      :PageHeaderType="1"
      :PagePreviousLink="currentStep === 1 ? { name: 'auth-home' } : null"
      @headerclick="headerBackPath()"
      :HeaderHidden=isHidden
    >
      <div class="viewer">
        <transition :name="dynamicTransitionHandle">
          <component 
            :is="currentStepComponent" 
            @nextclicked="goPathfunc()" 
            @syncfunc="syncSignupData"
            :syncObject="{
              userEmail: this.signupUserEmail,
              userPassword: this.signupUserPassword
            }"
          />
        </transition>
      </div>
    </base-page-vue>
  </div>
</template>

<script>
import BasePageVue from '@/components/BasePage.vue'
// import BaseButton from '@/components/BaseButton.vue';

import EmailInput from '@/pages/auth/signup/pages/1_email-input.vue';
import InputPassword from '@/pages/auth/signup/pages/2_input-password.vue';
import CheckPassword from '@/pages/auth/signup/pages/3_check-password.vue';
import TosCheck from '@/pages/auth/signup/pages/4_tos-check.vue';
import SignupDone from '@/pages/auth/signup/pages/5_signup-done.vue';

export default {
  components : {
    BasePageVue,
    EmailInput,
    InputPassword,
    CheckPassword,
    TosCheck,
    SignupDone
  }, 
  data() {
    return {
      currentStep: 1,
      steps: [
        EmailInput,
        InputPassword,
        CheckPassword,
        TosCheck,
        SignupDone
      ],
      dynamicTransitionHandle: 'RIGHT',
      signupUserEmail: '',
      signupUserPassword: '',
      isHidden: false
    };
  },
  computed: {
    currentStepComponent() {
      return this.steps[this.currentStep - 1];
    }
  },
  methods: {
    headerBackPath(){
      if(this.currentStep >= 2) {
        this.dynamicTransitionHandle = 'LEFT'
        this.currentStep--;
      }
    },
    goPathfunc() {
      this.dynamicTransitionHandle = 'RIGHT'
      this.currentStep++;
      if(this.currentStep >= 5){
        this.isHidden = true;
      }
    },
    syncSignupData(func, data) {
      if (func == 'writeEmail'){
        this.signupUserEmail = data;
      } else if (func == 'writePassword') {
        return this.signupUserPassword;
      }
    },
    backPath(){
      this.currentStep--;
    },
  }
};
</script>

<style lang="scss" scoped>

#signup-page{
  display: flex;
  top: 0;
  margin-top: var(--sat);
  width: var(--window-width);
  background: $background;
  // min-height: calc(var(--window-height) - var(--sat));
  .viewer{
    margin-top: 80px;
    // width: calc(var(--window-width) - 80px);
    width: var(--window-width);
  }
}

.RIGHT-enter-active,
.RIGHT-leave-active {
  position: absolute;
  transition: all 0.3s ease-in-out;
}

.RIGHT-enter-from {
  opacity: 0;
  left: 10%;
}

.RIGHT-enter-to {
  opacity: 1;
  left: 0%
}

.RIGHT-leave-from {
  opacity: 1;
  left: 0%;
}

.RIGHT-leave-to {
  opacity: 0;
  left: -10%
}

.LEFT-enter-active,
.LEFT-leave-active {
  position: absolute;
  transition: all 0.3s ease-in-out;
}

.LEFT-enter-from {
  opacity: 0;
  left: -10%;
}

.LEFT-enter-to {
  opacity: 1;
  left: 0%
}

.LEFT-leave-from {
  opacity: 1;
  left: 0%;
}

.LEFT-leave-to {
  opacity: 0;
  left: 10%
}
</style>