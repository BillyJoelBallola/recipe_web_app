<script setup lang="ts">
import { categories, recipes } from "~/data";
</script>

<template>
  <div class="grid gap-4 md:gap-8">
    <Banner />
    <div class="grid gap-4">
      <h2 class="md:text-xl font-semibold">Categories</h2>
      <div class="flex place-items-center gap-4">
        <CategoryItem :categories />
      </div>
    </div>
    <div class="grid gap-4">
      <h2 class="md:text-xl font-semibold">Trending Recipe</h2>
      <div
        class="grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 items-center gap-4"
      >
        <RecipeItem :recipes />
      </div>
    </div>
  </div>
</template>
