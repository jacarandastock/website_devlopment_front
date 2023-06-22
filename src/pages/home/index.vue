<template>
  <div>
    <v-carousel cycle interval="3000" hide-delimiters show-arrows="hover">
      <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          cover
      ></v-carousel-item>

      <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
          cover
      ></v-carousel-item>

      <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>


<route lang="yaml">
meta:
  layout: HomeLayout
</route>