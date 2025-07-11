import { AlignLeft } from "@geist-ui/icons";
import BuyVideo from "@/assets/videos/compra.mov";
import { AutoPlayVideo } from "@/components/autoplay-video";

export function Buy() {
  return (
    <div className="flex">
      <div className="space-y-16 flex flex-col 2xl:max-w-[80%]">
        <div className="space-y-10 2xl:w-[70%]">
          <p className="bg-foreground/10 text-foreground/80 rounded-md px-4 py-1 w-fit text-sm">
            Telas
          </p>
          <h1 className="font-medium tracking-tighter text-3xl" id="compra">
            Compra
          </h1>
        </div>
        <div>
          <AutoPlayVideo src={BuyVideo} />
        </div>
        <div className="space-y-10 2xl:w-[70%]">
          <h1 className="font-medium tracking-tighter text-3xl" id="contexto">
            Descrição
          </h1>
          <p className="leading-7">
            A página de compra do livro permite ao usuário revisar os detalhes
            do item escolhido antes de finalizar a transação.
          </p>
          <p className="leading-7">
            Nela, são exibidas informações como título, autor, estado de
            conservação, ISBN e o preço total. Abaixo, há uma seção com
            instruções importantes, explicando que a compra gera um comprovante
            a ser apresentado presencialmente na biblioteca para retirada do
            livro, e, uma sessão onde irá escolher a quantidade que será
            comprada deste mesmo livro. O usuário também é orientado sobre como
            acessar seus pedidos. Ao final da página, estão os botões para
            cancelar ou finalizar a compra com clareza e segurança.
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
              <a href="#compra" className="hover:underline">
                Compra
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
