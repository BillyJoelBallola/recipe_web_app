<script setup lang="ts">
import { recipes } from "~/data";
</script>

<template>
  <div class="grid gap-4">
    <h1 class="md:text-xl font-semibold flex items-center gap-1">
      <Icon
        name="material-symbols:bookmark"
        class="mt-1 size-5 text-yellow-500"
      />
      Favorite Recipes
    </h1>
    <div
      class="grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 items-center gap-4"
    >
      <RecipeItem :recipes />
    </div>
  </div>
</template>
