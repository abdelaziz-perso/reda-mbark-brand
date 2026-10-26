import Image, { type ImageProps } from "next/image";
import { BASE_PATH, publicPath } from "@/lib/constants";

export function BrandImage({ src, alt, ...props }: ImageProps) {
  const resolved =
    typeof src === "string" && src.startsWith("/") && !src.startsWith(`${BASE_PATH}/`)
      ? publicPath(src)
      : src;
  return <Image src={resolved} alt={alt} {...props} />;
}
