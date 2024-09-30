import { useEffect, useRef } from "react";
import { dateFormatter } from "./utils/formatters";
import { Button } from "../../../../ui/Button";

export function SuccessMessageModal({ formData, setIsOpen }) {
  const modalRef = useRef(null);
  const { name, email, date, numberOfPeople } = formData;
  const message = `Hello, ${name}. Your reservation for ${numberOfPeople} ${numberOfPeople > 1 ? "people" : "person"} on ${dateFormatter(date)} has been made successfully! For more information, see the email that we sent to ${email}`;

  useEffect(
    function () {
      function handleBlur(e) {
        if (!modalRef?.current.contains(e.target)) {
          setIsOpen(false);
        }
      }

      window.addEventListener("mousedown", handleBlur);
      return () => window.removeEventListener("mousedown", handleBlur);
    },
    [setIsOpen],
  );

  useEffect(
    function () {
      function handleKeyDown(e) {
        if (e.key === "Enter" || e.key === "Escape") setIsOpen(false);
      }

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    },
    [setIsOpen],
  );

  return (
    <div className="fixed inset-0 z-[9999] h-screen w-screen bg-black/50 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="absolute left-[50%] top-20 flex w-[90%] min-w-[327px] translate-x-[-50%] flex-col justify-center gap-10 rounded-md bg-white px-10 pb-8 pt-[34px] text-ebony-clay shadow-[0px_100px_80px_-30px_rgba(0,0,0,0.25)] sm:w-[540px] sm:items-center sm:text-center"
      >
        <div className="h-20 w-20 rounded-full tablet:h-28 tablet:w-28">
          <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            fill="#111111"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#17192b"
                d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
              ></path>
            </g>
          </svg>
        </div>
        <h1 className="text-[35px] text-heading-lg text-ebony-clay">
          Congratulations!
        </h1>
        <p className="text-body-base">{message}</p>
        <Button
          theme={"light"}
          additionalClasses={
            "w-full bg-red outline-red hover:after:outline-red hover:text-red hover:outline-red "
          }
          onClick={() => setIsOpen(false)}
        >
          Close
        </Button>
      </div>
    </div>
  );
}
