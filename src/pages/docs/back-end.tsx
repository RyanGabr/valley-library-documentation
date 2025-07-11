import { AlignLeft } from "@geist-ui/icons";

export function BackEnd() {
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
            Ferramentas Back-End
          </h1>
          <p className="leading-7">
            O back-end do Valley Library foi desenvolvido com o objetivo de
            garantir segurança, performance e organização na gestão de dados e
            regras de negócio.
          </p>
        </div>
        <div className="space-y-5 2xl:w-[70%]">
          <h1 className="font-medium tracking-tighter text-3xl" id="java">
            Java
          </h1>
          <p className="leading-7">
            Linguagem principal de desenvolvimento do back-end. Ofereceu
            robustez, ampla comunidade e suporte a boas práticas de programação
            orientada a objetos, além de ser amplamente adotada no mercado para
            aplicações corporativas.
          </p>
        </div>
        <div className="space-y-5 2xl:w-[70%]">
          <h1 className="font-medium tracking-tighter text-3xl" id="springboot">
            Spring Boot
          </h1>
          <p className="leading-7">
            Responsável por estruturar toda a aplicação back-end de forma rápida
            e padronizada. Facilitou a criação de APIs REST, o gerenciamento de
            dependências, segurança, validação de dados e configuração
            automática, permitindo maior produtividade e organização do projeto.
          </p>
        </div>
        <div className="space-y-5 2xl:w-[70%]">
          <h1 className="font-medium tracking-tighter text-3xl" id="hibernate">
            Hibernate
          </h1>
          <p className="leading-7">
            Foi utilizado como ferramenta de mapeamento objeto-relacional (ORM),
            simplificando o acesso e manipulação do banco de dados relacional
            através de entidades Java. Facilitou operações de CRUD,
            relacionamentos entre tabelas e gerenciamento de transações de forma
            automática.
          </p>
        </div>
        <div className="space-y-5 2xl:w-[70%]">
          <h1 className="font-medium tracking-tighter text-3xl" id="postman">
            Postman
          </h1>
          <p className="leading-7">
            Utilizado durante o desenvolvimento para testar e validar as APIs
            criadas, simulando requisições HTTP e verificando os retornos do
            servidor. Auxiliou na verificação do correto funcionamento dos
            endpoints e na documentação das rotas da API.
          </p>
        </div>
        <div className="space-y-5 2xl:w-[70%]">
          <h1 className="font-medium tracking-tighter text-3xl" id="docker">
            Docker
          </h1>
          <p className="leading-7">
            Responsável por garantir a consistência do ambiente de
            desenvolvimento e execução. Permitiu a criação de containers com o
            banco de dados e outras dependências, facilitando a implantação e
            reduzindo problemas de configuração entre diferentes ambientes.
          </p>
        </div>
        <div className="space-y-5 2xl:w-[70%]">
          <h1
            className="font-medium tracking-tighter text-3xl"
            id="sql"
          >
            SQL
          </h1>
          <p className="leading-7">
            Foi a linguagem utilizada na manipulação direta do banco de dados
            relacional. Serviu como base para consultas, criação de tabelas e
            estruturação dos dados do sistema, mesmo sendo a maior parte do
            acesso gerenciada pelo Hibernate.
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
              <a href="#java" className="hover:underline">
                Java
              </a>
            </li>
            <li>
              <a href="#springboot" className="hover:underline">
                Spring Boot
              </a>
            </li>
            <li>
              <a href="#hibernate" className="hover:underline">
                Hibernate
              </a>
            </li>
            <li>
              <a href="#postman" className="hover:underline">
                Postman
              </a>
            </li>
            <li>
              <a href="#docker" className="hover:underline">
                Docker
              </a>
            </li>
            <li>
              <a href="#sql" className="hover:underline">
                SQL
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
