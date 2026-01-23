"use client";

import { useEffect } from "react";
import { LandingNavbar } from "@/components/landingpage/navbar";
import LandingFooter from "@/components/landingpage/footer";
import { FlashUpdate } from "@/components/ui/flash-update";
import { Shield, Wallet } from "lucide-react";

export default function SwapPage() {
  // Remove scroll lock to fix scrolling issues
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
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Swap Linkcoin</h1>
            <p className="text-[var(--text-muted)]">
              Powered by Komodo Wallet - Create a new wallet or import existing one to start swapping
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-[var(--surface)] p-4 rounded-lg border border-[var(--secondary)]/10">
              <div className="flex items-center gap-2 text-[var(--secondary)] mb-2">
                <Wallet className="w-5 h-5" />
                <h3 className="font-bold">Non-Custodial</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)]">
                Create a new wallet or import existing one. Your keys, your coins.
              </p>
            </div>
            <div className="bg-[var(--surface)] p-4 rounded-lg border border-[var(--secondary)]/10">
              <div className="flex items-center gap-2 text-[var(--secondary)] mb-2">
                <Shield className="w-5 h-5" />
                <h3 className="font-bold">Secure Swaps</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)]">
                Safe and secure atomic swaps powered by Komodo technology.
              </p>
            </div>
          </div>

          {/* Swap Interface */}
          <div className="bg-[var(--surface)] rounded-lg border border-[var(--secondary)]/10 overflow-hidden">
            <iframe
              src="https://app.komodoplatform.com/dex"
              className="w-full min-h-[800px]" // Fixed height instead of viewport-based
              allow="clipboard-write"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
          </div>

          {/* Instructions */}
          <div className="mt-6 p-4 bg-[var(--surface)] rounded-lg border border-[var(--secondary)]/10">
            <h3 className="font-bold mb-2">How to Swap</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-[var(--text-muted)]">
              <li>Create a new wallet or import existing one</li>
              <li>Save and secure your seed phrase</li>
              <li>Select LNC as the receive currency</li>
              <li>Choose the currency you want to swap from</li>
              <li>Enter the amount and confirm the swap</li>
            </ol>
          </div>
        </div>
      </main>

      <div className="mt-12">
        <LandingFooter />
      </div>
    </div>
  );
}
