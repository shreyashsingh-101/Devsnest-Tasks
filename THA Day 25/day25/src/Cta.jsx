import React from "react";

const Cta = () => {
  return (
    <div class="flex justify-around ">
      <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden w-9/12">
        <div class="container mx-auto px-6 flex relative py-16">
          <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
            <h1 class="font-bebas-neue uppercase text-7xl sm:text-7xl font-black flex flex-col leading-none dark:text-white text-gray-800">
              Tailwind CSS
              <span class="text-5xl sm:text-4xl">Trying Something new</span>
            </h1>
            <p class="mt-4 text-sm sm:text-base text-gray-700 dark:text-white">
              Using Components of Tailwind CSS to create Something interesting
              in less time.
            </p>
            <div class="flex mt-8">
              <a
                href="#"
                class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
              >
                Get started
              </a>
              <a
                href="#"
                class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
              >
                Read more
              </a>
            </div>
          </div>
          <div class="hidden sm:block sm:w-1/3 lg:w-1/2 relative">
            <img src="/1.jpg" class="max-w-xs md:max-w-xl m-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
