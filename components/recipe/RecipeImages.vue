<script setup lang="ts">
const props = defineProps<{
  recipe: { image_url: string[]; title: string };
  activeImg: number;
}>();

const emits = defineEmits<{
  selectImgToDisplay: [idx: number];
}>();
</script>

<template>
  <div class="grid gap-4 h-fit">
    <div class="rounded-xl overflow-hidden h-[200px] md:h-[400px]">
      <img
        class="size-full object-cover"
        :src="props.recipe.image_url[props.activeImg]"
        :alt="props.recipe.title"
      />
    </div>
    <div class="grid grid-cols-4 gap-2">
      <button
        v-for="(img, idx) in props.recipe.image_url"
        :key="idx"
        v-on:click="emits('selectImgToDisplay', idx)"
        :class="{ active_image: props.activeImg === idx }"
        class="cursor-pointer rounded-xl overflow-hidden active:scale-95"
      >
        <img
          class="size-full object-cover h-[60px] md:h-[100px]"
          :src="img"
          :alt="props.recipe.title"
        />
      </button>
    </div>
  </div>
</template>

<style scoped>
.active_image {
  border: 2px solid oklch(79.5% 0.184 86.047);
}
</style>
