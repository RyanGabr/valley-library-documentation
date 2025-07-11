import { AlignLeft } from "@geist-ui/icons";

export function FrontEnd() {
  return (
    <div className="flex">
      <div className="space-y-16 flex flex-col 2xl:max-w-[80%]">
        <div className="space-y-10 2xl:w-[70%]">
          <p className="bg-foreground/10 text-foreground/80 rounded-md px-4 py-1 w-fit text-sm">
            Ferramentas
          </p>
          <h1
            className="font-medium tracking-tighter text-3xl"
            id="ferramentas"
          >
            Ferramentas Front-End
          </h1>
          <p className="leading-7">
            O front-end do sistema Valley Library foi desenvolvido utilizando a
            biblioteca React, com foco em uma interface dinâmica, modular e de
            fácil manutenção. Foram utilizadas diversas ferramentas auxiliares
            que contribuíram para a qualidade, escalabilidade e produtividade no
            desenvolvimento.
          </p>
        </div>
        <div className="space-y-5 2xl:w-[70%]">
          <h1 className="font-medium tracking-tighter text-3xl" id="react">
            React
          </h1>
          <p className="leading-7">
            Responsável por estruturar toda a interface do sistema, o React
            permitiu a criação de componentes reutilizáveis, organizando o
            código de forma modular e facilitando a manutenção e a expansão da
            aplicação.
          </p>
        </div>
        <div className="space-y-5 2xl:w-[70%]">
          <h1 className="font-medium tracking-tighter text-3xl" id="vite">
            Vite
          </h1>
          <p className="leading-7">
            Utilizado como ambiente de desenvolvimento e ferramenta de build, o
            Vite proporcionou uma inicialização rápida do projeto,
            recarregamento instantâneo durante o desenvolvimento e otimizações
            de performance no build final.
          </p>
        </div>
        <div className="space-y-5 2xl:w-[70%]">
          <h1 className="font-medium tracking-tighter text-3xl" id="typescript">
            TypeScript
          </h1>
          <p className="leading-7">
            Garantiu segurança no desenvolvimento através de tipagem estática,
            ajudando a identificar erros ainda em tempo de desenvolvimento e
            melhorando a legibilidade e manutenção do código.
          </p>
        </div>
        <div className="space-y-5 2xl:w-[70%]">
          <h1 className="font-medium tracking-tighter text-3xl" id="router">
            React Router
          </h1>
          <p className="leading-7">
            Gerenciou toda a navegação da aplicação, permitindo a criação de
            rotas aninhadas e dinâmicas, como as páginas da documentação e as
            áreas administrativas.
          </p>
        </div>
        <div className="space-y-5 2xl:w-[70%]">
          <h1 className="font-medium tracking-tighter text-3xl" id="hookform">
            React Hook Form + Zod
          </h1>
          <p className="leading-7">
            Controlaram o gerenciamento e validação de formulários. O React Hook
            Form foi responsável por lidar com o estado dos formulários de
            maneira performática, enquanto o Zod validou os dados de entrada de
            forma tipada, garantindo a integridade das informações inseridas
            pelos usuários.
          </p>
        </div>
        <div className="space-y-5 2xl:w-[70%]">
          <h1
            className="font-medium tracking-tighter text-3xl"
            id="tailwindcss"
          >
            Tailwind CSS + Shadcn UI
          </h1>
          <p className="leading-7">
            Foram utilizados para a construção da interface visual. O Tailwind
            CSS permitiu uma estilização rápida e consistente através de classes
            utilitárias, enquanto o Shadcn UI forneceu componentes prontos e
            personalizáveis que aceleraram o desenvolvimento com um design
            moderno e consistente.
          </p>
        </div>
        <div className="space-y-5 2xl:w-[70%]">
          <h1 className="font-medium tracking-tighter text-3xl" id="recharts">
            Recharts
          </h1>
          <p className="leading-7">
            Responsável pela visualização de dados no dashboard, permitindo
            apresentar gráficos interativos e intuitivos, auxiliando no
            acompanhamento dos dados operacionais do sistema.
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
              <a href="#react" className="hover:underline">
                React
              </a>
            </li>
            <li>
              <a href="#vite" className="hover:underline">
                Vite
              </a>
            </li>
            <li>
              <a href="#typescript" className="hover:underline">
                TypeScript
              </a>
            </li>
            <li>
              <a href="#router" className="hover:underline">
                React Router
              </a>
            </li>
            <li>
              <a href="#hookform" className="hover:underline">
                React Hook Form + Zod
              </a>
            </li>
            <li>
              <a href="#tailwindcss" className="hover:underline">
                Tailwind CSS + Shadcn UI
              </a>
            </li>
            <li>
              <a href="#recharts" className="hover:underline">
                Recharts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
