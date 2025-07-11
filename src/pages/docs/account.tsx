import { AlignLeft } from "@geist-ui/icons";
import AccountVideo from "@/assets/videos/conta.mov";
import { AutoPlayVideo } from "@/components/autoplay-video";

export function Account() {
  return (
    <div className="flex">
      <div className="space-y-16 flex flex-col 2xl:max-w-[80%]">
        <div className="space-y-10 2xl:w-[70%]">
          <p className="bg-foreground/10 text-foreground/80 rounded-md px-4 py-1 w-fit text-sm">
            Telas
          </p>
          <h1 className="font-medium tracking-tighter text-3xl" id="conta">
            Conta
          </h1>
        </div>
        <div>
          <AutoPlayVideo src={AccountVideo} />
        </div>
        <div className="space-y-10 2xl:w-[70%]">
          <h1 className="font-medium tracking-tighter text-3xl" id="contexto">
            Descrição
          </h1>
          <p className="leading-7">
            Esta página centraliza as principais informações do usuário,
            oferecendo uma navegação rápida e organizada. Ao acessar, o usuário
            é orientado a visualizar os dados mais importantes da conta.
          </p>
          <p className="leading-7">
            A tela é dividida em dois blocos principais:
          </p>

          <ul className="list-disc list-inside space-y-10">
            <li>
              <strong className="font-semibold text-lg">Seus pedidos:</strong>
              <p className="ml-5.5 mt-3 leading-7">
                Apresenta um atalho para o histórico de compras realizadas. O
                botão "Ver meus pedidos" leva o usuário a uma página com a
                listagem completa dos pedidos efetuados, onde ele pode consultar
                detalhes e comprovantes.
              </p>
            </li>
            <li>
              <strong className="font-semibold text-lg">
                Informações da conta:
              </strong>
              <p className="ml-5.5 mt-3 leading-7">
                Mostra os dados cadastrais do usuário. Ao clicar em "Ver
                informações da minha conta", é possível visualizar informações
                como nome e e-mail. Essa organização proporciona uma experiência
                simples, objetiva e funcional, garantindo que o usuário encontre
                facilmente o que precisa.
              </p>
            </li>
          </ul>
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
              <a href="#conta" className="hover:underline">
                Conta
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
