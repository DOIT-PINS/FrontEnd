<template>
  <div id="email-input">
    <div class="page-title">사용할 이메일을<br>입력해주세요</div>
    <base-input
      InputTitle="이메일"
      InputPlaceholder="이메일 입력"
      InputType="email"
      :InputModel="inputValues"
      @update:InputModel="updateInputValues"
      @focus="handleFocus"
      @blur="handleBlur"
      class="input-box"
    ></base-input>
    <CheckValidation
      Type=""
      :Valid="this.inputValided"
      :Hide="true"
      Text="사용하실 수 있는 이메일입니다."
    ></CheckValidation>
    <div class="buttons">
      <base-button 
        :mode="buttonMode" 
        :class="buttonClass" 
        @clickevent="goToNextStep()">다음
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import CheckValidation from '@/components/CheckValidation.vue';

export default {
  components: {
    BaseInput,
    BaseButton,
    CheckValidation
  },
  props: ['syncObject'],
  data() {
    return {  
      inputValues: '',
      isFocused: false,
      inputValided: false,
    };
  },
  computed: {
    buttonMode() {
      if (this.isFocused) {
        return this.isValidEmail(this.inputValues) ? 'keyboardActivate' : 'keyboarDeactivate';
      } else {
        return this.isValidEmail(this.inputValues) ? 'main' : 'deactivate';
      }
    },
    buttonClass() {
      return {
        'guard': !this.isFocused
      };
    }
  },
  methods: {
    goToNextStep() {
      if(this.inputValided){
        this.$store.dispatch('signupTempEmail', this.inputValues);
        this.$emit('nextclicked');
      }
    },
    updateInputValues(value) {
      this.inputValues = value;
    },
    handleFocus() {
      this.isFocused = true;
    },
    handleBlur() {
      this.isFocused = false;
    },
    isValidEmail(email) {
      const emailPattern = /\S+@\S+\.\S+/;
      const validedData = emailPattern.test(email);
      this.inputValided = validedData;
      return validedData;
    },
    handleResize() {
      const satValue = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sat').trim());
      const emailInput = document.getElementById('email-input');
      const heightWithoutSat = window.visualViewport.height - satValue - 80;
      emailInput.style.height = heightWithoutSat + 'px';
    }
  },
  mounted() {
    this.inputValues = this.$store.getters.getSignupEmail;
    document.getElementById('email-input').style.height = `${window.visualViewport.height} - ${getComputedStyle(document.documentElement).getPropertyValue('--sat')}px`;
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    // 컴포넌트가 제거될 때 이벤트 리스너 제거
    window.removeEventListener('resize', this.handleResize);
  },
}
</script>


<style lang="scss" scoped>
#email-input{
  margin-left: 40px;
  width: calc(var(--window-width) - 80px );
  .page-title{
    text-align: left;
    color: var(--Main, #F50);
    font-feature-settings: 'ss10' on;
    font-family: SUITE;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 135.8%; /* 38.024px */
    letter-spacing: -0.661px;
  }
  .input-box{
    margin: 70px 0 6px 0;
  }
  .buttons{
    position: fixed;
    bottom: 0;
    left: 0;
    width: var(--window-width);
    .guard{
      margin: 0 40px;
      margin-bottom: max(calc(env(safe-area-inset-bottom) + 0px), 24px);
    }
  }

}
</style>