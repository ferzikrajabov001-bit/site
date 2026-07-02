"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "@/components/icons";

interface FormState {
  name: string;
  email: string;
  message: string;
}

type Status = "idle" | "submitting" | "success";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Форма заявки. Отправка намеренно вынесена в отдельную функцию, чтобы позже
 * подключить API/CRM без изменения интерфейса.
 */
async function submit(data: FormState): Promise<void> {
  if (process.env.NODE_ENV === "development") {
    console.debug("[HMS] заявка с формы", data);
  }
  await new Promise((resolve) => setTimeout(resolve, 800));
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(data: FormState): Partial<FormState> {
    const next: Partial<FormState> = {};
    if (data.name.trim().length < 2) next.name = "Укажите имя.";
    if (!EMAIL_RE.test(data.email)) next.email = "Укажите корректный e-mail.";
    if (data.message.trim().length < 10)
      next.message = "Коротко опишите объект или запрос.";
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
      "w-full border-0 border-b bg-transparent px-0 py-3 text-[15px] text-graphite placeholder:text-faint transition-colors focus:outline-none",
      hasError ? "border-red-500/70" : "border-line focus:border-graphite",
    );

  if (status === "success") {
    return (
      <div className="border-t border-line pt-8">
        <p className="font-serif text-2xl font-normal tracking-tight text-graphite">
          Заявка отправлена.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          Мы свяжемся с вами в ближайшее время, чтобы обсудить объект.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-[15px] font-medium text-graphite underline decoration-line underline-offset-4 transition-colors hover:text-accent"
        >
          Отправить ещё одну
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-7">
      <div>
        <label htmlFor="name" className="text-xs uppercase tracking-[0.12em] text-faint">
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
          placeholder="Как к вам обращаться"
          aria-invalid={!!errors.name}
        />
        {errors.name ? (
          <p className="mt-2 text-xs text-red-600">{errors.name}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="text-xs uppercase tracking-[0.12em] text-faint">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={fieldClass(!!errors.email)}
          placeholder="you@company.ru"
          aria-invalid={!!errors.email}
        />
        {errors.email ? (
          <p className="mt-2 text-xs text-red-600">{errors.email}</p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-xs uppercase tracking-[0.12em] text-faint"
        >
          Сообщение
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={cn(fieldClass(!!errors.message), "resize-none")}
          placeholder="Коротко об объекте: район, номерной фонд, задача"
          aria-invalid={!!errors.message}
        />
        {errors.message ? (
          <p className="mt-2 text-xs text-red-600">{errors.message}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-graphite px-6 py-3 text-[15px] font-medium text-paper transition-colors duration-300 ease-editorial hover:bg-graphite-soft disabled:opacity-60"
      >
        {status === "submitting" ? "Отправляем…" : "Отправить заявку"}
        {status !== "submitting" ? (
          <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-editorial group-hover:translate-x-0.5" />
        ) : null}
      </button>
    </form>
  );
}
