"use client";

import Image from "next/image";

export default function About() {

  return (
    <main className="h-full">
      <div className="w-full p-4 bg-[#D98324]">
        <div className="w-full mt-3 flex flex-col justify-center items-center">
          <h1 className="w-1/4 text-4xl font-bold text-center text-[#F2F6D0] pb-2 border-b-4">Sobre</h1>

          <div className="text-[#F2F6D0] w-1/2 mt-8">
            Olá, meu nome é Felipe Mielke Vieira, tenho 19 anos e comecei a faculdade de Engenharia de Software em 2025. Já estudo na Católica SC desde o segundo semestre de 2023, cursando tecnólogo em Análise e Desenvolvimento de Sistemas até hoje, estando agora no quarto semestre do curso.
          </div>

          <h2 className="mt-4 text-[#F2F6D0] font-bold text-1xl w-1/2 text-left">Hobbies</h2>
          <div className="text-[#F2F6D0] w-1/2">
            Na maior parte do tempo livre jogo videogames, leio livros ou passo grande tempo assistindo (TV, animes ou mesmo youtube). Gosto também de programar ou mesmo desenhar (digitalmente) quando há tempo de sobra.
          </div>

          <h2 className="mt-4 text-[#F2F6D0] font-bold text-1xl w-1/2 text-left">Trabalho e Conhecimentos</h2>
          <div className="text-[#F2F6D0] w-1/2">
            No segundo semestre de 2022 comecei a fazer o curso de CentroWEG de Programação de Sistemas de Informação, ao mesmo tempo em que fazia curso técnico no SESI SENAI de Desenvolvimento de Sistemas, integrado ao Ensino Médio.
            Durante o CentroWEG também fiz alguns projetos extracurriculares (Sistema de Almoxarifado para o SESI SENAI) e mesmo um projeto final entregue para a WEG e integrado à empresa (Sistema de gestão de demandas de TI).
            Hoje em dia trabalho na WEG como Projetista de Software Interno, onde desenvolvo programas em C#, .NET e Javascript para a padronização de projetos de outras seções e áreas dentro da empresa.
            Além do que utilizo na WEG, tenho conhecimentos em linguagens como Java, Python, C, NodeJS, e familiaridade com os Frameworks Angular e React. Em banco de dados, já utilizei MySQL, PostgreSQL e Firebase. Principalmente por conta dos frameworks que utilizo muito frequentemente, acabo preferindo muito o front-end do que back-end.
            Fora a área de programação, sou muito interessado em outras linguagens, fiz cursos avançados de inglês e atualmente faço espanhol. Também me interesso em áreas como desenvolvimento de jogos ou mesmo design, fazendo alguns cursos iniciantes e tratando como hobbie.
          </div>

          <h2 className="mt-4 text-[#F2F6D0] font-bold text-1xl w-1/2 text-left">Expectativas</h2>
          <div className="text-[#F2F6D0] w-1/2 mb-8">
            Com o curso, tenho muitas expectativas de ampliar o meu conhecimento (principalmente aprender novas linguagens e fazer um bom portfólio) e conseguir
            grandes oportunidades de trabalho na área de desenvolvimento, principalmente em áreas relacionadas ao front-end.
          </div>
        </div>
      </div>
    </main>
  );
}
