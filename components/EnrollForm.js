"use client";

import { useState } from "react";

const inputCls =
  "w-full rounded-xl border-2 border-pine/15 bg-cloud px-4 py-2.5 text-sm placeholder:text-pine-soft/60 focus:border-sky-deep";

export default function EnrollForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/enroll", {
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
        <div className="text-4xl mb-2" aria-hidden="true">🎉</div>
        <h3 className="font-display font-bold text-2xl">Enrollment inquiry sent!</h3>
        <p className="mt-2 text-pine-soft font-semibold">
          Welcome (almost) to the Brightside family. We&apos;ll reach out shortly to talk
          openings, schedule a tour, and answer your questions.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <fieldset className="space-y-4">
        <legend className="font-display font-bold text-xl">About your child</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-bold">Child&apos;s name</span>
            <input name="childName" required className={inputCls} placeholder="First & last name" />
          </label>
          <label className="block">
            <span className="text-sm font-bold">Date of birth (or due date)</span>
            <input name="childDob" type="date" required className={inputCls} />
          </label>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-bold">Program</span>
            <select name="program" className={inputCls} defaultValue="Not sure yet">
              <option>Infant (6 weeks – 18 months)</option>
              <option>Toddler (18 months – 3 years)</option>
              <option>Preschool (3 – 5 years)</option>
              <option>Not sure yet</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-bold">Desired start date</span>
            <input name="startDate" type="date" className={inputCls} />
          </label>
        </div>
        <label className="block">
          <span className="text-sm font-bold">Preferred location</span>
          <select name="location" className={inputCls} defaultValue="Either — whichever has an opening first">
            <option>Brightside Childcare — Fairport (original)</option>
            <option>Brightside Childcare East — new location</option>
            <option>Either — whichever has an opening first</option>
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-bold">Schedule needed</span>
          <select name="schedule" className={inputCls} defaultValue="Full time (5 days)">
            <option>Full time (5 days)</option>
            <option>Part time (2–4 days)</option>
            <option>Flexible / not sure yet</option>
          </select>
        </label>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-display font-bold text-xl">About you</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-bold">Parent / guardian name</span>
            <input name="parentName" required className={inputCls} autoComplete="name" />
          </label>
          <label className="block">
            <span className="text-sm font-bold">Email</span>
            <input name="email" type="email" required className={inputCls} autoComplete="email" />
          </label>
        </div>
        <label className="block">
          <span className="text-sm font-bold">Phone</span>
          <input name="phone" type="tel" required className={inputCls} autoComplete="tel" />
        </label>
        <label className="block">
          <span className="text-sm font-bold">Anything we should know? (optional)</span>
          <textarea
            name="notes"
            rows={4}
            className={inputCls}
            placeholder="Allergies, siblings already at Brightside, schedule questions…"
          />
        </label>
      </fieldset>

      {status === "error" && (
        <p className="text-sm font-bold text-coral-deep">
          Something went wrong. Please try again, or call us at{" "}
          <a href="tel:+15853643117" className="underline">(585) 364-3117</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-coral hover:bg-coral-deep disabled:opacity-60 text-white font-display font-bold rounded-full px-7 py-3 transition-colors"
      >
        {status === "sending" ? "Sending…" : "Submit enrollment inquiry"}
      </button>
      <p className="text-xs text-pine-soft">
        Submitting this form starts a conversation — it doesn&apos;t commit you to anything.
        We&apos;ll follow up to confirm openings and schedule a tour.
      </p>
    </form>
  );
}
