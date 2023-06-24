<script setup lang="ts">

import CategoryBanner from "@/pages/home/components/CategoryBanner.vue";
import BusinessMap from "@/pages/home/components/BusinessMap.vue";
import BusinessContents from "@/pages/home/components/BusinessContents.vue";
import DataSlideGroups from "@/pages/home/components/DataSlideGroups.vue";

import {computed} from 'vue';


const footerItem = [
  {
    title: '友情链接',
    path: '/unknown',
    childItem: [
      {
        title: '蓝楹会',
        path: '/about/1',
      },
      {
        title: '蓝楹会',
        path: '/about/2',
      },
      {
        title: '蓝楹会',
        path: '/about/3',
      },
      {
        title: '蓝楹会',
        path: '/about/4',
      },
    ]
  },
  {
    title: '联系我们',
    path: '/unknown',
    childItem: []
  },
  {
    title: '社交媒体',
    path: '/unknown',
    childItem: []
  }
];

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

    <v-container>
      <v-row>
        <v-col v-for="itemParent in footerItem" cols="2">
          <div class="custom-title">
            <a :href="itemParent.path"> {{ itemParent.title }}  </a>
          </div>

          <div v-for="itemChild in itemParent.childItem" class="my-3">
            <a :href="itemChild.path">{{ itemChild.title }}</a>
          </div>
        </v-col>
        <v-col cols="6">
          二维码区域
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.custom-title {
  font-weight: bold;
  border-left: 5px solid #333; /* 可以自定义线的颜色 */
  padding-left: 10px; /* 为了使竖线与文本有些许间隔 */
  margin-bottom: 20px;
}

a {
  color: inherit;
  text-decoration: none;
}

</style>


<route lang="yaml">
meta:
  layout: HomeLayout
</route>