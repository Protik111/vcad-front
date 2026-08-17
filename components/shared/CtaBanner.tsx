import Container from "@/components/ui/Container";
import LogoMark from "@/components/ui/LogoMark";

/**
 * Closing call-to-action banner shown above the footer.
 */
export default function CtaBanner() {
  return (
    <section className="py-30 sm:py-38 bg-[url('/images/cta-background.png')] bg-right bg-no-repeat py-20 sm:py-28 bg-size-[605px]">
      <Container>
        <LogoMark size={102} />
        <p className="mt-8 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-section">
          Get creative and{" "}
          <span className="text-magenta">
            turn <br /> your passion
          </span>{" "}
          for the Arts into a <br /> rewarding career.
        </p>
      </Container>
    </section>
  );
}
