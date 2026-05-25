"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "motion/react";
import { MessageCircle, Send, CheckCircle } from "lucide-react";
import { SocialLink } from "@/components/ui/SocialLink";
import { Section, SectionHeading } from "@/components/layout/Section";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

const quickLinks = [
  { label: "GitHub", href: "https://github.com/obasanmichael", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tolu-obasan", icon: "linkedin" },
  { label: "X / Twitter", href: "https://x.com/MichaelObasan", icon: "twitter" },
  { label: "Email", href: "mailto:hello@tolulopeobasan.dev", icon: "mail" },
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    const url = createWhatsAppUrl({
      name: data.name,
      email: data.email,
      message: data.message,
    });
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
        >
          <SectionHeading
            label="Contact"
            title="Have a role, product, or project in mind?"
          />
          <p className="text-base leading-relaxed text-muted">
            Send a message. I respond promptly.
          </p>

          <div className="mt-8 flex flex-col gap-3.5">
            {quickLinks.map(({ label, href, icon }) => (
              <SocialLink
                key={label}
                label={label}
                href={href}
                icon={icon}
                showLabel
              />
            ))}
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
        >
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-10 text-center">
              <CheckCircle className="mb-4 text-emerald-400" size={40} />
              <h3
                className="mb-2 text-lg font-semibold text-text"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Message sent!
              </h3>
              <p className="text-sm text-muted">
                WhatsApp opened with your message. I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
              noValidate
              aria-label="Contact form"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-text"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  {...register("name")}
                  className={cn(
                    "w-full rounded-xl border bg-surface px-4 py-3 text-sm text-text placeholder:text-muted/50 outline-none transition-all duration-200",
                    "focus:border-accent focus:ring-1 focus:ring-accent",
                    errors.name ? "border-red-500/60" : "border-border"
                  )}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-text"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="your@email.com"
                  {...register("email")}
                  className={cn(
                    "w-full rounded-xl border bg-surface px-4 py-3 text-sm text-text placeholder:text-muted/50 outline-none transition-all duration-200",
                    "focus:border-accent focus:ring-1 focus:ring-accent",
                    errors.email ? "border-red-500/60" : "border-border"
                  )}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-text"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="What would you like to discuss?"
                  {...register("message")}
                  className={cn(
                    "w-full resize-none rounded-xl border bg-surface px-4 py-3 text-sm text-text placeholder:text-muted/50 outline-none transition-all duration-200",
                    "focus:border-accent focus:ring-1 focus:ring-accent",
                    errors.message ? "border-red-500/60" : "border-border"
                  )}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3 text-sm font-semibold text-bg shadow-[0_0_24px_rgba(155,239,143,0.2)] transition-all duration-200 hover:bg-[#b8f5ae] hover:shadow-[0_0_36px_rgba(155,239,143,0.35)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <MessageCircle size={15} />
                Send via WhatsApp
                <Send size={13} />
              </button>

              <p className="text-center text-xs text-muted">
                This will open WhatsApp with your message pre-filled.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
