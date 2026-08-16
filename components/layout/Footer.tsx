import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SocialIcon from "@/components/ui/SocialIcon";
import { footerLinks, footerContact, socialLinks } from "@/data/footer";

const accreditationBadges = [
  { src: "/images/badge-advance-he.svg", alt: "Advance HE accreditation" },
  { src: "/images/badge-accreditation-1.svg", alt: "UK quality assurance badge" },
  { src: "/images/badge-accreditation-2.svg", alt: "Industry accreditation badge" },
];

/**
 * Shared site footer. Rendered once in the root layout so no page
 * duplicates footer markup.
 */
export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-deep">
      <Container className="py-14 sm:py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-8">
            <ul className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-pink hover:text-pink"
                  >
                    <SocialIcon label={social.label} />
                  </a>
                </li>
              ))}
            </ul>

            <nav aria-label="Footer">
              <ul className="grid grid-cols-2 gap-x-12 gap-y-4 sm:grid-cols-4">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-default font-medium uppercase tracking-[0.04em] text-text transition-colors hover:text-pink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-6 lg:items-end">
            <div className="lg:text-right">
              <a
                href={`mailto:${footerContact.email}`}
                className="text-lg font-semibold text-white transition-colors hover:text-pink sm:text-xl"
              >
                {footerContact.email}
              </a>
              <a
                href={`tel:${footerContact.phone.replace(/\s/g, "")}`}
                className="mt-1 block text-default text-sky transition-colors hover:text-pink"
              >
                {footerContact.phone}
              </a>
            </div>

            <ul className="flex items-center gap-3">
              {accreditationBadges.map((badge) => (
                <li key={badge.src}>
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={40}
                    height={40}
                    className="h-9 w-auto"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border/60 pt-6 text-meta text-sky sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Victoria College of Arts and Design.</p>
          <p>All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
