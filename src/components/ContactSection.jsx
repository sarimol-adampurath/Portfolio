import FadeInOnScroll from './FadeInOnScroll'

function ContactSection() {
  return (
    <section id="contact" className="mx-auto min-h-screen w-full max-w-6xl scroll-mt-24 px-6 py-24 lg:px-10">
      <FadeInOnScroll className="mb-10">
        <h2 className="text-2xl font-bold text-slate-100 md:text-3xl">Contact</h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
          Let&apos;s discuss your project. Share a few details and I&apos;ll get back to you.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.06}>
        <form className="rounded-xl border border-[#1E293B] bg-[#111A2E] p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="md:col-span-1">
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-md border border-[#1E293B] bg-[#0B1120] px-3 py-2.5 text-sm text-slate-100 outline-none transition-colors duration-200 placeholder:text-slate-500 focus:border-[#38BDF8]"
              />
            </div>

            <div className="md:col-span-1">
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-md border border-[#1E293B] bg-[#0B1120] px-3 py-2.5 text-sm text-slate-100 outline-none transition-colors duration-200 placeholder:text-slate-500 focus:border-[#38BDF8]"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me about your idea..."
                className="w-full resize-none rounded-md border border-[#1E293B] bg-[#0B1120] px-3 py-2.5 text-sm text-slate-100 outline-none transition-colors duration-200 placeholder:text-slate-500 focus:border-[#38BDF8]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 rounded-md border border-[#1E293B] px-5 py-2.5 text-sm font-medium text-slate-100 transition-colors duration-200 hover:border-[#38BDF8]"
            style={{ boxShadow: '0 0 0 1px rgba(56, 189, 248, 0.2)' }}
          >
            Send Message
          </button>
        </form>
      </FadeInOnScroll>
    </section>
  )
}

export default ContactSection
