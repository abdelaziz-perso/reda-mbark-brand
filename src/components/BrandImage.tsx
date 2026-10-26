import Image, { type ImageProps } from "next/image";
import { publicPath } from "@/lib/constants";

export function BrandImage({ src, alt, ...props }: ImageProps) {
  // Static export + GitHub Pages: prefix absolute public paths ourselves.
  // next/image basePath handling for unoptimized images is unreliable here.
  const resolved = typeof src === "string" ? publicPath(src) : src;
  return <Image src={resolved} alt={alt} {...props} />;
}
