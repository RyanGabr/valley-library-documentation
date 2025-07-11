import { AlignLeft } from "@geist-ui/icons";
import DashboardVideo from "@/assets/videos/dashboard.mov";
import UsersVideo from "@/assets/videos/usuários.mov";
import BooksVideo from "@/assets/videos/livros.mov";
import ShoppingVideo from "@/assets/videos/compras.mov";
import { AutoPlayVideo } from "@/components/autoplay-video";

export function Management() {
  return (
    <div className="flex">
      <div className="space-y-16 flex flex-col 2xl:max-w-[80%]">
        <div className="space-y-10 2xl:w-[70%]">
          <p className="bg-foreground/10 text-foreground/80 rounded-md px-4 py-1 w-fit text-sm">
            Telas
          </p>
          <h1
            className="font-medium tracking-tighter text-3xl"
            id="gerenciamento"
          >
            Gerenciamento
          </h1>
          <p className="leading-7">
            O módulo de gerenciamento é a peça central do sistema, responsável
            pelo controle completo do acervo de livros da biblioteca/sebo, pela
            administração dos usuários conectados e pela gestão de todos os
            pedidos realizados. Ele concentra as principais funcionalidades do
            projeto, sendo essencial para o funcionamento e organização da
            plataforma.
          </p>
        </div>
        <div id="dashboard">
          <h1 className="font-medium tracking-tighter text-3xl" id="contexto">
            Dashboard
          </h1>
        </div>
        <div>
          <AutoPlayVideo src={DashboardVideo} />
        </div>
        <div className="space-y-10 2xl:w-[70%]">
          <h1 className="font-medium tracking-tighter text-3xl" id="contexto">
            Descrição
          </h1>
          <p className="leading-7">
            O Dashboard apresenta os principais indicadores da biblioteca de
            forma clara e visual:
          </p>
          <ul className="list-disc list-inside space-y-10">
            <li>
              <strong className="font-semibold text-lg">
                Usuários totais:
              </strong>
              <p className="ml-5.5 mt-1 leading-7">
                Mostra o número total de usuários cadastrados na plataforma.
              </p>
            </li>
            <li>
              <strong className="font-semibold text-lg">Livros totais:</strong>
              <p className="ml-5.5 mt-1 leading-7">
                Indica quantos livros estão registrados no sistema.
              </p>
            </li>
            <li>
              <strong className="font-semibold text-lg">
                Total de vendas:
              </strong>
              <p className="ml-5.5 mt-1 leading-7">
                Exibe a quantidade de vendas realizadas pela biblioteca.
              </p>
            </li>
          </ul>
          <p className="leading-7">
            Abaixo dos indicadores, há um gráfico de vendas, que mostra a
            evolução das vendas nos últimos 7 dias. O gráfico em área permite
            visualizar facilmente picos de atividade e períodos com maior volume
            de vendas. Há também um seletor de período no canto superior direito
            do gráfico, permitindo ajustar o intervalo de análise (como “Últimos
            30 dias”).
          </p>
          <p className="leading-7">
            Esse painel facilita o acompanhamento do desempenho da biblioteca em
            tempo real, auxiliando na tomada de decisões administrativas.
          </p>
        </div>
        <div id="usuarios">
          <h1 className="font-medium tracking-tighter text-3xl" id="contexto">
            Usuários
          </h1>
        </div>
        <div>
          <AutoPlayVideo src={UsersVideo} />
        </div>
        <div className="space-y-10 2xl:w-[70%]">
          <h1 className="font-medium tracking-tighter text-3xl" id="contexto">
            Descrição
          </h1>
          <p className="leading-7">
            Essa tela faz parte do painel de gerenciamento e tem como objetivo
            listar, buscar, filtrar e cadastrar usuários da biblioteca.
          </p>
          <ul className="list-disc list-inside space-y-10">
            <div className="font-semibold">Funcionalidades apresentadas:</div>
            <li>
              <strong className="font-semibold">Filtros de busca:</strong>
              <p className="ml-5.5 mt-1 leading-7">
                - Nome, E-mail e Permissões (dropdown com opções como
                “Administrador” e “Padrão”).
                <br />- Botões: Filtrar resultados e remover filtros.
              </p>
            </li>
            <li>
              <strong className="font-semibold">Tabela de usuários:</strong>
              <p className="ml-5.5 mt-1 leading-7">
                - Colunas: Nome, e-mail, Permissões e Opções.
                <br />
                - Ícones coloridos indicam o tipo de permissão (Administrador e
                Padrão).
                <br />- Botão de opções (...) à direita de cada linha (Ações
                disponíveis como <b>editar</b> e <b>remover</b> usuário).
              </p>
            </li>
            <li>
              <strong className="font-semibold">Cadastro de usuários:</strong>
              <p className="ml-5.5 mt-1 leading-7">
                - Botão localizado no canto superior direito da tela.
                <br />- Permite o cadastro de novos usuários no sistema.
              </p>
            </li>
          </ul>
          <p className="leading-7">
            Essa tela permite que o administrador mantenha controle completo
            sobre os usuários do sistema, com mecanismos práticos de busca,
            filtro e gerenciamento.
          </p>
        </div>
        <div id="livros">
          <h1 className="font-medium tracking-tighter text-3xl" id="contexto">
            Livros
          </h1>
        </div>
        <div>
          <AutoPlayVideo src={BooksVideo} />
        </div>
        <div className="space-y-10 2xl:w-[70%]">
          <h1 className="font-medium tracking-tighter text-3xl" id="contexto">
            Descrição
          </h1>
          <p className="leading-7">
            Essa tela faz parte do painel administrativo e tem como objetivo
            listar, buscar, filtrar e cadastrar livros disponíveis na
            biblioteca.
          </p>
          <ul className="list-disc list-inside space-y-10">
            <div className="font-semibold">Funcionalidades apresentadas:</div>
            <li>
              <strong className="font-semibold">Filtros de busca:</strong>
              <p className="ml-5.5 mt-1 leading-7">
                - Campos: Identificador, Título, Autor, Quantidade, Categoria
                (dropdown) e Conservação (dropdown).
                <br />- Botões: Filtrar resultados e remover filtros.
              </p>
            </li>
            <li>
              <strong className="font-semibold">Tabela de livros:</strong>
              <p className="ml-5.5 mt-1 leading-7">
                - Colunas: Identificador, Título, Autor, Categoria, Quantidade,
                Preço, Conservação e Opções.
                <br />- Ícones coloridos indicam a conservação do livro (Novo,
                pouco usado e usado).
                <br />- Botão de opções (...) à direita de cada linha (Ações
                disponíveis como editar e remover livro).
              </p>
            </li>
            <li>
              <strong className="font-semibold">Cadastro de livro:</strong>
              <p className="ml-5.5 mt-1 leading-7">
                - Botão localizado no canto superior direito da tela.
                <br />- Permite o cadastro de novos livros no sistema.
              </p>
            </li>
          </ul>
        </div>
        <div id="compras">
          <h1 className="font-medium tracking-tighter text-3xl" id="contexto">
            Compras
          </h1>
        </div>
        <div>
          <AutoPlayVideo src={ShoppingVideo} />
        </div>
        <div className="space-y-10 2xl:w-[70%]">
          <h1 className="font-medium tracking-tighter text-3xl" id="contexto">
            Descrição
          </h1>
          <p className="leading-7">
            Essa tela faz parte do painel administrativo e tem como objetivo
            listar, buscar, filtrar, editar e acompanhar as compras realizadas
            na biblioteca.
          </p>
          <ul className="list-disc list-inside space-y-10">
            <div className="font-semibold">Funcionalidades apresentadas:</div>
            <li>
              <strong className="font-semibold">Filtros de busca:</strong>
              <p className="ml-5.5 mt-1 leading-7">
                - Campos: Usuário, Data, Livro e Status (dropdown com opções
                como “Aguardando pagamento” e “Pagamento finalizado”).
                <br />- Botões: Filtrar resultados e remover filtros.
              </p>
            </li>
            <li>
              <strong className="font-semibold">Tabela de compras:</strong>
              <p className="ml-5.5 mt-1 leading-7">
                - Colunas: Identificador, Usuário, Data, Status, Título do
                livro, Total e Opções.
                <br />
                - Ícones coloridos indicam o status da compra (Aguardando
                pagamento e Pagamento finalizado).
                <br />- Botão de opções (...) à direita de cada linha (Ações
                disponíveis como <b>editar</b> e <b>cancelar</b> compra).
              </p>
            </li>
          </ul>
          <p className="leading-7">
            Essa tela permite que o administrador mantenha controle completo
            sobre as compras geradas pelo site, com mecanismos práticos de
            busca, filtro e gerenciamento.
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
              <a href="#gerenciamento" className="hover:underline">
                Gerenciamento
              </a>
            </li>
            <li>
              <a href="#dashboard" className="hover:underline">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#usuarios" className="hover:underline">
                Usuários
              </a>
            </li>
            <li>
              <a href="#livros" className="hover:underline">
                Livros
              </a>
            </li>
            <li>
              <a href="#compras" className="hover:underline">
                Compras
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
