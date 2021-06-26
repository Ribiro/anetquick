<template>
  <div class="parallax-wrap">
    <div v-if="loaded">
      <div class="banner inner-parallax">
        <div class="figure">
          <div>
            <parallax
              :speed-factor="0"
              direction="down"
            >
              <div class="parallax-square parallax-primary" />
            </parallax>
          </div>
        </div>
      </div>
      <div class="about inner-parallax">
        <div class="figure">
          <div>
            <parallax
              :speed-factor="0.25"
              direction="down"
            >
              <div class="parallax-square parallax-secondary" />
            </parallax>
          </div>
        </div>
        <div class="figure">
          <div>
            <parallax
              :speed-factor="0.2"
              direction="down"
            >
              <div class="parallax-square parallax-primary" />
            </parallax>
          </div>
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
