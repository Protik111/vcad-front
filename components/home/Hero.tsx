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
    <section className="overflow-x-hidden pt-8 sm:pt-12 lg:pt-25">
      <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-6">
        <div className="max-w-xl">
          <h1 className="text-[110px] font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[110px]">
            Welcome
            <br />
            to VCAD
          </h1>
          <p className="mt-6 text-body text-pale-blue">
            Our team at Victoria College of Arts and Design is passionate about
            creating innovative projects and generating new ideas. We work with
            a variety of experts and esteemed companies using a collaborative
            approach. Located in London&rsquo;s Design District, we have
            valuable connections within our industry. Search our latest courses.
          </p>
          <Button href="/courses" variant="solid" className="mt-8">
            Explore Courses
          </Button>
        </div>

        <div className="relative mx-auto aspect-19/20 w-full max-w-lg lg:mx-0 lg:max-w-none">
          <div className="absolute left-0 top-[5%] h-[58%] w-[43%] overflow-hidden rounded-card border border-pink/60 shadow-2xl">
            <Image
              src="/images/hero-fashion.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 24vw, 40vw"
              className="object-cover"
            />
          </div>
          <Tag
            tone="pink"
            rotate={-6}
            className="absolute left-[-6%] top-[8%] z-20"
          >
            Fashion
          </Tag>
          <Tag
            tone="plumWhite"
            rotate={8}
            className="absolute left-[-4%] top-[55%] z-20"
          >
            Media
          </Tag>

          <div className="absolute right-0 top-0 h-[53%] w-[42%] overflow-hidden rounded-card border border-pink/60 shadow-2xl">
            <Image
              src="/images/hero-photography.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 22vw, 36vw"
              className="object-cover"
            />
          </div>
          <Tag
            tone="magenta"
            rotate={5}
            className="absolute right-[2%] top-[7%] z-20"
          >
            Photography
          </Tag>
          <Tag
            tone="navyWhite"
            rotate={6}
            className="absolute right-[-8%] top-[40%] z-20"
          >
            Business
          </Tag>

          <div className="absolute bottom-0 left-[20%] h-[42%] w-[34%] overflow-hidden rounded-card border border-pink/60 shadow-2xl">
            <Image
              src="/images/hero-marketing.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 18vw, 30vw"
              className="object-cover"
            />
          </div>
          <Tag
            tone="navyCyan"
            rotate={-8}
            className="absolute bottom-[46%] left-[19%] z-30"
          >
            Graphic Design
          </Tag>
          <Tag
            tone="plum"
            // rotate={-4}
            className="absolute bottom-[-3%] left-[2%] z-20"
          >
            Management
          </Tag>

          <div className="absolute bottom-0 right-[3%] h-[46%] w-[41%] overflow-hidden rounded-card border border-pink/60 shadow-2xl">
            <Image
              src="/images/hero-media.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 22vw, 34vw"
              className="object-cover"
            />
          </div>
          <Tag
            tone="sky"
            rotate={-10}
            className="absolute bottom-[28%] left-[43%] z-30"
          >
            Marketing
          </Tag>
        </div>
      </Container>
    </section>
  );
}
