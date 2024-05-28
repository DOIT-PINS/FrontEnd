<template>
  <router-view v-slot="{ Component }" class="Viewx">
    <transition name="transitionAnimationOpacity">
      <component :is="Component" :goPath="goPath" />
    </transition>
  </router-view>
  <BaseFooterbar></BaseFooterbar>
</template>

<script>
import BaseFooterbar from '@/components/BaseFooterbar.vue';

export default {
  components:{
    BaseFooterbar
  },
  methods: {
    watchRouteChanges(to, from) {
      this.fromPath = from.fullPath;
      this.goPath = to.fullPath;
    },
  },
  data() {
    return {
      goPath: "",
      fromPath: "",
      dynamicAnimationValue: 'RIGHT',
      footerPathList: [
        '/auth/home',
      ],
    };
  },
  computed: {
    dynamicAnimationAssignment() {
      console.log(this.goPath)
      if (this.footerPathList.includes(this.goPath)) {
        const goPathNum = this.footerPathList.indexOf(this.goPath);
        const fromPathNum = this.footerPathList.indexOf(this.fromPath);
        if (fromPathNum < goPathNum) {
          return 'RIGHT';
        } else {
          return 'LEFT';
        }
      } 
      return 'RIGHT';
    },
    Component() {
      return this.$route.meta.layout || this.$route.component
    },
    readGoPathValue() {
      return this.goPath
    }
  },
  watch: {
    '$route'(to, from) {
      this.watchRouteChanges(to, from); // 주소창의 링크 변화 감지 메소드 호출
    }
  },
  created() {
    this.watchRouteChanges(this.$route, this.$route); // 초기 상태에서도 주소창 변화를 감지
  }
}
</script>


<style lang="scss" scoped>
.Viewx{
  max-height: var(--window-height);
  max-width: var(--window-width);
  overflow: hidden;
  overscroll-behavior-y: none;
  overflow: hidden;
  overscroll-behavior: none;
  overflow-y : auto;
}
.LEFT-enter-active,
.LEFT-leave-active {
  width: 100%;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 999999999;
}

.LEFT-enter-from {
  left: -100%;
}

.LEFT-enter-to {
  left: 0%;
}

.RIGHT-enter-active,
.RIGHT-leave-active {
  width: 100%;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 999999999;
}

.RIGHT-enter-from {
  left: 100%;
}

.RIGHT-enter-to {
  left: 0%;
}

.transitionAnimationOpacity-enter-active,
.transitionAnimationOpacity-leave-active {
  transition: all 0.3s ease-in-out;
}

.transitionAnimationOpacity-enter-from,
.transitionAnimationOpacity-leave-to {
  opacity: 0;
  position: fixed;
  top:0;
}
</style>