<script setup lang="ts">
import { categories } from "~/data";

const preparationTimeOptions = [
  { label: "Any", value: "" },
  { label: "Under 10 minutes", value: "0-10" },
  { label: "10–20 minutes", value: "10-20" },
  { label: "20–30 minutes", value: "20-30" },
  { label: "30–45 minutes", value: "30-45" },
  { label: "45–60 minutes", value: "45-60" },
  { label: "Over 1 hour", value: "60+" },
];

const cookingTimeOptions = [
  { label: "Any", value: "" },
  { label: "Under 15 minutes", value: "0-15" },
  { label: "15–30 minutes", value: "15-30" },
  { label: "30–45 minutes", value: "30-45" },
  { label: "45–60 minutes", value: "45-60" },
  { label: "1–2 hours", value: "60-120" },
  { label: "Over 2 hours", value: "120+" },
];

const servingsOptions = [
  { label: "Any", value: "" },
  { label: "1 serving", value: "1" },
  { label: "2 servings", value: "2" },
  { label: "3–4 servings", value: "3-4" },
  { label: "5–6 servings", value: "5-6" },
  { label: "7–8 servings", value: "7-8" },
  { label: "More than 8", value: "8+" },
];
</script>

<template>
  <div
    class="grid gap-4 p-4 rounded-lg bg-neutral-100 border border-neutral-200/50 h-fit"
  >
    <h2 class="flex items-center gap-1 font-semibold">
      <Icon name="uil:filter" class="size-4" />
      Search Filter
    </h2>
    <div class="flex items-center flex-wrap md:flex-col gap-4">
      <div class="grid gap-1 md:w-full">
        <label for="category" class="text-sm font-semibold">Category</label>
        <select
          id="category"
          class="border border-neutral-300 rounded-md bg-neutral-100 px-2 py-1 text-sm"
        >
          <option v-for="c in categories" :key="c.name" :value="c.name">
            {{ c.name }}
          </option>
        </select>
      </div>
      <div class="grid gap-1 md:w-full">
        <label for="difficulty" class="text-sm font-semibold">Difficulty</label>
        <select
          id="difficulty"
          class="border border-neutral-300 rounded-md bg-neutral-100 px-2 py-1 text-sm"
        >
          <option
            v-for="level in ['easy', 'medium', 'hard']"
            :key="level"
            :value="level"
          >
            {{ level }}
          </option>
        </select>
      </div>
      <div class="grid gap-1 md:w-full">
        <label for="prep_time" class="text-sm font-semibold"
          >Preparation Time</label
        >
        <select
          id="prep_time"
          class="border border-neutral-300 rounded-md bg-neutral-100 px-2 py-1 text-sm"
        >
          <option
            v-for="prep in preparationTimeOptions"
            :key="prep.value"
            :value="prep.value"
          >
            {{ prep.label }}
          </option>
        </select>
      </div>
      <div class="grid gap-1 md:w-full">
        <label for="cook_time" class="text-sm font-semibold"
          >Cooking Time</label
        >
        <select
          id="cook_time"
          class="border border-neutral-300 rounded-md bg-neutral-100 px-2 py-1 text-sm"
        >
          <option
            v-for="cook in cookingTimeOptions"
            :key="cook.value"
            :value="cook.value"
          >
            {{ cook.label }}
          </option>
        </select>
      </div>
      <div class="grid gap-1 md:w-full">
        <label for="servings" class="text-sm font-semibold">Servings</label>
        <select
          id="servings"
          class="border border-neutral-300 rounded-md bg-neutral-100 px-2 py-1 text-sm"
        >
          <option
            v-for="serving in servingsOptions"
            :key="serving.value"
            :value="serving.value"
          >
            {{ serving.label }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
