<template>
  <li class="c-list-item" :class="className" :style="{ flexDirection: flexDirection, width: width }">
    <slot></slot>
  </li>
</template>
<script>
export default {
  name: 'ListItem',
  props: {
    flexDirection: {
      type: String,
      default: 'row',
      required: false
    },
    width: {
      type: String,
      default: '30%',
      required: false,
    },
    className: {
      type: String,
      default: 'order-element',
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.order-element {
  border: 0.05rem solid;
  display: flex;
  margin: 1rem;
  padding: 1rem;

  &:hover {
    box-shadow: 4px 4px 9px 0px #ababab;
  }
}
</style>
