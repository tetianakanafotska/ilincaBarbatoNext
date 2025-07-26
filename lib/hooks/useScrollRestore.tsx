import { useEffect } from "react";

export function useScrollRestore(lenis: any) {
  useEffect(() => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (lenis && scrollPosition) {
      setTimeout(() => {
        lenis.scrollTo(Number(scrollPosition), { immediate: true });
        sessionStorage.removeItem("scrollPosition");
      }, 400);
    }
  }, [lenis]);
}
