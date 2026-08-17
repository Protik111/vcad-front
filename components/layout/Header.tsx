import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

/**
 * Shared site header. Rendered once in the root layout so no page
 * duplicates header markup.
 */
export default function Header() {
  return (
    <header className="border-b border-border/60">
      <Container className="flex h-20 items-center justify-between gap-6 sm:h-24">
        <Logo />

        <NavLinks />

        <div className="flex items-center gap-4">
          <Button href="/apply" variant="solid" className="hidden sm:inline-flex">
            Apply Now
          </Button>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
