import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = { title: "Informations Légales — Heiphaistos IT" };

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 space-y-5">
      <h2
        className="font-heading gradient-text leading-none"
        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
      >
        {title}
      </h2>
      <div className="font-sans text-sm text-forge-muted leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}

export default function LegalPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-screen bg-forge-black pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-sans text-forge-muted hover:text-forge-orange transition-colors text-xs uppercase tracking-[0.2em] mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          <h1
            className="font-heading gradient-text leading-none mb-4"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
          >
            INFORMATIONS LÉGALES
          </h1>

          {/* TOC */}
          <nav className="flex flex-wrap gap-3 mb-14 mt-6">
            {[
              ["#mentions", "Mentions Légales"],
              ["#confidentialite", "Confidentialité"],
              ["#cgu", "CGU"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="font-sans text-xs px-4 py-2 border border-forge-border rounded-full text-forge-muted hover:border-forge-orange hover:text-forge-orange transition-colors uppercase tracking-[0.12em]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="space-y-16">
            {/* ─── MENTIONS LÉGALES ─── */}
            <Section id="mentions" title="Mentions Légales">
              <div className="space-y-4">
                <div>
                  <p className="text-forge-text font-medium mb-1">Éditeur du site</p>
                  <p>
                    Le site <strong className="text-forge-text">heiphaistos.org</strong> est édité à titre personnel par un technicien
                    informatique indépendant opérant sous le nom commercial{" "}
                    <strong className="text-forge-text">Heiphaistos IT Services</strong>.
                  </p>
                  <p className="mt-2">
                    Contact :{" "}
                    <a href="mailto:contact@heiphaistos.org" className="text-forge-orange hover:underline">
                      contact@heiphaistos.org
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-forge-text font-medium mb-1">Hébergement</p>
                  <p>
                    Ce site est hébergé par <strong className="text-forge-text">Cloudflare Pages</strong> — Cloudflare, Inc.,
                    101 Townsend St, San Francisco, CA 94107, États-Unis.{" "}
                    <a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer" className="text-forge-orange hover:underline">
                      cloudflare.com
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-forge-text font-medium mb-1">Propriété intellectuelle</p>
                  <p>
                    L'ensemble du contenu de ce site est la propriété exclusive de son éditeur. Toute reproduction
                    sans autorisation écrite préalable est interdite.
                  </p>
                </div>
                <div>
                  <p className="text-forge-text font-medium mb-1">Responsabilité</p>
                  <p>
                    L'éditeur s'efforce de maintenir les informations à jour. Il ne peut être tenu responsable
                    des erreurs ou dommages résultant de l'utilisation de ce site.
                  </p>
                </div>
              </div>
            </Section>

            <div className="h-px" style={{ background: "linear-gradient(90deg, #f97316, transparent)" }} />

            {/* ─── CONFIDENTIALITÉ ─── */}
            <Section id="confidentialite" title="Politique de Confidentialité">
              <p>Dernière mise à jour : Mai 2025</p>
              <div className="space-y-4">
                <div>
                  <p className="text-forge-text font-medium mb-1">Données collectées</p>
                  <p>
                    Ce site est un site vitrine statique. Il ne collecte aucune donnée personnelle directement
                    (pas de formulaire, pas de compte utilisateur, pas de cookies tiers publicitaires).
                  </p>
                  <p className="mt-2">
                    Des données de navigation anonymisées peuvent être collectées par{" "}
                    <strong className="text-forge-text">Cloudflare</strong> à des fins de sécurité et de
                    performance (adresse IP, navigateur, pages visitées).
                  </p>
                </div>
                <div>
                  <p className="text-forge-text font-medium mb-1">Services tiers</p>
                  <p>
                    Ce site contient des liens vers Discord, GitHub, Plexit et Nitrite. En cliquant sur ces liens,
                    vous êtes soumis aux politiques de confidentialité de ces services tiers.
                  </p>
                </div>
                <div>
                  <p className="text-forge-text font-medium mb-1">Cookies</p>
                  <p>
                    Aucun cookie de pistage ou publicitaire n'est utilisé. Cloudflare peut déposer des cookies
                    techniques nécessaires à la sécurité du réseau.
                  </p>
                </div>
                <div>
                  <p className="text-forge-text font-medium mb-1">Vos droits (RGPD)</p>
                  <p>
                    Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression.
                    Contact :{" "}
                    <a href="mailto:contact@heiphaistos.org" className="text-forge-orange hover:underline">
                      contact@heiphaistos.org
                    </a>
                  </p>
                </div>
              </div>
            </Section>

            <div className="h-px" style={{ background: "linear-gradient(90deg, #f97316, transparent)" }} />

            {/* ─── CGU ─── */}
            <Section id="cgu" title="Conditions d'Utilisation">
              <p>Dernière mise à jour : Mai 2025</p>
              <div className="space-y-4">
                <div>
                  <p className="text-forge-text font-medium mb-1">Acceptation</p>
                  <p>
                    En accédant à <strong className="text-forge-text">heiphaistos.org</strong>, vous acceptez
                    les présentes conditions. Si vous n'acceptez pas, veuillez ne pas utiliser ce site.
                  </p>
                </div>
                <div>
                  <p className="text-forge-text font-medium mb-1">Objet</p>
                  <p>
                    Ce site présente les services proposés par Heiphaistos IT Services : maintenance, réparation,
                    récupération de données, conseil et développement.
                  </p>
                </div>
                <div>
                  <p className="text-forge-text font-medium mb-1">Services proposés</p>
                  <p>
                    Les prestations décrites sont soumises à un accord préalable. Tout service fera l'objet
                    d'un devis validé avant intervention. L'éditeur se réserve le droit de refuser une prestation.
                  </p>
                </div>
                <div>
                  <p className="text-forge-text font-medium mb-1">Limitation de responsabilité</p>
                  <p>
                    L'éditeur ne pourra être tenu responsable des dommages indirects. La responsabilité est
                    limitée au montant de la prestation effectivement réalisée.
                  </p>
                </div>
                <div>
                  <p className="text-forge-text font-medium mb-1">Contact</p>
                  <p>
                    <a href="mailto:contact@heiphaistos.org" className="text-forge-orange hover:underline">
                      contact@heiphaistos.org
                    </a>
                  </p>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
