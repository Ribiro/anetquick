<template>
  <div class="root">
    <div class="carousel-handle">
      <div v-if="loaded" class="carousel-wrap">
        <slick
          ref="slick"
          :options="slickOptions"
        >
          <div class="item">
            <div class="carousel-prop">
              <div />
            </div>
          </div>
          <div
            v-for="(item, index) in servicesList"
            :key="index"
            class="item"
          >
            <card
              :title="item.title"
              :desc="item.desc"
              :img="item.img"
              :button="$t('agencyLanding.services_button')"
            />
          </div>
          <div class="item">
            <div class="carousel-prop">
              <div />
            </div>
          </div>
        </slick>
      </div>
    </div>
    <div class="floating-title">
      <v-container class="fixed-width">
        <div class="title">
          <title-icon
            :text="$t('agencyLanding.services_title')"
            icon="apps"
            extended
          />
          <nav class="arrow">
            <v-btn
              fab
              small
              aria-label="next"
              class="margin"
              @click="next()"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-btn
              fab
              small
              aria-label="prev"
              class="margin"
              @click="prev()"
            >
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </nav>
        </div>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './services-style.scss';
</style>

<script>
import imgApi from '~/static/images/imgAPI'
import Card from '../Cards/Default'
import TitleIcon from '../Title/WithIcon'

export default {
  components: {
    Card,
    TitleIcon,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      slickOptions: {
        dots: false,
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
              slidesToShow: 4
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3
            }
          }
        ]
      },
      servicesList: [
        {
          title: 'Artificial Intelligence',
          desc:
            'We build web applications and software that utilize artificial intelligence as a main feature.',
          img: imgApi.services[0]
        },
        {
          title: 'Internet of Things',
          desc:
            'We are experts in developing actual gadgets, software, sensors to help boost your operations.',
          img: imgApi.services[1]
        },
        {
          title: 'Mobile Apps Development',
          desc:
            'Need a state-of-the-art android and ios mobile app? We are there for you. Reach us out.',
          img: imgApi.services[2]
        },
        {
          title: 'Web Development',
          desc:
            'We offer a wide range of technologies to deliver exquisitely robust web app solutions for our clients.',
          img: imgApi.services[3]
        },
        {
          title: 'Data Analysis',
          desc:
            'We help businesses get their data collected, processed and presented to them in actionable insights.',
          img: imgApi.services[4]
        },
        {
          title: 'System Administration',
          desc:
            'Reach out to us for systems administration service for Linux, Windows, both physical and virtual.',
          img: imgApi.services[5]
        }
      ]
    }
  },
  mounted() {
    this.loaded = true
    const props = window.innerWidth > 1400 ? 1 : 2 // div.carousel-props length for screen < 1400px and (-1) for screen > 1400px
    const lastSlide = Math.floor(this.servicesList.length + props - this.slickOptions.slidesToShow)
    setTimeout(() => {
      if (window.innerWidth > 1200 && !this.$vuetify.rtl) {
        console.log(lastSlide)
        this.$refs.slick.goTo(lastSlide)
      }
    }, 100)
  },
  methods: {
    next: function() {
      this.$refs.slick.next()
    },
    prev: function() {
      this.$refs.slick.prev()
    }
  }
}
</script>
