import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    if (!formRef.current) return

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )

      console.log('Email successfully sent!', result.text)

      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(true)

      // Reset submitted state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      console.error('Failed to send email:', err)
      setError('Something went wrong. Please try again later.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section bg-bg-dark">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Let's build something amazing together!
              </h3>
              <p className="mb-6">
                I'm currently available for freelance work and full-time
                positions. If you have a project that needs a creative touch or
                are looking for a developer to join your team, feel free to
                reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a
                    href="mailto:kolawoleiwalewa@gmail.com"
                    className="hover:text-primary"
                  >
                    kolawoleiwalewa@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href="tel:+2348026908862" className="hover:text-primary">
                    +234 802 690 8862
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0a10 10 0 1010 10A10.009 10.009 0 0010 0zm6.613 4.614a8.523 8.523 0 011.93 5.32 20.094 20.094 0 00-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 00-.566-1.239 11.41 11.41 0 004.769-3.366zM8 1.707a8.821 8.821 0 012-.238 8.5 8.5 0 015.664 2.152 9.608 9.608 0 00-4.476 3.087A45.758 45.758 0 008 1.707zM1.642 8.262a8.57 8.57 0 014.73-5.981A53.998 53.998 0 018.53 7.256a14.299 14.299 0 00-6.888 1.006zm2.81 7.124A8.51 8.51 0 018 16.74a8.56 8.56 0 01-6.59-3.102 13.148 13.148 0 013.042-8.252zm9.758-2.11a32.084 32.084 0 01.871 5.37 8.51 8.51 0 01-4.116 1.088 8.56 8.56 0 01-5.135-1.718 12.574 12.574 0 018.38-4.74zm3.096-1.341a8.641 8.641 0 01-2.153 4.646c-.476.518-1.07.929-1.654 1.341a21.598 21.598 0 00-.739-4.816 13.66 13.66 0 014.546-1.171z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <a
                    href="https://github.com/Kolawole22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    github.com/kolawoleiwalewa
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 0a10 10 0 1010 10A10.009 10.009 0 0010 0zM7.3 13.38C8.15 13.28 8.6 12.88 8.6 12.38c0 0-.55-2.2-.55-2.2h.3c1.55 0 2.5-.7 2.5-1.65 0-1.05-1.2-1.55-2.35-1.55H5v8.5h2.3V13.38zm0-4h.65c.55 0 .85.3.85.7 0 .4-.35.65-.9.65h-.6v-1.35zm5.65.8c-1.2 0-1.7.65-1.7 1.3v3.7h1.55v-3.55c0-.35.2-.55.5-.55.35 0 .5.2.5.55v3.55h1.55v-3.7c0-.65-.55-1.3-1.65-1.3h-.75z" />
                  </svg>
                  <a
                    href="www.linkedin.com/in/kolawole-iwalewa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    linkedin.com/in/kolawole-iwalewa
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary w-full flex justify-center items-center cursor-pointer"
                >
                  {submitting ? (
                    <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                  ) : null}
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitted && (
                  <div className="p-3 rounded-md bg-green-800 text-green-100 animate-fadeIn">
                    Thank you for your message! I'll get back to you soon.
                  </div>
                )}

                {error && (
                  <div className="p-3 rounded-md bg-red-800 text-red-100 animate-fadeIn">
                    {error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
