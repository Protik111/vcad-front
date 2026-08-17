import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

/**
 * "Ready to Apply?" band with decorative geometric shapes, matching
 * the design's accent pattern behind the two CTAs.
 */
export default function ApplyCtaSection() {
  return (
    <section className="relative overflow-hidden bg-card py-20 sm:py-20">
      <Container className="relative bg-[url('/images/apply-cta-left-bg.png'),url('/images/apply-cta-right-bg.png')] bg-[position:left,right] bg-no-repeat bg-auto">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Apply?
          </h2>
          <p className="text-default text-pale-blue">
            Take the next step in your creative journey and join Victoria
            College of Arts and Design.
          </p>
          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <Button href="/apply" variant="solid">
              Apply Now
            </Button>
            <Button href="/contact" variant="outline">
              Get more info
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
