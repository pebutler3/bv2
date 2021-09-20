<template>
  <div class="c-title">
    <div v-html="text" :class="classComputed" v-if="textType === 'html'" />
    <p v-else>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: {
      type: String,
      required: true,
      default: '',
    },
    textType: {
      type: String,
      required: true,
      default: '',
    },
    className: {
      type: String,
      required: false,
      default: '',
    },
    styleModifier: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    classComputed() {
      return this.styleModifier
        ? `c-title__${this.className} ${this.styleModifier}`
        : `c-title__${this.className}`;
    },
  },
}
</script>

<style>

</style>
