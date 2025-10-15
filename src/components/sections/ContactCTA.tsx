"use client";

import { useEffect, useRef, useState, useActionState } from "react"; // <= useActionState из react
import { useFormStatus } from "react-dom";                            // <= useFormStatus из react-dom
import { sendContact } from "@/app/actions/contact";
import "@/styles/contact.css";

/** Состояние, которое возвращает server action */
type ContactState = {
  ok: boolean;
  message: string;
};

/** Кнопка отправки, автоматически показывает «Sending…» во время pending */
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="btn btn-primary contact-submit"
      type="submit"
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

const initialState: ContactState = { ok: false, message: "" };

export default function ContactCTA() {
  /** время начала заполнения формы (может использоваться бэком для anti-bot/метрик) */
  const [startedAt, setStartedAt] = useState<string>("");

  /** основное состояние формы (успех/ошибка) + formAction для <form action={...}> */
  const [state, formAction] = useActionState<ContactState, FormData>(
    sendContact,
    initialState
  );

  /** модалка «успешно отправлено» */
  const [showModal, setShowModal] = useState(false);

  /** ref на форму — чтобы её сбросить после успешной отправки */
  const formRef = useRef<HTMLFormElement>(null);

  /** фиксированное значение времени старта (гидратацию не ломает, т.к. ставим только на клиенте) */
  useEffect(() => {
    setStartedAt(String(Date.now()));
  }, []);

  /** при успешной отправке показываем модалку и сбрасываем форму */
  useEffect(() => {
    if (state.ok) {
      setShowModal(true);
      formRef.current?.reset();
    }
  }, [state.ok]);

  /** закрытие модалки по Esc */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
    };
    if (showModal) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showModal]);

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact-inner">
        {/* Заголовок секции */}
        <header className="contact-head">
          <h2 id="contact-title" className="section-title">
            Contact Us
          </h2>
          <p className="p contact-sub">
            We partner with founders and CEOs seeking patient, aligned capital. Share your
            opportunity and we’ll respond quickly.
          </p>
        </header>

        {/* Карточка с формой по центру */}
        <div className="contact-card">
          <form
            ref={formRef}
            action={formAction}
            className="contact-form"
            aria-label="Contact form"
            // чтобы браузер корректно подсказывал, но не авто-заполнял агрессивно:
            autoComplete="on"
          >
            {/* honeypot для ботов */}
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
              <input
                className="field"
                name="name"
                required
                placeholder="Full name"
                aria-label="Full name"
                autoComplete="name"
              />
              <input
                className="field"
                name="email"
                required
                type="email"
                placeholder="Email"
                aria-label="Email"
                autoComplete="email"
              />
              <input
                className="field field-span"
                name="company"
                placeholder="Company"
                aria-label="Company"
                autoComplete="organization"
              />
              <textarea
                className="field field-span"
                name="message"
                required
                rows={4}
                placeholder="Tell us about the opportunity"
                aria-label="Message"
              />
            </div>

            <SubmitButton />

            <p className="p contact-legal">
              By submitting, you agree to our terms and privacy policy.
            </p>

            {/* inline-статус (покажем текст ошибки, если он есть и не было ok) */}
            <div
              className={`contact-status ${
                state.ok ? "is-ok" : state.message ? "is-err" : ""
              }`}
              aria-live="polite"
            >
              {!state.ok && state.message}
            </div>
          </form>
        </div>
      </div>

      {/* Успешное отправление — модалка */}
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
            <div className="contact-modal-icon" aria-hidden>
              ✓
            </div>
            <h3 id="contact-modal-title" className="contact-modal-title">
              Message sent
            </h3>
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