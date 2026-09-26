"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Info } from "lucide-react";
import { Disclosure } from "@/components/ui/Disclosure";
import { type ProjectDetail } from "@/types";

function CopyField({ label, value }: { label: string; value: string }) {
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
    <div className="flex items-center justify-between gap-4 border-t border-rule py-3">
      <div className="min-w-0">
        <p className="text-sm text-graphite">{label}</p>
        <p className="truncate text-lg font-medium">{value}</p>
      </div>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy ${label.toLowerCase()}`}
        className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border-2 border-rule px-4 text-base font-medium transition-colors hover:border-ink"
      >
        {copied ? <Check size={16} className="text-signal" aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
        {copied ? "Copied" : "Copy"}
        <span className="sr-only" aria-live="polite">
          {copied ? `${label} copied` : ""}
        </span>
      </button>
    </div>
  );
}

interface AccessPanelProps {
  liveUrl?: string;
  access?: ProjectDetail["access"];
}

export function AccessPanel({ liveUrl, access }: AccessPanelProps) {
  return (
    <div className="max-w-2xl">
      {access?.notice && (
        <p className="mb-8 flex gap-3 border-l-4 border-ink pl-5 text-base leading-relaxed">
          <Info size={20} className="mt-1 shrink-0" aria-hidden="true" />
          {access.notice}
        </p>
      )}

      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-13 items-center gap-2 rounded-full bg-ink px-8 text-lg font-medium text-paper transition-opacity hover:opacity-85"
        >
          Open the live app
          <ArrowUpRight size={19} aria-hidden="true" />
        </a>
      )}

      {access?.credentials && (
        <Disclosure
          className="mt-8 border-y border-rule"
          summaryClassName="py-4"
          summary={<span className="text-lg font-medium">Show the demo login</span>}
        >
          <div className="pb-5">
            {access.credentials.map((c) => (
              <div key={c.email}>
                <p className="pb-2 pt-1 text-base text-graphite">{c.role} account, shared with visitors</p>
                <CopyField label="Email" value={c.email} />
                <CopyField label="Password" value={c.password} />
              </div>
            ))}
          </div>
        </Disclosure>
      )}
    </div>
  );
}
