<script setup lang="ts">

import CategoryBanner from "@/pages/home/components/CategoryBanner.vue";
import BusinessMap from "@/pages/home/components/BusinessMap.vue";
import BusinessContents from "@/pages/home/components/BusinessContents.vue";
import DataSlideGroups from "@/pages/home/components/DataSlideGroups.vue";
import {computed} from "vue";
import { useDisplay} from "vuetify";
const { name } = useDisplay();
const isMobile = computed(() => name.value === 'xs');


</script>

<template>
  <div>
    <!-- todo 切换成社团的图片 或者接个图床? -->
    <v-carousel cycle interval="3000" height="300" hide-delimiters show-arrows="hover">
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

    <data-slide-groups/>

    <v-img
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        height="300"
        cover
        width="100%"
        class="mt-15"/>
    <category-banner title="关于蓝楹会" subtitle="ABOUT US"/>
    <v-container>
      <v-sheet class="pa-2 bg-transparent pa-3" rounded="2" height="300">
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor
        incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
        Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </v-sheet>
    </v-container>

    <pageFooter/>
  </div>
</template>

<style scoped>

</style>


<route lang="yaml">
meta:
  layout: HomeLayout
</route>