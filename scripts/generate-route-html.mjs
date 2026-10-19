import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = "dist";
const template = readFileSync(join(root, "index.html"), "utf8");
const pages = [
  ["/what-we-offer", "Fix-and-Flip & Bridge Loans in Michigan | Y2K Lending", "Explore Michigan real estate investment financing: fix-and-flip loans, bridge loans, and asset-based lending. Find the right financing approach for your project."],
  ["/lending-process", "Real Estate Investment Loan Process | Y2K Lending", "Learn how to request investment property financing with Y2K Lending, from your initial inquiry and property review to loan terms and closing."],
  ["/why-choose-us", "Private Real Estate Lending in Michigan | Y2K Lending", "Learn about Y2K Lending's approach to private real estate financing for Michigan investors, with a focus on communication, property evaluation, and execution."],
  ["/loan-request", "Request a Michigan Investment Property Loan | Y2K Lending", "Submit your Michigan real estate loan inquiry. Share the property address, requested loan amount, project details, exit strategy, and funding timeline."],
  ["/hard-money-lending-michigan", "Michigan Hard Money Loans & Private Lending | Y2K Lending", "Explore hard money lending for Michigan investment properties, including Metro Detroit. Learn about fix-and-flip financing, bridge loans, and preparing a loan inquiry."]
];
const escapeHtml = s => s.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
for (const [route, title, description] of pages) {
  const url = "https://www.y2klending.com" + route;
  let html = template
    .replace(/<title>[^<]*<\/title>/, "<title>" + escapeHtml(title) + "</title>")
    .replace(/(<meta name="description" content=")[^"]*(")/, (_, a, b) => a + escapeHtml(description) + b)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, (_, a, b) => a + url + b)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, (_, a, b) => a + url + b)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, (_, a, b) => a + escapeHtml(title) + b)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, (_, a, b) => a + escapeHtml(title) + b)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, (_, a, b) => a + escapeHtml(description) + b)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, (_, a, b) => a + escapeHtml(description) + b);
  const directory = join(root, route.slice(1));
  mkdirSync(directory, { recursive: true });
  writeFileSync(join(directory, "index.html"), html);
}
console.log("Generated route-specific HTML metadata for " + pages.length + " pages.");
