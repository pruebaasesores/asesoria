import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Logo className="h-10 w-10" />
          <div>
            <div className="font-semibold">Guilda</div>
            <div className="text-sm text-muted">Marketplace automatizado para reservar expertos.</div>
          </div>
        </div>
        <div className="flex gap-6 text-sm text-zinc-400">
          <Link href="/browse" className="hover:text-white">Marketplace</Link>
          <Link href="/auth" className="hover:text-white">Registro</Link>
          <Link href="https://supabase.com" className="hover:text-white">Supabase</Link>
          <Link href="https://vercel.com" className="hover:text-white">Vercel</Link>
        </div>
      </div>
    </footer>
  );
}
