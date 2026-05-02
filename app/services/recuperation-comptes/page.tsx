import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = { title: "Récupération de Comptes — Heiphaistos IT" };

const service = {
  iconName: "key-round" as const,
  title: "Récupération de Comptes",
  tagline: "Gmail, Orange, SFR, Bouygues, Free — retrouve l'accès à tes comptes",
  description:
    "Assistance pour retrouver l'accès à des comptes bloqués, e-mails oubliés ou désactivés. J'accompagne dans les procédures officielles de récupération chez les principaux opérateurs et services en ligne. Tout se fait dans le strict respect des règles des plateformes — sans contournement des systèmes de sécurité.",
  features: [
    "Récupération de compte Gmail / Google Workspace",
    "Comptes Orange, SFR, Bouygues Telecom, Free",
    "Guidance dans les procédures officielles",
    "Constitution du dossier de vérification d'identité",
    "Déblocage suite à une activité suspecte détectée",
    "Sécurisation post-récupération (2FA, mot de passe fort)",
    "Support à distance ou en présentiel",
  ],
};

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
