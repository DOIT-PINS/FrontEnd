<template>
  <swiper :pagination="true" :modules="modules" id="header-swipe">
    <swiper-slide>
      <div class="group-image">
        <div class="gradient"></div>
        <img src="@/pages/view/pages/home/assets/SwipeImage1.png" alt="">
      </div>
      <div class="group-info">
        <BaseBadge type="type1">지금 모집중</BaseBadge>
        <div class="text-group">
          <div class="sub">중앙 클라이밍 동아리</div>
          <div class="name">YAHO</div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="group-image">
        <div class="gradient"></div>
        <img src="@/pages/view/pages/home/assets/MyMeetingImage1.png" alt="">
      </div>
      <div class="group-info">
        <BaseBadge type="type1">지금 모집중</BaseBadge>
        <div class="text-group">
          <div class="sub">축구 동아리</div>
          <div class="name">리베로</div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="group-image">
        <div class="gradient"></div>
        <img src="@/pages/view/pages/home/assets/Image.png" alt="">
      </div>
      <div class="group-info">
        <BaseBadge type="type1">지금 모집중</BaseBadge>
        <div class="text-group">
          <div class="sub">IT 개발협업동아리</div>
          <div class="name">DO IT</div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="group-image">
        <div class="gradient"></div>
        <img src="@/pages/view/pages/home/assets/SwipeImage1.png" alt="">
      </div>
      <div class="group-info">
        <BaseBadge type="type1">지금 모집중</BaseBadge>
        <div class="text-group">
          <div class="sub">중앙 클라이밍 동아리</div>
          <div class="name">YAHO</div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="group-image">
        <div class="gradient"></div>
        <img src="@/pages/view/pages/home/assets/SwipeImage1.png" alt="">
      </div>
      <div class="group-info">
        <BaseBadge type="type1">지금 모집중</BaseBadge>
        <div class="text-group">
          <div class="sub">중앙 클라이밍 동아리</div>
          <div class="name">YAHO</div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Pagination } from 'swiper/modules';
  import BaseBadge from '@/components/BaseBadge.vue';

  export default {
    components: {
      Swiper,
      SwiperSlide,
      BaseBadge
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
  };
</script>

<style lang="scss" scoped>
#header-swipe{
  border-radius: 0 0 0px 0px;
  height: 480px;
  width: 100%;
  .swiper-slide{
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    .group-image{
      display: flex;
      width:var(--window-width);
      height: 480px;
      .gradient{
        position: absolute;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.00));
        width: 100%;
        height: 480px;
      }
      img{
        width: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
    .group-info{
      margin: 0 20px 44px 20px;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .text-group{
        margin-top: 22px;
        .sub{
          text-align: left;
          color: var(--netural-96, #E1E2E4);
          font-feature-settings: 'ss10' on;
          text-shadow: 0px 0px 12px rgba(0, 0, 0, 0.20);
          font-family: Pretendard;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 142.9%; /* 20.006px */
          letter-spacing: -0.14px;
        }
        .name{
          text-align: left;
          color: var(--netural-100, var(--Background, #FFF));
          font-feature-settings: 'ss10' on;
          text-shadow: 0px 0px 12px rgba(0, 0, 0, 0.20);
          font-family: SUITE;
          font-size: 36px;
          font-style: normal;
          font-weight: 600;
          line-height: 133.4%; /* 48.024px */
          letter-spacing: -0.36px;
        }
      }
    }
  }

}
</style>

<style lang="scss">
.swiper-pagination-bullet-active{
  transition: all 0.3s ease-in-out;
  background: white!important;
  opacity: 1!important;
}
.swiper-pagination-bullet{
  background: white!important;
  opacity: 0.54;
}
</style>