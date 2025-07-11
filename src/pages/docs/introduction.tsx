import { AlignLeft } from "@geist-ui/icons";

export function Introduction() {
  return (
    <div className="flex">
      <div className="space-y-16 flex flex-col 2xl:max-w-[80%]">
        <div className="space-y-10 2xl:w-[70%]">
          <p className="bg-foreground/10 text-foreground/80 rounded-md px-4 py-1 w-fit text-sm">
            Introdução
          </p>
          <h1
            className="font-medium tracking-tighter text-3xl"
            id="introducao"
          >
            Introdução
          </h1>
          <p className="leading-7">
            O Valley Library foi desenvolvido para tornar mais fácil o acesso ao
            acervo de livros e otimizar a gestão de bibliotecas e sebos de
            pequeno porte.
          </p>
        </div>
        <div className="space-y-10 2xl:w-[70%]">
          <h1 className="font-medium tracking-tighter text-3xl" id="contexto">
            Contexto do problema
          </h1>
          <p className="leading-7">
            Imagine a seguinte situação: você entra em uma biblioteca que vende
            livros usados. Eles estão separados por categoria, distribuídos em
            várias prateleiras. No início, é encantador tantos títulos, tantas
            possibilidades. Mas logo surge a frustração: são muitos livros e não
            há como ler o início de cada um para decidir com segurança. <br />
            <br /> Agora imagine que exista um sistema de busca integrado, onde
            você pode pesquisar por títulos ou autores conhecidos. Melhor ainda:
            e se você pudesse comprar o livro antecipadamente e apenas passar na
            biblioteca para finalizar o pagamento e retirá-lo? Existe uma beleza
            única em caçar tesouros escondidos em uma grande biblioteca de
            livros usados. Mas nem sempre se tem tempo ou disposição para essa
            jornada.
          </p>
        </div>
        <div className="space-y-10 2xl:w-[70%]">
          <h1 className="font-medium tracking-tighter text-3xl" id="objetivos">
            Objetivos da solução
          </h1>
          <p className="leading-7">
            Foi com esse propósito que o sistema foi desenvolvido, oferecendo
            uma plataforma simples, intuitiva e funcional para o cadastro,
            consulta e controle de livros e compras. A aplicação permite que
            bibliotecários ou responsáveis pela administração da biblioteca
            mantenham o acervo sempre atualizado, com informações detalhadas
            sobre cada obra, seu status de disponibilidade e o histórico de
            movimentações. Além disso, o sistema também viabiliza o
            gerenciamento de usuários, permitindo a identificação rápida de quem
            comprou ou reservou determinado exemplar, tornando o atendimento
            mais ágil e preciso.
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
              <a href="#introducao" className="hover:underline">
                Introdução
              </a>
            </li>
            <li>
              <a href="#contexto" className="hover:underline">
                Contexto do problema
              </a>
            </li>
            <li>
              <a href="#contexto" className="hover:underline">
                Objetivos da solução
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
