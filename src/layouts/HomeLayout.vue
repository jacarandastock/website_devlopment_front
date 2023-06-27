<script setup lang="ts">
import { computed } from 'vue';
import { useDisplay } from 'vuetify';
const {t, locale} = useI18n();

// 使用i18n来显示不同语言的标题
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

// 侧边栏的显示状态
const sideNavBar = ref(false);
const { name } = useDisplay();
// 判断是否是移动端
const isMobile = computed(() => name.value === 'xs');
</script>

<template>
  <v-app>
    <v-layout>
      <v-app-bar>
        <div class="px-2 d-flex justify-center align-center">
          <!--     移动端的时候只显示小logo Icon     -->
          <LogoIcon v-if="isMobile" :width="60" :height="60"/>
          <!--     非移动端显示大图标     -->
          <Logo v-else :width="200" :height="40"/>
        </div>
        <!-- 移动端显示一个展开侧边栏的按钮 -->
        <v-btn v-if="isMobile" icon @click="sideNavBar = !sideNavBar">
          <span class="i-iconoir-menu text-2xl"></span>
        </v-btn>
        <v-spacer></v-spacer>
        <!--   电脑端显示顶部的按钮, 用来提供不同页面的导航     -->
        <v-btn
            v-if="!isMobile"
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
        <!-- 语言切换 -->
        <LocaleToggler/>
        <!-- 主题切换 -->
        <ThemeToggler/>
      </v-app-bar>
      <!-- 侧边栏, 用于移动端页面切换 -->
      <v-navigation-drawer
          v-model="sideNavBar"
          temporary
      >
        <v-list density="compact" nav>
          <v-list-item v-for="item in headerItems"
                       :exact="item.path === $route.path"
                       :to="item.path"
                       :title="item.title"
                       :value="item.path">
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
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