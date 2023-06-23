<script setup lang="ts">
import { useAppTheme } from '@/composables/useAppTheme'

const { isDark } = useAppTheme()


</script>

<template>
  <v-container class="rounded">
    <v-card class="pa-2">
      <v-row class="">
        <v-col class="d-flex flex-column align-center">
          <div class="text-subtitle-1">蓝楹会 · 学术</div>
          <div class="text-overline">JACARANDA RESEARCH</div>
        </v-col>
        <v-col class="d-flex flex-column align-center">
          <div class="text-subtitle-1">蓝楹会 · 活动</div>
          <div class="text-overline">JACARANDA ACTIVITIES</div>
        </v-col>
      </v-row>
      <v-divider class="my-1" />
      <v-row>
        <v-col class="d-flex flex-column align-center">
          <div class="text-subtitle-1">内容</div>
        </v-col>
        <v-col class="d-flex flex-column align-center">
          <div class="text-subtitle-1">内容</div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style scoped>

</style>