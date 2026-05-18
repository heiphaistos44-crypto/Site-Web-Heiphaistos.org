"use client";

const O = "#f97316";   // orange primary
const A = "#fbbf24";   // amber accent
const F = "rgba(249,115,22,0.1)"; // orange fill subtle

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {children}
    </svg>
  );
}

const ICONS: Record<string, React.ReactNode> = {
  GhostHandDesk: (
    <Icon>
      <rect x="3" y="5" width="24" height="17" rx="2" stroke={O} strokeWidth="1.5" fill={F}/>
      <line x1="15" y1="22" x2="15" y2="26" stroke={O} strokeWidth="1.5"/>
      <line x1="10" y1="26" x2="20" y2="26" stroke={O} strokeWidth="1.5"/>
      <rect x="5" y="7" width="20" height="13" rx="1" fill="rgba(249,115,22,0.06)"/>
      <path d="M23 21 L31 13 L31 25 L28 22.5 L27 29 L24 28 Z" fill={A} stroke={O} strokeWidth="0.5"/>
    </Icon>
  ),

  PureRemove: (
    <Icon>
      <rect x="4" y="5" width="26" height="22" rx="2" stroke={O} strokeWidth="1.5" fill={F}/>
      <rect x="19" y="17" width="5" height="5" fill="rgba(249,115,22,0.18)"/>
      <rect x="24" y="17" width="5" height="5" fill="rgba(249,115,22,0.06)"/>
      <rect x="19" y="22" width="5" height="5" fill="rgba(249,115,22,0.06)"/>
      <rect x="24" y="22" width="5" height="5" fill="rgba(249,115,22,0.18)"/>
      <path d="M9 11 L10.2 8 L11.4 11 L14.4 12.2 L11.4 13.4 L10.2 16.4 L9 13.4 L6 12.2 Z" fill={A}/>
      <circle cx="6" cy="23" r="1" fill={O} opacity="0.6"/>
    </Icon>
  ),

  UniversalConverter: (
    <Icon>
      <path d="M8 14 C8 10 12 7 18 7 C24 7 28 10 28 14" stroke={O} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M26 10 L28 14 L24 14" stroke={A} strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
      <path d="M32 26 C32 30 28 33 22 33 C16 33 12 30 12 26" stroke={O} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M14 30 L12 26 L16 26" stroke={A} strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
      <rect x="14" y="17" width="8" height="6" rx="1" fill={F} stroke={O} strokeWidth="1"/>
      <line x1="16" y1="19.5" x2="20" y2="19.5" stroke={O} strokeWidth="1"/>
      <line x1="16" y1="21.5" x2="19" y2="21.5" stroke={O} strokeWidth="1" opacity="0.5"/>
    </Icon>
  ),

  OmniPlayer: (
    <Icon>
      <circle cx="20" cy="20" r="15" stroke={O} strokeWidth="1.5" fill={F}/>
      <circle cx="20" cy="20" r="10" stroke={O} strokeWidth="0.8" opacity="0.3"/>
      <path d="M16 14 L28 20 L16 26 Z" fill={A} stroke={O} strokeWidth="0.8"/>
      <line x1="9" y1="34" x2="12" y2="30" stroke={O} strokeWidth="1" opacity="0.5"/>
      <line x1="13" y1="35" x2="15" y2="31" stroke={O} strokeWidth="1" opacity="0.7"/>
      <line x1="17" y1="36" x2="18" y2="32" stroke={O} strokeWidth="1" opacity="0.9"/>
    </Icon>
  ),

  TutoInfo: (
    <Icon>
      <rect x="6" y="8" width="28" height="20" rx="2" stroke={O} strokeWidth="1.5" fill={F}/>
      <rect x="9" y="11" width="22" height="14" rx="1" fill="rgba(249,115,22,0.06)"/>
      <path d="M16 16 L24 18 L16 20 Z" fill={A}/>
      <line x1="10" y1="30" x2="10" y2="34" stroke={O} strokeWidth="1.5"/>
      <line x1="30" y1="30" x2="30" y2="34" stroke={O} strokeWidth="1.5"/>
      <line x1="8" y1="34" x2="32" y2="34" stroke={O} strokeWidth="1.5"/>
      <line x1="20" y1="28" x2="20" y2="30" stroke={O} strokeWidth="1.5"/>
    </Icon>
  ),

  RSSDI: (
    <Icon>
      <circle cx="9" cy="31" r="3" fill={O}/>
      <path d="M9 23 C15 23 19 27 19 31" stroke={O} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M9 15 C19 15 27 23 27 31" stroke={O} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M9 8 C23 8 34 19 34 31" stroke={O} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
      <path d="M24 8 C24 8 30 12 30 18 C30 22 26 26 22 26 C22 26 28 24 28 18 C28 14 24 10 24 8 Z" fill={A} opacity="0.8"/>
    </Icon>
  ),

  "Bot Discord": (
    <Icon>
      <rect x="8" y="10" width="24" height="20" rx="6" stroke={O} strokeWidth="1.5" fill={F}/>
      <circle cx="15" cy="19" r="3" fill={A}/>
      <circle cx="25" cy="19" r="3" fill={A}/>
      <circle cx="15" cy="19" r="1.5" fill={O}/>
      <circle cx="25" cy="19" r="1.5" fill={O}/>
      <path d="M15 25 Q20 27 25 25" stroke={O} strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      <line x1="16" y1="10" x2="13" y2="6" stroke={O} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="24" y1="10" x2="27" y2="6" stroke={O} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="13" cy="5" r="1.5" fill={A}/>
      <circle cx="27" cy="5" r="1.5" fill={A}/>
    </Icon>
  ),

  "Gestionnaire OrdiPlus": (
    <Icon>
      <rect x="4" y="4" width="14" height="14" rx="2" stroke={O} strokeWidth="1.5" fill={F}/>
      <rect x="22" y="4" width="14" height="14" rx="2" stroke={O} strokeWidth="1.5" fill={F}/>
      <rect x="4" y="22" width="14" height="14" rx="2" stroke={O} strokeWidth="1.5" fill={F}/>
      <rect x="22" y="22" width="14" height="14" rx="2" stroke={A} strokeWidth="1.5" fill="rgba(251,191,36,0.1)"/>
      <line x1="7" y1="9" x2="15" y2="9" stroke={O} strokeWidth="1" opacity="0.7"/>
      <line x1="7" y1="12" x2="13" y2="12" stroke={O} strokeWidth="1" opacity="0.4"/>
      <line x1="25" y1="9" x2="33" y2="9" stroke={O} strokeWidth="1" opacity="0.7"/>
      <line x1="25" y1="12" x2="31" y2="12" stroke={O} strokeWidth="1" opacity="0.4"/>
      <line x1="7" y1="27" x2="15" y2="27" stroke={O} strokeWidth="1" opacity="0.7"/>
      <path d="M26 31 L29 34 L35 27" stroke={A} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </Icon>
  ),

  "OrdiPlus Fiches": (
    <Icon>
      <rect x="8" y="4" width="22" height="30" rx="2" stroke={O} strokeWidth="1.5" fill={F}/>
      <path d="M22 4 L22 10 L30 10" stroke={O} strokeWidth="1.5" fill="none"/>
      <path d="M22 4 L30 10" stroke={O} strokeWidth="1.5"/>
      <rect x="12" y="13" width="16" height="2" rx="1" fill={O} opacity="0.8"/>
      <rect x="12" y="17" width="13" height="1.5" rx="0.75" fill={O} opacity="0.5"/>
      <rect x="12" y="20.5" width="15" height="1.5" rx="0.75" fill={O} opacity="0.5"/>
      <rect x="12" y="24" width="10" height="1.5" rx="0.75" fill={O} opacity="0.5"/>
      <rect x="11" y="28" width="18" height="3" rx="1" fill={A} opacity="0.3"/>
    </Icon>
  ),

  Nitrite: (
    <Icon>
      <rect x="4" y="7" width="28" height="20" rx="2" stroke={O} strokeWidth="1.5" fill={F}/>
      <rect x="7" y="10" width="22" height="14" rx="1" fill="rgba(249,115,22,0.06)"/>
      <line x1="16" y1="27" x2="16" y2="31" stroke={O} strokeWidth="1.5"/>
      <line x1="11" y1="31" x2="21" y2="31" stroke={O} strokeWidth="1.5"/>
      <path d="M14 14 C14 14 16 13 18 15 C20 17 22 16 24 17" stroke={A} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <circle cx="14" cy="14" r="1.5" fill={O}/>
      <circle cx="24" cy="17" r="1.5" fill={A}/>
      <line x1="10" y1="19" x2="14" y2="19" stroke={O} strokeWidth="1" opacity="0.5"/>
      <line x1="16" y1="19" x2="22" y2="19" stroke={O} strokeWidth="1" opacity="0.5"/>
      <line x1="24" y1="19" x2="27" y2="19" stroke={O} strokeWidth="1" opacity="0.5"/>
    </Icon>
  ),

  Plexit: (
    <Icon>
      <circle cx="20" cy="20" r="16" stroke={O} strokeWidth="1.5" fill={F}/>
      <circle cx="20" cy="20" r="11" stroke={O} strokeWidth="0.8" opacity="0.25"/>
      <path d="M14 14 L14 26 L14 20 L22 14 L22 26" stroke={A} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M22 16 C26 16 26 24 22 24" stroke={A} strokeWidth="2" strokeLinecap="round" fill="none"/>
      <circle cx="30" cy="12" r="3" fill={O} opacity="0.4"/>
      <circle cx="10" cy="28" r="2" fill={O} opacity="0.3"/>
    </Icon>
  ),
};

const DEFAULT_ICON = (name: string) => (
  <Icon>
    <rect x="5" y="5" width="30" height="30" rx="4" stroke={O} strokeWidth="1.5" fill={F}/>
    <text x="20" y="25" textAnchor="middle" fill={A} fontSize="14" fontWeight="bold" fontFamily="monospace">
      {name.charAt(0).toUpperCase()}
    </text>
  </Icon>
);

export default function ProjectIcon({ name, className = "w-12 h-12" }: { name: string; className?: string }) {
  const icon = ICONS[name] ?? DEFAULT_ICON(name);

  return (
    <div
      className={`${className} rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden`}
      style={{
        background: "linear-gradient(135deg, #1a0e00 0%, #0d0d0d 100%)",
        border: "1px solid rgba(249,115,22,0.22)",
        boxShadow: "0 0 10px rgba(249,115,22,0.08) inset",
      }}
    >
      {icon}
    </div>
  );
}
