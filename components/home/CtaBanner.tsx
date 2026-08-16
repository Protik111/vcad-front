import Container from "@/components/ui/Container";
import LogoMark from "@/components/ui/LogoMark";

/**
 * Closing call-to-action banner shown above the footer.
 */
export default function CtaBanner() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <LogoMark size={44} />
        <p className="mt-8 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-section">
          Get creative and{" "}
          <span className="bg-gradient-to-r from-pink to-magenta bg-clip-text text-transparent">
            turn your passion
          </span>{" "}
          for the Arts into a rewarding career.
        </p>
      </Container>
    </section>
  );
}
