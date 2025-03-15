"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {

  const router = useRouter();

  const NavegarPagina = (paginaURL: string) => {
    router.push(paginaURL);
  }

  return (
    <div className="w-full h-20 p-3 flex items-center justify-between bg-[#443627]">
      <h1 className="text-3xl ml-6 font-bold text-[#F2F6D0]">Portfólio de Projetos</h1>

      <div className="w-100 h-full flex items-center justify-evenly">

        <Image title="Página Inicial" className="cursor-pointer" src="/home.png" onClick={() => {NavegarPagina("/")}} width={40} height={40} alt="Home" />

        <Image title="Sobre" className="cursor-pointer" src="/user.png" onClick={() => {NavegarPagina("/about")}} width={40} height={40} alt="User" />

        <Image title="Habilidades" className="cursor-pointer" src="/idea.png" onClick={() => {NavegarPagina("/habilities")}} width={40} height={40} alt="Habilidades" />

        <Image title="Projetos" className="cursor-pointer" src="/coding.png" onClick={() => {NavegarPagina("/projects")}} width={40} height={40} alt="Projetos" />

        <Image title="Contato" className="cursor-pointer" src="/phone.png" onClick={() => {NavegarPagina("/contact")}} width={40} height={40} alt="Contato" />
      </div>
    </div>
  );
}
