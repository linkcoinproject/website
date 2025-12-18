"use client";

import React from "react";

export default function TermsOfService() {
    return (
        <main className="flex-grow pt-32 pb-20 px-4 md:px-10 max-w-[1280px] mx-auto min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-black dark:text-white mb-8 tracking-tight">
                    Terms of Service
                </h1>
                <div className="prose dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-400">
                    <p className="mb-4">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <h2 className="text-2xl font-bold dark:text-white mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p className="mb-4">
                        By accessing and using the website linkcoinchain.com (the "Service") operated by the LinkCoin community ("us", "we", or "our"), you accept and agree to be bound by the terms and provision of this agreement.
                    </p>

                    <h2 className="text-2xl font-bold dark:text-white mt-8 mb-4">2. Description of Service</h2>
                    <p className="mb-4">
                        LinkCoin provides a decentralized blockchain network and associated information. The Service is provided "as is" and is for informational purposes only. We do not provide financial advice, and nothing on this Service should be construed as such.
                    </p>

                    <h2 className="text-2xl font-bold dark:text-white mt-8 mb-4">3. CryptoRisks</h2>
                    <p className="mb-4">
                        You acknowledge and agree that the use of cryptocurrencies involves significant risks. You are solely responsible for understanding the risks involving the use of LinkCoin and potential losses. The LinkCoin community is not responsible for any losses you may incur.
                    </p>

                    <h2 className="text-2xl font-bold dark:text-white mt-8 mb-4">4. Intellectual Property</h2>
                    <p className="mb-4">
                        The LinkCoin project is Open Source and released under the MIT License. You are free to copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, subject to the conditions of the license.
                    </p>

                    <h2 className="text-2xl font-bold dark:text-white mt-8 mb-4">5. User Conduct</h2>
                    <p className="mb-4">
                        You agree not to use the Service for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the Service in any way that could damage the Service, the services, or the general business of the LinkCoin community.
                    </p>

                    <h2 className="text-2xl font-bold dark:text-white mt-8 mb-4">6. Limitation of Liability</h2>
                    <p className="mb-4">
                        In no event shall the LinkCoin community, nor its contributors, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
                    </p>

                    <h2 className="text-2xl font-bold dark:text-white mt-8 mb-4">7. Changes to Terms</h2>
                    <p className="mb-4">
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
                    </p>

                    <h2 className="text-2xl font-bold dark:text-white mt-8 mb-4">8. Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions about these Terms, please contact us via our community channels:
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
