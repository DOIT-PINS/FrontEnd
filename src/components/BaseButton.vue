<template>
  <div
    v-if="!link"
    :class="mode"
    class="animations"
    @click="$emit('clickevent')"
  >
    <slot></slot>
  </div>
  <router-link v-else :to="to" :class="mode" class="animations">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
}
</script>

<style lang="scss" scoped>
.animations {
  transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
}

a{
  text-decoration: none;
  display: inline-block;
  width: calc(var(--window-width) - 80px);
  padding: 12px 0px !important;
}

.main {
  padding: 12px 75px;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  background: $main;
  color: #FFFFFF;
  color: var(--netural-100, var(--Background, #FFF));
  text-align: center;
  font-feature-settings: 'ss10' on;

  /* Semibold/16px */
  font-family: SUITE;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: -0.32px;
}

.sub {
  padding: 12px 75px;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  background: #E1F0FF;
  color: var(--Main, #F50);
  text-align: center;
  font-feature-settings: 'ss10' on;

  /* Semibold/16px */
  font-family: SUITE;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: -0.32px;
}

.deactivate {
  padding: 12px 75px;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  background: var(--netural-95, #DBDCDF);
  color: var(--netural-70, #989BA2);
  text-align: center;
  font-feature-settings: 'ss10' on;
  font-family: SUITE;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%; /* 24px */
  letter-spacing: -0.32px;
}

.keyboardActivate{
  position:absolute;
  bottom: 0;
  left: 0;
  width: var(--window-width);
  background: var(--Main, #F50);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--netural-100, var(--Background, #FFF));
  text-align: center;
  font-feature-settings: 'ss10' on;
  font-family: SUITE;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: -0.32px;
  height: 52px;
}

.keyboarDeactivate{
  position:absolute;
  bottom: 0;
  left: 0;
  width: var(--window-width);
  background: var(--netural-95, #DBDCDF);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--netural-80, #AEB0B6);
  text-align: center;
  font-feature-settings: 'ss10' on;
  font-family: SUITE;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: -0.32px;
  height: 52px;
}

.moreGatheringGroup{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  border-radius: 50px;
  background: var(--Sub, #EFF4FC);
  color: var(--Main, #F50);
  text-align: center;
  font-feature-settings: 'ss10' on;
  font-family: SUITE;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.32px;
}
</style>