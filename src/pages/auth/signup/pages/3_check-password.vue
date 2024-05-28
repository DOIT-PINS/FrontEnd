<template>
  <div id="password-check">
    <div class="page-title">사용할 비밀번호를<br>한번 더 입력해주세요</div>
    <base-input
      InputTitle="비밀번호"
      InputPlaceholder="비밀번호 재입력"
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
        :Valid="this.isPasswordSame"
        :Hide="false"
        Text="비밀번호 일치"
      ></CheckValidation>
    </div>
    <div class="buttons">
      <base-button :mode="buttonMode" :class="buttonClass" @clickevent="goToNextStep()">다음</base-button>
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
  data() {
    return {
      inputValues: '',
      isFocused: false,
      isPasswordSame: false,
    };
  },
  computed: {
    buttonMode() {
      if (this.isFocused) {
        return this.isValidCheckPassword(this.inputValues) ? 'keyboardActivate' : 'keyboarDeactivate';
      } else {
        return this.isValidCheckPassword(this.inputValues) ? 'main' : 'deactivate';
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
      this.$emit('nextclicked');
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
    isValidCheckPassword(password) {
      this.isPasswordSame = password == this.$store.getters.getSignupPassword;
      return this.isPasswordSame;
    },
    handleResize() {
      const satValue = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sat').trim());
      const emailInput = document.getElementById('password-check');
      const heightWithoutSat = window.visualViewport.height - satValue - 80;
      emailInput.style.height = heightWithoutSat + 'px';
    }
  },
  mounted() {
    document.getElementById('password-check').style.height = `${window.visualViewport.height} - ${getComputedStyle(document.documentElement).getPropertyValue('--sat')}px`;
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
}
</script>


<style lang="scss" scoped>
#password-check{
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