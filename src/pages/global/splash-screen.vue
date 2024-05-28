<template>
  <div id="splash-screen" :class="{ fadeout: !showed }" v-if="hiddened">
    <img src="@/assets/logos/Default.svg" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      showed: true,
      hiddened: true
    }
  },
  mounted() {
      setTimeout(() => {
          this.showed = false
      }, 800)
      setTimeout(() => {
          this.hiddened = false
      }, 1150)
  }
}
</script>

<style lang="scss" scoped>
#splash-screen{
  top: 0%;
  z-index: 999999999999999;
  position: absolute;
  width: var(--window-width);
  height: var(--window-height);
  background: $background;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fadeout {
  animation: fadeout 0.5s ease-in-out;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>