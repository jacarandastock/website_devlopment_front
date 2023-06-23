<script setup lang="ts">

import CategoryBanner from "@/pages/home/compoments/CategoryBanner.vue";
import BusinessMap from "@/pages/home/compoments/BusinessMap.vue";
import BusinessContents from "@/pages/home/compoments/BusinessContents.vue";
</script>

<template>
  <div>
    <!-- todo 切换成社团的图片 或者接个图床? -->
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

    <!--  此处应该没有使用i18n的必要   -->
    <category-banner title="业务版图" subtitle="BUSINESS MAP"/>
    <business-map/>

    <category-banner title="蓝楹内容" subtitle="BUSINESS CONTENTS"/>
    <business-contents/>


  </div>
</template>



<route lang="yaml">
meta:
  layout: HomeLayout
</route>