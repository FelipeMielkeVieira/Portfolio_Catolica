"use client";

import Image from "next/image";

export default function Habilities() {

  return (
    <main className="h-full">
      <div className="w-full p-4 bg-[#D98324]">
        <div className="w-full mt-3 flex flex-col justify-center items-center">
          <h1 className="w-1/4 text-4xl font-bold text-center text-[#F2F6D0] pb-2 border-b-4">Habilidades</h1>

          <div className="text-[#F2F6D0] w-1/2 mt-8">
            Abaixo estão algumas linguagens de programação, frameworks e plataformas com as quais já trabalhei e estudei:
          </div>

          <div className="w-3/5 mt-6 flex justify-evenly">
            <div className="w-24 h-28 flex flex-col justify-evenly items-center bg-[#EFDCAB] rounded-lg">
              <Image src="/iconsHabilidades/angular.png" width={64} height={64} alt="Angular"></Image>
              <h3 className="text-[#443627] font-bold">Angular</h3>
            </div>
            <div className="w-24 h-28 flex flex-col justify-evenly items-center bg-[#EFDCAB] rounded-lg">
              <Image src="/iconsHabilidades/react.png" width={64} height={64} alt="React"></Image>
              <h3 className="text-[#443627] font-bold">React</h3>
            </div>
            <div className="w-24 h-28 flex flex-col justify-evenly items-center bg-[#EFDCAB] rounded-lg">
              <Image src="/iconsHabilidades/js.png" width={64} height={64} alt="Javascript"></Image>
              <h3 className="text-[#443627] font-bold">Javascript</h3>
            </div>
            <div className="w-24 h-28 flex flex-col justify-evenly items-center bg-[#EFDCAB] rounded-lg">
              <Image src="/iconsHabilidades/typescript.png" width={64} height={64} alt="Typescript"></Image>
              <h3 className="text-[#443627] font-bold">Typescript</h3>
            </div>
            <div className="w-24 h-28 flex flex-col justify-evenly items-center bg-[#EFDCAB] rounded-lg">
              <Image src="/iconsHabilidades/html.png" width={64} height={64} alt="HTML"></Image>
              <h3 className="text-[#443627] font-bold">HTML</h3>
            </div>
            <div className="w-24 h-28 flex flex-col justify-evenly items-center bg-[#EFDCAB] rounded-lg">
              <Image src="/iconsHabilidades/css.png" width={64} height={64} alt="CSS"></Image>
              <h3 className="text-[#443627] font-bold">CSS</h3>
            </div>
          </div>

          <div className="w-3/5 mt-6 flex justify-evenly">
            <div className="w-24 h-28 flex flex-col justify-evenly items-center bg-[#EFDCAB] rounded-lg">
              <Image src="/iconsHabilidades/java.png" width={64} height={64} alt="Java"></Image>
              <h3 className="text-[#443627] font-bold">Java</h3>
            </div>
            <div className="w-24 h-28 flex flex-col justify-evenly items-center bg-[#EFDCAB] rounded-lg">
              <Image src="/iconsHabilidades/c-sharp.png" width={64} height={64} alt="C#"></Image>
              <h3 className="text-[#443627] font-bold">C#</h3>
            </div>
            <div className="w-24 h-28 flex flex-col justify-evenly items-center bg-[#EFDCAB] rounded-lg">
              <Image src="/iconsHabilidades/net.png" width={64} height={64} alt=".NET"></Image>
              <h3 className="text-[#443627] font-bold">.NET</h3>
            </div>
            <div className="w-24 h-28 flex flex-col justify-evenly items-center bg-[#EFDCAB] rounded-lg">
              <Image src="/iconsHabilidades/docker.png" width={64} height={64} alt="Docker"></Image>
              <h3 className="text-[#443627] font-bold">Docker</h3>
            </div>
            <div className="w-24 h-28 flex flex-col justify-evenly items-center bg-[#EFDCAB] rounded-lg">
              <Image src="/iconsHabilidades/mysql-database.png" width={64} height={64} alt="MySQL"></Image>
              <h3 className="text-[#443627] font-bold">MySQL</h3>
            </div>
            <div className="w-24 h-28 flex flex-col justify-evenly items-center bg-[#EFDCAB] rounded-lg">
              <Image src="/iconsHabilidades/postgre.png" width={64} height={64} alt="PostgreSQL"></Image>
              <h3 className="text-[#443627] font-bold">PosgreSQL</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
