import { useTheme } from "@/components/theme-provider";
import { Box, ChevronLeft, Link } from "@geist-ui/icons";

export function Developers() {
  const { theme } = useTheme();

  return (
    <div className="w-full mt-10 lg:mt-20 mb-10 space-y-20">
      <div className="w-11/12 2xl:w-7/12 mx-auto">
        <a
          href="/"
          className="flex items-center font-medium hover:text-foreground/80 transition-colors"
        >
          <ChevronLeft />
          Voltar para página inicial
        </a>
      </div>
      <div className="w-11/12 2xl:w-7/12 mx-auto flex flex-col gap-2 items-center justify-center">
        <div
          data-theme={theme}
          className="font-mono bg-emerald-400/20 text-emerald-400 rounded-md px-2 py-0.5
          data-[theme=light]:text-emerald-900 flex items-center gap-1 text-sm"
        >
          <Box size={14} />
          devs
        </div>
        <h1 className="text-4xl text-center font-semibold tracking-tighter">
          Desenvolvedores do projeto.
        </h1>
        <p className="text-center w-10/12 md:max-w-2/3 text-foreground/70 text-base leading-7">
          Conheça as pessoas que desenvolveram este projeto.
        </p>
      </div>
      <div className="w-11/12 2xl:w-7/12 mx-auto grid grid-cols-1 divide-y xl:divide-y-0 xl:grid-cols-2 gap-3">
        <div className="p-7 border border-border rounded-xl shadow-md hover:bg-foreground/5 transition-colors">
          <div className="flex flex-col gap-10 justify-between h-full">
            <div className="space-y-5">
              <h1 className="font-semibold text-xl tracking-tighter flex items-center gap-2">
                @RyanGabr
                <a
                  href="https://github.com/RyanGabr"
                  target="_blank"
                  className="p-1.5 rounded-md hover:bg-foreground/10"
                >
                  <Link size={16} />
                </a>
              </h1>
              <p className="text-foreground/60">
                Desenvolvedor Front-End especializado na criação de interfaces
                intuitivas, responsivas e acessíveis, unindo design e tecnologia
                para oferecer experiências digitais de alta qualidade.
              </p>
            </div>
            <div className="space-y-5">
              <div className="font-medium">
                Ferramentas trabalhadas no projeto
              </div>
              <div
                data-theme={theme}
                className="data-[theme=dark]:invert flex items-center gap-3 relative z-10"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  className="w-7 brightness-0 opacity-90"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
                  className="w-7 brightness-0 opacity-90"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  className="w-7 brightness-0 opacity-90"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-plain.svg"
                  className="w-7 brightness-0 opacity-90"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-plain.svg"
                  className="w-7 brightness-0 opacity-90"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-plain.svg"
                  className="w-7 brightness-0 opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-7 border border-border rounded-xl shadow-md hover:bg-foreground/5 transition-colors">
          <div className="flex flex-col gap-10 justify-between h-full">
            <div className="space-y-5">
              <h1 className="font-semibold text-xl tracking-tighter flex items-center gap-2">
                @hyan-zardo
                <a
                  href="https://github.com/hyan-zardo"
                  target="_blank"
                  className="p-1.5 rounded-md hover:bg-foreground/10"
                >
                  <Link size={16} />
                </a>
              </h1>
              <p className="text-foreground/60">
                Desenvolvedor Back-End focado na construção de sistemas
                robustos, escaláveis e seguros, garantindo o processamento
                eficiente de dados e a integração confiável entre serviços e
                aplicações.
              </p>
            </div>
            <div className="space-y-5">
              <div className="font-medium">
                Ferramentas trabalhadas no projeto
              </div>
              <div
                data-theme={theme}
                className="data-[theme=dark]:invert flex items-center gap-3"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                  className="w-7 brightness-0 opacity-90"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
                  className="w-7 brightness-0 opacity-90"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-plain.svg"
                  className="w-7 brightness-0 opacity-90"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain.svg"
                  className="w-7 brightness-0 opacity-90"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg"
                  className="w-7 brightness-0 opacity-90"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg"
                  className="w-7 brightness-0 opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 2xl:w-7/12 mx-auto">
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
    </div>
  );
}
