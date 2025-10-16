"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import "@/styles/contact.css";

/* ==========================
   Типы состояния формы
   ========================== */
type SubmitState = "idle" | "pending" | "ok" | "error";

/* Поля и ошибки формы */
type Fields = {
  name: string;
  email: string;
  company: string;
  message: string;
};
type Errors = Partial<Record<keyof Fields, string>>;

/* Регулярка для проверки email */
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

/* ==========================
   Компонент ContactCTA
   ========================== */
export default function ContactCTA() {
  /* Состояния */
  const [startedAt, setStartedAt] = useState<string>("");
  const [status, setStatus] = useState<SubmitState>("idle");
  const [showModal, setShowModal] = useState(false);

  /* Поля формы */
  const [fields, setFields] = useState<Fields>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  /* Отслеживание "тронутости" полей (для лайв-валидации) */
  const [touched, setTouched] = useState<Record<keyof Fields, boolean>>({
    name: false,
    email: false,
    company: false,
    message: false,
  });

  /* Ошибки полей */
  const [errors, setErrors] = useState<Errors>({});

  /* Рефы для управления фокусом */
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);

  /* ====== useEffects ====== */

  // Запоминаем время начала заполнения формы
  useEffect(() => setStartedAt(String(Date.now())), []);

  // Esc закрывает модалку
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setShowModal(false);
    if (showModal) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showModal]);

  /* ==========================
     Валидация
     ========================== */

  function validateField<K extends keyof Fields>(key: K, value: Fields[K]): string {
    const v = String(value ?? "").trim();
    switch (key) {
      case "name":
        if (!v) return "Please enter your full name.";
        if (v.length < 2) return "Name is too short.";
        return "";
      case "email":
        if (!v) return "Email is required.";
        if (!emailRe.test(v)) return "Enter a valid email.";
        return "";
      case "message":
        if (!v) return "Please tell us about the opportunity.";
        if (v.length < 10) return "Message should be at least 10 characters.";
        return "";
      case "company":
        if (v.length > 120) return "Company name is too long.";
        return "";
      default:
        return "";
    }
  }

  // Проверка всех полей сразу
  function validateAll(f: Fields): Errors {
    return (Object.keys(f) as (keyof Fields)[]).reduce<Errors>((acc, k) => {
      const e = validateField(k, f[k]);
      if (e) acc[k] = e;
      return acc;
    }, {});
  }

  // Мемоизированная проверка — нужна для дизейбла кнопки
  const isValid = useMemo(() => {
    const e = validateAll(fields);
    return Object.keys(e).length === 0;
  }, [fields]);

  /* ==========================
     Handlers
     ========================== */

  // Изменение поля
  function onChange<K extends keyof Fields>(key: K) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.currentTarget.value;
      setFields((prev) => ({ ...prev, [key]: value }));
      // Если уже трогали — валидируем на лету
      if (touched[key]) {
        setErrors((prev) => ({ ...prev, [key]: validateField(key, value) }));
      }
    };
  }

  // Потеря фокуса
  function onBlur<K extends keyof Fields>(key: K) {
    return (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.currentTarget.value; // Сохраняем сразу (иначе React "очистит" event)
      setTouched((prev) => ({ ...prev, [key]: true }));
      setErrors((prev) => ({ ...prev, [key]: validateField(key, value) }));
    };
  }

  // Перемещение фокуса на первое поле с ошибкой
  function focusFirstError(errs: Errors) {
    if (errs.name) return nameRef.current?.focus();
    if (errs.email) return emailRef.current?.focus();
    if (errs.message) return msgRef.current?.focus();
  }

  /* ==========================
     Submit
     ========================== */

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");

    const fd = new FormData(e.currentTarget);

    // honeypot — если заполнен, значит бот
    if ((fd.get("website") as string)?.trim()) {
      setStatus("error");
      return;
    }

    // Финальная проверка перед отправкой
    const v = validateAll(fields);
    setErrors(v);
    setTouched({ name: true, email: true, company: true, message: true });

    // Если есть ошибки — фокусируемся и отменяем
    if (Object.keys(v).length) {
      focusFirstError(v);
      return;
    }

    try {
      setStatus("pending");

      // 🔹 Мок-запрос (можно заменить на реальный endpoint)
      await new Promise((r) => setTimeout(r, 900));

      // После успеха
      setStatus("ok");
      formRef.current?.reset();
      setFields({ name: "", email: "", company: "", message: "" });
      setTouched({ name: false, email: false, company: false, message: false });
      setErrors({});
      setShowModal(true);
    } catch {
      setStatus("error");
    }
  }

  /* ==========================
     Render
     ========================== */

  const pending = status === "pending";

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact-inner">
        {/* Заголовок секции */}
        <header className="contact-head">
          <h2 id="contact-title" className="section-title">Contact Us</h2>
          <p className="p contact-sub">
            We partner with founders and CEOs seeking patient, aligned capital. Share your
            opportunity and we’ll respond quickly.
          </p>
        </header>

        {/* Карточка формы */}
        <div className="contact-card">
          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="contact-form"
            aria-label="Contact form"
            noValidate
            autoComplete="on"
          >
            {/* honeypot (скрытое поле для защиты от ботов) */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hp"
              aria-hidden="true"
            />
            <input type="hidden" name="startedAt" value={startedAt} />

            <div className="contact-fields">
              {/* ==== NAME ==== */}
              <label className={`field-wrap ${errors.name ? "has-error" : ""}`}>
                <input
                  ref={nameRef}
                  className="field"
                  name="name"
                  value={fields.name}
                  onChange={onChange("name")}
                  onBlur={onBlur("name")}
                  required
                  placeholder="Full name"
                  aria-label="Full name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "err-name" : undefined}
                  autoComplete="name"
                />
                {errors.name && (
                  <span id="err-name" className="field-err" role="alert">
                    {errors.name}
                  </span>
                )}
              </label>

              {/* ==== EMAIL ==== */}
              <label className={`field-wrap ${errors.email ? "has-error" : ""}`}>
                <input
                  ref={emailRef}
                  className="field"
                  name="email"
                  type="email"
                  value={fields.email}
                  onChange={onChange("email")}
                  onBlur={onBlur("email")}
                  required
                  placeholder="Email"
                  aria-label="Email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "err-email" : undefined}
                  autoComplete="email"
                  inputMode="email"
                />
                {errors.email && (
                  <span id="err-email" className="field-err" role="alert">
                    {errors.email}
                  </span>
                )}
              </label>

              {/* ==== COMPANY (опционально) ==== */}
              <label className={`field-wrap ${errors.company ? "has-error" : ""} field-span`}>
                <input
                  className="field"
                  name="company"
                  value={fields.company}
                  onChange={onChange("company")}
                  onBlur={onBlur("company")}
                  placeholder="Company (optional)"
                  aria-label="Company"
                  aria-invalid={!!errors.company}
                  aria-describedby={errors.company ? "err-company" : undefined}
                  autoComplete="organization"
                />
                {errors.company && (
                  <span id="err-company" className="field-err" role="alert">
                    {errors.company}
                  </span>
                )}
              </label>

              {/* ==== MESSAGE ==== */}
              <label className={`field-wrap ${errors.message ? "has-error" : ""} field-span`}>
                <textarea
                  ref={msgRef}
                  className="field"
                  name="message"
                  value={fields.message}
                  onChange={onChange("message")}
                  onBlur={onBlur("message")}
                  required
                  rows={4}
                  placeholder="Tell us about the opportunity"
                  aria-label="Message"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "err-message" : undefined}
                />
                {errors.message && (
                  <span id="err-message" className="field-err" role="alert">
                    {errors.message}
                  </span>
                )}
              </label>
            </div>

            {/* Кнопка отправки */}
            <button
              className="btn btn-primary contact-submit"
              type="submit"
              disabled={pending || !isValid}
              aria-busy={pending}
            >
              {pending ? "Sending…" : "Send message"}
            </button>

            <p className="p contact-legal">
              By submitting, you agree to our terms and privacy policy.
            </p>

            {/* inline-статус (ошибка сети) */}
            <div
              className={`contact-status ${
                status === "ok" ? "is-ok" : status === "error" ? "is-err" : ""
              }`}
              role="status"
              aria-live="polite"
            >
              {status === "error" ? "Something went wrong. Please try again." : null}
            </div>
          </form>
        </div>
      </div>

      {/* Модалка успеха */}
      {showModal && (
        <div
          className="contact-modal-backdrop"
          role="presentation"
          onClick={() => setShowModal(false)}
        >
          <div
            className="contact-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            aria-describedby="contact-modal-desc"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="contact-modal-icon" aria-hidden>✓</div>
            <h3 id="contact-modal-title" className="contact-modal-title">Message sent</h3>
            <p id="contact-modal-desc" className="contact-modal-desc">
              Thanks! We’ll get back to you shortly at the email you provided.
            </p>
            <button
              className="btn btn-primary contact-modal-btn"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}