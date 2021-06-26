<template>
  <v-app>
    <div>
      <main-header invert />
      <Error
        :error-code="this.error.statusCode"
        :text="$t('common.404')"
      />
      <main-footer />
    </div>
  </v-app>
</template>

<script>
import brand from '~/static/text/brand'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Error from '../components/Error'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    Error
  },
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404
        ? brand.agency.name + ' - ' + this.pageNotFound
        : brand.agency.name + ' - ' + this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: 'Not Found',
      otherError: 'An error occurred'
    }
  }
}
</script>
