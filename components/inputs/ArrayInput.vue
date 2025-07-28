<script setup lang="ts">
const props = defineProps<{
  name: string;
  itemArr: string[];
}>();

const emits = defineEmits<{
  handleInputField: [e: Event, idx: number, arr: string[]];
  removeField: [idx: number, arr: string[]];
  addNewField: [arr: string[]];
}>();

function isBtnDisabled() {
  const arr = props.itemArr;
  if (arr.length === 0) {
    return false;
  } else {
    const lastItem = arr[arr.length - 1];
    return lastItem.length === 0 ? true : false;
  }
}
</script>

<template>
  <div class="grid gap-2">
    <div class="grid gap-1">
      <label for="" class="text-sm font-semibold">{{ name }}</label>
      <p
        v-if="props.name.includes('Image')"
        class="-mt-1 mb-2 text-xs text-neutral-600"
      >
        The first image will be the thumbnail. The maximum number of image URLs
        are 4.
      </p>
      <div v-if="itemArr.length !== 0" class="grid gap-2">
        <div
          v-for="(item, idx) in props.itemArr"
          :key="idx"
          class="flex items-center justify-between rounded-md gap-2"
        >
          <div
            class="border border-yellow-500 text-yellow-500 text-sm font-semibold px-2 py-0.5 rounded-full"
          >
            {{ idx + 1 }}
          </div>
          <input
            type="text"
            :value="item"
            @input="(e) => emits('handleInputField', e, idx, props.itemArr)"
            class="border border-neutral-300 rounded-md bg-neutral-100 px-2 py-1 text-sm w-full"
          />
          <button
            type="button"
            v-on:click="emits('removeField', idx, props.itemArr)"
            class="bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-md h-full px-2 duration-150 ease-in-out"
          >
            <Icon name="uil:trash" class="size-4" />
          </button>
        </div>
      </div>
      <div
        v-else
        class="text-sm text-center py-2 border border-dashed border-neutral-300 text-neutral-500 bg-neutral-100 rounded-md"
      >
        <span>Add {{ name }}</span>
      </div>
    </div>
    <button
      type="button"
      :disabled="isBtnDisabled()"
      v-on:click="emits('addNewField', props.itemArr)"
      class="cursor-pointer disabled:cursor-not-allowed flex items-center justify-center gap-1 border border-neutral-200 text-neutral-700 rounded-md py-1 text-sm hover:bg-neutral-200/50 duration-150 ease-in-out"
    >
      <Icon name="uil:plus" class="size-4" />
      Add
    </button>
  </div>
</template>
