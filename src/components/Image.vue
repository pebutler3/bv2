<template>
  <img class="c-image" :src="src" :alt="alt" :style="imageStyle" />
</template>

<script>
export default {
  name: 'Image-Component',
  props: {
    src: {
      type: String,
      default: '',
      required: true
    },
    alt: {
      type: String,
      default: '',
      required: true
    },
    imageStyle: {
      type: Object,
      default: () => ({}),
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.c-image {
  align-self: center;
}
</style>
