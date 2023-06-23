<script setup lang="ts">
import {computed} from 'vue';
const {t, locale} = useI18n();

const businessMap = computed(() => [
  {
    title: '蓝楹会',
    content: '在这里说点什么1',
    path: '/home/1',
  },
  {
    title: '蓝楹会',
    content: '在这里说点什么2',
    path: '/home/2',
  },
  {
    title: '蓝楹会',
    content: '在这里说点什么3',
    path: '/home/3',
  },
  {
    title: '蓝楹会',
    content: '在这里说点什么4',
    path: '/home/4',
  },
]);
</script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="item in businessMap">
        <v-card width="270" rounded="2">
          <template v-slot:title>
            <div class="custom-title">
              {{ item.title}}
            </div>
          </template>
          <template v-slot:text>
            {{ item.content }}
          </template>

          <template v-slot:actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" variant="text" rounded="2" :to="item.path">
              {{ t('home.learnMore')}}
            </v-btn>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<style scoped>
.custom-title {
  font-weight: bold;
  border-left: 5px solid #333; /* 可以自定义线的颜色 */
  padding-left: 10px; /* 为了使竖线与文本有些许间隔 */
}

</style>