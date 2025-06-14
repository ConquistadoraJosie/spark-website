import React from "react";
import '@/app/layout.tsx'
import '@/app/styles/globals.css'
import missionPage from '@/app/Images/missionpage.png'
import Image from "next/image";

export default function Page() {
  return (

    <div className="flex-container">
      <div className="flex-item-left">Image Carosel TBD</div>
      <div className="flex-item-right">
        <Image src={missionPage} alt="mission" className="responsive" /></div>
    </div>
  );
}