import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";

const partners = [
  {
    name: "Ravensbourne University London",
    logo: "/images/partner-ravensbourne.png",
    width: 352,
    height: 86,
  },
  {
    name: "Arts University Plymouth",
    logo: "/images/partner-arts-university-plymouth.png",
    width: 254,
    height: 86,
  },
];

/**
 * "Partner Institutions" section: supporting copy on the left,
 * partner logos on the right, with a faint decorative circle graphic
 * behind the whole section.
 */
export default function PartnersSection() {
  return (
    <section className="overflow-x-clip bg-[url('/images/partner-bg.png')] bg-top-right bg-no-repeat py-20 sm:py-28 bg-size-[620px]">
      <Container className="grid items-center gap-10 grid-cols-7 lg:gap-16">
        <div className="max-w-lg col-span-4">
          <SectionLabel>Our Partners</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-section">
            Partner Institutions
          </h2>
          <p className="mt-19 text-default text-pale-blue">
            Our team at Victoria College of Arts and Design is passionate about
            creating innovative projects and generating new ideas. We work with
            a variety of experts and esteemed companies using a collaborative
            approach. Located in London&rsquo;s Design District, we have
            valuable connections within our industry.
          </p>
        </div>

        <div className="flex flex-wrap flex-col items-start gap-x-12 gap-y-16 lg:justify-end col-span-3">
          {partners.map((partner) => (
            <Image
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              width={partner.width}
              height={partner.height}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
