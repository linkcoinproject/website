"use client";

import { LandingNavbar } from "@/components/landingpage/navbar";
import LandingFooter from "@/components/landingpage/footer";
import { FlashUpdate } from "@/components/ui/flash-update";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Clock, Users, Wallet } from "lucide-react";

import content from "@/data/content.json";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  const { about } = content;

  return (
    <div className="min-h-screen bg-[var(--background)] font-mono text-[var(--text-primary)]">
      <div className="fixed top-0 left-0 right-0 z-50">
        <FlashUpdate
          show={true}
          message="Dedoo Wallet now supports LinkCoin — explore integrations!"
          link="https://dedoo.xyz/"
        />
        <LandingNavbar />
      </div>

      <main className="pt-[98px]">

        {/* Hero Section */}
        <section className="relative py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 whitespace-pre-line">
                {about.title}
              </h1>
              <p className="text-[var(--text-muted)] text-lg mb-8">
                {about.description}
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-[var(--surface)]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">{about.title} Timeline</h2>

            <div className="max-w-4xl mx-auto space-y-8">
              {about.timeline.map((item, index) => {
                const Icon = [Clock, Cpu, Users, Wallet][index % 4];
                return (
                  <motion.div
                    key={item.year}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-none">
                      <div className="w-12 h-12 rounded-xl bg-[var(--secondary)]/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[var(--secondary)]" />
                      </div>
                    </div>

                    <div>
                      <div className="text-[var(--secondary)] font-mono mb-1">{item.year}</div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-[var(--text-muted)]">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* References */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Historical Records</h2>

            <div className="grid gap-6 max-w-4xl mx-auto">
              {about.historicalRecords.map((record) => (
                <Link
                  key={record.title}
                  href={record.href}
                  target="_blank"
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--border-light)] hover:border-[var(--border-hover)] transition-all group"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{record.title}</h3>
                      <p className="text-[var(--text-muted)]">{record.desc}</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-[var(--secondary)] group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="py-16 bg-[var(--surface)]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">{about.community.title}</h2>
            <p className="text-[var(--text-muted)] mb-8 max-w-2xl mx-auto">
              {about.community.description}
            </p>

            <div className="flex justify-center flex-wrap gap-4">
              {about.community.buttons.map((btn) => (
                <Button key={btn.label} asChild variant={btn.label.includes("Join") ? "default" : "outline"} className={btn.label.includes("Join") ? "button-primary" : "border-[var(--secondary)] text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-black transition"}>
                  <Link href={btn.href} target="_blank">
                    {btn.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}
