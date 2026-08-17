export type InfoIconName =
  | "calendar"
  | "clock"
  | "briefcase"
  | "pin"
  | "tag"
  | "award";

const ICON_PATHS: Record<InfoIconName, React.ReactNode> = {
  calendar: (
    <>
      <rect x="4" y="5.5" width="16" height="15" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4 9.5h16M8 3.5v3M16 3.5v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12.5" r="8" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 8v5l3.5 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3.5" y="8" width="17" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8.5 8V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2M3.5 13h17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </>
  ),
  pin: (
    <>
      <path
        d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </>
  ),
  tag: (
    <>
      <path
        d="m12 3.5 7 7a2 2 0 0 1 0 2.8l-6 6a2 2 0 0 1-2.8 0l-7-7v-6a2.8 2.8 0 0 1 2.8-2.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="8" r="1.2" fill="currentColor" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="m9 13-1.5 8L12 18l4.5 3L15 13" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </>
  ),
};

export default function InfoIcon({ name }: { name: InfoIconName }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {ICON_PATHS[name]}
    </svg>
  );
}
