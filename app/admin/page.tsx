"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Flame } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/admin/dashboard");
  }, [router]);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "#050505" }}
    >
      <div className="flex items-center gap-2 opacity-50">
        <Flame className="w-6 h-6 text-orange-500" />
        <span
          className="font-heading tracking-[0.3em] text-2xl"
          style={{ color: "#e5e5e5", fontFamily: "var(--font-bebas)" }}
        >
          ADMIN
        </span>
      </div>
    </div>
  );
}
