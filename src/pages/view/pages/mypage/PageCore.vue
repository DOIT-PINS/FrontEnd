<template>
  <div id="mypage-core">
    <UserProfile></UserProfile>
    <HrAxis type="type1"></HrAxis>
    <MyInfo></MyInfo>
    <HrAxis type="type2"></HrAxis>
    <AppSetting></AppSetting>
  </div>
</template>

<script>
import UserProfile from '@/pages/view/pages/mypage/components/UserProfile.vue';
import HrAxis from '@/pages/view/pages/mypage/components/HrAxis.vue';
import MyInfo from '@/pages/view/pages/mypage/components/MyInfo.vue';
import AppSetting from '@/pages/view/pages/mypage/components/AppSetting.vue';

export default {
  components:{
    UserProfile,
    HrAxis,
    MyInfo,
    AppSetting
  }
}
</script>

<style lang="scss" scoped>
#mypage-core{
  background: $background;
  min-height: var(--window-height);
  width: var(--window-width);
}
</style>