"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const logos = [
  { 
    src: "/images/partners/blockraid.png", 
    name: "Blockraid",
    url: "https://blockraid.io"
  },
  { 
    src: "/images/partners/nodecattel.png", 
    name: "Nodecattel",
    url: "https://nodecattel.xyz"
  },
  { 
    src: "/images/partners/bitjurnal.png", 
    name: "Bitjurnal",
    url: "https://t.me/bitjurnalcrypto"
  }
];

// Set this to false to stop the animation
const ENABLE_ANIMATION = false;

export function RunningLogos() {
  return (
    <div className="w-full overflow-hidden py-10 bg-[#232323]/50">
      <div className="text-center mb-6">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Partners</h2>
      </div>
      
      <div className={`relative ${!ENABLE_ANIMATION ? 'flex justify-center' : ''}`}>
        <div className={`flex items-center gap-12 py-4 ${ENABLE_ANIMATION ? 'animate-slide-left' : 'justify-center'}`}>
          {[...(ENABLE_ANIMATION ? [...logos, ...logos] : logos)].map((logo, index) => (
            <Link
              key={index}
              href={logo.url}
              target="_blank"
              className="flex flex-col items-center gap-2 min-w-[120px] hover:scale-105 transition-transform"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={48}
                height={48}
                className="object-contain"
              />
              <span className="text-sm text-[#a3a3a3] hover:text-[#6eff75] transition-colors">
                {logo.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
