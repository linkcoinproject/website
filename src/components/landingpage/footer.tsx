"use client";

import Link from "next/link";

export default function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-[#e9e8ce] dark:border-[#383726] pt-16 pb-8 px-4 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="size-6 text-primary">
                <span className="material-symbols-outlined text-[24px]">
                  link
                </span>
              </div>
              <h3 className="text-lg font-bold dark:text-white">LinkCoin</h3>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
              The OG LinkCoin. Reimagined for a decentralized future.
            </p>
          </div>
          <div>
            <h4 className="font-bold dark:text-white mb-6">Ecosystem</h4>
            <ul className="flex flex-col gap-4 text-sm text-neutral-500 dark:text-neutral-400">
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="https://mine.linkcoinchain.com"
                >
                  Mining Pools
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Exchanges
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="https://github.com/linkcoinproject/linkcoin/releases"
                >
                  Wallets
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="https://explorer.linkcoinchain.com"
                >
                  Block Explorer
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold dark:text-white mb-6">Resources</h4>
            <ul className="flex flex-col gap-4 text-sm text-neutral-500 dark:text-neutral-400">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Whitepaper
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  API Documentation
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Brand Assets
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="https://github.com/linkcoinproject"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold dark:text-white mb-6">Community</h4>
            <ul className="flex flex-col gap-4 text-sm text-neutral-500 dark:text-neutral-400">
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="https://t.me/Linkcoin_LNC"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="https://x.com/Linkcoin_LNC"
                >
                  Twitter / X
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#e9e8ce] dark:border-[#383726] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-400">
            © {currentYear} LinkCoin Community. Open Source MIT License.
          </p>
          <div className="flex items-center gap-6">
            <Link className="text-xs text-neutral-400 hover:text-white" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="text-xs text-neutral-400 hover:text-white" href="/terms-of-service">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}