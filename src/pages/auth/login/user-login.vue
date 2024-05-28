<template>
  <div id="login-page">
    <base-page-vue :PageHeaderType="1" :PagePreviousLink="{ name: 'auth-home' }">
      <div class="padding-guard">
        <div class="page-title">이메일로 로그인</div>
        <div class="login-form">
          <div class="object-group">
            <div class="input-object">
              <span class="input-title">이메일</span>
              <input type="email" placeholder="이메일 입력" v-model="userInputedEmail">
            </div>
            <div class="input-object">
              <span class="input-title">비밀번호</span>
              <input type="password" placeholder="비밀번호 입력" v-model="userInputedPassword">
            </div>
          </div>
          <div class="error-forms" :class="{ 'show': loginError }">
            <img src="@/pages/auth/login/assets/alert.svg" alt="">
            <span>이메일 및 비밀번호가 일치하지 않습니다.</span>
          </div>
          <div class="option-groups">
            <router-link>아이디 찾기</router-link>
            <div class="line"></div>
            <router-link>비밀번호 찾기</router-link>
          </div>
        </div>
      </div>
      <div class="button-position">
        <base-button mode='main' class="buttons" @click="tryLogin()">로그인</base-button>
      </div>
    </base-page-vue>
  </div>
</template>

<script>
import BasePageVue from '@/components/BasePage.vue'
import BaseButton from '@/components/BaseButton.vue';
import authModule from '@/utils/auth.js';

export default {
  components: {BasePageVue, BaseButton},
  data() {
    return {
      loginError: false,
      userInputedEmail: null,
      userInputedPassword: null
    }
  },
  methods: {
    async tryLogin() {
      try {
        const loginSuccess = await authModule.login(this.userInputedEmail, this.userInputedPassword);
        if (loginSuccess) {
          this.$router.push('/app/home');
        } else {
          this.loginError = true;
          setTimeout(() => {
            this.loginError = false;
          }, 5000);
        }
      } catch (error) {
        this.loginError = true;
        setTimeout(() => {
          this.loginError = false;
        }, 5000);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#login-page{
  top: 0;
  margin-top: var(--sat);
  width: var(--window-width);
  background: $background;
  height: 1px;
  height: calc(var(--window-height) - var(--sat));
  .padding-guard{
    padding: 0px 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .page-title{
      float:left;
      margin-top: calc(72px + 8px);
      color: var(--Main, #F50);
      font-feature-settings: 'ss10' on;
      font-family: SUITE;
      font-size: 28px;
      font-style: normal;
      font-weight: 500;
      line-height: 135.8%; /* 38.024px */
      letter-spacing: -0.661px;
    }
    .login-form{
      margin-top: 108px;
      width: 100%;
      .object-group{
        .input-object{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          margin-bottom: 50px;
          .input-title{
            color: var(--netural-50, #70737C);
            font-feature-settings: 'ss10' on;

            /* Semibold/14px */
            font-family: SUITE;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: 142.9%; /* 20.006px */
            letter-spacing: 0.203px;
          }
          input{
            width: 100%;
            -webkit-appearance: none;
            -webkit-border-radius: 0;
            appearance: none;
            border-radius: 0;
            padding: 8px 0;
            background-color: transparent;
            border: 0;
            border-bottom: 1px solid #E1E2E4;
            border-bottom-color: #E1E2E4;
            transition: 0.25s border ease-in-out;
            color: var(--netural-20, #292A2D);
            font-feature-settings: 'ss10' on;
            font-family: SUITE;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 24px */
            letter-spacing: 0.091px;
            &:focus{
              outline: 0;
              border-bottom: 1.5px solid #FF5500;
              border-bottom-color: #FF5500;
            }
            &::placeholder{
              color: var(--netural-90, #C2C4C8);
              font-feature-settings: 'ss10' on;
              font-family: SUITE;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%; /* 24px */
              letter-spacing: 0.091px;
            }
          }
          &:last-child{
            margin: 0;
          }
        }
      } 
      .error-forms{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 3px 0 3px 2px;
        margin: 6px 0 12px 0;
        transition: opacity 0.2s ease-in-out;
        opacity: 0;
        span{
          margin-left: 4px;
          color: var(--Status-Negative, #FF4242);
          font-feature-settings: 'ss10' on;
          font-family: Pretendard;
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
          line-height: 16px; /* 133.333% */
          letter-spacing: -0.12px;
        }
      }
      .option-groups{
        display: flex;
        align-items: center;
        justify-content: center;
        a{
          text-decoration: none;
          color: #989BA2;
          font-feature-settings: 'clig' off, 'liga' off;
          font-family: Pretendard;
          font-size: 13px;
          font-style: normal;
          font-weight: 600;
          line-height: 18px; /* 138.462% */
          letter-spacing: -0.26px;
        }
        .line{
          background: #8A8A8A;
          height: 14px;
          width: 1px;
          margin: 0 24px;
        }
      }
      .show{
        opacity: 1;
      }
    }
    
  }
  .button-position{
    position: absolute;
    width: 100%;
    bottom: max(calc(env(safe-area-inset-bottom) + 0px), 24px);
    .buttons{
      margin: 0 40px
    }
  }
}
</style>