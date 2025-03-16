'use client';

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
              <Link href={"/about"}>
                <button className="mt-6 w-1/2 h-8 bg-[#443627] cursor-pointer" title="Sobre">
                  Sobre Mim
                </button>
              </Link>
            </div>

            <Image src="/programming.png" width={200} height={200} alt="Programação" />
          </div>

          <div className="w-2/4 mt-14 mb-16 text-[#F2F6D0] flex flex-col justify-center items-center">
            <Slider className="w-full mb-10"  {...settings}>
              <div>
                <Image src="/imgProjetos/AlmaSis/Home.png" width={800} height={400} alt="Projetos" />
              </div>
              <div>
                <Image src="/imgProjetos/WEGSSM/Home.png" width={800} height={400} alt="Projetos" />
              </div>
              <div>
                <Image src="/imgProjetos/ProjetoTecelagem/Home.png" width={800} height={400} alt="Projetos" />
              </div>
              <div>
                <Image src="/imgProjetos/WEGSSM/Login.png" width={800} height={400} alt="Projetos" />
              </div>
            </Slider>

            <div className="w-full flex justify-between">
              <Link href={"/habilities"} className="w-2/5" scroll={false}>
                <button className="w-full h-8 bg-[#443627] cursor-pointer" title="Habilidades">
                  Habilidades
                </button>
              </Link>
              <Link href={"/projects"} className="w-2/5" scroll={false}>
                <button className="w-full h-8 bg-[#443627] cursor-pointer" title="Projetos">
                  Projetos
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
