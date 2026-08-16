import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import MobileMenu from "./MobileMenu";
import { primaryNav } from "@/data/navigation";

/**
 * Shared site header. Rendered once in the root layout so no page
 * duplicates header markup.
 */
export default function Header() {
  return (
    <header className="border-b border-border/60">
      <Container className="flex h-20 items-center justify-between sm:h-24">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-default font-medium uppercase tracking-[0.06em] text-text transition-colors hover:text-pink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu />
      </Container>
    </header>
  );
}
