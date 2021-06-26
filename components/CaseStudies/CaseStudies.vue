<template>
  <fragment>
    <vue-easy-lightbox
      v-if="loaded"
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    />
    <div class="root">
      <v-container :class="{ 'fixed-width': mdUp }">
        <u-animate-container>
          <v-row class="spacing6">
            <v-col cols="12" md="3" class="pa-6">
              <u-animate
                :offset="-100"
                name="fadeInLeftShort"
                delay="0.2s"
                duration="0.3s"
              >
                <div class="side-filter">
                  <h4 class="title-primary">
                    Our Portfolio
                  </h4>
                  <v-list class="nav">
                    <v-list-item-group v-model="item" color="primary">
                      <v-list-item
                        v-for="(item, index) in categories"
                        :key="index"
                        class="filter"
                      >
                        <v-list-item-title>
                          {{ item }}
                        </v-list-item-title>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </div>
              </u-animate>
            </v-col>
            <v-col cols="12" md="9" class="pa-6">
              <div class="massonry">
                <v-row>
                  <v-col cols="12" sm="3" class="pa-3">
                    <u-animate
                      name="fadeInUpShort"
                      delay="0.2s"
                      duration="0.4s"
                    >
                      <div
                        v-for="(item, index) in caseData"
                        :key="index"
                        v-if="item.size === 'small'"
                      >
                        <case-card
                          :bg="item.bg || ''"
                          :logo="item.logo"
                          :title="item.title"
                          :desc="item.desc"
                          :size="item.size"
                          :simple="item.simple || false"
                          :show-img="() => showImg(index)"
                        />
                      </div>
                    </u-animate>
                  </v-col>
                  <v-col cols="12" sm="4" class="pa-3">
                    <u-animate
                      name="fadeInUpShort"
                      delay="0.4s"
                      duration="0.4s"
                    >
                      <div
                        v-for="(item, index) in caseData"
                        :key="index"
                        v-if="item.size === 'medium'"
                      >
                        <case-card
                          :bg="item.bg || ''"
                          :logo="item.logo"
                          :title="item.title"
                          :desc="item.desc"
                          :size="item.size"
                          :simple="item.simple || false"
                          :show-img="() => showImg(index)"
                        />
                      </div>
                    </u-animate>
                  </v-col>
                  <v-col cols="12" sm="5" class="pa-3">
                    <u-animate
                      :offset="-100"
                      name="fadeInUpShort"
                      delay="0.6s"
                      duration="0.4s"
                    >
                      <div
                        v-for="(item, index) in caseData"
                        :key="index"
                        v-if="item.size === 'big'"
                      >
                        <case-card
                          :bg="item.bg || ''"
                          :logo="item.logo"
                          :title="item.title"
                          :desc="item.desc"
                          :size="item.size"
                          :simple="item.simple || false"
                          :show-img="() => showImg(index)"
                        />
                      </div>
                    </u-animate>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </u-animate-container>
      </v-container>
    </div>
  </fragment>
</template>

<style lang="scss" scoped>
@import './case-study-style.scss';
@import '../Title/title-style.scss';
</style>

<script>
import imgApi from '~/static/images/imgAPI'
import CaseCard from '../Cards/Case'

export default {
  components: {
    CaseCard
  },
  data() {
    return {
      visible: false,
      index: 0,
      loaded: false,
      item: 0,
      categories: [
        'Artificial Intelligence',
        'Internet of Things',
        'Mobile Apps',
        'Web Apps',
        'Data Analysis'
      ],
      caseData: [
        {
          bg: '/images/portfolio/image1.jpg',
          logo: '/images/portfolio/QR LOGO.png',
          title: 'Qrmenu Mobile App',
          desc: 'Get it on playstore',
          size: 'small'
        },
        {
          logo: '/images/portfolio/QR LOGO.png',
          title: 'Qrmenu',
          desc: 'Upload your menu. scan and order them with ease!',
          size: 'small',
          simple: true
        },
        {
          logo: '/images/portfolio/logo.jpg',
          title: 'ANETQUICK Solutions',
          desc: 'Your business number one option tech company',
          size: 'medium',
          simple: true
        },
        {
          bg: '/images/portfolio/image3.jpg',
          logo: '/images/portfolio/QR LOGO.png',
          title: 'Qrmenu',
          desc: 'Desktop Version',
          size: 'medium'
        },
        {
          bg: '/images/portfolio/image4.jpg',
          logo: '/images/portfolio/QR LOGO.png',
          title: 'Qrmenu',
          desc: 'Desktop Version',
          size: 'medium'
        },
        {
          bg: '/images/portfolio/image2.jpg',
          logo: '/images/portfolio/QR LOGO.png',
          title: 'Qrmenu',
          desc: 'Client view',
          size: 'big'
        },
        {
          bg: '/images/portfolio/image5.jpg',
          logo: '/images/portfolio/QR LOGO.png',
          title: 'Qrmenu',
          desc: 'Uploading menu items',
          size: 'big'
        }
      ]
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    showImg(index) {
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    }
  },
  computed: {
    mdUp() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl'
    },
    imgs() {
      const arr = []
      this.caseData.map(item => {
        arr.push(item.bg || item.logo)
      })
      return arr
    }
  }
}
</script>
