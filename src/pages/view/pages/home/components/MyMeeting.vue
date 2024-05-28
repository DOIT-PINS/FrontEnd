<template>
  <div id="my-meeting">
    <div class="header">
      <div class="title">나의 모임</div>
      <div class="more">
        전체보기
        <img src="@/pages/view/pages/home/assets/MyMeetingMoreArrow.svg" alt="">
      </div>
    </div>
    <div class="object-view">
      <div class="object">
        <div class="image">
          <div class="gradient"></div>
          <img src="@/pages/view/pages/home/assets/MyMeetingImage1.png" alt="">
        </div>
        <div class="name">리베로</div>
      </div>
      <div class="object">
        <div class="image">
          <div class="gradient"></div>
          <img src="@/pages/view/pages/home/assets/모임이미지_아트렌 (1).png" alt="">
        </div>
        <div class="name">아트렌</div>
      </div>
      <div class="object">
        <div class="image">
          <div class="gradient"></div>
          <img src="@/pages/view/pages/home/assets/dasd.jpeg" alt="">
        </div>
        <div class="name">KALPA</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#my-meeting{
  .header{
    margin: 42px 20px 24px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title{
      color: var(--netural-15, #1B1C1E);
      font-family: SUITE;
      font-size: 22px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px; /* 136.364% */
      letter-spacing: -0.44px;
    }
    .more{
      display: flex;
      align-items: center;
      color: var(--netural-60, #878A93);
      text-align: right;
      font-feature-settings: 'ss10' on;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px; /* 133.333% */
      letter-spacing: -0.12px;
      img{
        margin-left:4px;
      }
    }
  }
  .object-view{
    display: flex;
    overflow-x: auto; 
    gap: 8px; 
    padding: 0 20px;
    .object{
      flex: 0 0 auto; 
      position: relative; 
      .image{
        display: inline-block;
        width: 150px;
        height: 250px;
        img{
          width: 150px;
          height: 250px;
          border-radius: 12px;
        }
        .gradient{
          border-radius: 12px;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%);
        }
      }
      .name{
        margin: 0 8px 21px 8px; 
        position: absolute;
        bottom: 0;
        text-align: left;
        color: var(--netural-100, var(--Background, #FFF));
        font-feature-settings: 'ss10' on;
        text-shadow: 0px 0px 12px rgba(0, 0, 0, 0.20);
        font-family: SUITE;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 133.4%; /* 24.012px */
        letter-spacing: -0.486px;
      }
    }
  }
}
</style>
