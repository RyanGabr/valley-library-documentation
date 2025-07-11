import { AlignLeft } from "@geist-ui/icons";
import DatabaseImage from "@/assets/database.png";
import { useTheme } from "@/components/theme-provider";

export function Database() {
  const { theme } = useTheme();

  return (
    <div className="flex">
      <div className="space-y-16 flex flex-col 2xl:max-w-[80%]">
        <div className="space-y-10 2xl:w-[70%]">
          <p className="bg-foreground/10 text-foreground/80 rounded-md px-4 py-1 w-fit text-sm">
            Ferramentas
          </p>
          <h1
            className="font-medium tracking-tighter text-3xl"
            id="banco-de-dados"
          >
            Banco de Dados
          </h1>
          <p className="leading-7">
            O diagrama abaixo representa o modelo de dados do sistema,
            organizado em quatro principais entidades:{" "}
            <span className="font-mono text-sm bg-foreground/10 rounded-md px-2 py-1 mr-1 text-foreground/80">
              users
            </span>
            ,
            <span className="font-mono text-sm bg-foreground/10 rounded-md px-2 py-1 mx-1 text-foreground/80">
              orders
            </span>
            ,
            <span className="font-mono text-sm bg-foreground/10 rounded-md px-2 py-1 mx-1 text-foreground/80">
              books
            </span>
            e
            <span className="font-mono text-sm bg-foreground/10 rounded-md px-2 py-1 mx-1 text-foreground/80">
              order_books
            </span>
            .
            <br />
            <br />
            <ul className="list-disc ml-5 space-y-3">
              <li>
                A tabela users armazena as informações dos usuários cadastrados,
                incluindo dados pessoais e credenciais de acesso.
              </li>
              <li>
                A tabela books contém os registros dos livros disponíveis, com
                detalhes como autor, categoria, estado de conservação, descrição
                e preço.
              </li>
              <li>
                A tabela orders gerencia os pedidos realizados pelos usuários,
                contendo o total do pedido e a data de criação.
              </li>
              <li>
                A tabela intermediária order_books realiza o relacionamento de
                muitos-para-muitos entre pedidos e livros, permitindo que cada
                pedido contenha múltiplos livros.
              </li>
            </ul>
            <br />
            <p>
              Este modelo relacional garante a integridade e organização dos
              dados, possibilitando o correto funcionamento das funcionalidades
              de compra e gerenciamento de livros.
            </p>
          </p>
          <div className="mt-20">
            <img
              src={DatabaseImage}
              alt="database image"
              data-theme={theme}
              className="scale-95 data-[theme=dark]:invert opacity-80"
            />
          </div>
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
              <a href="#banco-de-dados" className="hover:underline">
                Banco de dados
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
