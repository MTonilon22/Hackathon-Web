<template>
  <div class="h-full items-center justify-center flex mt-[8%]">
    <div class="flex flex-row gap-5 border-2 w-[80%] my-auto border-dashed">
      <div
        class="w-[30%] h-[670px] bg-primary text-secondary px-5 py-5 border-r-2 border-dashed"
      >
        <h1 class="font-semibold text-lg ml-3 mb-5 text-ternary">
          User Credentials
        </h1>

        <form class="max-w-md mx-auto px-3">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name</label
            >
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Username</label
            >
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Email address</label
            >
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_password"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Password</label
            >
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="repeat_password"
              id="floating_repeat_password"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_repeat_password"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Confirm password</label
            >
          </div>
          <div class=""></div>
          <div class="">
            <!-- <div class="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_phone"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Phone number</label
              >
            </div> -->
            <!-- <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_company"
                id="floating_company"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_company"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Company (Ex. Google)</label
              >
            </div> -->
            <h1 class="font-semibold tracking-wide text-lg mb-5 text-ternary">
              Image Upload
            </h1>
            <div class="flex items-center justify-center w-[150px]">
              <label
                for="dropzone-file"
                class="flex flex-col items-center text-center justify-center w-full h-22 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div
                  class="flex flex-col items-center justify-center pt-5 pb-6"
                >
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-gray-500 dark:text-gray-400 text-sm">
                    <span class="font-semibold text-sm">Click to upload</span>
                    or drag and drop
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </div>
          <button
            type="submit"
            class="w-[30%] btn transition duration-300 mt-8 text-p text-secondary font-500 tracking-wide bg-primary-600 focus:ring-primary-300 rounded-full text-sm px-5 py-2.5 text-center bg-ternary"
          >
            Submit
          </button>
        </form>
      </div>
      <!-- User Tables Below -->
      <div class="rounded-lg mt-[3%] mx-auto">
        <table
          class="w-[800px] ml-[-1%] mx-auto text-sm text-left rtl:text-right text-secondary border-2 border-ternary"
        >
          <thead class="text-xs text-primary uppercase bg-ternary">
            <tr>
              <th scope="col" class="px-6 py-3">Name</th>
              <th scope="col" class="px-6 py-3">UserName</th>
              <th scope="col" class="px-6 py-3">Email Address</th>
              <th scope="col" class="px-6 py-3">DummyData</th>
            </tr>
          </thead>
          <tbody class="text-normal">
            <tr class="bg-primary border-b border-ternary">
              <!-- Name -->
              <td class="px-6 py-4">Stephen Sagarino Jr.</td>
              <!-- Username -->
              <td class="px-6 py-4">ReidoBoss22</td>
              <!-- Email Address -->
              <td class="px-6 py-4">stephensagarino@gmail.com</td>
              <!-- Price -->
              <td class="px-6 py-4">Lorem</td>
            </tr>
            <tr class="bg-primary border-b border-ternary">
              <!-- Name -->
              <td class="px-6 py-4">Ryan James Macawili</td>
              <!-- Username -->
              <td class="px-6 py-4">Condoriano22</td>
              <!-- Email Address -->
              <td class="px-6 py-4">ryanjamesmacawili@gmail.com</td>
              <!-- Price -->
              <td class="px-6 py-4">Lorem</td>
            </tr>
            <tr class="bg-primary border-b border-ternary">
              <!-- Name -->
              <td class="px-6 py-4">Michael Tonilon</td>
              <!-- Username -->
              <td class="px-6 py-4">MTonilon22</td>
              <!-- Email Address -->
              <td class="px-6 py-4">mtonilon17@gmail.com</td>
              <!-- Price -->
              <td class="px-6 py-4">Lorem</td>
            </tr>
            <tr class="bg-primary border-b border-ternary">
              <!-- Name -->
              <td class="px-6 py-4">Paul Here Sedigo</td>
              <!-- Username -->
              <td class="px-6 py-4">PaulHere22</td>
              <!-- Email Address -->
              <td class="px-6 py-4">paulhere@gmail.com</td>
              <!-- Price -->
              <td class="px-6 py-4">Lorem</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup></script>
