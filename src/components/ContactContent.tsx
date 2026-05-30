import { useState } from 'react';

export function ContactContent() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    setResult("");

    try {
      const formData = new FormData(event.currentTarget);
      formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setResult(data.message ?? 'Failed to send message.');
        return;
      }

      setResult('Message sent successfully.');
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult('Failed to send message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mt-10 space-y-5 rounded-4xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur"
    >
      <div>
        <label className="mb-2 block text-base text-white/85">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-cyan-400/70"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="mb-2 block text-base text-white/85">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-cyan-400/70"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="mb-2 block text-base text-white/85">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-cyan-400/70"
          placeholder="Your message"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90 disabled:cursor-not-allowed disabled:bg-white/40"
      >
        {isSubmitting ? 'Sending...' : 'Send message'}
      </button>

      {result && (
        <p className="text-sm text-white/60">
          {result}
        </p>
      )}
    </form>
  );
}
