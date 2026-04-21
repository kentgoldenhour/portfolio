import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import Section from "./Section";
import { personalInfo } from "../data/content";

const Contact = ({ isDark }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 ${
    isDark
      ? "bg-white/5 border border-white/10 text-white placeholder-light-400/50 focus:border-primary-500/50 focus:bg-white/10"
      : "bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-primary-500/50 focus:bg-white"
  }`;

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Have a question or want to work together? Drop me a message!"
      isDark={isDark}
    >
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-2xl p-8 gradient-border ${
            isDark ? "glass" : "glass-light"
          }`}
        >
          <h3
            className={`text-xl font-semibold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Let's Connect
          </h3>
          <div className="space-y-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className={`flex items-center gap-4 group ${
                isDark ? "text-light-400" : "text-gray-600"
              }`}
            >
              <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-xs opacity-70">{personalInfo.email}</p>
              </div>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-4 group ${
                isDark ? "text-light-400" : "text-gray-600"
              }`}
            >
              <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                <FaGithub size={20} />
              </div>
              <div>
                <p className="text-sm font-medium">GitHub</p>
                <p className="text-xs opacity-70">@kent-fredson1-SSGBION2</p>
              </div>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-4 group ${
                isDark ? "text-light-400" : "text-gray-600"
              }`}
            >
              <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                <FaLinkedin size={20} />
              </div>
              <div>
                <p className="text-sm font-medium">LinkedIn</p>
                <p className="text-xs opacity-70">Kent Fredson</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`rounded-2xl p-8 gradient-border ${
            isDark ? "glass" : "glass-light"
          }`}
        >
          <div className="space-y-4">
            <div>
              <label
                className={`block text-sm font-medium mb-1.5 ${
                  isDark ? "text-light-300" : "text-gray-700"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label
                className={`block text-sm font-medium mb-1.5 ${
                  isDark ? "text-light-300" : "text-gray-700"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label
                className={`block text-sm font-medium mb-1.5 ${
                  isDark ? "text-light-300" : "text-gray-700"
                }`}
              >
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your message..."
                required
                rows={4}
                className={`${inputClass} resize-none`}
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                submitted
                  ? "bg-green-500 text-white"
                  : "bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg hover:shadow-primary-500/25"
              }`}
            >
              {submitted ? (
                "Message Sent! ✓"
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
};

export default Contact;