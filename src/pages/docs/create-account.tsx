import { AlignLeft } from "@geist-ui/icons";
import CreateAccountVideo from "@/assets/videos/criar-conta.mov";
import { AutoPlayVideo } from "@/components/autoplay-video";

export function CreateAccount() {
  return (
    <div className="flex">
      <div className="space-y-16 flex flex-col 2xl:max-w-[80%]">
        <div className="space-y-10 2xl:w-[70%]">
          <p className="bg-foreground/10 text-foreground/80 rounded-md px-4 py-1 w-fit text-sm">
            Telas
          </p>
          <h1
            className="font-medium tracking-tighter text-3xl"
            id="create-account"
          >
            Criar conta
          </h1>
        </div>
        <div>
          <AutoPlayVideo src={CreateAccountVideo} />
        </div>
        <div className="space-y-10 2xl:w-[70%]">
          <h1 className="font-medium tracking-tighter text-3xl" id="contexto">
            Descrição
          </h1>
          <p className="leading-7">
            A página "Criar conta" permite que novos usuários realizem seu
            cadastro de forma simples e rápida.
          </p>
          <p className="leading-7">
            São solicitadas quatro informações: nome completo, e-mail e senha.
            Abaixo do formulário, há um link para usuários que já possuem conta,
            redirecionando-os para a página de login. Por fim, um botão
            destacado com o texto "Criar conta" finaliza o processo de cadastro.
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
              <a href="#create-account" className="hover:underline">
                Criar conta
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
