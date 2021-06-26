<template>
  <v-card class="default-card">
    <figure>
      <img
        :src="img"
        alt="img"
      >
    </figure>
<!--    <v-card-title>{{ title }}</v-card-title>-->
    <v-card-text>
      <span class="light-blue--text font-weight-medium">{{ title }}</span>
      <span class="font-italic"><p>{{ desc }}</p></span>
    </v-card-text>
    <v-card-actions>
      <v-btn
        outlined
        block
        color="primary"
        class="button">
      {{ button }}...
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss" scoped>
@import './card-style.scss';
</style>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    button: {
      type: String,
      required: true
    }
  }
}
</script>
