import { Link } from "react-router-dom";

export function Logo({ className }) {
  return (
    <Link to={"/"} className={className}>
      <img src="/images/logo.svg" alt="Dine logo" />
    </Link>
  );
}
