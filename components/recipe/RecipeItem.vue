<script setup lang="ts">
const props = defineProps<{
  recipes: any[];
}>();
</script>

<!-- 
  non-filled icons: 
    uil:bookmark
    uil:star 
  filled icons:
    material-symbols:bookmark
    material-symbols:star
-->

<template>
  <div
    v-for="recipe in props.recipes"
    :key="recipe.id"
    class="relative h-full rounded-lg group"
  >
    <div class="rounded-lg overflow-hidden">
      <div class="relative h-40">
        <img
          :src="recipe.image_url[0]"
          :alt="recipe.title"
          class="size-full absolute inset-0 object-cover"
        />
        <button
          class="cursor-pointer absolute p-1 rounded-full right-2 top-2 grid place-items-center bg-neutral-50 hover:bg-neutral-100 duration-150 ease-in-out"
        >
          <Icon name="uil:bookmark" class="size-5" />
        </button>

        <div
          class="absolute bottom-2 left-2 text-xs p-1 rounded-md bg-neutral-50"
        >
          {{ recipe.category }}
        </div>
      </div>
    </div>
    <div class="py-2 flex items-start justify-between">
      <NuxtLink
        :to="`/recipe/${recipe.id}`"
        class="text-sm text-neutral-800 hover:underline truncate max-w-xs"
      >
        {{ recipe.title }}
      </NuxtLink>
      <div
        v-if="getAvgRatings(recipe.reviews) !== 0"
        class="flex items-center gap-0.5 text-yellow-500"
      >
        <Icon name="material-symbols:star" class="size-4" />
        <span class="text-xs">{{ getAvgRatings(recipe.reviews) }}</span>
      </div>
    </div>
  </div>
</template>
