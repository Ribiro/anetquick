<template>
  <div>
    <decoration />
    <contact />
  </div>
</template>

<script>
import Contact from '~/components/Forms/Contact'
import Decoration from '~/components/Forms/Decoration'
import brand from '~/static/text/brand'

export default {
  components: {
    Contact,
    Decoration
  },
  head() {
    return {
      title: brand.agency.name + ' - Contact'
    }
  }
}
</script>
