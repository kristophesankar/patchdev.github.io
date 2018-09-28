<template>
  <div>
      <h1>Hello {{ name }}!</h1>
      <h1>Hello {{ machine }}!</h1>
    </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },

    machine:{
      type: String,
      required: true
    }
  }
}
</script>
<style lang="stylus" scoped>
h1
  color red
</style>