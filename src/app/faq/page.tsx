"use client";

import { LandingNavbar } from "@/components/landingpage/navbar";
import LandingFooter from "@/components/landingpage/footer";
import { FlashUpdate } from "@/components/ui/flash-update";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

import content from "@/data/content.json";

const faqs = content.faq.items;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[var(--background)] font-mono text-white">
      <div className="fixed top-0 left-0 right-0 z-50">
        <FlashUpdate
          show={true}
          message="Dedoo wallet now support Linkcoin! Click here to check it out"
          link="https://dedoo.xyz/"
        />
        <LandingNavbar />
      </div>

      <main className="pt-[98px]">
        {/* Hero Section */}
        <section className="relative py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-[var(--text-muted)] text-lg">
                Everything you need to know about Linkcoin
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-[var(--surface)]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-4"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full text-left p-4 bg-[var(--card)] rounded-lg hover:bg-[var(--card-hover)] transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-bold pr-8">{faq.question}</h3>
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-[var(--secondary)]" />
                      ) : (
                        <Plus className="w-5 h-5 text-[var(--secondary)]" />
                      )}
                    </div>
                    {openIndex === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 text-[var(--text-muted)]"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-[var(--text-muted)] mb-8">
              Join our community for direct support and updates
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://t.me/Linkcoin_LNC"
                target="_blank"
                className="inline-block bg-[#0088cc] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#0077b5] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Telegram
              </motion.a>
              <motion.a
                href="https://discord.gg/eHe6jMgd"
                target="_blank"
                className="inline-block bg-[#5865F2] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#4752C4] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Discord
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}
