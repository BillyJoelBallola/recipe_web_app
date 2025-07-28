<template>
  <div
    class="relative rounded-xl w-full h-40 md:h-70 bg-neutral-800 overflow-hidden"
  >
    <img src="/banner.png" alt="banner-image" class="size-full object-cover" />
    <div
      class="absolute grid gap-1 md:gap-2 left-4 md:left-8 bottom-4 md:bottom-8 md:right-4 text-neutral-50"
    >
      <h1 class="text-xl md:text-4xl font-semibold">
        What <span class="font-pacifico">food</span> do you <br />
        want to <span class="font-pacifico">cook</span> for today?
      </h1>
      <NuxtLink
        to="/search"
        class="group w-fit flex items-center gap-2 font-semibold text-sm bg-neutral-50 text-neutral-900 hover:bg-neutral-300 duration-150 ease-in-out cursor-pointer py-2 px-4 rounded-full"
      >
        Browse
        <Icon
          name="uil:arrow-up-right"
          class="size-4 group-hover:rotate-45 duration-150 ease-in-out"
        />
      </NuxtLink>
    </div>
  </div>
</template>
