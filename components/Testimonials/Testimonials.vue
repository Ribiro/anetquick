<template>
  <div class="root">
    <square-parallax :loaded="loaded"/>
    <div v-if="loaded" class="carousel">
      <slick
        ref="slick"
        :options="slickOptions"
      >
        <div
          v-for="(item, index) in testiContent"
          :key="index"
          class="item"
        >
          <testimonial-card
            :avatar="item.avatar"
            :title="item.title"
            :name="item.name"
            :text="item.text"
            :star="item.rating"
          />
        </div>
        <div class="item">
          <div class="item-props-last" />
        </div>
      </slick>
    </div>
    <div class="floating-title">
      <v-container class="fixed-width">
        <div class="title">
          <title-icon
            :text="$t('agencyLanding.testimonial_title')"
            icon="mdi-format-quote-close"
          />
        </div>
      </v-container>
    </div>
    <company-logo />
  </div>
</template>

<style lang="scss" scoped>
@import './testi-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import TestimonialCard from '../Cards/Testimonial'
import TitleIcon from '../Title/WithIcon'
import CompanyLogo from '../CompanyLogo'
import SquareParallax from '../Parallax/SingleSquare'

export default {
  components: {
    TestimonialCard,
    TitleIcon,
    CompanyLogo,
    SquareParallax,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      testiContent: [
        {
          text: 'We thank ANETQUICK Solutions for the wonderful job in helping us develop our program. Everyone was professional, excellent and hard working.',
          avatar: imgAPI.avatar[10],
          name: 'Henry Mwangi',
          title: 'Director, Qrmenu',
          rating: 5
        },
        {
          text:
            'We would like to express our satisfaction on the cooperation regarding the development of our web application. You did a very professional job. ',
          avatar: imgAPI.avatar[10],
          name: 'Muhoro Muchiri',
          title: 'Director, Qrmenu',
          rating: 5
        },
        {
          text:
            'I wanted to take a moment to thank you for the services your team has provided. Your team has been a pleasure to work with, professional and timely.',
          avatar: imgAPI.avatar[10],
          name: 'Ribiro Matheri',
          title: 'Software Developer',
          rating: 4
        }
      ],
      slickOptions: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.loaded = true
    const props = window.innerWidth > 1400 ? 0 : 1 // div.carousel-props length for screen < 1400px and (-1) for screen > 1400px
    const lastSlide = Math.floor(this.testiContent.length + props - this.slickOptions.slidesToShow)
    setTimeout(() => {
      if (window.innerWidth > 1279 && !this.$vuetify.rtl) {
        this.$refs.slick.goTo(lastSlide)
      }
    }, 100)
  }
}
</script>
