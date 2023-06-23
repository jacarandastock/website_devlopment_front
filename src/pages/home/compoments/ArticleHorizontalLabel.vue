<script setup lang="ts">
import {defineProps, onMounted, ref} from 'vue';
import {useI18n} from 'vue-i18n';

const {t} = useI18n();
const props = defineProps({
  link: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: ""
  },
});

const parent = ref<HTMLElement | null>(null);
const parentWidth = ref(0);

onMounted(() => {
  parentWidth.value = parent.value['offsetWidth'];
});
</script>

<template>
  <div class="mx-4 d-flex align-center" style="height: 80px" ref="parent">
    <div>
      <v-img :src="link" cover width="80" height="60" class="mx-2 elevation-4"/>
    </div>
    <div class="ma-2 flex-fill text-subtitle-1 text-truncate"
         :style="{ 'max-width': parentWidth + 'px' }"
    >
      {{ title === "" ? t('home.publicArticles') : title }}
    </div>
    <div>
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-icon
              v-bind="props"
              size="large"
              :color="isHovering ? 'grey' : 'primary'"
              icon="mdi-arrow-right-thick"
          ></v-icon>
        </template>
      </v-hover>
    </div>
  </div>
</template>


<style scoped>

</style>