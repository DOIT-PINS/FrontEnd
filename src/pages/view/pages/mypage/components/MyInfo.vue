<template>
  <div id="my-info">
    <div class="header">내 정보</div>
    <div class="item">아이디 확인</div>
    <div class="item">비밀번호 변경</div>
    <div class="item">나의 관심사 수정</div>
    <div class="item">학교 인증</div>
    <div class="item">나의 지원현황</div>
  </div>
</template>

<style lang="scss" scoped>
#my-info{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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