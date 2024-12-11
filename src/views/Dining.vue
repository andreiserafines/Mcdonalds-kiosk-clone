<script>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="primary">
    <!-- Header -->
    <div class="pt-10">
      <img src="@/assets/images/mcdologo.png" class="h-20 mx-auto" alt="">
      <p class="text-sm font-semibold mt-14 text-white text-center">Dining Location</p>
    </div>

    <div class="flex gap-3 mt-4 justify-center">
      <RouterLink to="/AboutView">
        <button class=" border bg-white w-full rounded hover:scale-95 hover:duration-500 px-2 py-10">
          <p class="font-semibold text-md mb-2">Dine-In</p>
          <img src="@/assets/images/dinein.png" class=" w-32 h-20 mx-auto" alt="">
        </button>
      </RouterLink>

      <RouterLink to="/Dining">
        <button class=" border bg-white w-full rounded hover:scale-95 hover:duration-500 px-9 py-10">
          <p class="font-semibold text-md mb-2">Take-Out</p>
          <img src="@/assets/images/takeout.png" class="w-[100%] h-20 mx-auto" alt="">
        </button>
      </RouterLink>
    </div>

    <!-- Other Buttons -->
    <div class="mt-6 text-center">
      <p class="text-white font-semibold text-sm">Please Select your language</p>
    </div>

    <div class="grid grid-cols-3 mt-4 gap-2 px-3">
      <button class="p-3 border bg-white w-full rounded hover:scale-95 hover:duration-500 hover:shadow">
        <p class="font-semibold text-xs">中国人</p>
      </button>

      <button class="p-3 border bg-white w-full rounded hover:scale-95 hover:duration-500 hover:shadow">
        <p class="font-semibold text-xs">한국인</p>
      </button>

      <button class="p-3 border bg-white w-full rounded hover:scale-95 hover:duration-500 hover:shadow">
        <p class="font-semibold text-xs">English</p>
      </button>
    </div>
  </div>
</template>
