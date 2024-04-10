<template>
  <div>
    <div><NavBarLanding firstLabel="PointQuest" /></div>

    <div class="w-[100%] items-center justify-center flex h-[700px]">
      <div class="w-[40%] ml-[5%] text-secondary font-semibold tracking-widest">
        <img :src="image" class="w-[100%] h-[100%] float-anim" />
      </div>
      <div class="w-[40%] ml-[10%]">
        <div
          class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
        >
          <div
            class="w-full rounded-2xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-primary"
          >
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1
                class="text-lg font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-secondary mb-10"
              >
                <span class="text-ternary tracking-wide">Login Account</span>
              </h1>
              <div class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-secondary"
                    >Username</label
                  >
                  <input
                    v-model="username"
                    type="username"
                    name="email"
                    id="email"
                    class="bg-primary border font-500 border-secondary text-secondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="MTonilon22"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-secondary"
                    >Password</label
                  >
                  <input
                    v-model="password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-primary border font-500 border-secondary text-secondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-secondary rounded bg-primary focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="remember" class="text-secondary"
                        >Remember me</label
                      >
                    </div>
                  </div>
                  <a href="#" class="text-sm text-ternary hover:underline"
                    >Forgot password?</a
                  >
                </div>
                <button
                  @click="login"
                  type="submit"
                  class="w-[30%] btn transition duration-300 mt-8 text-p text-secondary font-500 tracking-wide bg-primary-600 focus:ring-primary-300 rounded-full text-sm px-5 py-2.5 text-center bg-ternary"
                >
                  Login
                </button>

                <p class="text-sm font-light text-secondary">
                  Don’t have an account yet?
                  <router-link to="/register">
                    <a
                      class="font-medium text-ternary hover:underline -500 cursor-pointer"
                      >Register</a
                    >
                  </router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import NavBarLanding from "../components/NavBarLanding.vue";
import Footer from "../components/Footer.vue";
import image from "../assets/register.png";
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref();
const password = ref();
const router = useRouter();

const login = async () => {
  try {
    const response = await fetch("http://localhost:8080/getUsers");
    const data = await response.json();
    for (var i = 0; i < data.length; i++) {
      if (data[i].username == username.value) {
        if (data[i].password == password.value) {
          router.push("/home");
        } else {
        }
      } else {
      }
    }
  } catch (error) {
    console.log(error);
  }
};
</script>
