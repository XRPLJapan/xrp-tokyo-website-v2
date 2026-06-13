import type Lenis from "lenis";

/** Subscribe to scroll position via Lenis or native window scroll */
export function subscribeScroll(
  lenis: Lenis | undefined,
  onScroll: (scrollY: number) => void,
): () => void {
  if (lenis) {
    onScroll(lenis.scroll);
    const handler = ({ scroll }: { scroll: number }) => onScroll(scroll);
    lenis.on("scroll", handler);
    return () => {
      lenis.off("scroll", handler);
    };
  }

  const handler = () => onScroll(window.scrollY);
  window.addEventListener("scroll", handler, { passive: true });
  handler();
  return () => window.removeEventListener("scroll", handler);
}
