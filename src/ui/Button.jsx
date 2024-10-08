import { Link } from "react-router-dom";

export function Button({
  children,
  additionalClasses,
  theme,
  to,
  disabled,
  type,
  onClick,
}) {
  const base = `relative z-[9999] inline-block overflow-hidden py-[18px] 
                text-center text-heading-sm uppercase outline outline-1 
                transition-[color] delay-75 ease-in after:absolute after:left-[50%]
                after:top-0 after:z-[-1] after:h-[110%] after:w-0 after:translate-x-[-50%]
                after:bg-white after:transition-[width] after:duration-[220ms] 
                after:ease-in hover:text-cod-gray after:hover:w-[110%] after:hover:outline
                disabled:cursor-wait disabled:bg-[transparent] disabled:text-cod-gray/30
                disabled:outline-cod-gray/30 disabled:after:relative disabled:hover:bg-[transparent]
                ${additionalClasses}`;

  const styles = {
    dark: `${base} bg-[transparent] text-white outline-white hover:outline-white after:hover:outline-white`,
    light: `${base} bg-cod-gray text-white outline-cod-gray hover:outline-cod-gray after:hover:outline-cod-gray`,
  };

  function handleClick() {
    const pageTop = document.documentElement;
    pageTop.scrollIntoView({ behavior: "instant" });
    onClick?.();
  }

  if (to) {
    return (
      <Link
        onClick={handleClick}
        to={to}
        className={`${styles[theme]} w-[245px]`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={() => onClick?.()}
      className={styles[theme]}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
