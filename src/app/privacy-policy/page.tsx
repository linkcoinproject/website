"use client";

import content from "@/data/content.json";

export default function PrivacyPolicy() {
    const { legal, site } = content;
    return (
        <main className="flex-grow pt-32 pb-20 px-4 md:px-10 max-w-[1280px] mx-auto min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-black dark:text-white mb-8 tracking-tight">
                    {legal.privacy.title}
                </h1>
                <div className="prose dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-400">
                    <p className="mb-4">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    {legal.privacy.sections.map((section) => (
                        <div key={section.title}>
                            <h2 className="text-2xl font-bold dark:text-white mt-8 mb-4">{section.title}</h2>
                            <p className="mb-4">{section.content}</p>

                            {section.subsections && section.subsections.map((sub) => (
                                <div key={sub.title}>
                                    <h3 className="text-xl font-semibold dark:text-white mt-6 mb-2">{sub.title}</h3>
                                    <p className="mb-4">{sub.content}</p>
                                </div>
                            ))}

                            {section.list && (
                                <ul className="list-disc pl-6 mb-4 space-y-2">
                                    {section.list.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )}

                            {section.title === "7. Contact Us" && (
                                <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>By visiting our Telegram: <a href={site.links.telegram} className="text-primary hover:underline">{site.links.telegram.replace("https://", "")}</a></li>
                                    <li>By visiting our Discord: <a href={site.links.discord} className="text-primary hover:underline">{site.links.discord.replace("https://", "")}</a></li>
                                    <li>By visiting our GitHub: <a href={site.links.github} className="text-primary hover:underline">{site.links.github.replace("https://", "")}</a></li>
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
                <div className="mt-12 pt-8 border-t border-[#e9e8ce] dark:border-[#383726]">
                    <a href="/" className="inline-flex items-center gap-2 text-primary hover:text-[#e6e205] font-bold transition-colors">
                        <span className="material-symbols-outlined">arrow_back</span>
                        Back to Home
                    </a>
                </div>
            </div>
        </main>
    );
}
