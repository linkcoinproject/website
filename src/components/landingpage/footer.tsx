"use client";

import Link from "next/link";
import content from "@/data/content.json";

export default function LandingFooter() {
  const currentYear = new Date().getFullYear();
  const { footer, site } = content;

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
              <h3 className="text-lg font-bold dark:text-white">{site.name}</h3>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
              {footer.description}
            </p>
          </div>
          {footer.sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold dark:text-white mb-6">{section.title}</h4>
              <ul className="flex flex-col gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      className="hover:text-primary transition-colors"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[#e9e8ce] dark:border-[#383726] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-400">
            {footer.copyright.replace("{year}", currentYear.toString())}
          </p>
          <div className="flex items-center gap-6">
            {footer.links.map((link) => (
              <Link key={link.label} className="text-xs text-neutral-400 hover:text-white" href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}