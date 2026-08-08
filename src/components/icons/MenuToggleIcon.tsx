export default function MenuToggleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 25 18"
      fill="currentColor"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect className="v-menu-bar v-menu-bar-top" width="25" height="4" y="0" />
      <rect
        className="v-menu-bar v-menu-bar-middle"
        width="25"
        height="4"
        y="7"
      />
      <rect
        className="v-menu-bar v-menu-bar-bottom"
        width="25"
        height="4"
        y="14"
      />
    </svg>
  );
}
