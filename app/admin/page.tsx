"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Flame, Lock, User, ShieldAlert } from "lucide-react";

const L_HASH = "ae1f5b4abee034c79f0b49dcbdeecc2efc4353460c838b4820b96ba728d9ba27";
const P_HASH = "dbd90653b7825d0f6f7ec11dedf1f2e8a083635af452b0aa88c32d1efcbffa32";

const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000; // 15 min
const FAIL_DELAY_MS = 1500;
const RL_KEY = "hph_admin_rl";

interface RateLimit {
  count: number;
  lockUntil: number;
}

function getRateLimit(): RateLimit {
  try {
    const raw = localStorage.getItem(RL_KEY);
    return raw ? JSON.parse(raw) : { count: 0, lockUntil: 0 };
  } catch {
    return { count: 0, lockUntil: 0 };
  }
}

function setRateLimit(rl: RateLimit) {
  localStorage.setItem(RL_KEY, JSON.stringify(rl));
}

async function sha256(str: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function formatRemaining(ms: number): string {
  const m = Math.ceil(ms / 60000);
  return m <= 1 ? "moins d'1 min" : `${m} min`;
}

export default function AdminLogin() {
  const router = useRouter();
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [locked, setLocked] = useState(false);
  const [lockRemaining, setLockRemaining] = useState("");

  useEffect(() => {
    const rl = getRateLimit();
    if (rl.lockUntil > Date.now()) {
      setLocked(true);
      setLockRemaining(formatRemaining(rl.lockUntil - Date.now()));
      const interval = setInterval(() => {
        const remaining = getRateLimit().lockUntil - Date.now();
        if (remaining <= 0) {
          setLocked(false);
          setLockRemaining("");
          clearInterval(interval);
        } else {
          setLockRemaining(formatRemaining(remaining));
        }
      }, 10000);
      return () => clearInterval(interval);
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const rl = getRateLimit();
    if (rl.lockUntil > Date.now()) return;

    setLoading(true);
    setError("");

    const [lh, ph] = await Promise.all([sha256(login), sha256(pass)]);

    if (lh === L_HASH && ph === P_HASH) {
      localStorage.removeItem(RL_KEY);
      sessionStorage.setItem("hph_admin_auth", "1");
      router.push("/admin/dashboard");
      return;
    }

    // Failure: artificial delay + increment counter
    await new Promise((r) => setTimeout(r, FAIL_DELAY_MS));

    const newCount = rl.count + 1;
    const lockUntil = newCount >= MAX_ATTEMPTS ? Date.now() + LOCKOUT_MS : rl.lockUntil;
    setRateLimit({ count: newCount, lockUntil });

    if (newCount >= MAX_ATTEMPTS) {
      setLocked(true);
      setLockRemaining(formatRemaining(LOCKOUT_MS));
      setError(`Trop de tentatives. Compte bloqué ${formatRemaining(LOCKOUT_MS)}.`);
    } else {
      const remaining = MAX_ATTEMPTS - newCount;
      setError(`Identifiants incorrects. ${remaining} tentative${remaining > 1 ? "s" : ""} restante${remaining > 1 ? "s" : ""}.`);
    }

    setLoading(false);
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "#050505" }}
    >
      <div className="w-full max-w-sm">
        <div className="flex items-center justify-center gap-2 mb-10">
          <Flame className="w-6 h-6 text-orange-500" />
          <span
            className="font-heading tracking-[0.3em] text-2xl"
            style={{ color: "#e5e5e5", fontFamily: "var(--font-bebas)" }}
          >
            ADMIN
          </span>
        </div>

        {locked ? (
          <div className="bg-[#111111] border border-red-500/30 rounded-xl p-8 flex flex-col items-center gap-4 text-center">
            <ShieldAlert className="w-10 h-10 text-red-400" />
            <p className="font-sans text-sm text-red-400 font-semibold">Accès temporairement bloqué</p>
            <p className="font-sans text-xs text-[#666]">
              Trop de tentatives incorrectes. Réessayez dans{" "}
              <span className="text-forge-text font-semibold">{lockRemaining}</span>.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[#111111] border border-[#1e1e1e] rounded-xl p-8 flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1.5">
              <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#666]">
                Identifiant
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#444]" />
                <input
                  type="text"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  className="w-full bg-[#0d0d0d] border border-[#1e1e1e] rounded-lg pl-9 pr-4 py-3 font-sans text-sm text-[#e5e5e5] outline-none focus:border-orange-500/60 transition-colors"
                  autoComplete="username"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#666]">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#444]" />
                <input
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  className="w-full bg-[#0d0d0d] border border-[#1e1e1e] rounded-lg pl-9 pr-4 py-3 font-sans text-sm text-[#e5e5e5] outline-none focus:border-orange-500/60 transition-colors"
                  autoComplete="current-password"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            {error && (
              <p className="font-sans text-xs text-red-400 text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 disabled:opacity-50 text-white font-sans font-semibold text-xs uppercase tracking-[0.2em] rounded-lg transition-all duration-200"
            >
              {loading ? "Vérification..." : "Connexion"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
