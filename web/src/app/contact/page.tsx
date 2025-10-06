export default function ContactPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div>
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="text-muted mt-2">We typically respond within 1 business day.</p>
        <div className="mt-6 space-y-2 text-sm">
          <div><span className="text-muted">Email:</span> sales@example.com</div>
          <div><span className="text-muted">Phone:</span> +94 11 234 5678</div>
          <div><span className="text-muted">Address:</span> Colombo, Sri Lanka</div>
        </div>
        <div className="mt-6 aspect-video w-full bg-surface border border-white/10 rounded-lg flex items-center justify-center text-muted">
          Google Map Placeholder
        </div>
      </div>
      <form className="bg-surface border border-white/10 rounded-lg p-6 grid gap-3">
        <div className="grid gap-1">
          <label className="text-sm text-muted" htmlFor="name">Name</label>
          <input id="name" className="bg-background border border-white/10 rounded px-3 py-2" required />
        </div>
        <div className="grid gap-1">
          <label className="text-sm text-muted" htmlFor="email">Email</label>
          <input id="email" type="email" className="bg-background border border-white/10 rounded px-3 py-2" required />
        </div>
        <div className="grid gap-1">
          <label className="text-sm text-muted" htmlFor="message">Message</label>
          <textarea id="message" className="bg-background border border-white/10 rounded px-3 py-2 min-h-[120px]" required />
        </div>
        <button className="mt-2 px-5 py-3 rounded-md bg-primary text-primary-contrast">Send Message</button>
      </form>
    </div>
  );
}
