<template>
  <div id="base-badge">
    <div v-if="type == 'type1'" class="type1">
      <slot></slot>
    </div>
    <div v-if="type == 'type2'" class="type2">
      <slot></slot>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
    },
  }
}
</script>

<style lang="scss" scoped>
#base-badge{
  .type1{
    border-radius: 100px;
    background: $main;
    padding: 5px 7px;
    color: var(--netural-100, var(--Background, #FFF));
    text-align: center;
    font-feature-settings: 'ss10' on;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 133.333% */
    letter-spacing: -0.12px;
  }
  .type2{
    display: inline-block;
    padding: 4px 8px;
    border-radius: 100px;
    background: var(--netural-96, #E1E2E4);
    color: var(--netural-60, #878A93);
    text-align: center;
    font-feature-settings: 'ss10' on;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
    line-height: 127.3%; /* 11.457px */
  }
}
</style>