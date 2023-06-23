<script setup lang="ts">
import {computed} from 'vue';

const {t, locale} = useI18n();
const headerItems = computed(() => [
  {
    title: t('home.title'),
    path: '/home',
  },
  {
    title: t('about.title'),
    path: '/about',
  },
  {
    title: t('introduce.title'),
    path: '/introduce',
  },
  {
    title: t('relationship.title'),
    path: '/relationship',
  },

  {
    title: t('joinUs.title'),
    path: '/join-us',
  },
]);

</script>

<template>
  <v-app>
    <v-layout>
      <v-app-bar>
        <div class="px-2 flex items-center">
          <Logo :width="200" :height="41"/>
        </div>
        <v-spacer></v-spacer>
        <v-btn
            v-for="item in headerItems"
            variant="text"
            rounded="2"
            stacked
            class="font-weight-bold"
            :exact="item.path === $route.path"
            :to="item.path"
        >
          {{ item.title }}
        </v-btn>
        <v-spacer></v-spacer>
        <LocaleToggler/>
        <ThemeToggler/>
      </v-app-bar>

      <v-main class="text-slate-700 dark:text-slate-300">
        <v-container fluid class="ma-0 pa-0">
          <RouterView/>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped>

</style>