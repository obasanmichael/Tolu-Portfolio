"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle, CheckCircle } from "lucide-react";
import { SocialLink } from "@/components/ui/SocialLink";
import { Section } from "@/components/layout/Section";
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
  { label: "Email", href: "mailto:obasantolu@gmail.com", icon: "mail" },
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

  const field =
    "w-full rounded-[10px] border-2 bg-paper px-4 py-3.5 text-lg text-ink placeholder:text-graphite/70 outline-none transition-colors focus:border-signal";

  return (
    <Section id="contact">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="type-title max-w-[12ch]">Have a role or a project in mind?</h2>
          <p className="type-lead mt-6 max-w-[40ch] text-graphite">
            Tell me what you&apos;re working on. I reply within a day.
          </p>
          <a
            href="mailto:obasantolu@gmail.com"
            className="mt-10 inline-block font-display text-xl font-semibold tracking-tight underline decoration-rule decoration-2 underline-offset-8 transition-colors hover:decoration-signal sm:text-2xl"
          >
            obasantolu@gmail.com
          </a>
          <div className="mt-8 flex flex-col">
            {quickLinks
              .filter((l) => l.icon !== "mail")
              .map(({ label, href, icon }) => (
                <SocialLink key={label} label={label} href={href} icon={icon} showLabel />
              ))}
          </div>
        </div>

        <div>
          {submitted ? (
            <div role="status" className="flex h-full flex-col justify-center rounded-[14px] bg-surface p-10">
              <CheckCircle className="mb-5 text-signal" size={36} aria-hidden="true" />
              <p className="font-display text-2xl font-semibold tracking-tight">WhatsApp is open with your message.</p>
              <p className="mt-3 text-lg text-graphite">Send it there and I&apos;ll get back to you.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate aria-label="Contact form">
              <div>
                <label htmlFor="name" className="mb-2 block text-base font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  {...register("name")}
                  className={cn(field, errors.name ? "border-red-600" : "border-rule")}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="mt-2 text-base text-red-600 dark:text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-base font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...register("email")}
                  className={cn(field, errors.email ? "border-red-600" : "border-rule")}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="mt-2 text-base text-red-600 dark:text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-base font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  className={cn(field, "resize-none", errors.message ? "border-red-600" : "border-rule")}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="mt-2 text-base text-red-600 dark:text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-13 w-full items-center justify-center gap-2.5 rounded-full bg-ink text-lg font-medium text-paper transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <MessageCircle size={19} aria-hidden="true" />
                Send on WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
