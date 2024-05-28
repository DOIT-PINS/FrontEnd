<template>
  <div>
    <!-- 상단 고정바 -->
    <div class="fixed-navbar" :class="{ 'opaque': isNavbarOpaque }">
      <div class="margin">
        <div class="group">
          <img src="@/assets/logos/Horizontal.svg" class="logo">
          <div class="buttons">
            <img src="@/pages/view/pages/home/assets/search.svg" alt="">
            <img src="@/pages/view/pages/home/assets/alarm.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   data() {
      return {
        isNavbarOpaque: false,                   // 스크롤 값 저장용
        target: null,           // 이벤트가 등록되는 변수
      };
   },

   mounted() {
      // 페이지 스크롤 이벤트 등록
      this.target = document.getElementById('home-core');
      this.target.addEventListener('scroll', this.handleScroll);
   },

   beforeUnmount() {
      // 페이지 스크롤 이벤트 제거
      if (this.target) {
         this.target.removeEventListener('scroll', this.handleScroll);
      }
   },

   methods: {
      handleScroll() {
        if(this.target.scrollTop >= 200){
          this.isNavbarOpaque = true;
        } else {
          this.isNavbarOpaque = false;
        }
      }
   }
};
</script>

<style lang="scss" scoped>

.fixed-navbar {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: var(--window-width);
  height: max(calc(var(--sab) + 88px), 88px);
  transition: background-color 0.2s ease-in-out;
  display: flex;
  align-items: flex-end;
  .margin{
    width: 100%;
    margin: 0 17px 16px 20px;
    .group{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo{
        width: 84px;
        height: 32px;
      }
      .buttons{
        display: flex;
        gap: 20px; 
      }
    }
    
  }
}

.fixed-navbar.opaque {
  background: rgba(41, 42, 45, 0.70);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}

.page-content {
  /* 페이지 내용과 겹치지 않도록 여백 설정 */
  margin-top: 50px; /* 상단 고정바의 높이와 동일하게 설정 */
}
</style>
