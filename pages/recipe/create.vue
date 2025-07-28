<script setup lang="ts"></script>

<template>
  <div class="w-full md:w-2/3 lg:w-1/2 mx-auto">
    <div>
      <h2 class="text-2xl font-semibold flex items-center gap-1">
        <Icon
          name="material-symbols:chef-hat-outline-rounded"
          class="size-6 text-yellow-500"
        />
        Add your recipe
      </h2>
      <p class="text-sm text-neutral-500">
        Fill out all of the important fields to create your own recipe.
      </p>
    </div>
    <CreateForm />
  </div>
</template>
