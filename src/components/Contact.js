import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/content";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaTelegramPlane } from "@react-icons/all-files/fa/FaTelegramPlane";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaCopy } from "@react-icons/all-files/fa/FaCopy";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt";
import { SiTiktok } from "@react-icons/all-files/si/SiTiktok";

import Section from "./Section";

const Contact = ({ isDark }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      handle: "Kent Alber Fredson",
      description: "Professional network & career updates",
      href: personalInfo.linkedin,
      icon: FaLinkedin,
    },
    {
      name: "GitHub",
      handle: "@kentgoldenhour",
      description: "Open-source repositories & ML projects",
      href: personalInfo.github,
      icon: FaGithub,
    },
    {
      name: "Telegram",
      handle: "@Liangisherexoxo", 
      description: "Fastest way to reach me directly",
      href: "https://t.me/Liangisherexoxo", 
      icon: FaTelegramPlane,
    },
    {
      name: "Instagram",
      handle: "@kent.alberf", 
      description: "Content creation, lifestyle & highlights",
      href: "https://instagram.com/kent.alberf",
      icon: FaInstagram,
    },
    {
      name: "TikTok",
      handle: "@kent.alberf",
      description: "Lifestyle short videos",
      href: "https://www.tiktok.com/@kent.alberf", 
      icon: SiTiktok,
    },
  ];

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Open for Data Science, AI Engineering, and collaboration opportunities. Feel free to reach out through any platform below!"
      isDark={isDark}
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Highlight Email Card dengan Tombol Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`rounded-2xl p-6 sm:p-8 gradient-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
            isDark ? "glass" : "glass-light"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-xl bg-primary-500/10 text-primary-400">
              <FaEnvelope size={24} />
            </div>
            <div>
              <p
                className={`text-sm font-medium ${
                  isDark ? "text-light-400" : "text-gray-500"
                }`}
              >
                Direct Email
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className={`text-base sm:text-lg font-semibold hover:text-primary-400 transition-colors ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleCopyEmail}
              className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                copied
                  ? "bg-green-500 text-white"
                  : isDark
                  ? "bg-white/10 text-white hover:bg-white/15"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {copied ? (
                <>
                  <FaCheck size={14} />
                  Copied!
                </>
              ) : (
                <>
                  <FaCopy size={14} />
                  Copy Email
                </>
              )}
            </button>

            <a
              href={`mailto:${personalInfo.email}`}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-primary-500 to-accent-500 text-white flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
            >
              Send Mail
            </a>
          </div>
        </motion.div>

        {/* Grid Kartu Sosial Media */}
        <div className="grid sm:grid-cols-2 gap-4">
          {socialLinks.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className={`rounded-2xl p-6 gradient-border group flex items-center justify-between transition-all duration-300 ${
                  isDark ? "glass hover:bg-white/10" : "glass-light hover:bg-white"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-primary-500/10 text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                    <IconComponent size={22} />
                  </div>
                  <div>
                    <h4
                      className={`font-semibold text-base ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {item.name}
                    </h4>
                    <p className="text-xs text-primary-400 font-medium mb-0.5">
                      {item.handle}
                    </p>
                    <p
                      className={`text-xs ${
                        isDark ? "text-light-400/70" : "text-gray-500"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>

                <FaExternalLinkAlt
                  size={14}
                  className={`opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ${
                    isDark ? "text-white" : "text-gray-700"
                  }`}
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Contact;