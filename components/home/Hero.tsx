import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";

/**
 * Homepage hero: intro copy + CTA on the left, an overlapping photo
 * collage of the college's disciplines on the right. The collage is
 * purely decorative, so its images carry empty alt text while the
 * discipline tags convey the same information as text.
 *
 * The two bottom photos sit behind the two top photos (explicit
 * z-index, since the bottom photos come later in the DOM but must
 * render underneath), and `overflow-y-visible` pairs with
 * `overflow-x-hidden` so the browser doesn't fall back to an implicit
 * `overflow-y: auto` (a CSS quirk that otherwise gives the section its
 * own unwanted scrollbar).
 */
export default function Hero() {
  return (
    <section className="overflow-x-clip py-8 sm:py-12 lg:py-25">
      <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-6">
        <div className="max-w-xl">
          <h1 className="text-[110px] font-bold uppercase leading-[1.2] tracking-tight text-white sm:text-6xl lg:text-[110px]">
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
          <Button href="/courses" variant="solid" className="mt-15">
            Explore Courses
          </Button>
        </div>

        <div className="relative mx-auto aspect-19/20 w-full max-w-lg lg:mx-0 lg:max-w-none">
          {/* Bottom layer: sunglasses-pair (left) and book (right) photos, sit behind the top two. */}
          <div className="absolute top-[52%] bottom-0 left-[22%] z-0 h-[336px] w-[229px] overflow-hidden border border-magenta shadow-2xl">
            <Image
              src="/images/hero-marketing.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 20vw, 32vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-[-5%] right-[-11%] z-0 h-[411px] w-[280px] overflow-hidden border border-magenta shadow-2xl">
            <Image
              src="/images/hero-media.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 24vw, 36vw"
              className="object-cover"
            />
          </div>

          {/* Top layer: fashion (left) and photography (right) photos, overlap on top of the bottom two. */}
          <div className="absolute left-0 top-[2%] z-10 h-[416px] w-[283px] overflow-hidden border border-magenta shadow-2xl">
            <Image
              src="/images/hero-fashion.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 24vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="absolute right-[36px] top-[2%] z-10 h-[376px] w-[257px] overflow-hidden border border-magenta shadow-2xl">
            <Image
              src="/images/hero-photography.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 22vw, 36vw"
              className="object-cover"
            />
          </div>

          <Tag
            tone="pink"
            rotate={-10}
            className="absolute left-[-7%] top-[5%] z-20"
          >
            Fashion
          </Tag>
          <Tag
            tone="plumWhite"
            rotate={11}
            className="absolute left-[-6%] top-[54%] z-20"
          >
            Media
          </Tag>
          <Tag
            tone="magenta"
            rotate={15}
            className="absolute right-[-5%] top-[3%] z-20"
          >
            Photography
          </Tag>
          <Tag
            tone="navyWhite"
            rotate={15}
            className="absolute right-[-9%] top-[38%] z-20"
          >
            Business
          </Tag>
          <Tag
            tone="navyCyan"
            rotate={-12}
            className="absolute bottom-[47%] left-[18%] z-30"
          >
            Graphic Design
          </Tag>
          <Tag tone="plum" className="absolute bottom-[10%] left-[1%] z-20">
            Management
          </Tag>
          <Tag
            tone="sky"
            rotate={-14}
            className="absolute bottom-[14%] left-[48%] z-30"
          >
            Marketing
          </Tag>
        </div>
      </Container>
    </section>
  );
}
