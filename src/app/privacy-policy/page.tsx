"use client";

import React from "react";

export default function PrivacyPolicy() {
    return (
        <main className="flex-grow pt-32 pb-20 px-4 md:px-10 max-w-[1280px] mx-auto min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-black dark:text-white mb-8 tracking-tight">
                    Privacy Policy
                </h1>
                <div className="prose dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-400">
                    <p className="mb-4">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <h2 className="text-2xl font-bold dark:text-white mt-8 mb-4">1. Introduction</h2>
                    <p className="mb-4">
                        Welcome to LinkCoin. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website linkcoinchain.com, use our mobile application, or engage with our decentralized network (collectively, the "Service").
                    </p>
                    <p className="mb-4">
                        We respect your privacy and represent a decentralized community. As an open-source project, we prioritize user anonymity and data protection.
                    </p>

                    <h2 className="text-2xl font-bold dark:text-white mt-8 mb-4">2. Information We Collect</h2>
                    <p className="mb-4">
                        We are a privacy-focused project. We do not collect personal identification information (PII) such as names, addresses, or phone numbers unless you voluntarily provide them (e.g., when joining our newsletter or community channels).
                    </p>
                    <h3 className="text-xl font-semibold dark:text-white mt-6 mb-2">Blockchain Data</h3>
                    <p className="mb-4">
                        Please note that transactions on the LinkCoin blockchain are public. When you engage in transactions, your public wallet address and transaction details will be permanently recorded on the blockchain ledger. This is inherent to the nature of decentralized blockchains.
                    </p>
                    <h3 className="text-xl font-semibold dark:text-white mt-6 mb-2">Usage Data</h3>
                    <p className="mb-4">
                        We may collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                    </p>

                    <h2 className="text-2xl font-bold dark:text-white mt-8 mb-4">3. Use of Data</h2>
                    <p className="mb-4">
                        LinkCoin uses the collected data for various purposes:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>To provide and maintain the Service</li>
                        <li>To notify you about changes to our Service</li>
                        <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                        <li>To provide customer care and support</li>
                        <li>To provide analysis or valuable information so that we can improve the Service</li>
                        <li>To monitor the usage of the Service</li>
                        <li>To detect, prevent and address technical issues</li>
                    </ul>

                    <h2 className="text-2xl font-bold dark:text-white mt-8 mb-4">4. Disclosure of Data</h2>
                    <p className="mb-4">
                        We do not sell your personal data. We may disclose your Personal Data in the good faith belief that such action is necessary to:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>To comply with a legal obligation</li>
                        <li>To protect and defend the rights or property of LinkCoin</li>
                        <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                        <li>To protect the personal safety of users of the Service or the public</li>
                        <li>To protect against legal liability</li>
                    </ul>

                    <h2 className="text-2xl font-bold dark:text-white mt-8 mb-4">5. Security of Data</h2>
                    <p className="mb-4">
                        The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                    </p>

                    <h2 className="text-2xl font-bold dark:text-white mt-8 mb-4">6. Changes to This Privacy Policy</h2>
                    <p className="mb-4">
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                    </p>

                    <h2 className="text-2xl font-bold dark:text-white mt-8 mb-4">7. Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions about this Privacy Policy, please contact us via our community channels:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>By visiting our Telegram: <a href="https://t.me/Linkcoin_LNC" className="text-primary hover:underline">t.me/Linkcoin_LNC</a></li>
                        <li>By visiting our GitHub: <a href="https://github.com/linkcoinproject" className="text-primary hover:underline">github.com/linkcoinproject</a></li>
                    </ul>
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
