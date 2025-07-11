import { ScrollToTop } from "@/components/scroll-to-top";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Github, Menu, Moon, Sun, X } from "@geist-ui/icons";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

interface ItemProps {
  title: string;
  url: string;
}

export const introductionItems: ItemProps[] = [
  { title: "Introdução", url: "/docs/introduction" },
  { title: "Benefícios e Impacto", url: "/docs/benefits" },
];

export const toolsItems: ItemProps[] = [
  { title: "Front-End", url: "/docs/front-end" },
  { title: "Back-End", url: "/docs/back-end" },
  { title: "Banco de dados", url: "/docs/database" },
];

export const screenItems: ItemProps[] = [
  { title: "Página inicial", url: "/docs/home" },
  { title: "Criar conta", url: "/docs/create-account" },
  { title: "Iniciar sessão", url: "/docs/login" },
  { title: "Busca", url: "/docs/search" },
  { title: "Detalhes do livro", url: "/docs/book-details" },
  { title: "Compra", url: "/docs/buy" },
  { title: "Conta", url: "/docs/account" },
  { title: "Gerenciamento", url: "/docs/management" },
];

export function LayoutDocs() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
  }, [mobileMenuOpen]);

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <ScrollToTop />
      <div className="block lg:hidden w-full bg-background py-4 px-7 fixed top-0 z-50">
        <div className="mx-auto flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="/" className="text-2xl font-semibold tracking-tight">
              valley
            </a>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <button
                className="block lg:hidden cursor-pointer"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={24} />
              </button>
              {mobileMenuOpen && (
                <div className="fixed inset-0 bg-background z-50 py-4 w-full h-full overflow-y-auto border-b border-border">
                  <div className="mx-auto space-y-10">
                    <div className="flex items-center justify-between fixed p-4 px-6 top-0 bg-background w-full">
                      <div>
                        <span className="text-xl font-semibold tracking-tight">
                          Menu
                        </span>
                      </div>
                      <div>
                        <button
                          className="block lg:hidden cursor-pointer"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <X size={24} />
                        </button>
                      </div>
                    </div>
                    <div className="space-y-10 mt-14 px-6">
                      <div className="flex flex-col gap-3">
                        <span className="text-sm text-foreground/50">
                          Início
                        </span>
                        <ul className="space-y-3">
                          <li className="text-2xl font-medium">
                            <a href="/" className="flex items-center gap-1.5">
                              Home
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-3">
                        <span className="text-sm text-foreground/50">
                          Introdução
                        </span>
                        <ul className="space-y-3">
                          {introductionItems.map((item, i) => (
                            <li key={i} className="text-2xl font-medium">
                              <a
                                href={item.url}
                                className="flex items-center gap-1.5"
                              >
                                {item.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col gap-3">
                        <span className="text-sm text-foreground/50">
                          Ferramentas
                        </span>
                        <ul className="space-y-3">
                          {toolsItems.map((item, i) => (
                            <li key={i} className="text-2xl font-medium">
                              <a
                                href={item.url}
                                className="flex items-center gap-1.5"
                              >
                                {item.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col gap-3">
                        <span className="text-sm text-foreground/50">
                          Telas
                        </span>
                        <ul className="space-y-3">
                          {screenItems.map((item, i) => (
                            <li key={i} className="text-2xl font-medium">
                              <a
                                href={item.url}
                                className="flex items-center gap-1.5"
                              >
                                {item.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col gap-3">
                        <span className="text-sm text-foreground/50">
                          Desenvolvedores
                        </span>
                        <ul>
                          <li className="text-2xl font-medium">
                            <a
                              href="/developers"
                              className="flex items-center gap-1.5"
                            >
                              Desenvolvedores
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-3">
                        <span className="text-sm text-foreground/50">Tema</span>
                        <ul className="text-xl space-y-6">
                          <li className="flex items-center justify-between">
                            <span className="text-foreground/80 font-medium">
                              Tema Escuro
                            </span>
                            <Switch
                              className="h-5"
                              id="dark-theme"
                              checked={isDark}
                              onCheckedChange={(checked) =>
                                setTheme(checked ? "dark" : "light")
                              }
                            />
                          </li>
                        </ul>
                      </div>
                      <Separator />
                    </div>
                    <div className="px-6 pb-4">
                      <Link
                        to="https://github.com/RyanGabr/valley-library-documentation"
                        target="_blank"
                      >
                        <Button
                          variant="secondary"
                          className="w-full h-12 text-base"
                        >
                          <Github />
                          GitHub da documentação
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="hidden w-72 h-screen fixed top-0 left-0 lg:flex flex-col p-10 justify-center space-y-10">
          <div className="font-semibold text-2xl px-4 cursor-default">valley</div>
          <a
            href="/"
            className="flex items-center text-foreground/50 px-4 group w-fit"
          >
            <ArrowLeft size={18} className="mr-3 group-hover:mr-1 transition-all"/>
            Home
          </a>
          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium text-foreground/50 px-4">
              Introdução
            </span>
            <ul className="flex flex-col">
              {introductionItems.map((item, i) => (
                <Link
                  key={i}
                  data-theme={theme}
                  to={item.url}
                  className={`font-medium px-4 py-1.5 hover:bg-foreground/5 transition-colors data-[theme=dark]:hover:bg-foreground/10 rounded-md ${
                    location.pathname === item.url
                      ? "bg-foreground/5 data-[theme=dark]:bg-foreground/10"
                      : ""
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium text-foreground/50 px-4">
              Ferramentas
            </span>
            <ul className="flex flex-col">
              {toolsItems.map((item, i) => (
                <Link
                  key={i}
                  data-theme={theme}
                  to={item.url}
                  className={`font-medium px-4 py-1.5 hover:bg-foreground/5 transition-colors data-[theme=dark]:hover:bg-foreground/10 rounded-md ${
                    location.pathname === item.url
                      ? "bg-foreground/5 data-[theme=dark]:bg-foreground/10"
                      : ""
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium text-foreground/50 px-4">
              Telas
            </span>
            <ul className="flex flex-col">
              {screenItems.map((item, i) => (
                <Link
                  key={i}
                  data-theme={theme}
                  to={item.url}
                  className={`font-medium px-4 py-1.5 hover:bg-foreground/5 transition-colors data-[theme=dark]:hover:bg-foreground/10 rounded-md ${
                    location.pathname === item.url
                      ? "bg-foreground/5 data-[theme=dark]:bg-foreground/10"
                      : ""
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <Button
              onClick={toggleTheme}
              variant="ghost"
              className="cursor-pointer hidden lg:block w-fit"
            >
              {theme === "light" ? <Moon /> : theme === "dark" ? <Sun /> : ""}
            </Button>
          </div>
        </div>
        <main className="flex-1 lg:ml-72 xl:ml-96 mt-20 lg:mt-0 p-7 lg:p-20">
          <Outlet />
        </main>
      </div>
    </>
  );
}
