<template>
  <div class="check__line">
    <input :id="id" type="checkbox" :checked="isChecked" @change="emitChange" />
    <label :for="id">
      <span :class="{ 'bold': bold }">{{ label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    isChecked: {
      type: Boolean,
      default: false,
    },
    bold: Boolean
  },
  methods: {
    emitChange(event) {
      this.$emit('update:checked', event.target.checked);
    },
  },
};
</script>



<style lang="scss" scoped>
.check__line {
  input[type="checkbox"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
    + label {
      display: inline-block;
      position: relative;
      padding-left: 40px;
      cursor: pointer;

      &:before {
        content: "";
        position: absolute;
        left: -6px;
        top: -4px;
        width: 32px;
        height: 32px;
        background: url(@/assets/checkbox/nochecked.svg) no-repeat;
      }
    }

    &:checked + label:after {
      content: "";
      position: absolute;
      left: -6px;
      top: -4px;
      width: 32px;
      height: 32px;  
      background: url(@/assets/checkbox/checked.svg) no-repeat;
    }
  }

  input[type="checkbox"] + label span.bold {
    color: var(--netural-30, #46474C);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 144.5%; /* 26.01px */
    letter-spacing: -0.004px;
  }
  
  input[type="checkbox"] + label span {
    color: var(--netural-30, #46474C);
    font-feature-settings: 'ss10' on;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 146.7%;
    letter-spacing: -0.32px;
  }

  
}

</style>