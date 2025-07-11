import { AlignLeft } from "@geist-ui/icons";
import LoginVideo from "@/assets/videos/login.mov";
import { AutoPlayVideo } from "@/components/autoplay-video";

export function Login() {
  return (
    <div className="flex">
      <div className="space-y-16 flex flex-col 2xl:max-w-[80%]">
        <div className="space-y-10 2xl:w-[70%]">
          <p className="bg-foreground/10 text-foreground/80 rounded-md px-4 py-1 w-fit text-sm">
            Telas
          </p>
          <h1 className="font-medium tracking-tighter text-3xl" id="login">
            Iniciar sessão
          </h1>
        </div>
        <div>
          <AutoPlayVideo src={LoginVideo} />
        </div>
        <div className="space-y-10 2xl:w-[70%]">
          <h1 className="font-medium tracking-tighter text-3xl" id="contexto">
            Descrição
          </h1>
          <p className="leading-7">
            A página "Iniciar sessão" é o ponto de entrada para usuários já
            cadastrados acessarem a plataforma.
          </p>
          <p className="leading-7">
            O design segue uma abordagem limpa e centralizada, com dois campos
            simples: e-mail e senha. Logo abaixo dos campos, há um link que
            direciona usuários que ainda não possuem conta para a página de
            cadastro. O botão "Continuar" finaliza o processo de autenticação,
            validando as credenciais fornecidas.
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
              <a href="#login" className="hover:underline">
                Iniciar sessão
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
