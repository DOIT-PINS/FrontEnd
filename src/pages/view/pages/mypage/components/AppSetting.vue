<template>
  <div id="app-setting">
    <div class="header">설정</div>
    <div class="item">고객센터</div>
    <div class="item">알림</div>
    <div class="item">로그아웃</div>
  </div>
</template>

<style lang="scss" scoped>
#app-setting{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 107px;
  .header{
    width: calc(var(--window-width) - 80px);
    text-align: left;
    margin: 28px 40px 16px 40px;
    color: var(--netural-5, #0F0F10);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 144.5%; /* 26.01px */
    letter-spacing: -0.004px;
  }
  .item{
    width: calc(var(--window-width) - 80px);
    text-align: left;
    margin: 12px 40px;
    color: var(--netural-5, #0F0F10);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: -0.24px;
  }
}
</style>