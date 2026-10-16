import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function CanonicalUrl() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    const url = `https://www.y2klending.com${path}`;
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", url);
    document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.setAttribute("content", url);
  }, [pathname]);

  return null;
}
