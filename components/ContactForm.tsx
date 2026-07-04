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
    if (data.name.trim().length < 2) next.name = "Пожалуйста, укажите имя.";
    if (!EMAIL_RE.test(data.email)) next.email = "Введите корректный email.";
    if (data.message.trim().length < 10)
      next.message = "Добавьте пару слов о вашем запросе.";
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
      "w-full rounded-sm border bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-muted/70 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40",
      hasError ? "border-red-500/60" : "border-hairline focus:border-accent/50",
    );

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-start gap-4 rounded-sm border border-emerald-700/25 bg-emerald-700/[0.05] p-8"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-sm border border-emerald-700/30 bg-emerald-700/10 text-emerald-800">
            <Check className="h-6 w-6" />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-ink-900">
              Спасибо — сообщение получено
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Наша команда свяжется с вами в ближайшее время, чтобы
              договориться о консультации.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="text-sm font-medium text-accent transition-colors hover:text-ink-900"
          >
            Отправить ещё одно сообщение
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
            <label htmlFor="name" className="text-sm font-medium text-ink-900/90">
              Имя
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={fieldClass(!!errors.name)}
              placeholder="Ваше имя и фамилия"
              aria-invalid={!!errors.name}
            />
            {errors.name ? (
              <p className="text-xs text-red-600">{errors.name}</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-ink-900/90">
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
              <p className="text-xs text-red-600">{errors.email}</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-ink-900/90">
              Сообщение
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={cn(fieldClass(!!errors.message), "resize-none")}
              placeholder="Расскажите о вашем отеле и цели, которую хотите достичь."
              aria-invalid={!!errors.message}
            />
            {errors.message ? (
              <p className="text-xs text-red-600">{errors.message}</p>
            ) : null}
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={status === "submitting"}
            className="mt-1"
          >
            {status === "submitting" ? "Отправка…" : "Записаться на консультацию"}
            {status !== "submitting" ? <ArrowRight className="h-4 w-4" /> : null}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
