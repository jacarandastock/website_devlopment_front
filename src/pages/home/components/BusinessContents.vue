<script setup lang="ts">

import { useDisplay} from "vuetify";
const { name } = useDisplay();
const isMobile = computed(() => name.value === 'xs');

</script>

<template>
  <v-container class="rounded">
    <v-card class="pa-2" rounded="2">
      <v-row>
        <v-col cols="12" sm="6">

          <div class="content-style">
            <div class="text-subtitle-1 bg-purple-darken-4 px-3 py-1">蓝楹会 · 学术</div>
            <div class="text-overline">JACARANDA RESEARCH</div>
          </div>

          <v-divider class="my-1"/>
          <!--   JACARANDA RESEARCH -->
          <v-col cols="12">
            <ArticleHorizontalLabel v-for="_ in 6"
                                    link="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                                    title="测试用信息"/>
          </v-col>
        </v-col>
        <v-divider class="my-1" v-if="isMobile"/>
        <v-col cols="12" sm="6">
          <div class="content-style">
            <div class="text-subtitle-1 bg-purple-darken-4 px-3 py-1">蓝楹会 · 活动</div>
            <div class="text-overline">JACARANDA ACTIVITIES</div>
          </div>

          <v-divider class="my-1"/>
          <!--   JACARANDA ACTIVITIES -->
          <v-col cols="12">
            <ArticleHorizontalLabel v-for="_ in 6"
                                    link="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                                    title="测试用信息"/>
          </v-col>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style scoped>
.content-style {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>