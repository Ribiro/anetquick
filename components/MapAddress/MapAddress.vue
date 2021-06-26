<template>
  <div class="root">
    <v-container class="fixed-width">
      <v-row class="spacing6">
        <v-col cols="12" md="1" class="pa-6" v-if="isDesktop" />
        <v-col cols="12" lg="5" md="6" class="pa-6">
          <title-deco :text="$t('agencyLanding.office_title')" />
          <div class="block">
            <u-animate-container>
              <u-animate
                :offset="-50"
                name="fadeInLeftShort"
                delay="0.3s"
                duration="0.3s"
              >
                <v-card class="paper">
                  <h6 class="title">
                    Head Office
                  </h6>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-icon class="icon">mdi-phone</v-icon>
                      +254 727574216
                    </v-col>
                    <v-col cols="12" sm="12">
                      <v-icon class="icon">mdi-email</v-icon>
                      anetquicksolutions@gmail.com
                    </v-col>
                    <v-col cols="12" sm="12">
                      <v-icon class="icon">mdi-map-marker</v-icon>
                      Witeithie House, Room 603, Thika Town
                    </v-col>
                  </v-row>
                </v-card>
              </u-animate>
              <u-animate
                :offset="-50"
                name="fadeInLeftShort"
                delay="0.5s"
                duration="0.3s"
              >
<!--                <v-card class="paper">-->
<!--                  <h6 class="title">-->
<!--                    {{ $t('agencyLanding.office_branch') }}-->
<!--                  </h6>-->
<!--                  <v-row>-->
<!--                    <v-col cols="12" sm="6">-->
<!--                      <v-icon class="icon">mdi-phone</v-icon>-->
<!--                      +98 765 432 10-->
<!--                    </v-col>-->
<!--                    <v-col cols="12" sm="6">-->
<!--                      <v-icon class="icon">mdi-email</v-icon>-->
<!--                      hello@luxi.com-->
<!--                    </v-col>-->
<!--                    <v-col cols="12" sm="12">-->
<!--                      <v-icon class="icon">mdi-map-marker</v-icon>-->
<!--                      Lorem ipsum street Block C - Vestibullum Building-->
<!--                    </v-col>-->
<!--                  </v-row>-->
<!--                </v-card>-->
              </u-animate>
            </u-animate-container>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="pa-6">
          <v-card class="map">
            <GMap
              ref="gMap"
              :cluster="{options: {styles: clusterStyle}}"
              :center="{lat: locations[0].lat, lng: locations[0].lng}"
              :options="{fullscreenControl: false}"
              :zoom="6"
            >
              <GMapMarker
                v-for="location in locations"
                :key="location.id"
                :position="{lat: location.lat, lng: location.lng}"
              />
            </GMap>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './map-address-style.scss';
</style>

<script>
import TitleDeco from '../Title/WithDecoration'

export default {
  components: {
    TitleDeco
  },
  data() {
    return {
      currentLocation: {},
      locations: [
        {
          lat: 1.0351,
          lng: 37.0750
        }
      ],
      clusterStyle: [
        {
          url:
            'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png',
          width: 56,
          height: 56,
          textColor: '#fff'
        }
      ]
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
