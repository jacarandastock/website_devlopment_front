<script setup lang="ts">

import {useDisplay} from 'vuetify';
import {computed} from 'vue';
import imgUrl from './jacarandastock_qrcode.png'

const { name } = useDisplay();
// 判断是否是移动端
const isMobile = computed(() => name.value === 'xs');

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
  <v-container>
    <v-row>
      <v-col v-for="itemParent in footerItem" cols="12" sm="6" md="2">
        <div class="custom-title">
          <a :href="itemParent.path"> {{ itemParent.title }}  </a>
        </div>

        <div v-for="itemChild in itemParent.childItem" class="my-3">
          <a :href="itemChild.path">{{ itemChild.title }}</a>
        </div>
        <v-divider v-if="isMobile"/>
      </v-col>
      <v-col cols="12" sm="6">
        <v-img :src="imgUrl" width="120" height="120"/>
      </v-col>
    </v-row>
  </v-container>
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