import React from "react";
import waIcon from "./assets/wa-icon.svg";

export default function HubungiKami() {
  return (
    <div>
      <h1 className="mt-20 text-center font-bold text-3xl mb-5">Hubungi Kami Sekarang</h1>
      <div className="mx-auto flex justify-center my-11 bg-slate-700 rounded-lg w-56">
        <img src={waIcon} alt="" className="w-10" />
        <a className=" text-yellow-100 px-5 py-3 " href="https://wa.me/628998843986" target="_blank">
          0899-8843-986
        </a>
      </div>
    </div>
  );
}
