import { Link } from "react-router-dom";

export function Logo({ className }) {
  function handleClick() {
    const pageTop = document.documentElement;
    pageTop.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Link to={"/"} onClick={handleClick} className={className}>
      <img src="/images/logo.svg" alt="Dine logo" />
    </Link>
  );
}
