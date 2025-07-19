import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === "A" && "href" in target && target.getAttribute("href")?.startsWith("#")) {
        const anchor = document.querySelector(target.getAttribute("href")!);
        if (anchor) {
          event.preventDefault();
          anchor.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
}
