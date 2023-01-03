import React from "react";
import gambar4 from "./assets/gambar4.jpg";

export default function KontenKetiga() {
  return (
    <main className="container grid grid-cols-2 px-40 lg:px-8s">
      <div>
        <div className="my-36">
          <h1 className="font-bold text-3xl mb-5">Dikerjakan Dengan Segenap Hati</h1>
          <p className="mr-20 leading-8 text-lg text-gray-600 text-justify">
            Setiap pakaian yang kami buat, dikerjakan oleh orang yang berpengalaman di bidangnya dan dibuat sebaik mungkin agar tepat di hati Anda.
          </p>
        </div>
      </div>
      <div>
        <img src={gambar4} alt="" />
      </div>
    </main>
  );
}
