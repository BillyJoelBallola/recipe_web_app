<script setup lang="ts">
import ArrayInput from "~/components/inputs/ArrayInput.vue";
import { categories } from "~/data";

const ingredients = ref<string[]>([]);
const instructions = ref<string[]>([]);
const imgURLs = ref<string[]>([]);

function addNewField(arr: string[]) {
  arr.push("");
}

function removeField(idx: number, arr: string[]) {
  arr.splice(idx, 1);
}

function handleInputField(e: Event, idx: number, arr: string[]) {
  const value = (e.target as HTMLInputElement).value;
  arr[idx] = value;
}
</script>

<template>
  <form class="grid gap-4 mt-4">
    <div class="grid gap-1">
      <label for="name" class="text-sm font-semibold">Name</label>
      <input
        id="name"
        type="text"
        class="border border-neutral-300 rounded-md bg-neutral-100 px-2 py-1 text-sm"
      />
    </div>
    <div class="grid gap-1">
      <label for="description" class="text-sm font-semibold">Description</label>
      <textarea
        id="description"
        class="border border-neutral-300 rounded-md bg-neutral-100 px-2 py-1 text-sm"
      />
    </div>
    <ArrayInput
      name="Ingredients"
      :item-arr="ingredients"
      @handle-input-field="handleInputField"
      @remove-field="removeField"
      @add-new-field="addNewField"
    />
    <ArrayInput
      name="Instructions"
      :item-arr="instructions"
      @handle-input-field="handleInputField"
      @remove-field="removeField"
      @add-new-field="addNewField"
    />
    <div class="grid gap-1">
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
    <div class="grid gap-1">
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
    <div class="grid gap-1">
      <label for="prep_time" class="text-sm font-semibold"
        >Preparation Time</label
      >
      <input
        id="prep_time"
        type="time"
        class="border border-neutral-300 rounded-md bg-neutral-100 px-2 py-1 text-sm"
      />
    </div>
    <div class="grid gap-1">
      <label for="cook_time" class="text-sm font-semibold">Cooking Time</label>
      <input
        id="cook_time"
        type="time"
        class="border border-neutral-300 rounded-md bg-neutral-100 px-2 py-1 text-sm"
      />
    </div>
    <div class="grid gap-1">
      <label for="servings" class="text-sm font-semibold">Servings</label>
      <input
        id="servings"
        type="number"
        class="border border-neutral-300 rounded-md bg-neutral-100 px-2 py-1 text-sm"
      />
    </div>
    <ArrayInput
      name="Image URLs"
      :item-arr="imgURLs"
      @handle-input-field="handleInputField"
      @remove-field="removeField"
      @add-new-field="addNewField"
    />
    <button
      class="cursor-pointer bg-neutral-900 hover:bg-neutral-800 duration-150 ease-in-out text-neutral-50 text-sm py-2 rounded-md font-semibold"
    >
      Submit
    </button>
  </form>
</template>
