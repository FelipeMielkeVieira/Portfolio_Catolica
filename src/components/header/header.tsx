import Image from "next/image";
import Link from "next/link";

export default function Header() {

  return (
    <div className="w-full h-14 p-3 flex items-center justify-between bg-[#443627]">
      <h1 className="text-2xl ml-6 font-bold text-[#F2F6D0]">Portfólio de Projetos</h1>

      <div className="w-80 h-full flex items-center justify-evenly">

        <Link href={"/"}>
          <Image title="Página Inicial" className="cursor-pointer" src="/home.png" width={32} height={32} alt="Home" />
        </Link>

        <Link href={"/about"}>
          <Image title="Sobre" className="cursor-pointer" src="/user.png" width={32} height={32} alt="User" />
        </Link>

        <Link href={"/habilities"}>
          <Image title="Habilidades" className="cursor-pointer" src="/idea.png" width={32} height={32} alt="Habilidades" />
        </Link>

        <Link href={"/projects"}>
          <Image title="Projetos" className="cursor-pointer" src="/coding.png" width={32} height={32} alt="Projetos" />
        </Link>

        <Link href={"/contact"}>
          <Image title="Contato" className="cursor-pointer" src="/phone.png" width={32} height={32} alt="Contato" />
        </Link>
      </div>
    </div>
  );
}
