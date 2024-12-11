<script>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <header class="">
      <div class="flex flex-col bg-white">
        <div>
          <!-- Ads Image -->
          <div class="rounded-t">
            <img src="@/assets/images/mcdoads.jpg" class="w-[100%] h-[480px] object-cover md:p-1" alt="">
          </div>

          <!-- Buttons -->
          <div class="flex flex-col justify-center mt-4 p-4 max-w-[500px]">
            <RouterLink to="/Dining">
              <button
                class="p-2 border bg-yellow-500 w-full rounded hover:border-gray-300 hover:duration-100 hover:shadow">
                <p class="font-semibold text-md">Start Order</p>
                <p class="text-xs">to get deliciousness</p>
              </button>
            </RouterLink>

            <div class="flex justify-between mt-1 gap-1">
              <button
                class="p-4 border w-full text-xs font-semibold rounded flex items-center justify-center gap-1 hover:border-gray-300 hover:duration-100">
                <img src="@/assets/images/language.png" class="h-5 flex items-center" alt="">
                Language</button>
              <button
                class="p-4 border w-full text-xs font-semibold rounded flex items-center justify-center hover:border-gray-300 hover:duration-100">
                <img src="@/assets/images/accesibility.png" class="h-5 flex items-center" alt="">
                Accesibility</button>
            </div>
          </div>
        </div>

      </div>

    </header>
  </div>
</template>