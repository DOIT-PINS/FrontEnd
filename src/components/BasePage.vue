<template>
  <div id="base-page">
    <base-header-vue
      :headerText="PageHeaderText"
      :previousLink="PagePreviousLink"
      :headerType="PageHeaderType"
      @clickevent="$emit('headerclick')"
      class="animation" :class="{ hidden: HeaderHidden }"
    >
    </base-header-vue>
    <slot></slot>
  </div>
</template>

<script>
import BaseHeaderVue from './BaseHeader.vue'
export default {
  components: {BaseHeaderVue},
  props: {
    PageHeaderText: String,
    PagePreviousLink: String,
    PageHeaderType: Number,
    HeaderHidden: Boolean
  },
}
</script>

<style lang="scss" scoped>
.animations {
  transition: opacity 0.2s ease-in-out
}
.hidden{
  opacity: 0;
}
#base-page{
  height: 100%;
}
</style>