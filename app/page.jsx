import { Footer } from "@/components/footer/footer";
import { NavBar } from "@/components/Navbar/navBar";
import { mainLogros } from "@/constant/constant";

import Image from "next/image";

export default function Home() {
  return (
    <div className=" "> 
      <header className="bg-linear-0  from-red-50 via-red-50 to-white pb-44 px-10 mx-10 rounded-2xl ">
        <div className="flex flex-col justify-center items-center space-y-5">
          <div className="flex items-center w-6/12">
            <h1 className="text-5xl leading-20 tracking-tighter text-center"><span className="text-transparent bg-clip-text bg-linear-180 from-red-400 to-neutral-400 ">Impulsamos tu negocio en el <b>mundo digital</b></span></h1>
          </div>
          <div className="flex items-center w-7/12 " >
            <h3 className=" text-lg text-center">Gestionamos y desarrollamos tu presencia digital para que tu marca crezca en todos los canales y logre <span className="font-bold text-transparent bg-clip-text bg-linear-180 from-red-400 to-neutral-400 ">MásVentas</span></h3>
          </div>
        </div>
      </header>
      <main>
        <div>
          {
            mainLogros.map(i=>(
              <div key={i.id} className={''}>
                  <h3>{i.title}</h3>
                  <b>{i.description}</b>
                  <p>{i.data}</p>
              </div>
            ))
          }
          
        </div>
      </main>
    </div>
  );
}
