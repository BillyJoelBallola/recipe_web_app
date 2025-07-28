<script setup lang="ts">
const date = new Date();
</script>

<template>
  <footer class="border-t border-neutral-300">
    <div class="grid place-items-center md:grid-cols-3 gap-12 py-8">
      <div class="grid place-items-center md:place-items-start gap-2">
        <h1 class="font-pacifico text-2xl -skew-4">Recipe Box</h1>
        <p class="text-sm w-[200px] text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>
      <div class="grid place-items-center text-sm font-semibold gap-2">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/recipe/favorites">Favorites</NuxtLink>
        <NuxtLink to="/profile/1">My Recipes</NuxtLink>
      </div>
      <div class="grid place-items-center md:place-items-start gap-1">
        <p class="text-sm">Get to know us</p>
        <div class="flex items-center gap-2">
          <NuxtLink
            to="/"
            class="pt-1.5 px-1.5 bg-transparent hover:bg-yellow-500 hover:text-neutral-50 duration-150 ease-in-out border border-yellow-500 text-yellow-500 rounded-full"
          >
            <Icon name="uil:facebook-f" class="size-5" />
          </NuxtLink>
          <NuxtLink
            to="/"
            class="pt-1.5 px-1.5 bg-transparent hover:bg-yellow-500 hover:text-neutral-50 duration-150 ease-in-out border border-yellow-500 text-yellow-500 rounded-full"
          >
            <Icon name="uil:instagram" class="size-5" />
          </NuxtLink>
          <NuxtLink
            to="/"
            class="pt-1.5 px-1.5 bg-transparent hover:bg-yellow-500 hover:text-neutral-50 duration-150 ease-in-out border border-yellow-500 text-yellow-500 rounded-full"
          >
            <Icon name="uil:youtube" class="size-5" />
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="py-4 text-center text-neutral-700">
      <small>Copyright &#169; {{ date.getFullYear() }}</small>
    </div>
  </footer>
</template>
