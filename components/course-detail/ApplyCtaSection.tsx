import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

/**
 * "Ready to Apply?" band with decorative geometric shapes, matching
 * the design's accent pattern behind the two CTAs.
 */
export default function ApplyCtaSection() {
  return (
    <section className="relative overflow-hidden bg-card py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-10 top-0 h-40 w-40 rotate-12 bg-navy" />
        <div className="absolute left-16 bottom-0 h-0 w-0 border-x-[70px] border-b-[120px] border-x-transparent border-b-plum/60" />
        <div className="absolute right-24 top-6 h-0 w-0 border-x-[60px] border-b-[100px] border-x-transparent border-b-blue/50" />
        <div className="absolute -right-12 bottom-0 h-48 w-48 rounded-full bg-magenta/30" />
      </div>

      <Container className="relative">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Apply?</h2>
          <p className="text-default text-pale-blue">
            Take the next step in your creative journey and join Victoria
            College of Arts and Design.
          </p>
          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <Button href="/apply" arrow="outline">
              Apply Now
            </Button>
            <Button href="/contact" arrow="outline">
              Get more info
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
