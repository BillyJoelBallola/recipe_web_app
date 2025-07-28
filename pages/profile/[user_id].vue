<script setup lang="ts">
import { recipes } from "~/data";

const route = useRoute();
const { user_id } = route.params || {};

const { data: userInfo } = await useFetch("/api/get-user", {
  query: { userId: user_id },
});
</script>

<template>
  <div class="grid gap-62 md:gap-46">
    <div class="relative">
      <div class="bg-neutral-800 rounded-xl h-44 md:h-52 overflow-hidden">
        <img
          src="/banner.png"
          alt="banner-img"
          class="size-full object-cover"
        />
      </div>
      <div
        class="absolute top-1/2 md:top-2/3 left-0 right-0 md:right-4 md:left-4 lg:right-8 lg:left-8 flex flex-col md:flex-row gap-4 md:gap-8"
      >
        <div class="grid place-items-center">
          <div
            class="overflow-hidden rounded-[3rem] md:rounded-[4rem] border-8 size-32 md:size-50 border-neutral-100/20"
          >
            <img
              :src="userInfo?.imageUrl"
              alt="profile-img"
              class="size-full object-cover"
            />
          </div>
        </div>
        <div
          class="grow md:mt-22 pb-4 flex flex-col md:flex-row justify-between gap-4"
        >
          <div class="grid gap-2 text-center md:text-left">
            <div>
              <h1 class="text-xl font-semibold">
                {{ userInfo?.firstName }} {{ userInfo?.lastName }}
              </h1>
              <a
                :href="`mailto:${userInfo?.emailAddresses[0].emailAddress}`"
                target="_blank"
                class="text-blue-500 underline text-sm"
                >{{ userInfo?.emailAddresses[0].emailAddress }}</a
              >
            </div>
            <button
              class="cursor-pointer py-2 md:py-0 bg-neutral-900 hover:bg-neutral-800 duration-150 ease-in-out text-neutral-50 text-xs rounded-lg font-semibold"
            >
              Manage Account
            </button>
          </div>
          <div class="flex items-start justify-center md:justify-start gap-4">
            <div class="grid place-items-center">
              <span class="text-sm">My Recipes</span>
              <span class="text-2xl font-semibold">10</span>
            </div>
            <div class="grid place-items-center">
              <span class="text-sm">Followers</span>
              <span class="text-2xl font-semibold">200</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 items-center gap-4"
    >
      <RecipeItem :recipes />
    </div>
  </div>
</template>
