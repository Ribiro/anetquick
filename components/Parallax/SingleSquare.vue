<template>
  <div class="parallax-wrap">
    <div class="testi inner-parallax">
      <div class="figure">
        <div v-if="loaded">
          <parallax
            :speed-factor="0.2"
            :section-height="1000"
            direction="down"
          >
            <div class="parallax-square parallax-secondary-single" />
          </parallax>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './parallax-style.scss';
</style>

<script>
import Parallax from 'vue-parallaxy'
export default {
  components: {
    Parallax
  },
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
