<template>
  <v-snackbar
    :timeout="-1"
    v-model="snackbar"
    class="notification"
  >
    <div class="action">
      Welcome to the online home of ANETQUICK Solutions. Have a good time!
    </div>
    <v-btn
      class="button"
      @click="snackbar = false"
    >
      Okay
    </v-btn>
  </v-snackbar>
</template>

<style lang="scss" scoped>
@import './notification-style.scss';
</style>

<script>
export default {
  data() {
    return {
      snackbar: true
    }
  }
}
</script>
