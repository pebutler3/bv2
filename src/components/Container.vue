<template>
  <div class="c-container" :style="`flex-direction: ${flexDirection}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    flexDirection: {
      type: String,
      default: 'row',
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.c-container {
  display: flex;
}
</style>
