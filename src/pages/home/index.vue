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

    <category-banner title="业务版图" subtitle="BUSINESS MAP"/>

    <v-col>
      <v-row>

      </v-row>
    </v-col>

  </div>
</template>

<script>


import CategoryBanner from "@/pages/home/compoments/CategoryBanner.vue";

export default {
  name: "index",
  components: {CategoryBanner}
}
</script>


<route lang="yaml">
meta:
  layout: HomeLayout
</route>