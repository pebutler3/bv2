<template>
  <div class="c-rich-text">
    <div class="c-rich-text__html" v-html="text" v-if="isTypeHtml"/>
    <p v-else>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'RichText',
  props: {
    type: {
      type: String,
      default: '',
      required: true,
    },
    text: {
      type: String,
      default: '',
      required: true,
    },
  },
  computed: {
    isTypeHtml() {
      return this.type === 'html';
    },
  },
}
</script>

<style lang="scss">
.c-rich-text__html {

  h3 {
    color: rgb(27, 20, 51);
    text-transform: uppercase;
  }
}
</style>
