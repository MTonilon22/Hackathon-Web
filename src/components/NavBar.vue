<template>
  <nav class="bg-primary z-10 sticky">
    <div class="flex flex-row items-center justify-center mx-auto">
      <div
        class="lg:w-[100%] lg:h-[100px] cs:h-[1px] flex flex-row items-center justify-center"
      >
        <div class="w-[50%] flex items-center justify-evenly">
          <div class="text-secondary font-semibold text-xl cursor-pointer">
            {{ firstLabel }}
          </div>
          <div class="text-secondary font-semibold text-xl cursor-pointer">
            {{ secondLabel }}
          </div>
        </div>
        <div class="mt-[5%] absolute animate-spin">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-25 w-[100px]"
              alt="Flowbite Logo"
            />
          </a>
        </div>
        <div class="w-[50%] flex items-center justify-evenly">
          <div class="text-secondary font-semibold text-xl cursor-pointer">
            {{ thirdLabel }}
          </div>
          <div class="text-secondary font-semibold text-xl cursor-pointer">
            {{ fourthLabel }}
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    firstLabel: String,
    secondLabel: String,
    thirdLabel: String,
    fourthLabel: String,
  },
};
</script>
