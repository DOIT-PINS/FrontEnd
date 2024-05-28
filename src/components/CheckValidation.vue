<template>
  <div id="validation"  :class="{ 'hidded': Hide && !Valid }">
    <div class="check">
      <div class="image-area">
        <img src="@/assets/validation/invalid.svg" class="invalid">
        <img src="@/assets/validation/valid.svg" :class="['valid', Valid ? '' : 'hide']">
      </div>
      <div :class="['text', Valid ? 'activate' : '']">{{ Text }}</div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    Type: String,
    Valid: Boolean,
    Hide: Boolean,
    Text: String
  }
}
</script>

<style lang="scss" scoped>
#validation{  
  transition: opacity 0.2s ease-in-out;
  margin-right: 4px;
  .check{
    display: flex;
    align-items: center;
    .image-area{
      margin-right: 2px;
      display: flex;
      .valid{
        transition: opacity 0.2s ease-in-out;
        position: absolute;
      }
      .hide{
        opacity: 0;
      }
    }
    .text{
      transition: color 0.2s ease-in-out;
      color: var(--Status-Off, #C2C4C8);
      font-feature-settings: 'ss10' on;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 133.4%; /* 16.008px */
      letter-spacing: -0.12px;
    }
    .activate{
      color: var(--Check-Positive, #00BF40);
    }
  }
}
.hidded{
  opacity: 0;
}
</style>
