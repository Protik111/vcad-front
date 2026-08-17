import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";

/**
 * Homepage hero: intro copy + CTA on the left, an overlapping photo
 * collage of the college's disciplines on the right. The collage is
 * purely decorative, so its images carry empty alt text while the
 * discipline tags convey the same information as text.
 */
export default function Hero() {
  return (
    <section className="pt-8 sm:pt-12 lg:pt-16">
      <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-10">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-hero">
            Welcome
            <br />
            to VCAD
          </h1>
          <p className="mt-6 max-w-md text-body text-pale-blue">
            Our team at Victoria College of Arts and Design is passionate
            about creating innovative projects and generating new ideas. We
            work with a variety of experts and esteemed companies using a
            collaborative approach. Located in London&rsquo;s Design
            District, we have valuable connections within our industry.
            Search our latest courses.
          </p>
          <Button href="/courses" arrow="outline" className="mt-8">
            Explore Courses
          </Button>
        </div>

        <div className="relative mx-auto aspect-[6/5] w-full max-w-lg lg:mx-0 lg:max-w-none">
          <div className="absolute left-0 top-0 h-[58%] w-[46%] -rotate-3 overflow-hidden rounded-card shadow-2xl">
            <Image
              src="/images/hero-fashion.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, 40vw"
              className="object-cover"
            />
          </div>
          <Tag
            tone="pink"
            rotate={-6}
            className="absolute left-[30%] top-[-4%] z-20"
          >
            Fashion
          </Tag>

          <div className="absolute right-0 top-0 h-[50%] w-[42%] rotate-3 overflow-hidden rounded-card shadow-2xl">
            <Image
              src="/images/hero-photography.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 22vw, 36vw"
              className="object-cover"
            />
          </div>
          <Tag
            tone="cyan"
            rotate={5}
            className="absolute right-[2%] top-[-3%] z-20"
          >
            Photography
          </Tag>

          <div className="absolute bottom-0 right-[4%] h-[54%] w-[32%] -rotate-2 overflow-hidden rounded-card shadow-2xl">
            <Image
              src="/images/hero-business.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 18vw, 30vw"
              className="object-cover"
            />
          </div>
          <Tag
            tone="magenta"
            rotate={8}
            className="absolute right-[-2%] top-[46%] z-20"
          >
            Business
          </Tag>
          <Tag
            tone="cyan"
            rotate={-4}
            className="absolute bottom-[1%] right-[2%] z-20"
          >
            Management
          </Tag>

          <div className="absolute bottom-0 left-[4%] h-[42%] w-[48%] rotate-2 overflow-hidden rounded-card shadow-2xl">
            <Image
              src="/images/hero-marketing.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 22vw, 34vw"
              className="object-cover"
            />
          </div>
          <Tag
            tone="blue"
            rotate={-10}
            className="absolute bottom-[38%] left-[26%] z-30"
          >
            Graphic Design
          </Tag>
          <Tag
            tone="pink"
            rotate={-3}
            className="absolute bottom-[10%] left-[-2%] z-20"
          >
            Media
          </Tag>
          <Tag
            tone="magenta"
            rotate={4}
            className="absolute bottom-[-3%] left-[24%] z-20"
          >
            Marketing
          </Tag>
        </div>
      </Container>
    </section>
  );
}
