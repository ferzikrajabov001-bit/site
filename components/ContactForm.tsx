"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Check, ArrowRight } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

type Status = "idle" | "submitting" | "success";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Lead-capture form. Intentionally decoupled from any transport so a future
 * CRM/API integration only needs to replace the `submit` implementation.
 */
async function submit(data: FormState): Promise<void> {
  // Placeholder for future CRM / API integration. `data` is where the
  // outbound payload will be sent once a backend endpoint is available.
  if (process.env.NODE_ENV === "development") {
    console.debug("[HMS] contact form submission", data);
  }
  await new Promise((resolve) => setTimeout(resolve, 900));
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(data: FormState): FieldErrors {
    const next: FieldErrors = {};
    if (data.name.trim().length < 2) next.name = "Please enter your name.";
    if (!EMAIL_RE.test(data.email)) next.email = "Enter a valid email address.";
    if (data.message.trim().length < 10)
      next.message = "Please add a few words about your enquiry.";
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    await submit(form);
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  }

  const fieldClass = (hasError?: boolean) =>
    cn(
      "w-full rounded-2xl border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-muted/70 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50",
      hasError ? "border-red-400/60" : "border-white/10 focus:border-accent/50",
    );

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-start gap-4 rounded-3xl border border-emerald-400/30 bg-emerald-400/[0.06] p-8"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/40 bg-emerald-400/10 text-emerald-300">
            <Check className="h-6 w-6" />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-white">
              Thank you — message received
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Our team will be in touch shortly to arrange your consultation.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="text-sm font-medium text-accent-soft transition-colors hover:text-white"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-white/90">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={fieldClass(!!errors.name)}
              placeholder="Your full name"
              aria-invalid={!!errors.name}
            />
            {errors.name ? (
              <p className="text-xs text-red-400">{errors.name}</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-white/90">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={fieldClass(!!errors.email)}
              placeholder="you@company.com"
              aria-invalid={!!errors.email}
            />
            {errors.email ? (
              <p className="text-xs text-red-400">{errors.email}</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-white/90">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={cn(fieldClass(!!errors.message), "resize-none")}
              placeholder="Tell us about your hotel and what you'd like to achieve."
              aria-invalid={!!errors.message}
            />
            {errors.message ? (
              <p className="text-xs text-red-400">{errors.message}</p>
            ) : null}
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={status === "submitting"}
            className="mt-1"
          >
            {status === "submitting" ? "Sending…" : "Book consultation"}
            {status !== "submitting" ? <ArrowRight className="h-4 w-4" /> : null}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
