<template>
  <div id="home-core">
    <FixHeader></FixHeader>
    <HeaderSwipe></HeaderSwipe>
    <MyMeeting></MyMeeting>
    <GatheringMeeting></GatheringMeeting>
  </div>
</template>

<script>
import HeaderSwipe from '@/pages/view/pages/home/components/HeaderSwipe.vue';
import MyMeeting from '@/pages/view/pages/home/components/MyMeeting.vue';
import GatheringMeeting from '@/pages/view/pages/home/components/GatheringMeeting.vue';
import FixHeader from '@/pages/view/pages/home/components/FixHeader.vue'

export default {
  components: {
    HeaderSwipe,
    MyMeeting,
    GatheringMeeting,
    FixHeader
  }
}
</script>

<style lang="scss" scoped>
#home-core{
  background: $background;
  min-height: var(--window-height);
  width: var(--window-width);
}
</style>