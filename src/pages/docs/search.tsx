import { AlignLeft } from "@geist-ui/icons";
import SearchVideo from "@/assets/videos/busca.mov";
import SearchByCategoryVideo from "@/assets/videos/categoria.mov";
import { AutoPlayVideo } from "@/components/autoplay-video";

export function Search() {
  return (
    <div className="flex">
      <div className="space-y-16 flex flex-col 2xl:max-w-[80%]">
        <div className="space-y-10 2xl:w-[70%]">
          <p className="bg-foreground/10 text-foreground/80 rounded-md px-4 py-1 w-fit text-sm">
            Telas
          </p>
          <h1 className="font-medium tracking-tighter text-3xl" id="busca">
            Busca
          </h1>
        </div>
        <div>
          <AutoPlayVideo src={SearchVideo} />
        </div>
        <div className="space-y-10 2xl:w-[70%]">
          <h1 className="font-medium tracking-tighter text-3xl" id="contexto">
            Descrição
          </h1>
          <p className="leading-7">
            A página de resultados de busca exibe os livros encontrados a partir
            de uma pesquisa realizada ao clicar no ícone de busca localizada na
            Barra de Navegação. Ao escolher o tipo de busca (Busca por título do
            livro ou autor), digitar o conteúdo e confirmar a busca, o usuário é
            redirecionado para esta tela com os resultados correspondentes.
          </p>
          <p className="leading-7">
            Nela, é apresentado um cabeçalho com o termo pesquisado em destaque,
            indicando o critério utilizado na busca. Logo abaixo, são exibidos
            os livros encontrados, organizados em cartões com capa, título e
            autor(es).
          </p>
          <p className="leading-7">
            Essa página tem como objetivo facilitar a localização rápida de
            livros específicos no catálogo da biblioteca, otimizando a
            experiência de navegação e descoberta de obras.
          </p>
        </div>
        <div id="busca-categoria">
          <h1 className="font-medium tracking-tighter text-3xl" id="introducao">
            Busca por categoria
          </h1>
        </div>
        <div>
          <AutoPlayVideo src={SearchByCategoryVideo} />
        </div>
        <div className="space-y-10 2xl:w-[70%]">
          <h1 className="font-medium tracking-tighter text-3xl" id="contexto">
            Descrição
          </h1>
          <p className="leading-7">
            A página "Livros por Categoria" exibe os livros disponíveis de uma
            categoria específica escolhida pelo usuário no menu suspenso da
            barra de navegação ou nos cards de categoria disponíveis ao final da
            página Home.
          </p>
          <p className="leading-7">
            O layout é em grade, com capas de livros dispostas em colunas e
            acompanhadas de informações básicas, como o título e o nome do
            autor. Essa estrutura facilita a navegação visual e rápida pelos
            itens. A proposta é permitir que o usuário explore facilmente os
            livros que pertencem à categoria de seu interesse.
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
              <a href="#busca" className="hover:underline">
                Busca
              </a>
            </li>
            <li>
              <a href="#busca-categoria" className="hover:underline">
                Busca por categoria
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
