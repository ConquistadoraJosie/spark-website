import '@/app/styles/globals.css';
import '@/app/layout';
import React from 'react';
import Image from 'next/image';
import missionpage from '@/app/Images/missionpage.png'


function MyApp() {
  return (
    <div>
      <Image src={missionpage} alt="Mission Page" width={500} height={300} />
    </div>
  );
}

export default MyApp