<template>
  <fragment>
    <svg
      fill="#cccccc"
      width="845px"
      height="1099px"
      class="background base"
    >
      <use xlink:href="/images/decoration/square-deco-primary.svg#square" />
    </svg>
    <svg
      fill="#cccccc"
      width="845px"
      height="1099px"
      class="background front"
    >
      <use xlink:href="/images/decoration/square-deco-primary.svg#square" />
    </svg>
    <div class="root">
      <v-container>
        <v-row class="spacing8">
          <v-col cols="12" lg="1" v-if="isDesktop" />
          <v-col cols="12" md="4">
            <div class="title-deco">
              <svg
                v-if="isDesktop"
                fill="#cccccc"
                width="845px"
                height="1099px"
                class="decoration"
              >
                <use xlink:href="/images/agency/wave_decoration.svg#main" />
              </svg>
              <title-deco :text="$t('agencyLanding.expertise_title')" />
            </div>
            <u-animate-container>
              <u-animate
                :offset="-100"
                name="zoomInShort"
                delay="0.1s"
                duration="0.3s"
                class="parallax-wrap"
              >
                <div class="parallax-wrap" v-if="loaded">
                  <kinesis-container
                     :duration="1500"
                     easing="cubic-bezier(0.23, 1, 0.32, 1)"
                  >
                    <kinesis-element
                      :strength="15"
                      type="translate"
                      tag="div"
                    >
                      <span class="icon-green" />
                    </kinesis-element>
                    <kinesis-element
                      :strength="10"
                      type="translate"
                      tag="div"
                    >
                      <span class="icon-violet" />
                    </kinesis-element>
                    <kinesis-element
                      :strength="30"
                      type="translate"
                      tag="div"
                    >
                      <span class="icon-blue" />
                    </kinesis-element>
                  </kinesis-container>
                </div>
              </u-animate>
            </u-animate-container>
          </v-col>
          <v-col
            cols="12"     
            lg="7"
            md="8"
          >
            <h4 class="title-default use-text-subtitle">
              A successful project is built by a competent team
            </h4>
            <p class="desc use-text-paragraph">
              Which is why we present you with a variety of skills to provide solutions for your business. Our on-shoring team is trained and qualified to meet your needs. We are dedicated to your projects. You have a problem? We fix it!
            </p>
            <hidden point="xsDown">
              <div class="running-tag" v-if="loaded">
                <slick :options="slickOptions">
                  <div
                    v-for="(group, indexGroup) in expertiseList"
                    :key="indexGroup"
                    class="tag-group"
                  >
                    <span
                      v-for="(item, indexChild) in group"
                      :key="indexChild"
                      class="tag-item"
                    >
                      {{ item }}
                    </span>
                  </div>
                </slick>
              </div>
            </hidden>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </fragment>
</template>

<style lang="scss" scoped>
@import './expertise-style.scss';
@import '../Title/title-style.scss';
</style>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import TitleDeco from '../Title/WithDecoration'
import Hidden from '../Hidden'

export default {
  components: {
    TitleDeco,
    Hidden,
    KinesisContainer,
    KinesisElement,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        centerMode: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true
      },
      expertiseList: [
        ['Artificial Intelligence', 'Internet of Things', 'SEO'],
        ['Web Development', 'UI Designs', 'Mobile Apps'],
        ['Data Analysis', 'System Administration', 'ICT Consultancy'],
        ['Artificial Intelligence', 'Internet of Things', 'SEO'],
        ['Web Development', 'UI Designs', 'Mobile Apps'],
        ['Data Analysis', 'System Administration', 'ICT Consultancy'],
        ['Artificial Intelligence', 'Internet of Things', 'SEO'],
        ['Web Development', 'UI Designs', 'Mobile Apps'],
        ['Data Analysis', 'System Administration', 'ICT Consultancy'],
      ]
    }
  },
  mounted() {
    this.loaded = true
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
