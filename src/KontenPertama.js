import React from "react";
import gambar2 from "./assets/gambar2.jpg";

export default function KontenPertama() {
  return (
    <main className="container grid grid-cols-2 px-40 lg:px-8s">
      <div>
        <div className="my-36">
          <h1 className="font-bold text-3xl mb-5">Sesuaikan Model Pakaian</h1>
          <p className="mr-20 leading-8 text-lg text-gray-600 text-justify">Pakaian yang akan Anda buat, konsultasikan terlebih dahulu agar sesuai, cocok, dan pas untuk Anda.</p>
        </div>
      </div>
      <div>
        <img src={gambar2} alt="" />
      </div>
    </main>
  );
}
