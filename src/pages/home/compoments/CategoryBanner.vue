<template>
  <div class="d-flex justify-center my-15">
    <div class="d-flex flex-column align-center justify-center">
      <div class="text-h5">
        {{ title }}
      </div>
      <div class="mt-2"></div>
      <div class="text-overline">
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryBanner",
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    }
  }
}
</script>

<style scoped>

</style>