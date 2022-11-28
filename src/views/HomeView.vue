<template>
  <div>
    <div class="relative">
      <header class="absolute inset-x-0 top-0 z-10 w-full">
        <div class="px-4 mx-auto sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16 lg:h-20">
            <div class="flex-shrink-0">
              <a href="#" title="" class="flex">
                <img
                  class="w-auto h-8"
                  src="../assets/ecotribe-logo-color.png"
                  alt="The Eco Tribe Logo"
                />
              </a>
            </div>

            <button
              type="button"
              class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <!-- Menu open: "hidden", Menu closed: "block" -->
              <svg
                class="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>

              <!-- Menu open: "block", Menu closed: "hidden" -->
              <svg
                class="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <div
              class="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10"
            >
              <a
                href="#"
                title=""
                class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
              >
                Solutions
              </a>

              <a
                href="#"
                title=""
                class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
              >
                Who We Are
              </a>

              <a
                href="#"
                title=""
                class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
              >
                Updates
              </a>

              <a
                href="#"
                title=""
                class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
              >
                Contact Us
              </a>

              <a
                href="https://chat.whatsapp.com/JZpY2CtjNX81AJu0fh8POT"
                title=""
                class="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full bg-green-500 text-white hover:bg-green-600 focus:bg-green-600"
                role="button"
              >
                Join our Group
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
  <HeroAside></HeroAside>
</template>

<script setup>
import HeroAside from '../components/HeroAside.vue';
</script>

<style scoped></style>
