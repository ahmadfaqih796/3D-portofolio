import Image from "next/image";
import React from "react";

const ImageHook = ({ src, className, alt }) => {
  return (
    <Image
      src={src}
      width={"auto"}
      height={"auto"}
      className={className}
      priority
      alt={alt}
    />
  );
};

export default ImageHook;
