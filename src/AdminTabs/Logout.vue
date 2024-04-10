<template>
  <div>
    <div class="flex w-full p-40 pr-96 pl-96 rounded-lg">
      <div class="h-[600px] w-full rounded-lg p-5">
        <div class="w-[100%] h-[45%] flex items-center justify-center mt-5">
          <img
            :src="logoutimage"
            alt=""
            class="h-[400px] w-[85%] mt-[5%] float-anim"
          />
        </div>
        <div
          class="flex justify-center items-center text-4xl font-medium tracking-wider text-secondary mt-[15%]"
        >
          You are about to logout
        </div>
        <div
          class="flex items-center w-[60%] mx-auto justify-center pt-10 gap-10 pr-10 pl-10"
        >
          <button
            class="w-[40%] btn transition duration-300 mt-8 text-p text-secondary font-500 tracking-wide bg-primary-600 focus:ring-primary-300 rounded-full text-sm px-5 py-2.5 text-center bg-ternary"
            type="submit"
          >
            Cancel
          </button>
          <button
            class="w-[40%] btn transition duration-300 mt-8 text-p text-secondary font-500 tracking-wide bg-primary-600 focus:ring-primary-300 rounded-full text-sm px-5 py-2.5 text-center bg-ternary"
            type="submit"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import logoutimage from "../assets/logout.png";
</script>
