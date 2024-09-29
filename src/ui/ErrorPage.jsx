import { Link, useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="mx-auto flex h-screen w-screen flex-col items-center bg-black px-4 pt-10 text-body-base text-white sm:px-10">
      <div className="grid place-items-center gap-2 pt-20 text-center">
        <h1 className="text-heading-xl font-bold">{error.status}</h1>
        <h2 className="text-heading-base font-extrabold">Oops!</h2>
        <p className="md:text-lg">Sorry, an unexpected error has occurred.</p>
        <p className="md:text-lg">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to={"/"} className="mt-5 text-[hsl(210,100%,70%)] underline">
          &rarr; Back to Dine
        </Link>
      </div>
    </div>
  );
}
