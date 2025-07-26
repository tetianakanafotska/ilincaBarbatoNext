interface ArrowLinkProps {
  className?: string;
}

const ArrowLink = ({ className }: ArrowLinkProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 6.36 11"
    className={className}
  >
    <path
      d="m3.16,0v10.63m0-.02L.35,7.82m2.48,3.16l3.18-3.2"
      fill="none"
      stroke="currentColor"
    />
  </svg>
);

export default ArrowLink;
