"use client";

import { useState } from "react";

const inputCls =
  "w-full rounded-xl border-2 border-pine/15 bg-cloud px-4 py-2.5 text-sm placeholder:text-pine-soft/60 focus:border-sky-deep";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-blob bg-sage p-8 text-center">
        <div className="text-4xl mb-2" aria-hidden="true">🌞</div>
        <h3 className="font-display font-bold text-2xl">Message received!</h3>
        <p className="mt-2 text-pine-soft font-semibold">
          Thanks for reaching out — we&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold">Your name</span>
          <input name="name" required className={inputCls} placeholder="Jane Smith" autoComplete="name" />
        </label>
        <label className="block">
          <span className="text-sm font-bold">Email</span>
          <input name="email" type="email" required className={inputCls} placeholder="you@example.com" autoComplete="email" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold">Phone (optional)</span>
          <input name="phone" type="tel" className={inputCls} placeholder="(585) 555-0123" autoComplete="tel" />
        </label>
        <label className="block">
          <span className="text-sm font-bold">I&apos;m asking about</span>
          <select name="topic" className={inputCls} defaultValue="General question">
            <option>General question</option>
            <option>Scheduling a tour — Brightside Childcare (Fairport)</option>
            <option>Scheduling a tour — Brightside East</option>
            <option>Current openings &amp; waitlist</option>
            <option>Tuition &amp; schedules</option>
            <option>Employment</option>
          </select>
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-bold">Message</span>
        <textarea name="message" required rows={5} className={inputCls} placeholder="Tell us how we can help…" />
      </label>
      {status === "error" && (
        <p className="text-sm font-bold text-coral-deep">
          Something went wrong sending your message. Please try again, or email us directly at{" "}
          <a href="mailto:brightsidechildcare22@yahoo.com" className="underline">brightsidechildcare22@yahoo.com</a>.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-coral hover:bg-coral-deep disabled:opacity-60 text-white font-display font-bold rounded-full px-7 py-3 transition-colors"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
