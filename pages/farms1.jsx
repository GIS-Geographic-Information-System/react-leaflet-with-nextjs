import * as React from "react";


import Nav from '../components/nav'
import Head from '../components/head'


import dynamic from 'next/dynamic';


function Farms(){
  const home = "Farms1 - without Class"
  const MapWithNoSSR = dynamic(() => import('../components/mapFarms1'), {
    ssr: false
  });


  const zoomMap= 13;

  return(
    <div>
    <Head title="Farms1" />
    <Nav />
      <span>{home}</span>
    
     <MapWithNoSSR />
    

    </div>
  )
}



export default Farms;
