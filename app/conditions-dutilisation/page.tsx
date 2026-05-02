import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Conditions d'Utilisation — Heiphaistos",
};

export default function ConditionsDutilisation() {
  return (
    <LegalPage title="Conditions d'Utilisation">
      <p>
        Dernière mise à jour : Mai 2025
      </p>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-forge-text tracking-wider">
          Acceptation des conditions
        </h2>
        <p>
          En accédant et en utilisant le site{" "}
          <strong className="text-forge-text">heiphaistos.org</strong>, vous
          acceptez sans réserve les présentes conditions d'utilisation. Si vous
          n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-forge-text tracking-wider">
          Objet du site
        </h2>
        <p>
          Ce site a pour objet de présenter les services proposés par
          Heiphaistos IT Services : maintenance informatique, réparation,
          récupération de données, conseil et développement d'applications.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-forge-text tracking-wider">
          Utilisation du site
        </h2>
        <p>L'utilisateur s'engage à :</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>utiliser ce site conformément à sa destination ;</li>
          <li>
            ne pas tenter d'accéder de manière non autorisée à des systèmes
            ou données ;
          </li>
          <li>
            ne pas diffuser de contenus illicites, diffamatoires ou portant
            atteinte aux droits de tiers.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-forge-text tracking-wider">
          Services proposés
        </h2>
        <p>
          Les services décrits sur ce site (maintenance, réparation,
          récupération de données, etc.) sont soumis à un accord préalable
          entre l'éditeur et le client. Toute prestation fera l'objet d'un
          devis validé avant intervention.
        </p>
        <p>
          L'éditeur se réserve le droit de refuser une prestation sans avoir
          à en justifier les motifs.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-forge-text tracking-wider">
          Limitation de responsabilité
        </h2>
        <p>
          L'éditeur ne pourra être tenu responsable des dommages indirects
          résultant de l'utilisation de ce site ou de ses services. La
          responsabilité de l'éditeur est limitée au montant de la prestation
          effectivement réalisée.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-forge-text tracking-wider">
          Modification des conditions
        </h2>
        <p>
          L'éditeur se réserve le droit de modifier les présentes conditions
          à tout moment. Les modifications prennent effet dès leur publication
          sur ce site.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-forge-text tracking-wider">
          Contact
        </h2>
        <p>
          Pour toute question :{" "}
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
