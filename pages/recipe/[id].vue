<script setup lang="ts">
import RecipeItem from "~/components/recipe/RecipeItem.vue";
import { recipes } from "~/data";

const recipe = recipes[0];

const activeImg = ref<number>(0);
const activeTab = ref<number>(0);

function selectImgToDisplay(idx: number) {
  activeImg.value = idx;
}

function selectTabToDisplay(idx: number) {
  activeTab.value = idx;
}
</script>

<template>
  <div class="grid gap-8">
    <div class="grid md:grid-cols-2 gap-4">
      <RecipeImages
        :recipe
        :activeImg
        @select-img-to-display="selectImgToDisplay"
      />
      <RecipeInfo
        :recipe
        :activeTab
        @select-tab-to-display="selectTabToDisplay"
      />
    </div>

    <div class="grid gap-4">
      <h2 class="text-xl font-semibold">Related Recipes</h2>
      <div
        class="grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 items-center gap-4"
      >
        <RecipeItem :recipes />
      </div>
    </div>
  </div>
</template>
