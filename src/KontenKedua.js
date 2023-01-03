import React from "react";
import gambar3 from "./assets/gambar3.jpg";

export default function KontenKedua() {
  return (
    <main className="container grid grid-cols-2 px-40 lg:px-8s my-32">
      <div>
        <img src={gambar3} alt="https://unsplash.com/photos/ojZ4wJNUM5w?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" />
      </div>
      <div>
        <div className="my-36">
          <h1 className="ml-20 font-bold text-3xl mb-5">Berbagai Macam Jenis Pakaian</h1>
          <p className="ml-20 leading-8 text-lg text-gray-600 text-justify">Kami mampu menjahit berbagai macam pakaian seperti baju, celana, kemeja, dan lainnya sesuai kebutuhan Anda. </p>
        </div>
      </div>
    </main>
  );
}
