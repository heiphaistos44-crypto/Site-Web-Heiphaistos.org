"use client";

/* Real image logos */
const REAL_LOGOS: Record<string, string> = {
  Nitrite:  "/icons/nitrite.ico",
  Plexit:   "/icons/plexit.png",
  TutoInfo: "/icons/tutoinfo.png",
};

/* ─── SVG icon library — fire + electric aesthetic ─── */

function SvgWrap({ children, id }: { children: React.ReactNode; id: string }) {
  const glowId   = `glow-${id}`;
  const fireId   = `fire-${id}`;
  const elecId   = `elec-${id}`;
  const bgId     = `bg-${id}`;
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id={bgId} cx="50%" cy="50%" r="55%">
          <stop offset="0%"   stopColor="#1e0a00"/>
          <stop offset="100%" stopColor="#070707"/>
        </radialGradient>
        <linearGradient id={fireId} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%"   stopColor="#b91c1c"/>
          <stop offset="45%"  stopColor="#f97316"/>
          <stop offset="100%" stopColor="#fbbf24"/>
        </linearGradient>
        <linearGradient id={elecId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#38bdf8"/>
          <stop offset="100%" stopColor="#00e0ff"/>
        </linearGradient>
        <filter id={glowId} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.8" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>
      <rect width="40" height="40" fill={`url(#${bgId})`}/>
      {children}
    </svg>
  );
}

