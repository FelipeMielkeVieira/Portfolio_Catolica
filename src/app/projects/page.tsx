"use client";

import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {

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
          <h1 className="w-1/4 text-4xl font-bold text-center text-[#F2F6D0] pb-2 border-b-4">Projetos</h1>

          <div className="w-3/4 mt-8 text-[#F2F6D0] flex justify-evenly items-center">
            <div className="flex flex-col w-2/5 justify-between">
              <h2 className="text-[#F2F6D0] font-bold text-1xl w-1/2 text-left">AlmaSis</h2>
              <span>
                Sistema de agendamento e reserva de itens de um almoxarifado, com acesso ao catálogo de itens em estoque e podendo agendar reservas com antecedência.
                Feito em uma equipe de 4 pessoas.
              </span>
            </div>

            <Slider className="w-2/5"  {...settings}>
              <div>
                <Image src="/imgProjetos/AlmaSis/Home.png" width={800} height={400} title="Página Inicial" alt="Home" />
              </div>
              <div>
                <Image src="/imgProjetos/AlmaSis/Login.png" width={800} height={400} title="Login" alt="Login" />
              </div>
              <div>
                <Image src="/imgProjetos/AlmaSis/Produto.png" width={800} height={400} title="Visualizar Produto" alt="Produto" />
              </div>
              <div>
                <Image src="/imgProjetos/AlmaSis/Reservas.png" width={800} height={400} title="Ver Reservas" alt="Reservas" />
              </div>
            </Slider>
          </div>

          <div className="w-3/4 mt-16 text-[#F2F6D0] flex justify-evenly items-center">
            <Slider className="w-2/5"  {...settings}>
              <div>
                <Image src="/imgProjetos/WEGSSM/Home.png" width={800} height={400} title="Página Inicial" alt="Home" />
              </div>
              <div>
                <Image src="/imgProjetos/WEGSSM/Login.png" width={800} height={400} title="Login" alt="Login" />
              </div>
              <div>
                <Image src="/imgProjetos/WEGSSM/Filtro.png" width={800} height={400} title="Filtrar Demandas" alt="Filtro" />
              </div>
              <div>
                <Image src="/imgProjetos/WEGSSM/Criar Demanda.png" width={800} height={400} title="Criar Demanda" alt="Criar Demanda" />
              </div>
              <div>
                <Image src="/imgProjetos/WEGSSM/Chat.png" width={800} height={400} title="Chat" alt="Chat" />
              </div>
            </Slider>

            <div className="flex flex-col w-2/5 justify-between">
              <h2 className="text-[#F2F6D0] font-bold text-1xl w-1/2 text-left">WEG-SSM</h2>
              <span>
                Sistema desenvolvido para empresa WEG, para o gerenciamento de demandas de TI. O usuário pode demandar alguma melhoria,
                e então abrir um workflow de aprovação entre analistas e gerentes. Feito em uma equipe de 4 pessoas.
              </span>
            </div>
          </div>

          <div className="w-3/4 mt-16 mb-16 text-[#F2F6D0] flex justify-evenly items-center">
            <div className="flex flex-col w-2/5 justify-between">
              <h2 className="text-[#F2F6D0] font-bold text-1xl w-1/2 text-left">Textille Industry</h2>
              <span>
                Sistema de controle de estoque para tecelagem, com controle de entrada e saída de materiais assim como controle de custos. Feito em uma equipe de 9 pessoas.
              </span>
            </div>

            <Slider className="w-2/5"  {...settings}>
              <div>
                <Image src="/imgProjetos/ProjetoTecelagem/Home.png" width={800} height={400} title="Página Inicial" alt="Home" />
              </div>
              <div>
                <Image src="/imgProjetos/ProjetoTecelagem/Login.png" width={800} height={400} title="Login" alt="Login" />
              </div>
              <div>
                <Image src="/imgProjetos/ProjetoTecelagem/Historico.png" width={800} height={400} title="Histórico de Entrada" alt="Historico" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </main>
  );
}
