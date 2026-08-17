import Image from "next/image";
import Container from "@/components/ui/Container";

/**
 * "A world where everyone has the opportunity to fulfil their
 * potential" — pull-quote section: opening/closing quote glyphs
 * around the heading, a trio of overlapping polaroid-style photos,
 * and a faint decorative circle graphic as the section background.
 */
export default function QuoteSection() {
  return (
    <section className="bg-[url('/images/homepage/quote-section/quote-section-background.png')] bg-bottom-right bg-size-[65%] bg-no-repeat py-20 sm:py-28">
      <Container>
        <div className="flex pt-10">
          <div className="relative z-10 max-w-208">
            <Image
              src="/images/homepage/quote-section/right-appostrophi.png"
              alt=""
              width={67}
              height={51}
              className="absolute -left-17 -top-6 opacity-70"
            />
            <h2 className="text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-section">
              A world where{" "}
              <span className="bg-linear-to-r from-pink to-magenta bg-clip-text text-transparent">
                everyone <br /> has the opportunity
              </span>{" "}
              to
              <br /> fulfil their potential
            </h2>
            <Image
              src="/images/homepage/quote-section/left-appostrophi.png"
              alt=""
              width={67}
              height={51}
              className="absolute right-13 -bottom-6 mt-2 opacity-70"
            />
          </div>
        </div>

        <div className="relative mt-16 aspect-8/5 w-full max-w-3xl sm:mt-28">
          <div className="absolute bottom-0 left-0 z-10 h-full w-102.25 -rotate-15 overflow-hidden rounded-md border-4 border-white shadow-2xl">
            <Image
              src="/images/quote-portrait.jpg"
              alt="A VCAD student with a laptop and painting materials"
              fill
              sizes="(min-width: 1024px) 18vw, 34vw"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-[50%] h-full z-10 w-102.25 rotate-15 overflow-hidden rounded-md border-4 border-white shadow-2xl">
            <Image
              src="/images/quote-craft-1.jpg"
              alt="A VCAD student painting with watercolours"
              fill
              // sizes="(min-width: 1024px) 19vw, 36vw"
              className="object-cover"
            />
          </div>

          <div className="absolute right-[-60%] top-[-55%] z-5 h-134.5 w-102.5 overflow-hidden rounded-md border-4 border-white shadow-2xl">
            <Image
              src="/images/quote-craft-2.jpg"
              alt="VCAD fashion students working together on a garment"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
