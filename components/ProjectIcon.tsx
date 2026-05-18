"use client";

/* ── Vraies images ── */
const REAL_LOGOS: Record<string, { src: string; pos?: string }> = {
  Nitrite:  { src: "/icons/nitrite.png",  pos: "center center" },
  Plexit:   { src: "/icons/plexit.png",   pos: "center center" },
  TutoInfo: { src: "/icons/tutoinfo.png", pos: "center 28%" },
};

/* ── SVG — chaque icon = univers visuel propre ── */
type IR = (uid: string) => React.ReactNode;

const ICONS: Record<string, IR> = {

  /* ─ GhostHandDesk ─ réseau spatial cyan + main fantôme violette */
  GhostHandDesk: (u) => (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id={`bg${u}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#0f2952"/>
          <stop offset="100%" stopColor="#020c1e"/>
        </radialGradient>
        <filter id={`gw${u}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="b"/>
          <feComposite in="SourceGraphic" in2="b" operator="over"/>
        </filter>
      </defs>
      <rect width="40" height="40" fill={`url(#bg${u})`}/>
      {/* Moniteur large */}
      <rect x="1" y="3" width="27" height="20" rx="2" fill="#0a1f40" stroke="#22d3ee" strokeWidth="1.8"/>
      <rect x="3" y="5" width="23" height="16" rx="1" fill="#040e1f"/>
      {/* Nœuds réseau */}
      <circle cx="14" cy="13" r="3" fill="#22d3ee" filter={`url(#gw${u})`}/>
      <circle cx="5"  cy="18" r="2" fill="#38bdf8"/>
      <circle cx="23" cy="7"  r="2" fill="#38bdf8"/>
      <circle cx="24" cy="18" r="1.6" fill="#7dd3fc"/>
      <line x1="14" y1="13" x2="5"  y2="18" stroke="#22d3ee" strokeWidth="1" opacity="0.8"/>
      <line x1="14" y1="13" x2="23" y2="7"  stroke="#22d3ee" strokeWidth="1" opacity="0.8"/>
      <line x1="14" y1="13" x2="24" y2="18" stroke="#22d3ee" strokeWidth="1" opacity="0.5"/>
      {/* Pied */}
      <line x1="14" y1="23" x2="14" y2="27" stroke="#22d3ee" strokeWidth="2.2"/>
      <line x1="8"  y1="27" x2="20" y2="27" stroke="#22d3ee" strokeWidth="2.2"/>
      {/* Main curseur fantôme — gros, droite */}
      <path d="M27 22 L39 10 L39 30 L34 26.5 L32 35 L27.5 34 Z"
        fill="#7c3aed" filter={`url(#gw${u})`}/>
      <path d="M27 22 L39 10 L39 30 L34 26.5 L32 35 L27.5 34 Z"
        fill="none" stroke="#a78bfa" strokeWidth="0.8"/>
      <circle cx="33" cy="14" r="1.5" fill="#c4b5fd"/>
    </svg>
  ),

  /* ─ PureRemove ─ magie d'effacement sur fond magenta profond */
  PureRemove: (u) => (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id={`bg${u}`} cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#2d0040"/>
          <stop offset="100%" stopColor="#0e0015"/>
        </radialGradient>
        <linearGradient id={`mg${u}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0abfc"/>
          <stop offset="100%" stopColor="#e879f9"/>
        </linearGradient>
        <filter id={`gw${u}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.8" result="b"/>
          <feComposite in="SourceGraphic" in2="b" operator="over"/>
        </filter>
      </defs>
      <rect width="40" height="40" fill={`url(#bg${u})`}/>
      {/* Cadre image principal */}
      <rect x="2" y="4" width="28" height="26" rx="2.5" fill="#1a0028" stroke={`url(#mg${u})`} strokeWidth="1.8"/>
      {/* Moitié gauche — image pleine */}
      <rect x="4"  y="6" width="13" height="22" fill="#3b0060" rx="1"/>
      <rect x="6"  y="9" width="4"  height="3"  fill="#a855f7" rx="0.5" opacity="0.6"/>
      <path d="M4 18 L9 13 L14 18 L17 15 L17 28 L4 28 Z" fill="#6d28d9" opacity="0.7"/>
      {/* Moitié droite — transparence (damier) */}
      <rect x="17" y="6" width="6"  height="5"  fill="#2d0048" rx="0.5"/>
      <rect x="23" y="6" width="6"  height="5"  fill="#1a0030" rx="0.5"/>
      <rect x="17" y="11" width="6" height="5"  fill="#1a0030" rx="0.5"/>
      <rect x="23" y="11" width="6" height="5"  fill="#2d0048" rx="0.5"/>
      <rect x="17" y="16" width="6" height="6"  fill="#2d0048" rx="0.5"/>
      <rect x="23" y="16" width="6" height="6"  fill="#1a0030" rx="0.5"/>
      <rect x="17" y="22" width="6" height="6"  fill="#1a0030" rx="0.5"/>
      <rect x="23" y="22" width="6" height="6"  fill="#2d0048" rx="0.5"/>
      {/* Baguette magique */}
      <line x1="31" y1="33" x2="20" y2="8"
        stroke={`url(#mg${u})`} strokeWidth="2.5" strokeLinecap="round" filter={`url(#gw${u})`}/>
      {/* Étoile */}
      <path d="M20 8 L21.5 4 L23 8 L27 9.5 L23 11 L21.5 15 L20 11 L16 9.5 Z"
        fill={`url(#mg${u})`} filter={`url(#gw${u})`}/>
      {/* Particules */}
      <circle cx="33" cy="28" r="1.5" fill="#f0abfc" filter={`url(#gw${u})`}/>
      <circle cx="37" cy="22" r="1"   fill="#e879f9" filter={`url(#gw${u})`}/>
      <circle cx="35" cy="35" r="1.2" fill="#f0abfc" filter={`url(#gw${u})`}/>
    </svg>
  ),

  /* ─ UniversalConverter ─ portail de conversion vert émeraude */
  UniversalConverter: (u) => (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id={`bg${u}`} cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#032b14"/>
          <stop offset="100%" stopColor="#010d06"/>
        </radialGradient>
        <linearGradient id={`gr${u}`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#16a34a"/>
          <stop offset="100%" stopColor="#4ade80"/>
        </linearGradient>
        <filter id={`gw${u}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="b"/>
          <feComposite in="SourceGraphic" in2="b" operator="over"/>
        </filter>
      </defs>
      <rect width="40" height="40" fill={`url(#bg${u})`}/>
      {/* Arc supérieur CW + flèche */}
      <path d="M5 20 C5 9 12 3 20 3 C28 3 35 9 35 20"
        stroke={`url(#gr${u})`} strokeWidth="3" strokeLinecap="round" fill="none"
        filter={`url(#gw${u})`}/>
      <path d="M32 12 L35 20 L28 18" stroke={`url(#gr${u})`} strokeWidth="2.5"
        strokeLinejoin="round" fill="none"/>
      {/* Arc inférieur CCW + flèche */}
      <path d="M35 20 C35 31 28 37 20 37 C12 37 5 31 5 20"
        stroke="#22c55e" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.75"/>
      <path d="M8 28 L5 20 L12 22" stroke="#22c55e" strokeWidth="2.5"
        strokeLinejoin="round" fill="none"/>
      {/* Centre : éclair */}
      <path d="M23 11 L17 20 L21 20 L17 29 L23 20 L19 20 Z"
        fill={`url(#gr${u})`} filter={`url(#gw${u})`}/>
    </svg>
  ),

  /* ─ OmniPlayer ─ play géant sur fond rouge profond */
  OmniPlayer: (u) => (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id={`bg${u}`} cx="45%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#3b0000"/>
          <stop offset="100%" stopColor="#0d0000"/>
        </radialGradient>
        <linearGradient id={`pl${u}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fbbf24"/>
          <stop offset="50%" stopColor="#f97316"/>
          <stop offset="100%" stopColor="#dc2626"/>
        </linearGradient>
        <filter id={`gw${u}`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.5" result="b"/>
          <feComposite in="SourceGraphic" in2="b" operator="over"/>
        </filter>
      </defs>
      <rect width="40" height="40" fill={`url(#bg${u})`}/>
      {/* Halo extérieur */}
      <circle cx="20" cy="19" r="16" stroke="#f97316" strokeWidth="0.8" opacity="0.25"/>
      <circle cx="20" cy="19" r="13" stroke="#f97316" strokeWidth="0.6" opacity="0.15"/>
      {/* Flèche play — très grande */}
      <path d="M10 6 L34 19 L10 32 Z" fill={`url(#pl${u})`} filter={`url(#gw${u})`}/>
      {/* Barres égaliseur bas */}
      <rect x="3"  y="35" width="3" height="4" rx="1.5" fill="#f97316" opacity="0.9"/>
      <rect x="8"  y="33" width="3" height="6" rx="1.5" fill="#fbbf24"/>
      <rect x="13" y="35" width="3" height="4" rx="1.5" fill="#f97316" opacity="0.7"/>
      <rect x="18" y="32" width="3" height="7" rx="1.5" fill="#fbbf24"/>
      <rect x="23" y="34" width="3" height="5" rx="1.5" fill="#f97316" opacity="0.8"/>
      <rect x="28" y="33" width="3" height="6" rx="1.5" fill="#fbbf24"/>
      <rect x="33" y="35" width="3" height="4" rx="1.5" fill="#f97316" opacity="0.6"/>
    </svg>
  ),

  /* ─ RSSDI ─ signal large + éclair discord sur fond ambre brûlé */
  RSSDI: (u) => (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id={`bg${u}`} cx="20%" cy="70%" r="70%">
          <stop offset="0%" stopColor="#281400"/>
          <stop offset="100%" stopColor="#0a0500"/>
        </radialGradient>
        <linearGradient id={`am${u}`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#d97706"/>
          <stop offset="100%" stopColor="#fcd34d"/>
        </linearGradient>
        <filter id={`gw${u}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="b"/>
          <feComposite in="SourceGraphic" in2="b" operator="over"/>
        </filter>
      </defs>
      <rect width="40" height="40" fill={`url(#bg${u})`}/>
      {/* Dot central RSS */}
      <circle cx="5" cy="35" r="4" fill={`url(#am${u})`} filter={`url(#gw${u})`}/>
      {/* Arc 1 */}
      <path d="M5 27 C11 27 17 33 17 35"
        stroke={`url(#am${u})`} strokeWidth="2.5" strokeLinecap="round" fill="none"
        filter={`url(#gw${u})`}/>
      {/* Arc 2 */}
      <path d="M5 19 C16 19 24 27 24 35"
        stroke={`url(#am${u})`} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8"/>
      {/* Arc 3 */}
      <path d="M5 11 C21 11 31 21 31 35"
        stroke={`url(#am${u})`} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.55"/>
      {/* Arc 4 */}
      <path d="M5 3 C26 3 38 15 38 35"
        stroke={`url(#am${u})`} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.25"/>
      {/* Éclair Discord — haut droit */}
      <path d="M29 3 L38 10 L33 12 L38 20 L25 12 L31 10 Z"
        fill="#38bdf8" filter={`url(#gw${u})`}/>
    </svg>
  ),

  /* ─ Bot Discord ─ robot néon sur fond indigo nuit */
  "Bot Discord": (u) => (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id={`bg${u}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#0d0730"/>
          <stop offset="100%" stopColor="#03010e"/>
        </radialGradient>
        <linearGradient id={`cy${u}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee"/>
          <stop offset="100%" stopColor="#06b6d4"/>
        </linearGradient>
        <filter id={`gw${u}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="b"/>
          <feComposite in="SourceGraphic" in2="b" operator="over"/>
        </filter>
      </defs>
      <rect width="40" height="40" fill={`url(#bg${u})`}/>
      {/* Tête robot — grande */}
      <rect x="5" y="9" width="30" height="25" rx="8"
        fill="#0f0a2e" stroke="#4f46e5" strokeWidth="2"/>
      {/* Yeux — grands, néon */}
      <circle cx="14" cy="22" r="5" fill={`url(#cy${u})`} filter={`url(#gw${u})`}/>
      <circle cx="26" cy="22" r="5" fill={`url(#cy${u})`} filter={`url(#gw${u})`}/>
      <circle cx="14" cy="22" r="2.5" fill="#030c1a"/>
      <circle cx="26" cy="22" r="2.5" fill="#030c1a"/>
      <circle cx="15.2" cy="20.8" r="1" fill="white" opacity="0.6"/>
      <circle cx="27.2" cy="20.8" r="1" fill="white" opacity="0.6"/>
      {/* Bouche */}
      <path d="M13 28.5 Q20 32 27 28.5" stroke={`url(#cy${u})`}
        strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* Antennes */}
      <line x1="14" y1="9" x2="10" y2="2" stroke={`url(#cy${u})`}
        strokeWidth="2" strokeLinecap="round" filter={`url(#gw${u})`}/>
      <line x1="26" y1="9" x2="30" y2="2" stroke={`url(#cy${u})`}
        strokeWidth="2" strokeLinecap="round" filter={`url(#gw${u})`}/>
      <circle cx="10" cy="1.5" r="2.5" fill={`url(#cy${u})`} filter={`url(#gw${u})`}/>
      <circle cx="30" cy="1.5" r="2.5" fill={`url(#cy${u})`} filter={`url(#gw${u})`}/>
      {/* Oreilles */}
      <rect x="1"  y="18" width="4" height="8" rx="2" fill="#1e1b4b" stroke="#4f46e5" strokeWidth="1.5"/>
      <rect x="35" y="18" width="4" height="8" rx="2" fill="#1e1b4b" stroke="#4f46e5" strokeWidth="1.5"/>
    </svg>
  ),

  /* ─ Gestionnaire OrdiPlus ─ dashboard teal, grille + checkmark */
  "Gestionnaire OrdiPlus": (u) => (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id={`bg${u}`} cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#011f16"/>
          <stop offset="100%" stopColor="#000b08"/>
        </radialGradient>
        <linearGradient id={`tl${u}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2dd4bf"/>
          <stop offset="100%" stopColor="#0d9488"/>
        </linearGradient>
        <filter id={`gw${u}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.8" result="b"/>
          <feComposite in="SourceGraphic" in2="b" operator="over"/>
        </filter>
      </defs>
      <rect width="40" height="40" fill={`url(#bg${u})`}/>
      {/* 4 tuiles dashboard — chacune grande */}
      <rect x="1"  y="1"  width="17" height="17" rx="2.5" fill="#032a20" stroke="#0d9488" strokeWidth="1.5"/>
      <rect x="22" y="1"  width="17" height="17" rx="2.5" fill="#032a20" stroke="#0d9488" strokeWidth="1.5"/>
      <rect x="1"  y="22" width="17" height="17" rx="2.5" fill="#032a20" stroke="#0d9488" strokeWidth="1.5"/>
      {/* Tuile active — mise en valeur */}
      <rect x="22" y="22" width="17" height="17" rx="2.5"
        fill="#052e24" stroke={`url(#tl${u})`} strokeWidth="2" filter={`url(#gw${u})`}/>
      {/* Contenu tuiles */}
      <line x1="4"  y1="8"  x2="16" y2="8"  stroke="#2dd4bf" strokeWidth="1.4"/>
      <line x1="4"  y1="12" x2="12" y2="12" stroke="#2dd4bf" strokeWidth="1.4" opacity="0.5"/>
      <line x1="25" y1="8"  x2="37" y2="8"  stroke="#2dd4bf" strokeWidth="1.4"/>
      <line x1="25" y1="12" x2="33" y2="12" stroke="#2dd4bf" strokeWidth="1.4" opacity="0.5"/>
      <line x1="4"  y1="30" x2="16" y2="30" stroke="#2dd4bf" strokeWidth="1.4"/>
      <line x1="4"  y1="34" x2="11" y2="34" stroke="#2dd4bf" strokeWidth="1.4" opacity="0.5"/>
      {/* Gros checkmark tuile active */}
      <path d="M25 31 L29 36 L38 25"
        stroke={`url(#tl${u})`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        filter={`url(#gw${u})`}/>
    </svg>
  ),

  /* ─ OrdiPlus Fiches ─ fiche produit or premium */
  "OrdiPlus Fiches": (u) => (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id={`bg${u}`} cx="60%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#1f1500"/>
          <stop offset="100%" stopColor="#090700"/>
        </radialGradient>
        <linearGradient id={`gd${u}`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#b45309"/>
          <stop offset="100%" stopColor="#fcd34d"/>
        </linearGradient>
        <filter id={`gw${u}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="b"/>
          <feComposite in="SourceGraphic" in2="b" operator="over"/>
        </filter>
      </defs>
      <rect width="40" height="40" fill={`url(#bg${u})`}/>
      {/* Ombre document derrière */}
      <rect x="12" y="5" width="24" height="32" rx="2" fill="rgba(180,83,9,0.12)" stroke="rgba(180,83,9,0.3)" strokeWidth="1"/>
      {/* Document principal */}
      <rect x="5" y="3" width="24" height="33" rx="2.5"
        fill="#1c1100" stroke={`url(#gd${u})`} strokeWidth="1.8"/>
      {/* Coin plié */}
      <path d="M21 3 L21 11 L29 11 L21 3 Z" fill="#2d1c00" stroke={`url(#gd${u})`} strokeWidth="1.2"/>
      {/* Titre */}
      <rect x="9"  y="14" width="16" height="2.5" rx="1.2" fill={`url(#gd${u})`} opacity="0.95"
        filter={`url(#gw${u})`}/>
      {/* Lignes specs */}
      <rect x="9"  y="19" width="14" height="1.8" rx="0.9" fill={`url(#gd${u})`} opacity="0.65"/>
      <rect x="9"  y="22.5" width="16" height="1.8" rx="0.9" fill={`url(#gd${u})`} opacity="0.5"/>
      <rect x="9"  y="26" width="11" height="1.8" rx="0.9" fill={`url(#gd${u})`} opacity="0.4"/>
      <rect x="9"  y="29.5" width="13" height="1.8" rx="0.9" fill={`url(#gd${u})`} opacity="0.3"/>
      {/* Badge prix */}
      <rect x="8"  y="33" width="20" height="4" rx="2"
        fill="rgba(252,211,77,0.18)" stroke={`url(#gd${u})`} strokeWidth="1.2"
        filter={`url(#gw${u})`}/>
      {/* Étoile décorative en haut à droite */}
      <path d="M34 3 L35.2 6.5 L38.5 6.5 L36 8.5 L37 12 L34 10 L31 12 L32 8.5 L29.5 6.5 L32.8 6.5 Z"
        fill={`url(#gd${u})`} filter={`url(#gw${u})`}/>
    </svg>
  ),
};

/* Fallback lettre */
function Fallback({ name, u }: { name: string; u: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id={`bg${u}`} cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#1a0e00"/>
          <stop offset="100%" stopColor="#070707"/>
        </radialGradient>
      </defs>
      <rect width="40" height="40" fill={`url(#bg${u})`}/>
      <text x="20" y="27" textAnchor="middle" fill="#f97316"
        fontSize="18" fontWeight="bold" fontFamily="monospace">
        {name.charAt(0).toUpperCase()}
      </text>
    </svg>
  );
}

export default function ProjectIcon({
  name,
  className = "w-12 h-12",
}: {
  name: string;
  className?: string;
}) {
  const real  = REAL_LOGOS[name];
  const svgFn = ICONS[name];
  const uid   = name.replace(/[^a-z0-9]/gi, "").toLowerCase();

  return (
    <div
      className={`${className} rounded-xl flex-shrink-0 overflow-hidden`}
      style={{
        background: "linear-gradient(135deg, #1a0e00 0%, #0d0d0d 100%)",
        border: "1px solid rgba(249,115,22,0.2)",
      }}
    >
      {real ? (
        <img
          src={real.src}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: real.pos ?? "center",
            display: "block",
          }}
        />
      ) : svgFn ? (
        svgFn(uid)
      ) : (
        <Fallback name={name} u={uid}/>
      )}
    </div>
  );
}
