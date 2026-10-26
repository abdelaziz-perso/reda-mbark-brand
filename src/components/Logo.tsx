import { publicPath } from "@/lib/constants";

type LogoProps = {
  className?: string;
  tone?: "light" | "dark";
};

export function Logo({ className = "h-11 w-auto", tone = "light" }: LogoProps) {
  const src = tone === "light" ? "/images/rm/logo-white.svg" : "/images/rm/logo-black.svg";
  return (
    // The mark is the supplied R&M monogram, traced from the brand board. SVG stays sharp at any size.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={publicPath(src)} alt="R&M CLOTHING" className={className} />
  );
}
