<script setup lang="ts">
import { recipes } from "~/data";

const route = useRoute();

const { category } = route.query;
</script>

<template>
  <div
    class="grid md:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr] gap-4 md:gap-8"
  >
    <Filters />

    <!-- right -->
    <div class="flex flex-col gap-4">
      <form
        class="flex items-center gap-2 py-2 pr-2 pl-4 bg-neutral-800 rounded-lg"
      >
        <input
          type="search"
          class="grow text-sm text-neutral-50 outline-none"
          placeholder="Type to search..."
        />
        <button
          type="submit"
          class="cursor-pointer p-1 grid place-items-center rounded-full bg-neutral-50 hover:bg-neutral-200 duration-150 ease-in-out"
        >
          <Icon name="uil:search" class="size-4" />
        </button>
      </form>
      <div
        class="flex items-center gap-4 text-sm bg-neutral-100 rounded-lg p-2"
      >
        <span class="text-neutral-600">Sort by</span>
      </div>
      <div
        class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-4"
      >
        <RecipeItem :recipes />
      </div>
    </div>
  </div>
</template>
