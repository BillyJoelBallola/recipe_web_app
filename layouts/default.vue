<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>

<template>
  <div class="h-dvh flex flex-col mx-auto w-[92%] md:w-[75%]">
    <Header />
    <main class="grow py-20">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>
