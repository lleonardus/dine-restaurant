export function ImageItem({ title }) {
  const imgName = title.toLowerCase().replaceAll(" ", "-");
  return (
    <li className={`h-full tablet:min-w-[573px] xl:w-full xl:min-w-[540px]`}>
      <picture>
        <source
          media="(min-width:1280px)"
          srcSet={`/images/homepage/${imgName}-desktop@2x.jpg`}
        />
        <source
          media="(min-width:768px)"
          srcSet={`/images/homepage/${imgName}-tablet@2x.jpg`}
        />
        <img
          src={`/images/homepage/${imgName}-mobile@2x.jpg`}
          alt={`${title}`}
        />
      </picture>
    </li>
  );
}
