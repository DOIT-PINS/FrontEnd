<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">
  <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css" />
  <link href="https://cdn.jsdelivr.net/gh/sun-typeface/SUITE/fonts/static/woff2/SUITE.css" rel="stylesheet">
  <router-view class="core-viewer"></router-view>
  <splashScreen></splashScreen>
</template>

<script>

import splashScreen from './pages/global/splash-screen.vue';
export default {
  components: {splashScreen},
  mounted() {
    console.log(import.meta.env) // "123"
    console.log(import.meta.env.VITE_SUPABASE_URL) // undefined
    this.$nextTick(() => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      document.documentElement.style.setProperty('--window-width', `${windowWidth}px`);
      document.documentElement.style.setProperty('--window-height', `${windowHeight}px`);
      document.documentElement.style.setProperty('--dynamic-window-height', `${windowHeight}px`);

      if (windowWidth === 0 || windowHeight === 0) {
        location.reload();
      }
      
    });
  }
}
</script>

<style lang="scss">
input, textarea { /* 아이폰 input 기본 스타일 제거 */ 
	appearance: none; 
  border-radius: 0; 
  -webkit-appearance: none; 
  -webkit-border-radius: 0; 
}
select { /* 아이폰 select 기본 스타일 제거 */ 
    appearance: none; 
    -moz-appearance: none; 
    -webkit-appearance: none; 
}
select::-ms-expand { /* 익스플로러 select 화살표 제거 for IE10, 11 */ 
	display: none; 
}
html, body{
  // overscroll-behavior-y: none;
  // overscroll-behavior: none;
  // overflow-y : auto;
  position: fixed;
  // overflow: hidden;
  background: #FFF;
}

.core-viewer{
  width: 100vw;
  
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch; /* enables “momentum” (smooth) scrolling */
}

#app {
  
  -webkit-tap-highlight-color:transparent;
  font-family: Pretendard;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#viewport {
  padding-top: 48px;
}
::-webkit-scrollbar {
  display: none;
}
:root {
  --sat: env(safe-area-inset-top);
  --sar: env(safe-area-inset-right);
  --sab: env(safe-area-inset-bottom);
  --sal: env(safe-area-inset-left);
}
* {
  -webkit-tap-highlight-color:rgba(255,255,255,0);
  user-select: none;
  -webkit-touch-callout: none;
}

</style>
