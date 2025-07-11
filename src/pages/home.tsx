import { Link } from "react-router-dom";
import { ArrowRight, FileText, Zap } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function Home() {
  const { theme } = useTheme();

  return (
    <div className="root-layout w-full h-screen flex justify-center items-center">
      <div className="root w-9/12 md:w-1/2 xl:w-1/3 space-y-10">
        <div>
          <FileText className="text-foreground/50" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tighter opacity-90">
            Documentação projeto para{" "}
            <span
              data-theme={theme}
              className="inline-flex items-center gap-1 text-emerald-400 data-[theme=light]:text-emerald-600"
            >
              gerenciamento{" "}
              <Zap
                data-theme={theme}
                className="data-[theme=light]:fill-emerald-600 fill-emerald-400 text-transparent"
              />
            </span>{" "}
            de bibliotecas e sebos de pequeno porte.
          </h1>
          <p className="text-base text-foreground/50">
            Acesse abaixo toda a documentação do projeto e seus desenvolvedores.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3">
          <Link
            to="/docs"
            className="w-full md:w-fit flex items-center font-medium gap-1 rounded-md bg-foreground/10 py-2 px-3 hover:bg-foreground/7 hover:text-foreground/80 transition-colors"
          >
            Documentação <ArrowRight size={16} />
          </Link>
          <Link
            to="/developers"
            className="w-full md:w-fit font-medium hover:text-foreground/80 transition-colors py-2 px-3 rounded-md"
          >
            Desenvolvedores
          </Link>
        </div>
      </div>
    </div>
  );
}
