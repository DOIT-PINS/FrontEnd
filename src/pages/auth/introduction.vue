<template>
  <div id="introduction">
    <div class="logo-area">
      <img src="@/assets/logos/Vertical.svg" alt="">
    </div>
    <div class="button-area">
      <div class="padding-area">
        <base-button mode='main' link='true' :to="{ name: 'auth-signup' }">이메일로 가입</base-button>
        <base-button mode='sub' link='true' :to="{ name: 'auth-login' }">이메일로 로그인</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '../../components/BaseButton.vue'
export default {
  components: { BaseButton },
  
}
</script>

<style lang="scss" scoped>
#introduction{
  background: $background;
  min-height: var(--window-height);
  width: var(--window-width);
  .logo-area{
    img{
      margin-top: calc(env(safe-area-inset-bottom) + 128px );
    }
  }
  .button-area{
    position: absolute;
    width: var(--window-width);
    bottom: max(calc(var(--sab) + 0px), 24px);
    height: max-content;
    .padding-area{
      padding: 0 40px;
      a {
        margin-bottom: 8px; 

        &:last-child {
          margin-bottom: 0; 
        }
      }
    }
  }
}
</style>