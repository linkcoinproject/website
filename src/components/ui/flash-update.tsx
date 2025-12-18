"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface FlashUpdateProps {
  show?: boolean;
  message: string;
  link: string;
}

export function FlashUpdate({ show = true, message, link }: FlashUpdateProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the update in this session
    const isDismissed = sessionStorage.getItem("updateDismissed");
    setIsVisible(show && !isDismissed);
  }, [show]);

  const handleDismiss = () => {
    sessionStorage.setItem("updateDismissed", "true");
    setIsVisible(false);
  };

  return (
    <div className="h-[34px]"> {/* Fixed height container */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "34px", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-[var(--secondary)] text-black overflow-hidden"
          >
            <div className="container mx-auto px-3 h-[34px] flex items-center justify-center">
              <div className="flex items-center justify-center gap-2 text-sm font-medium">
                <span>🎉</span>
                <Link 
                  href={link}
                  target="_blank"
                  className="hover:underline"
                >
                  {message}
                </Link>
                <button
                  onClick={handleDismiss}
                  className="absolute right-4 p-1 hover:bg-black/10 rounded-full transition-colors"
                  aria-label="Dismiss update"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
