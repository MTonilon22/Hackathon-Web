<template>
  <div class="h-screen flex items-center justify-center">
    <div class="w-[25%] h-[50%] bg-white rounded-2xl p-7 shadow-lg">
      <div class="mb-10 font-semibold text- cursor-pointer text-lg">
        Login as Admin
      </div>

      <div class="pl-7 pr-7">
        <div class="relative mb-6">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
          >
            <UserIcon class="h-9 w-9 text-gray-500" />
          </div>
          <input
            v-model="username"
            type="text"
            id="floating_outlined"
            class="border-b-2 rounded-md block px-2.5 pb-2.5 pt-4 w-[100%] text-lg text-black bg-transparent border-1 border-primary appearance-none dark:text-black dark:primary dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
          />
          <label
            for="floating_outlined"
            class="absolute text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >Username</label
          >
        </div>
        <div class="relative mb-6">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
          >
            <LockClosedIcon class="h-9 w-9 text-gray-500" />
          </div>
          <input
            v-model="password"
            type="password"
            id="floating_outlined2"
            class="text-lg border-b-2 rounded-md block px-2.5 pb-2.5 pt-4 w-full text-gray-900 bg-transparent border-1 border-primary appearance-none dark:text-black dark:primary dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
          />
          <label
            for="floating_outlined2"
            class="absolute text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >Password</label
          >
        </div>

        <div class="relative mb-10">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
          >
            <UserGroupIcon class="h-9 w-9 text-gray-500" />
          </div>
        </div>
        <p>{{ errorMessage }}</p>

        <router-link class="" to="/home">
          <button
            class="w-full h-12 bg-primary text-white rounded-lg font-semibold mb-2 hover:bg-white hover:text-primary hover:border-primary border-primary border-2 transition duration-300"
            type="submit"
            @click="login"
          >
            Submit
          </button>
        </router-link>
        <div class="w-[100%] flex flex-row mx-auto gap-5">
          <router-link class="" to="/"
            ><span class="w-[50%] cursor-pointer">
              Login as Student
            </span></router-link
          >

          <router-link class="" to="/instructor"
            ><span class="w-[50%] cursor-pointer">
              Login as Instructor
            </span></router-link
          >
        </div>

        <router-link class="" to="/forgotPasswordPage">
          <div class="text-center mt-10">
            Forgot Password? ><span
              class="hover:underline text-blue-500 cursor-pointer"
            >
              Click Here</span
            >
            >
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script></script>
