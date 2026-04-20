import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "./logo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="h-10 w-10" />
          <div>
            <div className="text-lg font-semibold tracking-tight">Guilda</div>
            <div className="text-xs text-muted">book real time expertise</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          <Link href="#how-it-works" className="transition hover:text-white">Cómo funciona</Link>
          <Link href="#experts" className="transition hover:text-white">Expertos</Link>
          <Link href="#stack" className="transition hover:text-white">Stack</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/browse"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-100 transition hover:border-white/20 hover:bg-white/5"
          >
            Explorar
          </Link>
          <Link
            href="/auth"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-950 transition hover:translate-y-[-1px]"
          >
            Empezar
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
