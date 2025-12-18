import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--secondary)]/10 bg-[var(--background)] backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex font-display">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo-junkcoin.png"
              alt="Linkcoin Logo"
              width={24}
              height={24}
              className="object-contain"
            />
            <span className="text-lg font-bold text-[var(--secondary)]">
              Linkcoin
            </span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2">
          <nav className="flex items-center space-x-6 font-mono text-sm">
            {/* ...existing navigation items... */}
          </nav>
          
          {/* ...existing user menu... */}
        </div>
      </div>
    </header>
  );
}
