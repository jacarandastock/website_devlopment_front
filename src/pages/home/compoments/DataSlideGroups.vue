<template>
  <div class="px-12 mt-15">
    <v-slide-group
        v-model="model"
        show-arrows
    >
      <v-slide-group-item
          v-for="n in 8"
          :key="n"
      >
        <v-card
            class="ma-4 pa-4"
            height="200"
            width="300"
        >
          <v-card-title>蓝楹指数</v-card-title>
          <v-card-text>
            <div class="text-h3 text-green my-1">1654.25</div>
            <div class="text-subtitle-1 text-green text-end">-7.47%</div>
          </v-card-text>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

let model = ref(0);

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

<style scoped>

</style>
