<script>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="primary">
    <!-- Header -->
    <div class="pt-10">
      <img src="@/assets/images/mcdologo.png" class="h-20 mx-auto" alt="">
      <p class="text-sm font-semibold mt-14 text-white text-center">
        This app is currently in development. Stay tuned for updates!
      </p>
    </div>

    <RouterLink to="/Dining">
        <button class="flex mt-5 font-semibold text-sm px-5 mx-auto border bg-white rounded hover:scale-95 hover:duration-500 py-2">
            Back
        </button>
      </RouterLink>
  </div>
</template>
