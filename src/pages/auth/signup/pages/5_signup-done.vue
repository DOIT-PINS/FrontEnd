<template>
  <div id="signup-done">
    <div class="logo">
      <img src="@/assets/logos/Horizontal.svg" alt="">
    </div>
    <div class="text-group">
      <div class="title">가입이 완료되었어요!</div>
      <div class="sub">이제 나에게 맞는<br>학교 모임을 찾아볼까요?</div>
    </div>
    <div class="buttons">
      <div class="guard">
        <BaseButton mode="main" @clickevent="goToNextStep()">핀즈 시작하기</BaseButton>
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from '@/components/BaseButton.vue';

export default {
  components: {
    BaseButton
  },
  methods:{
    goToNextStep() {
      this.$router.push('/app/home');
    },
  }
}
</script>

<style lang="scss" scoped>
#signup-done{
  margin-left: 40px;
  width: calc(var(--window-width) - 80px );
  height: calc(var(--window-height) - 40px );
  .logo{
    display: flex;
    align-items: flex-start;
  }
  .text-group{
    margin-top: 74px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .title{
      color: var(--Main, #F50);
      font-feature-settings: 'ss10' on;
      font-family: SUITE;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 135.8%; /* 32.592px */
      letter-spacing: -0.566px;
    }
    .sub{
      text-align: left;
      margin-top: 11px;
      color: var(--netural-60, #878A93);
      font-feature-settings: 'ss10' on;
      font-family: SUITE;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px; /* 136.364% */
      letter-spacing: -0.427px;
    }
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