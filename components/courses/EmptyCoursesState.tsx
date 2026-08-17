import Button from "@/components/ui/Button";
import LogoMark from "@/components/ui/LogoMark";

/**
 * Shown in place of the course grid when there are currently no
 * courses to display. Uses the same visual language as the rest of
 * the site rather than a generic error screen.
 */
export default function EmptyCoursesState() {
  return (
    <div className="flex flex-col items-center gap-5 rounded-card border border-dashed border-border bg-card-alt px-8 py-20 text-center">
      <LogoMark size={36} />
      <div>
        <p className="text-card-title font-semibold text-white">No courses available right now</p>
        <p className="mt-2 max-w-md text-default text-pale-blue">
          We&rsquo;re updating our course listings. Check back soon, or explore
          the rest of VCAD in the meantime.
        </p>
      </div>
      <Button href="/" arrow="outline">
        Back to Homepage
      </Button>
    </div>
  );
}
