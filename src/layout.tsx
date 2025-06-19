import { Outlet } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";
import { useTheme } from "./components/theme-provider";
import { Moon, Sun } from "lucide-react";
import { ArrowRight, Github, Menu, X } from "@geist-ui/icons";
import { useState } from "react";
import "./styles/global.css";
import { Switch } from "./components/ui/switch";
import { Separator } from "./components/ui/separator";

export function Layout() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className="w-full bg-background py-4 px-2">
        <div className="w-11/12 2xl:w-8/12 mx-auto flex items-center justify-between">
          <div className="flex items-center gap-10">
            <span className="text-xl font-medium tracking-tight">LOGO</span>
            <ul className="items-center text-foreground/80 hidden lg:flex">
              <li>
                <a
                  href="/documentation"
                  className="hover:bg-foreground/5 transition-colors py-1.5 px-5 rounded-full"
                >
                  Documentação
                </a>
              </li>
              <li>
                <a
                  href="/developers"
                  className="hover:bg-foreground/5 transition-colors py-1.5 px-5 rounded-full"
                >
                  Desenvolvedores
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={toggleTheme}
              variant="ghost"
              className="cursor-pointer hidden lg:block"
            >
              {theme === "light" ? <Moon /> : theme === "dark" ? <Sun /> : ""}
            </Button>
            <Link
              to="https://github.com/RyanGabr/valley-library-documentation"
              target="_blank"
              className="hidden lg:block"
            >
              <Button variant="secondary" className="cursor-pointer">
                GitHub
              </Button>
            </Link>
            <div>
              <button
                className="block lg:hidden cursor-pointer"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={24} />
              </button>
              {mobileMenuOpen && (
                <div className="fixed inset-0 bg-background z-50 py-4 w-full h-fit px-2 border-b border-border">
                  <div className="w-11/12 mx-auto space-y-10">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-medium tracking-tight">
                          LOGO
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
                    <div className="space-y-10">
                      <ul className="text-xl space-y-6">
                        <li>
                          <a
                            href="/documentation"
                            className="flex items-center gap-1.5"
                          >
                            Documentação
                            <ArrowRight />
                          </a>
                        </li>
                        <li>
                          <a
                            href="/developers"
                            className="flex items-center gap-1.5"
                          >
                            Desenvolvedores
                            <ArrowRight />
                          </a>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-foreground/60">Tema Escuro</span>
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
                      <Separator />
                      <div>
                        <Link
                          to="https://github.com/RyanGabr/valley-library-documentation"
                          target="_blank"
                        >
                          <Button
                            className="w-full h-12 text-base"
                          >
                            <Github />
                            GitHub da documentação
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}
