import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";

const partners = [
  {
    name: "Ravensbourne University London",
    logo: "/images/partner-ravensbourne.svg",
  },
  {
    name: "Arts University Plymouth",
    logo: "/images/partner-arts-university-plymouth.svg",
  },
];

/**
 * "Partner Institutions" section: supporting copy on the left,
 * partner logos on the right.
 */
export default function PartnersSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-lg">
          <SectionLabel>Our Partners</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-section">
            Partner Institutions
          </h2>
          <p className="mt-5 text-default text-pale-blue">
            Our team at Victoria College of Arts and Design is passionate
            about creating innovative projects and generating new ideas. We
            work with a variety of experts and esteemed companies using a
            collaborative approach. Located in London&rsquo;s Design
            District, we have valuable connections within our industry.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-12 gap-y-8 lg:justify-end">
          {partners.map((partner) => (
            <Image
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              width={220}
              height={40}
              className="h-9 w-auto opacity-90"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
