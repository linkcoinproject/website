"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import content from "@/data/content.json";

const navItems = content.navigation;

export function LandingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-[auto] w-full z-40 transition-all duration-300 ${isScrolled ? "bg-[var(--surface)]/95 backdrop-blur-md" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/lnc4.svg"
              alt="LinkCoin"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-xl font-bold text-[var(--secondary)]">LinkCoin</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="text-[var(--text-secondary)] hover:text-[var(--secondary)] transition-colors"
                >
                  {item.label}
                </Link>

                {item.subMenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-[var(--surface)] rounded-lg border border-[var(--secondary)]/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.subMenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        target={subItem.href.startsWith("http") ? "_blank" : undefined}
                        className="block px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--secondary)] hover:bg-[var(--card)] transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button asChild variant="default" className="bg-[var(--secondary)] text-white hover:bg-[var(--secondary-dark)]">
              <Link href="https://github.com/linkcoinproject/linkcoin/releases">Download Wallet</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[var(--text-primary)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-[var(--surface)] border-t border-[var(--secondary)]/10"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-[var(--text-secondary)] hover:text-[var(--secondary)] transition-colors py-2 block"
                  >
                    {item.label}
                  </Link>
                  {item.subMenu && (
                    <div className="pl-4 mt-2 space-y-2 border-l border-[var(--secondary)]/10">
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-2 text-[var(--text-secondary)] hover:text-[var(--secondary)] transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button asChild variant="default" className="bg-[var(--secondary)] text-black hover:bg-[var(--secondary-dark)] w-full">
                <Link href="#download">Install Now</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}