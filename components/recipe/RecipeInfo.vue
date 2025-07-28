<script setup lang="ts">
const props = defineProps<{
  recipe: {
    title: string;
    description: string;
    ingredients: string[];
    instructions: string[];
  };
  activeTab: number;
}>();

const emits = defineEmits<{
  selectTabToDisplay: [idx: number];
}>();

const tabBtn = ["Ingredients", "Instructions", "Reviews"];
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid gap-2">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-semibold">{{ props.recipe.title }}</h2>
        <button class="cursor-pointer">
          <Icon name="uil:bookmark" class="size-5" />
        </button>
      </div>
      <p class="text-sm text-neutral-700">{{ props.recipe.description }}</p>
    </div>
    <div class="flex items-center gap-2">
      <div class="size-8 bg-neutral-500 rounded-full">
        <!-- img here -->
      </div>
      <p class="text-sm">Billy Joel Ballola</p>
    </div>
    <div class="h-full bg-yellow-50/50 border border-neutral-200/50 rounded-lg">
      <div class="flex items-center border-b-2 border-yellow-200/20">
        <button
          v-for="(btn, idx) in tabBtn"
          :key="btn"
          v-on:click="emits('selectTabToDisplay', idx)"
          :class="{ active_border: props.activeTab === idx }"
          class="text-sm p-2 border-b-2 border-b-transparent hover:bg-neutral-200 duration-150 ease-in-out -mb-0.5"
        >
          {{ btn }}
        </button>
      </div>

      <div class="overflow-y-auto max-h-[340px]">
        <div v-if="activeTab === 0" class="py-2 px-4 grid gap-2">
          <h4 class="font-semibold">Ingredients</h4>
          <ul class="list-inside list-disc">
            <li
              v-for="(ingredient, idx) in props.recipe.ingredients"
              :key="idx"
            >
              {{ ingredient }}
            </li>
          </ul>
        </div>

        <div v-if="activeTab === 1" class="py-2 px-4 grid gap-2">
          <h4 class="font-semibold">Instructions</h4>
          <ul class="list-inside grid gap-2">
            <li
              v-for="(instruction, idx) in props.recipe.instructions"
              :key="idx"
              class="flex gap-2"
            >
              <div
                class="self-start border border-yellow-500 text-yellow-500 mt-0.5 px-1.5 text-sm rounded-full"
              >
                {{ idx + 1 }}
              </div>
              {{ instruction }}
            </li>
          </ul>
        </div>

        <div v-if="activeTab === 2" class="py-2 px-4 grid gap-2">
          Under development
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.active_border {
  border-color: oklch(79.5% 0.184 86.047);
}
</style>
