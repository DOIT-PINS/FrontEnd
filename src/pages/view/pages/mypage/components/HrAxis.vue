<template>
  <div id="hr-axis">
    <div v-if="type == 'type1'" class="type1"></div>
    <div v-if="type == 'type2'" class="type2"></div>
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
#hr-axis{
  .type1{
    background: var(--netural-97, #EAEBEC);
    height: 8px;
  }
  .type2{
    margin: 23px 20px 1px 20px;
    height: 1px;
    background: #EAEBEC;
    border-radius: 5px;
  }
}
</style>