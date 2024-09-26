import { useEffect, useState } from "react";

function getImgDimensions(windowSize) {
  if (windowSize < 768) {
    return { width: 326, height: 400 };
  } else if (windowSize < 1280) {
    return { width: 573, height: 360 };
  } else {
    return { width: 540, height: 600 };
  }
}

export function ImageList({ children, current }) {
  const [imgDimensions, setImgDimensions] = useState(
    getImgDimensions(window.innerWidth),
  );

  useEffect(function() {
    function handleResize() {
      setImgDimensions(getImgDimensions(window.innerWidth));
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ul
      className={`h-full w-full transition-all duration-300 tablet:flex xl:block`}
      style={{
        transform: `${window.innerWidth < 768 || window.innerWidth >= 1280 ? `translateY(-${current * imgDimensions.height}px)` : `translateX(-${current * imgDimensions.width}px)`}`,
      }}
    >
      {children}
    </ul>
  );
}
