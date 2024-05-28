<template>
  <div id="user-profile">
    <div class="profile">
      <img src="@/pages/view/pages/mypage/assets/nonProfileImage.svg" alt="" srcset="">
      <div class="name">닉네임</div>
    </div>
    <div class="edit">
      <img src="@/pages/view/pages/mypage/assets/profileEditArrow.svg" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>  
#user-profile{
  margin-top: max(calc(var(--sat) + 36px), 36px);
  margin-right: 40px;
  margin-bottom: 30px;
  margin-left: 40px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .profile{
    display: flex;
    align-items: center;
    color: var(--netural-5, #0F0F10);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 140% */
    letter-spacing: -0.4px;
    .name{
      margin-left: 20px;
    }
  }
}
</style>