import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Mentions Légales — Heiphaistos",
};

export default function MentionsLegales() {
  return (
    <LegalPage title="Mentions Légales">
      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-forge-text tracking-wider">
          Éditeur du site
        </h2>
        <p>
          Le site <strong className="text-forge-text">heiphaistos.org</strong>{" "}
          est édité à titre personnel par un technicien informatique indépendant
          opérant sous le nom commercial <strong className="text-forge-text">Heiphaistos IT Services</strong>.
        </p>
        <p>
          Adresse e-mail de contact :{" "}
          <a
            href="mailto:contact@heiphaistos.org"
            className="text-forge-orange hover:underline"
          >
            contact@heiphaistos.org
          </a>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-forge-text tracking-wider">
          Hébergement
        </h2>
        <p>
          Ce site est hébergé par{" "}
          <strong className="text-forge-text">Cloudflare Pages</strong>, service
          de Cloudflare, Inc.
        </p>
        <p>
          101 Townsend St<br />
          San Francisco, CA 94107<br />
          États-Unis
        </p>
        <p>
          Site web :{" "}
          <a
            href="https://www.cloudflare.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-forge-orange hover:underline"
          >
            www.cloudflare.com
          </a>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-forge-text tracking-wider">
          Propriété intellectuelle
        </h2>
        <p>
          L'ensemble du contenu de ce site (textes, images, logos, code source)
          est la propriété exclusive de son éditeur, sauf mentions contraires.
          Toute reproduction ou représentation, intégrale ou partielle, sans
          autorisation écrite préalable est interdite.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-forge-text tracking-wider">
          Responsabilité
        </h2>
        <p>
          L'éditeur s'efforce de maintenir les informations publiées à jour et
          exactes. Il ne peut être tenu responsable des erreurs ou omissions,
          ni des dommages résultant de l'utilisation des informations publiées.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-forge-text tracking-wider">
          Droit applicable
        </h2>
        <p>
          Le présent site est soumis au droit français. Tout litige relatif à
          son utilisation relève de la compétence exclusive des tribunaux
          français.
        </p>
      </section>
    </LegalPage>
  );
}
