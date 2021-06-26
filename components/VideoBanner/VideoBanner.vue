<template>
  <div class="hero-content">
    <hidden point="smUp">
      <figure class="mobile-cover">
        <img
          :src="cover"
          alt="cover"
        >
      </figure>
    </hidden>
    <v-container :class="{ 'fixed-width': mdUp }">
      <v-row>
        <v-col cols="12" md="6">
          <div class="banner-text">
            <div class="title">
              <h3 class="text-helper use-text-title">
                Create a Solution for yor Business
              </h3>
            </div>
            <h5 class="subtitle use-text-subtitle">
              Let us work with you to help achieve your business short term and long term goals.
            </h5>
            <v-btn
              outlined
              large
              color="secondary"
              class="button"
            >
              Get Quote
              <v-icon class="icon">mdi-send</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col
          v-if="isTablet"
          md="6"
          cols="12"     
          class="pa-6"
        >
          <div class="video-wrap">
            <div class="video-figure">
              <div class="inner-figure">
                <hidden point="mdDown">
                  <v-btn
                    v-if="play"
                    fab
                    text
                    class="btn-play"
                    @click="togglePause()"
                  >
                    <v-icon v-if="playCtrl">mdi-pause</v-icon>
                    <v-icon v-else>mdi-play</v-icon>
                  </v-btn>
                </hidden>
                <img
                  :src="cover"
                  alt="cover"
                >
                <div class="overlay" />
<!--                <div-->
<!--                  v-if="yt.use"-->
<!--                  class="video"-->
<!--                >-->
<!--                  <youtube-->
<!--                    v-if="isDesktop"-->
<!--                    :video-id="videoId"-->
<!--                    :player-vars="playerVars"-->
<!--                    :width= "1080"-->
<!--                    :height="720"-->
<!--                    ref="youtube"-->
<!--                    @playing="playing"-->
<!--                    @ended="ended"-->
<!--                  />-->
<!--                </div>-->
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './banner-style.scss';
</style>

<script>
import Hidden from '../Hidden'
import imgAPI from '~/static/images/imgAPI'
import youtube from '~/youtube'

export default {
  components: {
    Hidden
  },
  data() {
    return {
      videoId: 'WRCB2QSrQQU',
      // playerVars: {
      //   autoplay: 1,
      //   controls: 0,
      //   rel: 0,
      //   showinfo: 0,
      //   mute: 1,
      //   origin: 'http://localhost:8001'
      // },
      // yt: youtube,
      // play: false,
      // playCtrl: true,
      cover: imgAPI.new[0]
    }
  },
  methods: {
    playing() {
      this.play = true
      this.playCtrl = true
    },
    ended() {
      this.player.playVideo()
    },
    togglePause() {
      this.playCtrl = !this.playCtrl
      if (this.playCtrl) {
        this.player.playVideo()
      } else {
        this.player.pauseVideo()
      }
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    },
    mdUp() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl'
    },
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    },
    isTablet() {
      const smUp = this.$store.state.breakpoints.smUp
      return smUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const mdDown = this.$store.state.breakpoints.mdDown
      return mdDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
