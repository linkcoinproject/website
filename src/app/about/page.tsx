"use client";

import { LandingNavbar } from "@/components/landingpage/navbar";
import LandingFooter from "@/components/landingpage/footer";
import { FlashUpdate } from "@/components/ui/flash-update";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Clock, Users, Wallet } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
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
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                About <span className="text-[var(--secondary)]">LinkCoin</span>
              </h1>
              <p className="text-[var(--text-muted)] text-lg mb-8">
                LinkCoin is a community-driven Layer-1 revival project built on pure passion,
                open-source spirit, and the energy of the Junkies. No promises — only chaos,
                innovation, and decentralized growth.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-[var(--surface)]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">LinkCoin Timeline</h2>

            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  year: "2013",
                  title: "Early Experimental Era",
                  desc: "LinkCoin appeared among the earliest altcoins, experimenting with early blockchain mechanics and PoW distribution.",
                  icon: Clock,
                },
                {
                  year: "2013–2016",
                  title: "Mining Phase",
                  desc: "The network operated quietly, sustained by miners who secured the chain with grassroots power.",
                  icon: Cpu,
                },
                {
                  year: "2016–2023",
                  title: "Dormant Chain",
                  desc: "Like many early altcoins, LinkCoin entered a frozen era — untouched, unnoticed, yet never dead.",
                  icon: Users,
                },
                {
                  year: "2023–Now",
                  title: "The Community Revival",
                  desc: "The Junkies reignite LinkCoin. No dev team. No VC. No roadmap. Pure community energy reviving a forgotten chain.",
                  icon: Wallet,
                },
              ].map((item, index) => (
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
                      <item.icon className="w-6 h-6 text-[var(--secondary)]" />
                    </div>
                  </div>

                  <div>
                    <div className="text-[var(--secondary)] font-mono mb-1">{item.year}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-[var(--text-muted)]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* References */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Historical Records</h2>

            <div className="grid gap-6 max-w-4xl mx-auto">
              <Link 
                href="https://bitcointalk.org/index.php?topic=194756.0"
                target="_blank"
                className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--border-light)] hover:border-[var(--border-hover)] transition-all group"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Original LinkCoin Thread</h3>
                    <p className="text-[var(--text-muted)]">Archived discussion preserving LinkCoin’s early presence.</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-[var(--secondary)] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="py-16 bg-[var(--surface)]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join the Junkies</h2>
            <p className="text-[var(--text-muted)] mb-8 max-w-2xl mx-auto">
              The LinkCoin revival is powered entirely by the community.
              No leaders. No hierarchy. The chain lives because we choose to keep it alive.
            </p>

            <div className="flex justify-center gap-4">
              <Button asChild className="button-primary">
                <Link href="https://t.me/junkcoin_JKC" target="_blank">
                  Join Telegram
                </Link>
              </Button>

              <Button asChild variant="outline" className="border-[var(--secondary)] text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-black transition">
                <Link href="https://twitter.com/junkcoin_JKC" target="_blank">
                  Follow Twitter
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}
