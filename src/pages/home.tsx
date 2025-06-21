import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="w-full mx-auto h-screen items-center justify-center flex flex-col">
      <div className="p-10 2xl:p-0 flex flex-col items-center justify-center gap-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-center xl:w-3/4">
          Documentação projeto Valley library
        </h1>
        <p className="text-lg 2xl:w-1/2 text-center">
          Acesse e veja todas as funcionalidades e objetivos do projeto.
        </p>
        <div className="space-x-3">
          <Link to="/documentation">
            <Button className="cursor-pointer">Documentação</Button>
          </Link>
          <Link to="/developers">
            <Button variant="secondary" className="cursor-pointer">
              Desenvolvedores
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
