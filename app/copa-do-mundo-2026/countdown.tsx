"use client";

import { useEffect, useState } from "react";

type Remaining = { days: number; hours: number; minutes: number; seconds: number };

function compute(targetMs: number): Remaining {
  const diff = Math.max(0, targetMs - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

export function Countdown({ targetIso, label }: { targetIso: string; label?: string }) {
  const targetMs = new Date(targetIso).getTime();
  const [mounted, setMounted] = useState(false);
  const [remaining, setRemaining] = useState<Remaining>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    setRemaining(compute(targetMs));
    const interval = setInterval(() => setRemaining(compute(targetMs)), 1000);
    return () => clearInterval(interval);
  }, [targetMs]);

  const isLive = mounted && remaining.days === 0 && remaining.hours === 0 && remaining.minutes === 0 && remaining.seconds === 0;

  return (
    <div className="mt-6 inline-flex flex-col gap-2">
      {label ? (
        <span className="text-xs uppercase tracking-wide font-semibold text-text-dim">{label}</span>
      ) : null}
      {isLive ? (
        <div className="font-display text-2xl font-extrabold text-success">A Copa do Mundo começou ⚽</div>
      ) : (
        <div className="flex items-center gap-2 sm:gap-3" aria-live="polite">
          <Slot value={mounted ? remaining.days : null} label="dias" />
          <Sep />
          <Slot value={mounted ? remaining.hours : null} label="hrs" />
          <Sep />
          <Slot value={mounted ? remaining.minutes : null} label="min" />
          <Sep />
          <Slot value={mounted ? remaining.seconds : null} label="seg" />
        </div>
      )}
    </div>
  );
}

function Slot({ value, label }: { value: number | null; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[56px] sm:min-w-[64px] rounded-lg border border-brand/40 bg-bg-elevated/70 px-2 py-2">
      <span className="font-display text-2xl sm:text-3xl font-extrabold text-text tabular-nums" suppressHydrationWarning>
        {value === null ? "--" : String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] uppercase tracking-wide font-semibold text-text-dim">{label}</span>
    </div>
  );
}

function Sep() {
  return <span className="font-display text-xl sm:text-2xl font-extrabold text-brand">:</span>;
}
