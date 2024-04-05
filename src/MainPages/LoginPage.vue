<template>
  <div>
    <NavBar />
    <div class="custom-shape-divider-bottom-1712293908">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
    <div class="w-[100%] items-center justify-center flex h-[700px]">
      <div class="w-[40%] text-primary font-semibold tracking-widest">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
        reprehenderit possimus ullam nisi error! Reprehenderit odit iusto atque
        nam, consectetur fuga eos ex optio quod explicabo natus, cupiditate
        dolores placeat obcaecati recusandae omnis expedita officiis aut velit?
        Quia repellat alias, maiores atque voluptas in eveniet beatae, nesciunt
        doloremque modi dolores?
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
                Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-secondary"
                    >Your Username</label
                  >
                  <input
                    type="username"
                    name="email"
                    id="email"
                    class="bg-gray-50 border font-500 border-gray-300 text-primary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-primary dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border font-500 border-gray-300 text-primary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-primary dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="remember" class="text-secondary"
                        >Remember me</label
                      >
                    </div>
                  </div>
                  <a
                    href="#"
                    class="text-sm text-secondary font- font-bold text-primary-600 hover:underline"
                    >Forgot password?</a
                  >
                </div>
                <router-link to="/home">
                  <button
                    type="submit"
                    class="w-[30%] mt-8 text-p bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-secondary"
                  >
                    <span class="text-primary font-bold">Sign in</span>
                  </button>
                </router-link>

                <p class="text-sm font-light text-secondary">
                  Don’t have an account yet?
                  <a
                    href="#"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >Sign up</a
                  >
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
</script>
<style>
.custom-shape-divider-bottom-1712293908 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-bottom-1712293908 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 160px;
}

.custom-shape-divider-bottom-1712293908 .shape-fill {
  fill: #192c51;
}
</style>
