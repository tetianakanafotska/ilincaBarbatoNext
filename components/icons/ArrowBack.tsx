interface ArrowBackProps {
  className?: string;
}

const ArrowBack = ({ className }: ArrowBackProps) => (
  <svg
    viewBox="0 0 15 29"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
  >
    <path
      d="M0.981621 1.42041L13.5773 14.8655L0.909424 28.3108"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowBack;
