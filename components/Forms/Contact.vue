<template>
  <div class="form-wrap">
    <v-snackbar
      :timeout="4000"
      top
      right
      v-model="snackbar"
      class="notification"
    >
      <div class="action">
        Message Sent
      </div>
      <v-btn
        text
        icon
        @click="snackbar = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <hidden point="mdUp">
      <div class="logo logo-header">
        <nuxt-link :to="routeLink.agency.home">
          <img :src="logo" alt="logo">
        </nuxt-link>
      </div>
    </hidden>
    <hidden point="smDown">
      <v-btn
        :href="routeLink.agency.home"
        icon
        class="backtohome"
      >
        <i class="ion-ios-home-outline" />
        <i class="ion-ios-arrow-thin-left" />
      </v-btn>
    </hidden>
    <v-container class="max-md">
      <h3 class="use-text-title pb-3 text-center">
        {{ $t('common.contact_title') }}
      </h3>
      <p class="desc use-text-subtitle2 text-center">
        {{ $t('common.contact_subtitle') }}
      </p>
      <div class="form">
        <v-form
          ref="form"
          v-model="valid"
        >
          <v-row class="spacing6">
            <v-col cols="12" sm="6" class="pa-6">
              <v-text-field
                v-model="name"
                :rules="nameRules"
                :label="$t('common.form_name')"
                class="input"
                required
              />
            </v-col>
            <v-col cols="12" sm="6" class="pa-6">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                :label="$t('common.form_email')"
                class="input"
                required
              />
            </v-col>
            <v-col cols="12" sm="6" class="pa-6">
              <v-text-field
                v-model="phone"
                :label="$t('common.form_phone')"
                class="input"
              />
            </v-col>
            <v-col cols="12" sm="6" class="pa-6">
              <v-text-field
                v-model="company"
                :label="$t('common.form_company')"
                class="input"
              />
            </v-col>
            <v-col cols="12" class="pa-6">
              <v-textarea
                v-model="message"
                rows="6"
                class="input"
                :label="$t('common.form_message')"
              />
            </v-col>
          </v-row>
          <div class="btn-area">
            <div class="form-control-label">
              <v-checkbox
                v-model="checkbox"
                color="primary"
                :rules="[v => !!v || 'You must agree to continue!']"
                :label="$t('common.form_terms')"
                required
              />
              <a href="#">
                {{ $t('common.form_privacy') }}
              </a>
            </div>
            <v-btn
                v-show="!button"
                :disabled="!valid"
                color="secondary"
                @click="sendMessage"
              large
            >
              {{ $t('common.form_send') }}
              <v-icon class="right-icon">
                mdi-send
              </v-icon>
            </v-btn>
            <v-row
                class="fill-height"
                align-content="center"
                justify="center"
                v-show="button"
            >
              <v-col
                  class="subtitle-1 text-center"
                  cols="12"
              >
                Sending Message
              </v-col>
              <v-col cols="6">
                <v-progress-linear
                    color="deep-purple accent-4"
                    indeterminate
                    rounded
                    height="6"
                ></v-progress-linear>
              </v-col>
            </v-row>
          </div>
        </v-form>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './form-style.scss';
@import '../Title/title-style.scss';
</style>

<script>
import logo from '~/static/images/new/logo2.jpg'
import brand from '~/static/text/brand'
import link from '~/static/text/link'
import Hidden from '../Hidden'
import axios from 'axios'

export default {
  components: {
    Hidden
  },
  data() {
    return {
      valid: true,
      snackbar: false,
      button: false,
      name: '',
      nameRules: [v => !!v || 'Name is required'],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      phone: '',
      company: '',
      message: '',
      checkbox: false,
      logo: logo,
      brand: brand,
      routeLink: link,
      username: 'classapp',
      api_key:
          '8957e5da070fca100834720c242b1c9f92f2cf5639053df7548bd01b306daf2f',
      recipient1: '0727802446',
      recipient2: '0758513955',
      recipient3: '0715785746'
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    sendMessage() {
      this.button = true
      axios
          .post('https://contact-us-flask.herokuapp.com/api/v1/sms', {
            username: this.username,
            api_key: this.api_key,
            name: this.name,
            email: this.email,
            phone: this.phone,
            company: this.company,
            message: this.message,
            recipient1: this.recipient1,
            recipient2: this.recipient2,
            recipient3: this.recipient3
          })
          .then(Response => {
            this.button = false
            this.snackbar = true
            this.email = ''
            this.name = ''
            this.phone = ''
            this.company = ''
            this.message = ''
            console.log(Response)
          })
          .catch(err => {
            this.errors.push(err)
          })
    }
  }
}
</script>
