<template>
  <div id="base-footer-bar">
    <div class="menu-item">
      <img src="@/assets/footerbar/list_off.svg" class="off">
    </div>
    <router-link
      :to="{ name: 'app-home' }"
      @click.native="changeBarValue(1)"
    >
      <div class="menu-item">
        <img src="@/assets/footerbar/home_off.svg" class="off">
        <img src="@/assets/footerbar/home_on.svg" class="on" :class="{ 'show': footerbarValue == 1 }">
      </div>
    </router-link>
    
    <router-link
      :to="{ name: 'app-mypage' }"
      @click.native="changeBarValue(2)"
    >
      <div class="menu-item">
        <img src="@/assets/footerbar/mypage_off.svg" class="off">
        <img src="@/assets/footerbar/mypage_on.svg" class="on" :class="{ 'show': footerbarValue == 2 }">
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      footerbarValue: 1,
    }
  },
  methods:{
    changeBarValue(value){
      this.footerbarValue = value;
    }
  }
}
</script>

<style lang="scss" scoped>
#base-footer-bar{
  padding-top: 12px;
  display: flex;
  align-items: flex-start;;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0%;
  left: 0;
  height: max(calc(var(--sab) + 40px), 40px);
  width: var(--window-width);
  background: white;
  .menu-item{
    display: flex;
    .on{
      position: absolute;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }
    .show{
      opacity: 1;
    }
  }
}
</style>