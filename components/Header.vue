<script setup lang="ts">
import { useAuth, useUser } from "@clerk/vue";

const { isSignedIn } = useAuth();
const { user } = useUser();
</script>

<template>
  <header class="fixed z-40 py-4 top-0 right-0 left-0 bg-neutral-50">
    <div class="flex items-center justify-between mx-auto w-[92%] md:w-[75%]">
      <NuxtLink to="/" class="font-pacifico text-2xl -skew-4"
        >Recipe Box</NuxtLink
      >
      <div class="hidden md:flex items-center gap-4">
        <div
          v-if="isSignedIn && user"
          class="flex items-center gap-4 font-semibold"
        >
          <NuxtLink to="/recipe/create" class="flex items-center gap-1 text-sm">
            <Icon name="uil:plus" class="size-4" />
            Recipe
          </NuxtLink>
          <NuxtLink
            to="/recipe/favorites"
            class="flex items-center gap-1 text-sm"
          >
            <Icon name="uil:bookmark" class="size-4" />
            Favorites
          </NuxtLink>

          <NuxtLink
            :to="`/profile/${user?.id}`"
            class="flex items-center gap-1 text-sm"
          >
            <Icon
              name="material-symbols:chef-hat-outline-rounded"
              class="size-4"
            />
            My Recipes
          </NuxtLink>
        </div>
        <div v-if="!isSignedIn" class="flex items-center gap-2">
          <SignInButton
            mode="modal"
            class="cursor-pointer text-sm font-semibold bg-neutral-900 hover:bg-neutral-700 duration-150 ease-in text-neutral-50 py-2 px-4 rounded-full"
            >Login/Register</SignInButton
          >
        </div>
        <UserButton v-else />
      </div>
    </div>
  </header>
</template>

<style scoped>
[aria-current="page"] .iconify {
  color: oklch(79.5% 0.184 86.047);
}
</style>