const SVGS: Record<string, (id: string) => React.ReactNode> = {

  GhostHandDesk: (id) => (
    <SvgWrap id={id}>
      {/* Monitor */}
      <rect x="3" y="5" width="22" height="15" rx="1.5"
        fill="rgba(249,115,22,0.08)" stroke={`url(#fire-${id})`} strokeWidth="1.4"/>
      <rect x="5" y="7" width="18" height="11" rx="1" fill="rgba(249,115,22,0.05)"/>
      {/* Stand */}
      <line x1="14" y1="20" x2="14" y2="23" stroke={`url(#fire-${id})`} strokeWidth="1.4"/>
      <line x1="10" y1="23" x2="18" y2="23" stroke={`url(#fire-${id})`} strokeWidth="1.4"/>
      {/* Cursor lightning bolt */}
      <path d="M22 8 L26 15 L23.5 15 L27 22 L20 14 L23 14 Z"
        fill={`url(#elec-${id})`} filter={`url(#glow-${id})`}/>
      {/* Orange scan line on screen */}
      <line x1="7" y1="12" x2="17" y2="12" stroke={`url(#fire-${id})`} strokeWidth="0.8" opacity="0.6"/>
      <line x1="7" y1="14" x2="14" y2="14" stroke={`url(#fire-${id})`} strokeWidth="0.8" opacity="0.35"/>
    </SvgWrap>
  ),

  PureRemove: (id) => (
    <SvgWrap id={id}>
      {/* Image frame */}
      <rect x="3" y="5" width="24" height="20" rx="2"
        fill="rgba(249,115,22,0.07)" stroke={`url(#fire-${id})`} strokeWidth="1.4"/>
      {/* Transparent checkerboard pattern */}
      <rect x="18" y="16" width="4" height="4" fill="rgba(249,115,22,0.22)"/>
      <rect x="22" y="16" width="4" height="4" fill="rgba(249,115,22,0.06)"/>
      <rect x="18" y="20" width="4" height="4" fill="rgba(249,115,22,0.06)"/>
      <rect x="22" y="20" width="4" height="4" fill="rgba(249,115,22,0.22)"/>
      {/* Magic wand */}
      <line x1="8" y1="22" x2="16" y2="10"
        stroke={`url(#elec-${id})`} strokeWidth="1.8" strokeLinecap="round" filter={`url(#glow-${id})`}/>
      {/* Sparkles */}
      <path d="M8 9 L8.8 7 L9.6 9 L11.6 9.8 L9.6 10.6 L8.8 12.6 L8 10.6 L6 9.8 Z"
        fill={`url(#fire-${id})`} filter={`url(#glow-${id})`}/>
      <circle cx="16" cy="10" r="1.2" fill={`url(#elec-${id})`} filter={`url(#glow-${id})`}/>
    </SvgWrap>
  ),

  UniversalConverter: (id) => (
    <SvgWrap id={id}>
      {/* Outer ring top arc + arrow CW */}
      <path d="M8 18 C8 11 13.5 6 20 6 C26.5 6 32 11 32 18"
        stroke={`url(#fire-${id})`} strokeWidth="1.6" strokeLinecap="round" fill="none"/>
      <path d="M29.5 13 L32 18 L27 17" stroke={`url(#fire-${id})`} strokeWidth="1.4"
        strokeLinejoin="round" fill="none"/>
      {/* Outer ring bottom arc + arrow CCW */}
      <path d="M32 22 C32 29 26.5 34 20 34 C13.5 34 8 29 8 22"
        stroke={`url(#elec-${id})`} strokeWidth="1.6" strokeLinecap="round" fill="none"
        filter={`url(#glow-${id})`}/>
      <path d="M10.5 27 L8 22 L13 23" stroke={`url(#elec-${id})`} strokeWidth="1.4"
        strokeLinejoin="round" fill="none"/>
      {/* Center doc */}
      <rect x="15" y="16" width="10" height="8" rx="1.2"
        fill="rgba(249,115,22,0.12)" stroke={`url(#fire-${id})`} strokeWidth="1"/>
      <line x1="17" y1="19" x2="23" y2="19" stroke={`url(#fire-${id})`} strokeWidth="0.9"/>
      <line x1="17" y1="21.5" x2="21" y2="21.5" stroke={`url(#fire-${id})`} strokeWidth="0.9" opacity="0.5"/>
    </SvgWrap>
  ),

  OmniPlayer: (id) => (
    <SvgWrap id={id}>
      {/* Outer glow ring */}
      <circle cx="20" cy="18" r="13" stroke={`url(#fire-${id})`} strokeWidth="1.4"
        fill="rgba(249,115,22,0.06)" filter={`url(#glow-${id})`}/>
      <circle cx="20" cy="18" r="9" stroke={`url(#fire-${id})`} strokeWidth="0.7" opacity="0.3"/>
      {/* Play arrow */}
      <path d="M16 12 L28 18 L16 24 Z" fill={`url(#fire-${id})`} filter={`url(#glow-${id})`}/>
      {/* Electric accent arc */}
      <path d="M10 28 C12 30 16 31 20 31" stroke={`url(#elec-${id})`} strokeWidth="1.2"
        strokeLinecap="round" fill="none" filter={`url(#glow-${id})`}/>
      {/* Equaliser bars */}
      <rect x="8"  y="32" width="2" height="5" rx="1" fill={`url(#fire-${id})`} opacity="0.9"/>
      <rect x="12" y="30" width="2" height="7" rx="1" fill={`url(#fire-${id})`}/>
      <rect x="16" y="33" width="2" height="4" rx="1" fill={`url(#fire-${id})`} opacity="0.7"/>
      <rect x="20" y="31" width="2" height="6" rx="1" fill={`url(#elec-${id})`}/>
      <rect x="24" y="33" width="2" height="4" rx="1" fill={`url(#fire-${id})`} opacity="0.7"/>
    </SvgWrap>
  ),

  RSSDI: (id) => (
    <SvgWrap id={id}>
      {/* RSS dot */}
      <circle cx="8" cy="32" r="3" fill={`url(#fire-${id})`} filter={`url(#glow-${id})`}/>
      {/* RSS arcs */}
      <path d="M8 24 C14 24 19 29 19 32" stroke={`url(#fire-${id})`}
        strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M8 17 C18 17 26 25 26 32" stroke={`url(#fire-${id})`}
        strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7"/>
      <path d="M8 10 C22 10 32 21 32 32" stroke={`url(#fire-${id})`}
        strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.35"/>
      {/* Discord bolt arrow */}
      <path d="M24 6 L31 10 L27 11.5 L31 17 L24 13 L28 11.5 Z"
        fill={`url(#elec-${id})`} filter={`url(#glow-${id})`}/>
    </SvgWrap>
  ),

  "Bot Discord": (id) => (
    <SvgWrap id={id}>
      {/* Head */}
      <rect x="7" y="10" width="26" height="22" rx="7"
        fill="rgba(249,115,22,0.09)" stroke={`url(#fire-${id})`} strokeWidth="1.4"/>
      {/* Eyes — electric glow */}
      <circle cx="15" cy="20" r="3.5" fill={`url(#elec-${id})`} filter={`url(#glow-${id})`}/>
      <circle cx="25" cy="20" r="3.5" fill={`url(#elec-${id})`} filter={`url(#glow-${id})`}/>
      <circle cx="15" cy="20" r="1.8" fill="#050505"/>
      <circle cx="25" cy="20" r="1.8" fill="#050505"/>
      {/* Mouth */}
      <path d="M14 26 Q20 29 26 26" stroke={`url(#fire-${id})`}
        strokeWidth="1.3" strokeLinecap="round" fill="none"/>
      {/* Antennae */}
      <line x1="15" y1="10" x2="12" y2="5" stroke={`url(#elec-${id})`}
        strokeWidth="1.3" strokeLinecap="round" filter={`url(#glow-${id})`}/>
      <line x1="25" y1="10" x2="28" y2="5" stroke={`url(#elec-${id})`}
        strokeWidth="1.3" strokeLinecap="round" filter={`url(#glow-${id})`}/>
      <circle cx="12" cy="4.5" r="1.8" fill={`url(#elec-${id})`} filter={`url(#glow-${id})`}/>
      <circle cx="28" cy="4.5" r="1.8" fill={`url(#elec-${id})`} filter={`url(#glow-${id})`}/>
    </SvgWrap>
  ),

  "Gestionnaire OrdiPlus": (id) => (
    <SvgWrap id={id}>
      {/* 4 dashboard tiles */}
      <rect x="3"  y="3"  width="15" height="15" rx="2"
        fill="rgba(249,115,22,0.08)" stroke={`url(#fire-${id})`} strokeWidth="1.2"/>
      <rect x="22" y="3"  width="15" height="15" rx="2"
        fill="rgba(249,115,22,0.08)" stroke={`url(#fire-${id})`} strokeWidth="1.2"/>
      <rect x="3"  y="22" width="15" height="15" rx="2"
        fill="rgba(249,115,22,0.08)" stroke={`url(#fire-${id})`} strokeWidth="1.2"/>
      {/* Bottom-right tile highlighted */}
      <rect x="22" y="22" width="15" height="15" rx="2"
        fill="rgba(249,115,22,0.16)" stroke={`url(#fire-${id})`} strokeWidth="1.4"
        filter={`url(#glow-${id})`}/>
      {/* Content in tiles */}
      <line x1="6"  y1="9"  x2="15" y2="9"  stroke={`url(#fire-${id})`} strokeWidth="1.1"/>
      <line x1="6"  y1="12" x2="12" y2="12" stroke={`url(#fire-${id})`} strokeWidth="1.1" opacity="0.5"/>
      <line x1="25" y1="9"  x2="34" y2="9"  stroke={`url(#fire-${id})`} strokeWidth="1.1"/>
      <line x1="25" y1="12" x2="30" y2="12" stroke={`url(#fire-${id})`} strokeWidth="1.1" opacity="0.5"/>
      <line x1="6"  y1="28" x2="15" y2="28" stroke={`url(#fire-${id})`} strokeWidth="1.1"/>
      {/* Checkmark in highlighted tile */}
      <path d="M25 31 L28 35 L36 26" stroke={`url(#elec-${id})`} strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" fill="none" filter={`url(#glow-${id})`}/>
    </SvgWrap>
  ),

  "OrdiPlus Fiches": (id) => (
    <SvgWrap id={id}>
      {/* Document shadow */}
      <rect x="11" y="6" width="22" height="30" rx="2"
        fill="rgba(249,115,22,0.05)" stroke="rgba(249,115,22,0.15)" strokeWidth="1"/>
      {/* Main document */}
      <rect x="7" y="4" width="22" height="30" rx="2"
        fill="rgba(249,115,22,0.09)" stroke={`url(#fire-${id})`} strokeWidth="1.4"/>
      {/* Folded corner */}
      <path d="M21 4 L21 11 L29 11" stroke={`url(#fire-${id})`} strokeWidth="1.2" fill="none"/>
      <path d="M21 4 L29 11" stroke={`url(#fire-${id})`} strokeWidth="1.2"/>
      {/* Content lines */}
      <rect x="11" y="14" width="15" height="2" rx="1" fill={`url(#fire-${id})`} opacity="0.9"/>
      <rect x="11" y="18" width="12" height="1.5" rx="0.75" fill={`url(#fire-${id})`} opacity="0.55"/>
      <rect x="11" y="21" width="14" height="1.5" rx="0.75" fill={`url(#fire-${id})`} opacity="0.55"/>
      <rect x="11" y="24" width="9"  height="1.5" rx="0.75" fill={`url(#fire-${id})`} opacity="0.4"/>
      {/* Electric footer badge */}
      <rect x="10" y="28" width="19" height="4" rx="1.5"
        fill="rgba(56,189,248,0.15)" stroke={`url(#elec-${id})`} strokeWidth="0.9"
        filter={`url(#glow-${id})`}/>
    </SvgWrap>
  ),

  GhostHandDesk_v2: (id) => ( <SvgWrap id={id}><rect width="40" height="40" fill="none"/></SvgWrap> ),
};

