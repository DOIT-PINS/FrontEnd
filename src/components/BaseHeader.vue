<template>
  <div id="base-header">
    <div class="type1" v-if="headerType == 1">
      <router-link :to="previousLink" v-if="previousLink !== null"><img src="@/assets/header/backword.svg" alt=""></router-link>
      <img v-else src="@/assets/header/backword.svg" alt="" @click="$emit('clickevent')">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headerText: String,
    previousLink: String,
    headerType: Number
  }
}
</script>

<style lang="scss" scoped>
#base-header{
  position: absolute;
  width: var(--window-width);
  height: 72px;
  .type1{
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    float:left;
    background: none;
    padding: 0 20px;
  }
}
</style>