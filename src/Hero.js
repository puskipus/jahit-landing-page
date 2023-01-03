import React from "react";
import gambar1 from "./assets/gambar1.jpg";

export default function Hero() {
  return (
    <div class="isolate bg-white">
      <div class="px-6 pt-6 lg:px-8">
        <div>
          <nav class="flex h-9 items-center justify-between" aria-label="Global">
            <div class="flex ml-40 lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="#" class="font-bold text-gray-800 hover:text-gray-900 font-sans text-2xl">
                JAHIT
              </a>
            </div>
            {/* <div class="hidden items-center lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              <a href="#" class="font-semibold text-gray-900 hover:text-gray-900">
                Product
              </a>

              <a href="#" class="font-semibold text-gray-900 hover:text-gray-900">
                Features
              </a>

              <a href="#" class="font-semibold text-gray-900 hover:text-gray-900">
                Marketplace
              </a>

              <a href="#" class="font-semibold text-gray-900 hover:text-gray-900">
                Company
              </a>
            </div> */}
          </nav>
        </div>
      </div>
      <main className="-mt-20">
        <div class="relative px-6 lg:px-8">
          <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div>
                <h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl mb-5">Dapatkan Pakaian Idamanmu Sekarang !</h1>
                <img src={gambar1} alt="https://unsplash.com/photos/hzdgFPz1V24?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" className="bg-gradient-to-b" />
                <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">Kami merupakan penjahit yang telah berpengalaman dalam bidangnya dan siap untuk membuat pakaian idaman Anda.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
