"use client";

import { LandingNavbar } from "@/components/landingpage/navbar";
import LandingFooter from "@/components/landingpage/footer";
import { FlashUpdate } from "@/components/ui/flash-update";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is Linkcoin (LNC)?",
    answer: "Linkcoin is one of the oldest memecoins in cryptocurrency history, created in May 2013 (UCID #26 on CoinMarketCap) as a fork of Litecoin. Originally created as a joke, it was abandoned in 2016 but has since been revived by the community.",
  },
  {
    question: "How can I mine Linkcoin?",
    answer: "Linkcoin uses the Scrypt algorithm and can be merge-mined with Litecoin, meaning you can mine both coins simultaneously. You can use any Scrypt-compatible ASIC miner or mining pool that supports merge mining.",
  },
  {
    question: "Where can I buy Linkcoin?",
    answer: "Linkcoin (LNC) is available on several exchanges including CoinEx, AscendEX, and NonKYC.io. You can trade it against USDT pairs.",
  },
  {
    question: "Which wallets support Linkcoin?",
    answer: "Linkcoin is supported by multiple wallets including Dedoo Wallet, Komodo Wallet, and our official Core Wallet. Each offers different features and security levels.",
  },
  {
    question: "Is Linkcoin a serious project?",
    answer: "While Linkcoin started as a joke in 2013, it has become a significant part of crypto history as one of the earliest memecoins and an inspiration for later projects like Dogecoin. The community revival aims to preserve this historical significance while adding modern utility.",
  },
  {
    question: "What makes Linkcoin special?",
    answer: "Linkcoin holds a unique place in crypto history as one of the earliest memecoins (UCID #26), predating even Dogecoin. It's also one of the few early coins to be successfully revived by its community.",
  },
  {
    question: "How can I get involved?",
    answer: "Join our Telegram community, follow us on Twitter, participate in mining, or contribute to development on GitHub. Linkcoin is 100% community-driven, so all contributions are welcome.",
  },
];

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
              Join our Telegram community for direct support and updates
            </p>
            <motion.a
              href="https://t.me/junkcoin_JKC"
              target="_blank"
              className="inline-block bg-[var(--secondary)] text-black px-8 py-3 rounded-lg font-bold hover:bg-[var(--secondary-dark)] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Telegram
            </motion.a>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}
