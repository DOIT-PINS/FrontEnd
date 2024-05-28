<template>
  <div id="tos-check">
    <div class="page-title">핀즈 서비스 이용약관에<br>동의해 주세요</div>
    <div class="radio-group">
      <div class="radio-item">
        <BaseCheckBox id="agree1" label="(필수) 이용약관" :is-checked="term_agreement" @update:checked="updateChecked('term_agreement')" />
      </div>
      <div class="radio-item">
        <BaseCheckBox id="agree2" label="(필수) 개인정보 수집 및 이용 안내" :is-checked="privacy_policy" @update:checked="updateChecked('privacy_policy')" />
      </div>
      <div class="radio-item">
        <BaseCheckBox id="agree3" label="(필수) 제 3자 제공 동의" :is-checked="third_party_consent" @update:checked="updateChecked('third_party_consent')" />
      </div>
      <div class="radio-item">
        <BaseCheckBox id="agree4" label="(선택) 제 3자 제공, 처리 위탁 동의" :is-checked="third_party_processing_consent" @update:checked="updateChecked('third_party_processing_consent')" />
      </div>
      <div class="radio-item">
        <BaseCheckBox id="agree5" label="(선택) 광고 수신 동의" :is-checked="advertising_consent" @update:checked="updateChecked('advertising_consent')" />
      </div>
    </div>
    <div class="radio-hr"></div>
    <div class="radio-all">
      <BaseCheckBox :bold="true" id="agreeAll" label="전체동의" :is-checked="total_agreement" @update:checked="updateAllChecked()" />
    </div>
    <div class="buttons">
      <base-button :mode="buttonMode" :class="buttonClass" @clickevent="goToNextStep()">완료</base-button>
    </div>
  </div>
</template>

<script>
import BaseCheckBox from "@/components/BaseCheckBox.vue";
import BaseButton from '@/components/BaseButton.vue';
import authModule from '@/utils/auth.js';

export default {
  components: {
    BaseCheckBox,
    BaseButton
  },
  data() {
    return {
      selectedValue: "",
      validCheck: false,
      term_agreement: false,
      privacy_policy: false,
      third_party_consent: false,
      third_party_processing_consent: false,
      advertising_consent: false,
      total_agreement: false,

    };
  },
  computed: {
    buttonMode() {
      return this.validCheck ? 'main' : 'deactivate';
    },
    buttonClass() {
      return {
        'guard': !this.isFocused
      };
    },
    
  },
  methods: {
    async goToNextStep() {
      try {
        const signupEmail = this.$store.getters.getSignupEmail;
        const signupPassword = this.$store.getters.getSignupPassword;
        const loginSuccess = await authModule.signup(signupEmail, signupPassword);
        if (loginSuccess) {
          this.$emit('nextclicked');
        }
      } catch (error) {
        console.log(error)
      }
      
    },
    isValidCheck() {
      this.validCheck = this.term_agreement && this.privacy_policy && this.third_party_consent;
    },
    updateChecked(field) {
      this[field] = !this[field];
      this.isValidCheck();
    },
    updateAllChecked() {
      this.total_agreement = !this.total_agreement;
      this.term_agreement = this.total_agreement;
      this.privacy_policy = this.total_agreement;
      this.third_party_consent = this.total_agreement;
      this.third_party_processing_consent = this.total_agreement;
      this.advertising_consent = this.total_agreement;
      this.isValidCheck()
    },
    handleResize() {
      const satValue = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sat').trim());
      const emailInput = document.getElementById('password-check');
      const heightWithoutSat = window.visualViewport.height - satValue - 80;
      emailInput.style.height = heightWithoutSat + 'px';
    }
  },
  mounted() {
    document.getElementById('tos-check').style.height = `${window.visualViewport.height} - ${getComputedStyle(document.documentElement).getPropertyValue('--sat')}px`;
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>


<style lang="scss" scoped>
#tos-check{
  margin-left: 40px;
  width: calc(var(--window-width) - 80px );
  height: calc(var(--window-height) - 40px );
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
  .radio-group{
    margin-top: 68px;
    .radio-item{
      display: flex;
      margin-bottom: 20px;
      &:last-child(){
        margin-bottom: 0;
      }
    }
  }
  .radio-hr{
    margin: 32px 0;
    background: #C2C4C8;
    height: 1px;
    width: 100%;
  }
  .radio-all{
    display: flex;
  }
  .input-box{
    margin-top: 70px;
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