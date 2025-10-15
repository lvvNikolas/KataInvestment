"use server";

/**
 * Простая валидация + антиспам:
 * - honeypot "website" должен быть пуст
 * - min fill time 5 сек
 * - базовая проверка полей
 * Здесь можно подключить email (SMTP), Slack webhook, CRM и т.д.
 */

type Resp = { ok: boolean; message: string };

export async function sendContact(prevState: Resp, formData: FormData): Promise<Resp> {
  try {
    const website = (formData.get("website") as string) || ""; // honeypot
    if (website.trim().length > 0) {
      return { ok: false, message: "Something went wrong. Please try again." };
    }

    const startedAt = Number(formData.get("startedAt") ?? 0);
    const elapsed = Date.now() - startedAt;
    if (!Number.isFinite(startedAt) || elapsed < 5000) {
      return { ok: false, message: "Please take a bit more time and try again." };
    }

    const name = ((formData.get("name") as string) ?? "").trim();
    const email = ((formData.get("email") as string) ?? "").trim();
    const company = ((formData.get("company") as string) ?? "").trim();
    const message = ((formData.get("message") as string) ?? "").trim();

    if (name.length < 2 || message.length < 10) {
      return { ok: false, message: "Please provide your name and a short message." };
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { ok: false, message: "Please enter a valid email." };
    }

    // === TODO: интеграция ===
    // Пример: отправка в почту через SMTP (nodemailer)
    // Пример: отправка в Slack/Discord/Webhook
    // Пример: запись в БД (Prisma/Drizzle)
    // Сейчас просто логируем на сервере:
    console.log("[Contact]", { name, email, company, message });

    // Имитация обработки
    await new Promise((r) => setTimeout(r, 500));

    return { ok: true, message: "Thanks! We’ll get back to you shortly." };
  } catch (err) {
    console.error("[Contact] error:", err);
    return { ok: false, message: "Server error. Please try again later." };
  }
}