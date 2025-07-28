<script setup lang="ts">
const props = defineProps<{
  categories: any[];
}>();
</script>

<template>
  <NuxtLink
    v-for="category in props.categories"
    :key="category.name"
    :to="`/search?category=${category.name}`"
    class="grid place-items-center gap-1 p-4 w-26 aspect-square rounded-lg bg-neutral-100 hover:bg-neutral-200 duration-150 ease-in-out shadow-sm border border-neutral-200"
  >
    <img :src="category.image" :alt="category.name" />
    <span class="text-sm">{{ category.name }}</span>
  </NuxtLink>
</template>
