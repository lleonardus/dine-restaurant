export function NumberOfPeopleSelector({ numberOfPeople, setNumberOfPeople }) {
  return (
    <div className="mb-8 flex items-center justify-between border-b border-shuttle-gray/40 px-[19px] pb-[17px]">
      <button
        type="button"
        className={`h-[3px] w-3 bg-[url('/images/icons/icon-minus.svg')] bg-cover bg-no-repeat hover:opacity-55 ${numberOfPeople === 1 ? "cursor-not-allowed opacity-55" : ""}`}
        onClick={() => setNumberOfPeople((n) => (n > 1 ? n - 1 : 1))}
      ></button>
      <p className="text-heading-base">
        {numberOfPeople} {numberOfPeople > 1 ? "people" : "person"}
      </p>
      <button
        type="button"
        className="h-[11px] w-[10px] bg-[url('/images/icons/icon-plus.svg')] bg-cover bg-no-repeat hover:opacity-55"
        onClick={() => setNumberOfPeople((n) => n + 1)}
      ></button>
    </div>
  );
}
