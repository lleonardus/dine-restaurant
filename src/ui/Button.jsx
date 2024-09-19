export function Button({ children, theme, to, disabled }) {
  const base = `relative z-[9999] inline-block py-[18px] text-center 
                text-heading-sm uppercase outline outline-1 transition-[color]
                delay-75 ease-in after:absolute after:left-[50%] after:top-0
                after:z-[-1] after:h-full after:w-0 after:translate-x-[-50%]
                after:bg-white after:transition-[width] after:duration-[220ms]
                after:ease-in after:hover:w-full hover:text-cod-gray 
                disabled:cursor-not-allowed disabled:bg-[transparent]
                disabled:text-cod-gray/30 disabled:outline-cod-gray/30 
                disabled:hover:bg-[transparent]`;

  const styles = {
    dark: `${base} bg-[transparent] text-white outline-white hover:outline-white`,
    light: `${base} bg-cod-gray text-white outline-cod-gray hover:outline-cod-gray`,
  };

  function handleClick(e) {
    e.preventDefault();
    window.history.pushState(null, "", to);
  }

  if (to) {
    return (
      <a
        href={to}
        onClick={handleClick}
        className={`${styles[theme]} w-[245px]`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${styles[theme]} w-full`}
      type="submit"
      disabled={disabled}
    >
      {children}
    </button>
  );
}
