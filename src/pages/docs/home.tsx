import { AlignLeft } from "@geist-ui/icons";
import HomeVideo from "@/assets/videos/home.mov";
import { AutoPlayVideo } from "@/components/autoplay-video";

export function Home() {
  return (
    <div className="flex">
      <div className="space-y-16 flex flex-col 2xl:max-w-[80%]">
        <div className="space-y-10 2xl:w-[70%]">
          <p className="bg-foreground/10 text-foreground/80 rounded-md px-4 py-1 w-fit text-sm">
            Telas
          </p>
          <h1 className="font-medium tracking-tighter text-3xl" id="home">
            Página inicial
          </h1>
        </div>
        <div>
          <AutoPlayVideo src={HomeVideo} />
        </div>
        <div className="space-y-10 2xl:w-[70%]">
          <h1 className="font-medium tracking-tighter text-3xl" id="contexto">
            Descrição
          </h1>
          <p className="leading-7">
            A página Home é o ponto de entrada para os usuários explorarem o
            acervo de livros disponíveis. <br />
            <br />
            Com um visual limpo e intuitivo, ela apresenta uma mensagem de
            boas-vindas destacando o nome da biblioteca. A página exibe seções
            organizadas por algumas categorias de livros como Biografias,
            Romances e Educação, com sugestões visuais que facilitam a
            navegação. Há também recursos como busca, seleção de categorias,
            acesso à conta do usuário e área de gerenciamento, tornando a
            experiência mais completa e personalizada.
          </p>
        </div>
        <footer className="text-center">
          <span className="text-sm text-foreground/60">
            Desenvolvido por{" "}
            <a
              href="https://github.com/RyanGabr"
              target="_blank"
              className="font-medium underline"
            >
              RyanGabr
            </a>{" "}
            e{" "}
            <a
              href="https://github.com/hyan-zardo"
              target="_blank"
              className="font-medium underline"
            >
              Hyan Zardo
            </a>
            . O código-fonte está disponível no{" "}
            <a
              href="https://github.com/RyanGabr/valley-docs"
              target="_blank"
              className="font-medium underline"
            >
              GitHub
            </a>
            .
          </span>
        </footer>
      </div>
      <div className="fixed right-0 h-screen px-20 hidden 2xl:block">
        <div className="flex flex-col gap-5">
          <span className="font-medium flex items-center gap-2">
            <AlignLeft /> Esta página
          </span>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
