import '@/app/styles/globals.css';
import '@/app/layout';
import React from 'react';
// import Link from 'next/link';

function MyApp() {
  return (
    <div className="container max-w-4xl px-4 py-8" style={{ transform: 'translate(150px, 30px)', position: 'sticky', top: '0', zIndex: '-1' }}>

      <script src="https://static.elfsight.com/platform/platform.js" async></script>
      <div className="elfsight-app-d1fc404b-4dbb-496c-a420-27e007bed2f8" data-elfsight-app-lazy></div>

    </div >
  );
}

export default MyApp  