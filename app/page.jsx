import { Footer } from "@/components/footer/footer";
import { NavBar } from "@/components/Navbar/navBar";
import { mainLogros } from "@/constant/constant";
import MasVentasHeader from '@/public/MasVentasHeader.png'

import Image from "next/image";

export default function Home() {
  return (
    <div className=" "> 
      <header className="mx-10 bg-linear-0  from-red-50 via-red-50 to-white md:rounded-2xl">
        <div className="flex flex-col md:flex-row  justify-center items-center pb-20 pt-32 md:pt-40 md:pb-20 ">
          <div className="flex flex-col justify-center items-center space-y-5 md:-ml-50">
            <div className="flex items-center lg:w-8/12">
              <h1 className="text-5xl md:text-5xl md:-mr-10 leading-16 md:leading-20 tracking-tighter text-center"><span className="text-transparent bg-clip-text bg-linear-180 from-red-400 to-neutral-400 ">Impulsamos tu negocio en el <b>mundo digital</b></span></h1>
            </div>
            <div className="flex items-center md:w-7/12 px-10 md:px-0" >
              <h3 className="text-center text-lg">Gestionamos y desarrollamos tu presencia digital para que tu marca crezca en todos los canales y logre <span className="font-bold text-transparent bg-clip-text bg-linear-180 from-red-400 to-neutral-400 ">MásVentas</span></h3>
            </div>
          </div>
          <div className="md:-ml-20">
            <Image src={MasVentasHeader} width={600} alt=""/>
          </div>
        </div>
        
      </header>
      <main className="-mt-20 container m-auto">
        <div className="">
          {
            mainLogros.map(i=>(
              <div key={i.id} className="md:relative size-32 w-full my-40 text-center md:text-start">
                <div style={{background:`${i.color}`}} className={`space-y-2 flex flex-col justify-center max-sm:items-center  md:absolute md:w-1/2 md:inset-y-0 ${i.position}-0  px-5 md:h-48 rounded-xl text-${i.position}`}>
                    <h3 style={{color:`${i.fontColor}`}}  className="bg-white p-2 inline font-black text-2xl md:text-3xl">{i.title}</h3>
                    <b className="text-neutral-700">{i.description}</b>
                    <p className="text-neutral-700">{i.data}</p>
                </div>
              </div>
            ))
          }
          
        </div>
      </main>
    </div>
  );
}
