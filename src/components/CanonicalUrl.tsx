import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const metadata: Record<string, [string, string]> = {
  "/": ["Hard Money Lender in Metro Detroit, MI | Y2K Lending", "Private real estate lending for Metro Detroit and Michigan investors. Explore fix-and-flip loans, bridge financing, and submit your property financing inquiry."],
  "/what-we-offer": ["Fix-and-Flip & Bridge Loans in Michigan | Y2K Lending", "Explore Michigan real estate investment financing: fix-and-flip loans, bridge loans, and asset-based lending. Find the right financing approach for your project."],
  "/lending-process": ["Real Estate Investment Loan Process | Y2K Lending", "Learn how to request investment property financing with Y2K Lending, from your initial inquiry and property review to loan terms and closing."],
  "/why-choose-us": ["Private Real Estate Lending in Michigan | Y2K Lending", "Learn about Y2K Lending's approach to private real estate financing for Michigan investors, with a focus on communication, property evaluation, and execution."],
  "/loan-request": ["Request a Michigan Investment Property Loan | Y2K Lending", "Submit your Michigan real estate loan inquiry. Share the property address, requested loan amount, project details, exit strategy, and funding timeline."],
  "/hard-money-lending-michigan": ["Michigan Hard Money Loans & Private Lending | Y2K Lending", "Explore hard money lending for Michigan investment properties, including Metro Detroit. Learn about fix-and-flip financing, bridge loans, and preparing a loan inquiry."],
};

export default function CanonicalUrl() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    const url = `https://www.y2klending.com${path}`;
    const [title, description] = metadata[path] ?? ["Page Not Found | Y2K Lending", "The requested page could not be found."];
    document.title = title;
    for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) {
      document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", description);
    }
    for (const selector of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) {
      document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", title);
    }
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", url);
    document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.setAttribute("content", url);
  }, [pathname]);

  return null;
}
