<template>
  <div id="base-input">
    <div class="input-title">{{ InputTitle }}</div>
    <input 
      :type="InputType" 
      :placeholder="InputPlaceholder" 
      :value="InputModel"
      @input="updateInputModel($event.target.value)"
      @focus="$emit('focus')"
      @blur="$emit('blur')" 
    >
  </div>
</template>

<script>
export default {
  props: {
    InputTitle: String,
    InputPlaceholder: String,
    InputType: String,
    InputModel: String
  },
  methods: {
    updateInputModel(value) {
      this.$emit('update:InputModel', value);
    }
  }
}
</script>




<style lang="scss" scoped>
.input-title{
  text-align: left;
  color: var(--netural-50, #70737C);
  font-feature-settings: 'ss10' on;

  /* Semibold/14px */
  font-family: SUITE;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 142.9%; /* 20.006px */
  letter-spacing: 0.203px;
}
input{
  width: 100%;
  -webkit-appearance: none;
  -webkit-border-radius: 0;
  appearance: none;
  border-radius: 0;
  padding: 8px 0;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #E1E2E4;
  border-bottom-color: #E1E2E4;
  transition: 0.25s border ease-in-out;
  color: var(--netural-20, #292A2D);
  font-feature-settings: 'ss10' on;
  font-family: SUITE;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.091px;
  &:focus{
    outline: 0;
    border-bottom-color: #FF5500;
    border-bottom: 1.5px solid #FF5500;
  }
  &::placeholder{
    color: var(--netural-90, #C2C4C8);
    font-feature-settings: 'ss10' on;
    font-family: SUITE;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.091px;
  }
}
</style>