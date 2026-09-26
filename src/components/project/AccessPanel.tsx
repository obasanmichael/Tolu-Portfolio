"use client";

import { useState } from "react";
import { AlertTriangle, Check, Copy, ExternalLink } from "lucide-react";
import { type ProjectDetail } from "@/types";

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard can be blocked (e.g. insecure context); the value stays visible to copy by hand.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label}`}
      className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-border-hover hover:text-accent"
    >
      {copied ? <Check size={13} className="text-accent" /> : <Copy size={13} />}
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied" : ""}
      </span>
    </button>
  );
}

interface AccessPanelProps {
  liveUrl?: string;
  access?: ProjectDetail["access"];
}

export function AccessPanel({ liveUrl, access }: AccessPanelProps) {
  if (!liveUrl && !access) return null;

  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-bg shadow-[0_0_24px_rgba(155,239,143,0.2)] transition-all duration-200 hover:bg-[#b8f5ae] hover:shadow-[0_0_36px_rgba(155,239,143,0.35)]"
        >
          Open the live app
          <ExternalLink size={14} />
        </a>
      )}

      {access?.notice && (
        <p className="mt-5 flex items-start gap-2.5 rounded-xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-sm leading-relaxed text-amber-200">
          <AlertTriangle size={15} className="mt-0.5 shrink-0 text-amber-400" />
          {access.notice}
        </p>
      )}

      {access?.credentials && (
        <div className="mt-5">
          <p className="eyebrow mb-3 text-accent/70">Demo login</p>
          <ul className="space-y-2">
            {access.credentials.map((c) => (
              <li
                key={c.email}
                className="grid gap-2 rounded-xl border border-border bg-surface-alt p-3 sm:grid-cols-[auto_1fr_1fr] sm:items-center sm:gap-4"
              >
                <span className="text-xs font-medium text-accent">{c.role}</span>
                <span className="flex min-w-0 items-center justify-between gap-2">
                  <code className="truncate font-mono text-xs text-text/90">{c.email}</code>
                  <CopyButton value={c.email} label={`${c.role} email`} />
                </span>
                <span className="flex min-w-0 items-center justify-between gap-2">
                  <code className="truncate font-mono text-xs text-text/90">{c.password}</code>
                  <CopyButton value={c.password} label={`${c.role} password`} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
