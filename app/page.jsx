import Image from "next/image";
import MasVentasHeader from "@/public/MasVentasHeader.png";
import { Logros } from "@/components/Logros/logros";
import { Client } from "@/components/Client/client";
import { FormUser } from "@/components/form/form";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <div>
      <header className="md:mx-4 max-sm:px-4 sm:mx-6 lg:mx-10 bg-linear-20 from-fuchsia-100 via-fuchsia-50 to-white md:rounded-2xl ">
        <div className="flex flex-col md:flex-row justify-center items-center pb-16 pt-28 md:pt-40 md:pb-20">
          <div className="flex flex-col justify-center items-center space-y-5 md:pr-10">
            <div className="flex items-center ">
              <h1 className="lg:w-[700px] text-4xl sm:text-5xl leading-tight md:leading-20 tracking-tighter text-center">
                <span className="text-transparent bg-clip-text bg-linear-180 from-red-400 to-neutral-400">
                  Impulsamos tu negocio en el mundo digital para lograr
                  <br />
                  <b>MÁS VENTAS</b>
                </span>
              </h1>
            </div>

            <div className="flex items-center md:w-7/12 px-6 sm:px-10 md:px-0">
              <h3 className="text-center text-base sm:text-lg text-neutral-800">
                Gestionamos y desarrollamos tu presencia digital para que tu marca crezca en todos los canales y logre{" "}
                <span className="font-bold text-transparent bg-clip-text bg-linear-180 from-red-400 to-neutral-400">
                  Resultados
                </span>
              </h3>
            </div>
          </div>

          <div className="mt-8 md:mt-0 md:pl-6">
            <Image src={MasVentasHeader} width={600} alt="MasVentas" quality={100} />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-md:-mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Logros/>
      </main>
      <div className="-mt-20 md:-mt-50 md:mx-4 max-sm:px-4 sm:mx-6 lg:mx-10 bg-linear-90 from-fuchsia-100 via-fuchsia-50 to-white md:rounded-2xl ">
        <Client/>
      </div>
      <FormUser/>
      <Footer/>
    </div>
  );
}
