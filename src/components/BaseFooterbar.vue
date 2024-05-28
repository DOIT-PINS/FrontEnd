<template>
  <div id="base-footer-bar">
    <div class="float-div">
      <div class="switch-area">
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
          :to="{ name: 'app-home' }"
          @click.native="changeBarValue(3)"
        >
          <div class="menu-item">
            <img src="@/assets/footerbar/list_off.svg" class="off">
            <img src="@/assets/footerbar/list_on.svg" class="on" :class="{ 'show': footerbarValue == 3 }">
          </div>
        </router-link>

        <router-link
          :to="{ name: 'app-mypage' }"
          @click.native="changeBarValue(2)"
        >
          <div class="menu-item">
            <img src="@/assets/footerbar/mypage_off.svg" class="off" >
            <img src="@/assets/footerbar/mypage_on.svg" class="on" :class="{ 'show': footerbarValue == 2 }" >
          </div>
        </router-link>

        <div class="activate-circle" :style="activateCircleStyle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerbarValue: 1,
    };
  },
  computed: {
    activateCircleStyle() {
      let translateXValue;
      if (this.footerbarValue === 1) {
        translateXValue = 0;
      } else if (this.footerbarValue === 2) {
        translateXValue = 152;
      } else if (this.footerbarValue === 3) {
        translateXValue = 76;
      }
      return {
        transform: `translateX(${translateXValue}px)`
      };
    }
  },
  methods: {
    changeBarValue(value) {
      this.footerbarValue = value;
    }
  }
}
</script>

<style lang="scss" scoped>
#base-footer-bar{
  display: flex;
  align-items: flex-start;;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0%;
  left: 0;
  height: max(calc(var(--sab) + 60px), 68px);
  width: var(--window-width);
  .float-div{
    border-radius: 100px;
    border: 0.5px solid var(--netural-95, #DBDCDF);
    background: rgba(239, 244, 252, 0.85);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    padding: 4px;
    .switch-area{
      display: inline-flex;
      align-items: flex-start;
      gap: 26px;
      a{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 50px;
        position: relative;
        z-index: 1;
      }
      .activate-circle{
        background: #FF5500;
        height: 50px;
        width: 50px;
        border-radius: 100px;
        position: absolute;
        transition: transform 0.3s ease;
      }
    }
  }
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
    img{
      // transform: translateX(0.4px);
    }
  }
}
</style>