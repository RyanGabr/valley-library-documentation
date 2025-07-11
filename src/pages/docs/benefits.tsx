import { AlignLeft } from "@geist-ui/icons";

export function Benefits() {
  return (
    <div className="flex">
      <div className="space-y-16 flex flex-col 2xl:max-w-[80%]">
        <div className="space-y-10 2xl:w-[70%]">
          <p className="bg-foreground/10 text-foreground/80 rounded-md px-4 py-1 w-fit text-sm">
            Introdução
          </p>
          <h1
            className="font-medium tracking-tighter text-3xl"
            id="beneficios"
          >
            Benefícios e Impacto
          </h1>
          <p className="leading-7">
            A seção Benefícios e Impacto destaca as vantagens proporcionadas
            pelo Valley Library, evidenciando como a solução contribui para a
            organização, agilidade e eficiência na gestão de acervos e no
            atendimento aos usuários.
            <br />
            <br />
            Ao centralizar e digitalizar esses processos, o sistema traz uma
            série de benefícios práticos para o dia a dia da biblioteca.
            Reduz-se o tempo gasto com tarefas manuais e controles paralelos,
            minimiza-se o risco de erros e duplicações, e aumenta-se a
            eficiência no atendimento ao público. Com buscas mais rápidas,
            organização clara e registro automático de todas as interações, o
            sistema proporciona uma experiência mais moderna e acessível tanto
            para os operadores quanto para os leitores — promovendo, assim, um
            ambiente mais funcional, convidativo e conectado com as demandas
            atuais.
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
              <a href="#beneficios" className="hover:underline">
                Benefícios e Impacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
