import { useState } from 'react'
import FadeInOnScroll from './FadeInOnScroll'

const initialFormState = {
  name: '',
  email: '',
  message: '',
}

function ContactSection({ contact }) {
  const [formData, setFormData] = useState(initialFormState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: '', message: '' })
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || contact.error)
      }

      setFormData(initialFormState)
      setStatus({
        type: 'success',
        message: contact.success,
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || contact.error,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="mx-auto min-h-screen w-full max-w-6xl scroll-mt-24 px-6 py-24 lg:px-10">
      <FadeInOnScroll className="mb-10">
        <h2 className="text-2xl font-bold text-slate-100 md:text-3xl">{contact.title}</h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
          {contact.description}
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.06}>
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-[#1E293B] bg-[#111A2E] p-6 md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div className="md:col-span-1">
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                {contact.labels.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
                placeholder={contact.placeholders.name}
                className="w-full rounded-md border border-[#1E293B] bg-[#0B1120] px-3 py-2.5 text-sm text-slate-100 outline-none transition-colors duration-200 placeholder:text-slate-500 focus:border-[#38BDF8]"
              />
            </div>

            <div className="md:col-span-1">
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                {contact.labels.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                placeholder={contact.placeholders.email}
                className="w-full rounded-md border border-[#1E293B] bg-[#0B1120] px-3 py-2.5 text-sm text-slate-100 outline-none transition-colors duration-200 placeholder:text-slate-500 focus:border-[#38BDF8]"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                {contact.labels.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder={contact.placeholders.message}
                className="w-full resize-none rounded-md border border-[#1E293B] bg-[#0B1120] px-3 py-2.5 text-sm text-slate-100 outline-none transition-colors duration-200 placeholder:text-slate-500 focus:border-[#38BDF8]"
              />
            </div>
          </div>

          {status.message ? (
            <p
              className={`mt-4 text-sm ${status.type === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}
            >
              {status.message}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 rounded-md border border-[#1E293B] px-5 py-2.5 text-sm font-medium text-slate-100 transition-colors duration-200 hover:border-[#38BDF8]"
            style={{ boxShadow: '0 0 0 1px rgba(56, 189, 248, 0.2)' }}
          >
            {isSubmitting ? contact.sending : contact.send}
          </button>
        </form>
      </FadeInOnScroll>
    </section>
  )
}

export default ContactSection
