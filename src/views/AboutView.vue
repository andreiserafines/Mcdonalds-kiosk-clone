<script>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="primary">
    <!-- Header -->
    <div class="pt-10">
      <img src="@/assets/images/mcdologo.png" class="h-20 mx-auto" alt="">
      <p class="text-sm font-semibold mt-14 text-white text-center">How would you like to pay?</p>
    </div>

    <div class="flex gap-3 mt-4 justify-center">
      <RouterLink to="/Construction">
        <button class=" border bg-white w-full rounded hover:scale-95 hover:duration-500 px-2 py-3">
          <div class="secondary py-2 px-10 rounded">
            <img src="@/assets/images/peso.png" class="w-full h-16 mx-auto" alt="">
            <p class="font-bold text-xs uppercase mb-2">Cash</p>
          </div>

          <p class="text-xs font-semibold mt-1">Pay at the counter</p>
          <img src="@/assets/images/counter.png" class="h-20 mx-auto" alt="">
        </button>
      </RouterLink>

      <RouterLink to="/Construction">
        <button class=" border bg-white w-full rounded hover:scale-95 hover:duration-500 px-2 py-3">
          <div class="secondary py-2 px-10 rounded">
            <img src="@/assets/images/cashless.png" class="w-full h-16 mx-auto" alt="">
            <p class="font-bold text-xs uppercase mb-2">Cashless</p>
          </div>

          <div class="py-2">
            <p class="text-xs font-semibold mt-1 ">Pay at the counter</p>
            <div class="flex items-center justify-center gap-1 mt-3">
              <img src="@/assets/images/visa.png" class="h-3" alt="">
              <img src="@/assets/images/mastercard.png" class="h-6" alt="">
              <img src="@/assets/images/jcb.png" class="h-7" alt="">
            </div>
            <div class="flex items-center justify-center gap-1">
              <img src="@/assets/images/maya.png" class="h-3" alt="">
              <img src="@/assets/images/grab.png" class="h-6" alt="">
              <img src="@/assets/images/gcash.png" class="h-4" alt="">
            </div>

          </div>

        </button>
      </RouterLink>
    </div>
  </div>
</template>
