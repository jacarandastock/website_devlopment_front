<script setup lang="ts">
import {ref, onMounted, onBeforeUnmount, computed} from 'vue';
import {useDisplay} from 'vuetify';

const {t, locale} = useI18n();
let model = ref(0);
const { name } = useDisplay();
// 判断是否是移动端
const isMobile = computed(() => name.value === 'xs');


const data = [
  {
    title: '蓝楹指数',
    value: '1654.25',
    rate: '-7.47%',
  },
  {
    title: '蓝楹指数',
    value: '1654.25',
    rate: '-7.47%',
  },{
    title: '蓝楹指数',
    value: '1654.25',
    rate: '-7.47%',
  },{
    title: '蓝楹指数',
    value: '1654.25',
    rate: '-7.47%',
  },{
    title: '蓝楹指数',
    value: '1654.25',
    rate: '-7.47%',
  },{
    title: '蓝楹指数',
    value: '1654.25',
    rate: '-7.47%',
  },
]

// 自动轮播的代码, 但是实现的效果不好
// let interval;
//
// onMounted(() => {
//   interval = setInterval(() => {
//     model.value++;
//     if (model.value >= 8) model.value = 0;
//   }, 2000);
// });
//
// onBeforeUnmount(() => {
//   clearInterval(interval);
// });

</script>

<template>
  <div class="px-md-12 mt-md-15 px-0 mt-xl-5">
    <v-slide-group
        v-if="!isMobile"
        v-model="model"
        show-arrows
    >
      <v-slide-group-item
          v-for="(n, index) in data"
          :key="index"
      >
        <v-card
            class="ma-4 pa-4"
            height="200"
            width="300"
        >
          <v-card-title>
            {{ n.title }}
          </v-card-title>
          <v-card-text>
            <div class="text-h3 text-green my-1">{{ n.value }}</div>
            <div class="text-subtitle-1 text-green text-end">{{ n.rate }}</div>
          </v-card-text>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
    <v-container v-else>
      <v-table>
        <thead>
        <tr>
          <th class="text-left">
            {{t('home.DataSlideGroups.title')}}
          </th>
          <th class="text-left">
            {{t('home.DataSlideGroups.value')}}
          </th>
          <th class="text-left">
            {{t('home.DataSlideGroups.rate')}}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="(n, index) in data"
            :key="index"
        >
          <td>{{ n.title }}</td>
          <td>{{ n.value }}</td>
          <td>{{ n.rate }}</td>
        </tr>
        </tbody>
      </v-table>
    </v-container>
  </div>
</template>



<style scoped>

</style>
