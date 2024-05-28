<template>
  <div id="password-input">
    <div class="page-title">사용할 비밀번호를<br>입력해주세요</div>
    <base-input
      InputTitle="비밀번호"
      InputPlaceholder="비밀번호 입력"
      InputType="password"
      :InputModel="inputValues"
      @update:InputModel="updateInputValues"
      @focus="handleFocus"
      @blur="handleBlur"
      class="input-box"
    ></base-input>
    <div class="validation-group">
      <CheckValidation
        Type="check"
        :Valid="this.validEnglish"
        :Hide="false"
        Text="영문 포함"
      ></CheckValidation>
      <CheckValidation
        Type="check"
        :Valid="this.validNumber"
        :Hide="false"
        Text="숫자 포함"
      ></CheckValidation>
      <CheckValidation
        Type="check"
        :Valid="this.validLength"
        :Hide="false"
        Text="8-20자 이내"
      ></CheckValidation>
    </div>
    <div class="buttons">
      <base-button :mode="buttonMode" :class="buttonClass" @clickevent="goToNextStep()">다음</base-button>
    </div>
  </div>
</template>

<script>
import CheckValidation from '@/components/CheckValidation.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';

export default {
  components: {
    BaseInput,
    BaseButton,
    CheckValidation
  },
  data() {
    return {
      inputValues: '',
      isFocused: false,
      validEnglish: false,
      validNumber: false,
      validLength: false
    };
  },
  computed: {
    buttonMode() {
      if (this.isFocused) {
        return this.isValidInput() ? 'keyboardActivate' : 'keyboarDeactivate';
      } else {
        return this.isValidInput() ? 'main' : 'deactivate';
      }
    },
    buttonClass() {
      return {
        guard: !this.isFocused, 
      };
    }
  },
  methods: {
    goToNextStep() {
      if(this.isValidInput()){
        this.$store.dispatch('signupTempPassword', this.inputValues);
        this.$emit('nextclicked');
      }
    },
    updateInputValues(value) {
      this.validEnglish = /[a-zA-Z]/.test(value);
      this.validNumber = /[0-9]/.test(value);
      this.validLength = value.length >= 8 && value.length <= 20;
      this.inputValues = value;
    },
    handleFocus() {
      this.isFocused = true;
    },
    handleBlur() {
      this.isFocused = false;
    },
    isValidInput() {
      return this.validEnglish && this.validNumber && this.validLength;
    },
    handleResize() {
      const satValue = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sat').trim());
      const emailInput = document.getElementById('password-input');
      const heightWithoutSat = window.visualViewport.height - satValue - 80;
      emailInput.style.height = heightWithoutSat + 'px';
    }
  },
  mounted() {
    this.inputValues = this.$store.getters.getSignupPassword;
    if(this.inputValues != null){
      this.updateInputValues(this.inputValues)
      this.isValidInput()
    }
    document.getElementById('password-input').style.height = `${window.visualViewport.height} - ${getComputedStyle(document.documentElement).getPropertyValue('--sat')}px`;
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
}
</script>


<style lang="scss" scoped>
#password-input{
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
  .validation-group{
    display: flex;
  }

}
</style>