import React from "react";

const Cta2 = () => {
  return (
    <div>
      <div class="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
        <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block">
              Really Easy to make these type of Designs.
            </span>
          </h2>
          <p class="text-md mt-4 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            culpa officia, architecto laboriosam cupiditate provident enim
            aliquam in autem doloribus quod vitae? Magnam dignissimos,
            reprehenderit corporis necessitatibus itaque ea deserunt.
          </p>
          <div class="lg:mt-0 lg:flex-shrink-0"></div>
        </div>
        <div class="flex items-center gap-8 p-8 lg:p-12 max-w-2xl">
          <img src="/3.jpg" class="rounded-lg w-1/2" alt="Tree" />
          <div>
            <img src="/2.jpg" class="rounded-lg mb-8" alt="Tree" />
            <img src="/4.jpg" class="rounded-lg" alt="Tree" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta2;