/* Fallback: fire monogram */
function FallbackIcon({ name, id }: { name: string; id: string }) {
  const letter = name.charAt(0).toUpperCase();
  return (
    <SvgWrap id={id}>
      <text x="20" y="26" textAnchor="middle" fontSize="18" fontWeight="bold"
        fontFamily="monospace" fill={`url(#fire-${id})`}>{letter}</text>
    </SvgWrap>
  );
}

/* ─── Real image wrapper ─── */
function RealLogo({ src, alt, isBanner }: { src: string; alt: string; isBanner?: boolean }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      style={isBanner ? { objectPosition: "center 30%" } : { objectPosition: "center" }}
    />
  );
}

/* ─── Public component ─── */
export default function ProjectIcon({
  name,
  className = "w-12 h-12",
}: {
  name: string;
  className?: string;
}) {
  const realSrc = REAL_LOGOS[name];
  const svgFn   = SVGS[name];
  const id      = name.replace(/\s+/g, "-").toLowerCase();

  return (
    <div
      className={`${className} rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden`}
      style={{
        background: "linear-gradient(135deg, #1a0e00 0%, #0d0d0d 100%)",
        border: "1px solid rgba(249,115,22,0.22)",
        boxShadow: "0 0 12px rgba(249,115,22,0.08) inset",
      }}
    >
      {realSrc ? (
        <RealLogo src={realSrc} alt={name} isBanner={name === "TutoInfo"} />
      ) : svgFn ? (
        svgFn(id)
      ) : (
        <FallbackIcon name={name} id={id} />
      )}
    </div>
  );
}
