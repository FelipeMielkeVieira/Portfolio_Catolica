"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const NavegarPagina = (paginaURL: string) => {
    router.push(paginaURL);
  }

  return (
    <main className="h-full">
      <div className="w-full p-4 bg-[#D98324]">
        <div className="w-full mt-3 flex flex-col justify-center items-center">
          <h1 className="w-1/4 text-4xl font-bold text-center text-[#F2F6D0] pb-2 border-b-4">Página Inicial</h1>

          <div className="w-2/4 mt-8 text-[#F2F6D0] flex justify-between items-center">
            <div className="flex flex-col w-3/4 justify-between">
              <span>
                Olá, meu nome é Felipe Mielke Vieira! Sou um programador de software Fullstack e trabalho como projetista de Software Aplicativo.
                No momento curso Engenharia de Software e já fiz curso Técnico em Desenvolvimento de Sistemas.
              </span>
              <button className="mt-6 w-1/2 h-8 bg-[#443627] cursor-pointer" title="Sobre" onClick={() => { NavegarPagina("/about") }}
              >
                Sobre
              </button>
            </div>

            <Image src="/programming.png" width={200} height={200} alt="Programação" />
          </div>

          <div>

          </div>
        </div>
      </div>
    </main>
  );
}
