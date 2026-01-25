"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import LandingFooter from "@/components/landingpage/footer";
import content from "@/data/content.json";

export default function Home() {
  const { home } = content;
  const [stats, setStats] = useState({
    hashrate: 0,
    difficulty: 0,
    height: 0,
    supply: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/stats");
        const data = await res.json();
        setStats({
          hashrate: data.hashrate,
          difficulty: data.difficulty,
          height: data.tipHeight,
          supply: data.supply,
        });
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 30000); // Update every 30s
    return () => clearInterval(interval);
  }, []);

  const formatHashrate = (hashrate: number) => {
    if (!hashrate) return "Loading...";
    if (hashrate > 1e15) return `${(hashrate / 1e15).toFixed(2)} PH/s`;
    if (hashrate > 1e12) return `${(hashrate / 1e12).toFixed(2)} TH/s`;
    if (hashrate > 1e9) return `${(hashrate / 1e9).toFixed(2)} GH/s`;
    return `${((hashrate || 0) / 1e6).toFixed(2)} MH/s`;
  };

  const formatSupply = (supply: number) => {
    if (!supply) return "Loading...";
    return `${((supply || 0) / 1e6).toFixed(2)}M`;
  };

  const formatDifficulty = (difficulty: number) => {
    if (!difficulty) return "Loading...";
    return (difficulty || 0).toFixed(2);
  };

  const formatHeight = (height: number) => {
    if (!height) return "Loading...";
    return (height || 0).toLocaleString();
  };

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-32 lg:pb-32 px-4 md:px-10 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                {home.hero.badge}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter dark:text-white whitespace-pre-line">
              {home.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-lg">
              {home.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href={home.hero.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-8 rounded-full bg-primary hover:bg-[#e6e205] text-[#1c1c0d] font-bold text-base transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">
                  download
                </span>
                {home.hero.primaryCta.label}
              </a>
              <a
                href={home.hero.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-8 rounded-full border border-[#e9e8ce] dark:border-[#383726] bg-transparent hover:bg-neutral-100 dark:hover:bg-[#23220f] dark:text-white text-[#1c1c0d] font-bold text-base transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">
                  memory
                </span>
                {home.hero.secondaryCta.label}
              </a>
              <a
                href={home.hero.tertiaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-6 rounded-full text-neutral-600 dark:text-neutral-400 font-medium hover:text-primary transition-colors flex items-center justify-center gap-2"
              >
                {home.hero.tertiaryCta.label}
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          <div className="relative w-full aspect-square md:aspect-video lg:aspect-square lg:h-auto rounded-xl overflow-hidden shadow-2xl border border-[#e9e8ce] dark:border-[#383726] bg-surface-dark group">
            <div
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-60"
              data-alt={home.hero.imageAlt}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 p-6 rounded-xl bg-background-light/10 dark:bg-white/5 backdrop-blur-md border border-white/10">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">
                    Current Block
                  </p>
                  <p className="text-3xl font-mono font-bold text-white">
                    #{formatHeight(stats.height)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">
                    Network
                  </p>
                  <p className="text-xl font-mono font-bold text-primary">
                    Live
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section
        className="py-12 border-y border-[#e9e8ce] dark:border-[#383726] bg-background-light dark:bg-[#23220f]"
        id="stats"
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {home.stats.map((stat, index) => (
              <div key={stat.label} className={`flex flex-col gap-1 p-4 ${index > 0 ? 'border-l border-[#e9e8ce] dark:border-[#383726]' : ''}`}>
                <div className="flex items-center gap-2 mb-2 text-neutral-500 dark:text-neutral-400">
                  <span className="material-symbols-outlined text-[20px]">
                    {stat.icon}
                  </span>
                  <p className="text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
                <p className="text-2xl md:text-3xl font-bold dark:text-white tracking-tight">
                  {stat.label === "Hashrate" ? formatHashrate(stats.hashrate) :
                    stat.label === "Difficulty" ? formatDifficulty(stats.difficulty) :
                      stat.label === "Height" ? formatHeight(stats.height) :
                        formatSupply(stats.supply)}
                </p>
                <p className="text-sm text-[#078816] font-medium">{stat.label === "Supply" ? "Circulating" : "Live"}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About / Vision Section */}
      <section className="py-24 px-4 md:px-10" id="about">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4 flex flex-col justify-start">
              <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-6 whitespace-pre-line">
                {home.about.title}
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>
            <div className="md:col-span-8 flex flex-col gap-8">
              <p className="text-lg md:text-xl leading-relaxed text-neutral-600 dark:text-neutral-300">
                {home.about.description}
              </p>
              <div>
                <a
                  href={home.about.announcementLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    history_edu
                  </span>
                  View Original 2014 Announcement
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {home.about.features.map((feature) => (
                  <div key={feature.title} className="p-6 rounded-xl bg-white dark:bg-[#23220f] border border-[#e9e8ce] dark:border-[#383726]">
                    <span className="material-symbols-outlined text-primary text-[32px] mb-4">
                      {feature.icon}
                    </span>
                    <h3 className="text-lg font-bold dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Ecosystem Section */}
      <section
        className="py-24 bg-white dark:bg-[#23220f] border-t border-[#e9e8ce] dark:border-[#383726]"
        id="mining"
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                {home.ecosystem.subtitle}
              </span>
              <h2 className="text-3xl md:text-5xl font-black dark:text-white tracking-tight">
                {home.ecosystem.title}
              </h2>
            </div>
            <a
              className="text-neutral-600 dark:text-neutral-400 font-medium hover:text-primary transition-colors flex items-center gap-2 group"
              href="https://github.com/linkcoinproject"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Developer Docs
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {home.ecosystem.cards.map((card) => (
              <div key={card.title} className="group relative overflow-hidden rounded-[2rem] bg-background-light dark:bg-background-dark border border-[#e9e8ce] dark:border-[#383726] p-8 h-[400px] flex flex-col justify-between transition-all hover:border-primary/50">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-[120px]">
                    {card.title === "Mining" ? "hardware" : card.title === "Block Explorer" ? "search" : "groups"}
                  </span>
                </div>
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-full ${card.title === "Mining" ? "bg-primary" : "bg-surface-dark dark:bg-white"} flex items-center justify-center mb-6`}>
                    <span className={`material-symbols-outlined ${card.title === "Mining" ? "text-black" : "text-white dark:text-black"}`}>
                      {card.icon}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold dark:text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-neutral-500 dark:text-neutral-400">
                    {card.description}
                  </p>
                </div>
                <div className="relative z-10 flex flex-col gap-3">
                  {card.buttons?.map((btn: any) => (
                    <a
                      key={btn.label}
                      href={btn.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 rounded-full border border-neutral-300 dark:border-neutral-700 transition-all font-bold block text-center ${btn.variant === 'discord' ? 'hover:bg-[#5865F2] hover:border-[#5865F2] hover:text-white' : 'hover:bg-white hover:text-black dark:text-white dark:hover:bg-white dark:hover:text-black'}`}
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-[1280px] mx-auto rounded-[3rem] bg-primary overflow-hidden relative">
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-multiply"
            data-alt="Abstract cyber security digital texture"
          ></div>
          <div className="relative z-10 flex flex-col items-center justify-center py-20 px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-black mb-6 tracking-tight">
              {home.cta.title}
            </h2>
            <p className="text-lg md:text-xl text-neutral-800 max-w-2xl mb-10 font-medium">
              {home.cta.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={home.cta.primaryButton.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 px-8 rounded-full bg-black text-white hover:bg-neutral-800 font-bold text-lg transition-all hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <span className="material-symbols-outlined">download</span>
                {home.cta.primaryButton.label}
              </a>
              <a
                href={home.cta.secondaryButton.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 px-8 rounded-full border-2 border-black text-black hover:bg-black hover:text-white font-bold text-lg transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined">terminal</span>
                {home.cta.secondaryButton.label}
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <LandingFooter />
    </main>
  );
}
