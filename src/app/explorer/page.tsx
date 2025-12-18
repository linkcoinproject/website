"use client";

import { LandingNavbar } from "@/components/landingpage/navbar";
import LandingFooter from "@/components/landingpage/footer";
import { FlashUpdate } from "@/components/ui/flash-update";
import { Search, Activity, Box, Link as LinkIcon, ArrowRight, Code, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

// Add interface for mining pools
interface MiningPool {
  name: string;
  desc: string;
  url: string;
  logo: string;
  needsWhiteBg?: boolean; // Add optional property
}

// Update mining pools data
const miningPools: MiningPool[] = [
  {
    name: "ViaBTC",
    desc: "Professional mining pool with high hashrate and reliability",
    url: "https://pool.viabtc.com/pool/LTC/detail",
    logo: "/images/pools/viabtc.png"
  },
  {
    name: "F2Pool",
    desc: "One of the largest Scrypt mining pools globally",
    url: "https://www.f2pool.com/litecoin",
    logo: "/images/pools/f2pool.png"
  },
  {
    name: "Binance Pool",
    desc: "Merge mining with Litecoin on Binance mining pool",
    url: "https://pool.binance.com/en/merge-mining",
    logo: "/images/pools/binance.png"
  },
  {
    name: "AntPool",
    desc: "Professional mining pool with merge mining support",
    url: "https://antpool.com/ltc",
    logo: "/images/pools/antpool.png",
    needsWhiteBg: true // Add this property
  },
  {
    name: "BTC.com",
    desc: "Efficient merge mining with Litecoin",
    url: "https://pool.btc.com/",
    logo: "/images/pools/btc-com.png"
  },
  {
    name: "SpiderPool",
    desc: "Merge mining pool with competitive fees",
    url: "https://www.spiderpool.com/",
    logo: "/images/pools/spiderpool.png"
  },
];

export default function ExplorerPage() {
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
        {/* Header */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Linkcoin Network
              </h1>
              <p className="text-[var(--text-muted)] mb-6">
                Track transactions, mine JKC, and explore the network in real-time
              </p>
            </div>
          </div>
        </section>

        {/* Explorers Grid */}
        <section className="py-6 bg-[var(--surface)]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Network Explorers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.a
                  href="https://explorer.junk-coin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--card)] p-6 rounded-lg border border-[var(--secondary)]/10 hover:border-[var(--secondary)]/20 transition-all group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[var(--secondary)]/10">
                      <Search className="w-6 h-6 text-[var(--secondary)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Mainnet Explorer</h3>
                      <p className="text-[var(--text-muted)] text-sm mb-4">
                        View mainnet transactions, blocks, and addresses
                      </p>
                      <span className="text-[var(--secondary)] text-sm flex items-center gap-2">
                        Visit Explorer <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://explorer-testnet.junk-coin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--card)] p-6 rounded-lg border border-[var(--secondary)]/10 hover:border-[var(--secondary)]/20 transition-all group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[var(--secondary)]/10">
                      <Code className="w-6 h-6 text-[var(--secondary)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Testnet Explorer</h3>
                      <p className="text-[var(--text-muted)] text-sm mb-4">
                        Explore testnet data for development purposes
                      </p>
                      <span className="text-[var(--secondary)] text-sm flex items-center gap-2">
                        Visit Testnet <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://junkpool.blockraid.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--card)] p-6 rounded-lg border border-[var(--secondary)] hover:border-[var(--secondary)] transition-all group md:col-span-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[var(--secondary)]">
                      <Image
                        src="/images/pools/blockraid.png"
                        alt="BlockRaid"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">BlockRaid Explorer</h3>
                      <p className="text-[var(--text-muted)] text-sm mb-4">
                        Official block explorer with detailed network statistics
                      </p>
                      <span className="text-[var(--secondary)] text-sm flex items-center gap-2">
                        Visit Explorer <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>
          </div>
        </section>

        {/* Mining Pools Grid */}
        <section className="py-12 bg-[var(--surface-dark)]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Mining Pools</h2>
              <div className="grid gap-4">
                {miningPools.map((pool, index) => (
                  <motion.a
                    key={pool.name}
                    href={pool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--secondary)]/10 hover:border-[var(--secondary)]/20 transition-all block group"
                    whileHover={{ scale: 1.01 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg flex items-center justify-center min-w-[120px] ${
                        pool.needsWhiteBg ? 'bg-white' : 'bg-white/5'
                      }`}>
                        <div className="relative w-[108px] h-[32px]">
                          <Image
                            src={pool.logo}
                            alt={pool.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold mb-2">{pool.name}</h3>
                          <ArrowRight className="w-5 h-5 text-[var(--secondary)] group-hover:translate-x-1 transition-transform" />
                        </div>
                        <p className="text-[var(--text-muted)] text-sm">
                          {pool.desc}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <LandingFooter />
    </div>
  );
}
