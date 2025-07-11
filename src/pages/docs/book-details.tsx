import { AlignLeft } from "@geist-ui/icons";
import BookDetailsVideo from "@/assets/videos/detalhes-livro.mov";
import { AutoPlayVideo } from "@/components/autoplay-video";

export function BookDetails() {
  return (
    <div className="flex">
      <div className="space-y-16 flex flex-col 2xl:max-w-[80%]">
        <div className="space-y-10 2xl:w-[70%]">
          <p className="bg-foreground/10 text-foreground/80 rounded-md px-4 py-1 w-fit text-sm">
            Telas
          </p>
          <h1 className="font-medium tracking-tighter text-3xl" id="detalhes-do-livro">
            Detalhes do livro
          </h1>
        </div>
        <div>
          <AutoPlayVideo src={BookDetailsVideo}/>
        </div>
        <div className="space-y-10 2xl:w-[70%]">
          <h1 className="font-medium tracking-tighter text-3xl" id="contexto">
            Descrição
          </h1>
          <p className="leading-7">
            A página de detalhes do livro apresenta todas as informações
            relevantes sobre uma obra específica disponível na biblioteca.
          </p>
          <p className="leading-7">
            Nela, o usuário pode visualizar o título, autor, descrição, preço,
            categoria, estado de conservação e ISBN do livro. É possível optar
            por comprar o exemplar utilizando o botão disponível "Realizar
            compra". Logo abaixo das informações principais, a página também
            exibe uma seção de recomendações, sugerindo ao usuário outros livros
            da mesma categoria, incentivando a descoberta de novas obras
            semelhantes ao seu interesse.
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
              <a href="#detalhes-do-livro" className="hover:underline">
                Detalhes do livro
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
