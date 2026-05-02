import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — Heiphaistos",
};

export default function PolitiqueConfidentialite() {
  return (
    <LegalPage title="Politique de Confidentialité">
      <p>
        Dernière mise à jour : Mai 2025
      </p>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-forge-text tracking-wider">
          Données collectées
        </h2>
        <p>
          Ce site est un site vitrine statique. Il ne collecte aucune donnée
          personnelle de manière directe (pas de formulaire, pas de compte
          utilisateur, pas de cookies tiers).
        </p>
        <p>
          Des données de navigation anonymisées peuvent être collectées par
          l'hébergeur <strong className="text-forge-text">Cloudflare</strong>{" "}
          à des fins de sécurité et d'analyse des performances (adresse IP,
          navigateur, pages visitées). Ces données sont traitées conformément
          à la politique de confidentialité de Cloudflare.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-forge-text tracking-wider">
          Services tiers
        </h2>
        <p>
          Ce site contient des liens vers des services tiers (Discord, GitHub,
          Plexit, Nitrite). En cliquant sur ces liens, vous quittez ce site et
          êtes soumis aux politiques de confidentialité de ces services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-forge-text tracking-wider">
          Cookies
        </h2>
        <p>
          Ce site n'utilise pas de cookies de pistage ou de cookies tiers à des
          fins publicitaires. Cloudflare peut déposer des cookies techniques
          nécessaires à la sécurité et aux performances du réseau.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-forge-text tracking-wider">
          Vos droits (RGPD)
        </h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD),
          vous disposez d'un droit d'accès, de rectification et de suppression
          des données vous concernant. Pour exercer ces droits, contactez-nous à{" "}
          <a
            href="mailto:contact@heiphaistos.org"
            className="text-forge-orange hover:underline"
          >
            contact@heiphaistos.org
          </a>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-forge-text tracking-wider">
          Contact
        </h2>
        <p>
          Pour toute question relative à la confidentialité de vos données,
          vous pouvez nous contacter à :{" "}
          <a
            href="mailto:contact@heiphaistos.org"
            className="text-forge-orange hover:underline"
          >
            contact@heiphaistos.org
          </a>
        </p>
      </section>
    </LegalPage>
  );
}
