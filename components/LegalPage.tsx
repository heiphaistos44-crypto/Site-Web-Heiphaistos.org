import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, children }: Props) {
  return (
    <div className="min-h-screen bg-forge-black px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-forge-muted hover:text-forge-orange transition-colors duration-200 text-xs uppercase tracking-[0.2em] mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <h1
          className="font-heading gradient-text leading-none mb-12"
          style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
        >
          {title}
        </h1>

        <div className="font-sans text-sm text-forge-muted leading-relaxed space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
}
