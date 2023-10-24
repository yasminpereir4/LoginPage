import Image from "next/image";
import Astrounauta from "~/assets/Group.png";

export default function Home() {
  return (
    <div className="bg-white min-h-screen items-center flex justify-center">
      <div className="flex shadow-md border border-[#E6E9FA] overflow-hidden rounded-3xl">
        <div className="w-[732px] h-[743px] bg-[#3949AB] items-center flex flex-col justify-center gap-8">
          <Image src={Astrounauta} alt="" />
          <p className="text-white font-semibold">Bem vindo, amigo!</p>
          <p className="text-white font-medium text-base">
            Apenas mais uns cliques e começamos
          </p>
        </div>
        <div className="w-[486px] h-[743px] bg-white/20 backdrop-blur-md"></div>
      </div>
    </div>
  );
}
