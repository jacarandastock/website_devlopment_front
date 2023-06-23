<script setup lang="ts">


import ArticleHorizontalLabel from "@/pages/home/compoments/ArticleHorizontalLabel.vue";
</script>

<template>
  <v-container class="rounded">
    <v-card class="pa-2" rounded="2">
      <v-row class="">
        <v-col class="d-flex flex-column align-center">
          <div class="text-subtitle-1 bg-purple-darken-4 px-3 py-1">蓝楹会 · 学术</div>
          <div class="text-overline">JACARANDA RESEARCH</div>
        </v-col>
        <v-col class="d-flex flex-column align-center">
          <div class="text-subtitle-1 bg-purple-darken-4 px-3 py-1">蓝楹会 · 活动</div>
          <div class="text-overline">JACARANDA ACTIVITIES</div>
        </v-col>
      </v-row>
      <v-divider class="my-1" />
      <v-row>
        <!--   JACARANDA RESEARCH -->
        <v-col cols="6">
          <ArticleHorizontalLabel v-for="_ in 6"
                                  link="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                                  title="测试用信息"/>
        </v-col>
        <!--   JACARANDA ACTIVITIES -->
        <v-col cols="6">
          <ArticleHorizontalLabel v-for="_ in 6" link="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                                  title="测试用信息"/>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style scoped>

</style>