import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "node:fs";
import { join } from "node:path";
import { createServer } from "vite";
import React from "react";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";

const root = "dist";
// Stable, publicly accessible landscape image for link previews.
copyFileSync("src/assets/city-bg.jpg", join(root, "social-preview.jpg"));
const template = readFileSync(join(root, "index.html"), "utf8");
const pages = [
  ["/", "Hard Money Lenders Michigan | Y2K Lending", "Explore hard money and private real estate lending across Michigan with Y2K Lending. Serving investors statewide, including Metro Detroit. Contact us about your project."],
  ["/what-we-offer", "Fix-and-Flip & Bridge Loans in Michigan | Y2K Lending", "Explore Michigan real estate investment financing: fix-and-flip loans, bridge loans, and asset-based lending. Find the right financing approach for your project."],
  ["/lending-process", "Real Estate Investment Loan Process | Y2K Lending", "Learn how to request investment property financing with Y2K Lending, from your initial inquiry and property review to loan terms and closing."],
  ["/why-choose-us", "Private Real Estate Lending in Michigan | Y2K Lending", "Learn about Y2K Lending's approach to private real estate financing for Michigan investors, with a focus on communication, property evaluation, and execution."],
  ["/loan-request", "Request a Michigan Investment Property Loan | Y2K Lending", "Submit your Michigan real estate loan inquiry. Share the property address, requested loan amount, project details, exit strategy, and funding timeline."],
  ["/hard-money-lenders-detroit", "Hard Money Lenders Detroit | Y2K Lending", "Explore hard money lending for Detroit investment properties, fix-and-flip projects, and bridge financing. Submit a Detroit real estate loan inquiry."],
  ["/hard-money-lending-michigan", "Michigan Hard Money Loans & Private Lending | Y2K Lending", "Explore hard money lending for Michigan investment properties, including Metro Detroit. Learn about fix-and-flip financing, bridge loans, and preparing a loan inquiry."]
];
const escapeHtml = s => s.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const renderablePages = {
  "/": "/src/pages/Home.tsx",
  "/what-we-offer": "/src/pages/WhatWeOffer.tsx",
  "/lending-process": "/src/pages/LendingProcess.tsx",
  "/why-choose-us": "/src/pages/WhyChooseUs.tsx",
  "/loan-request": "/src/pages/LoanRequest.tsx",
  "/hard-money-lenders-detroit": "/src/pages/HardMoneyDetroit.tsx",
  "/hard-money-lending-michigan": "/src/pages/HardMoneyMichigan.tsx"
};
const vite = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "error" });
try {
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
  if (renderablePages[route]) {
    const { default: Page } = await vite.ssrLoadModule(renderablePages[route]);
    const content = renderToString(React.createElement(MemoryRouter, { initialEntries: [route] }, React.createElement(Page)));
    if (!content.includes("<main")) throw new Error("SSR content missing main element for " + route);
    html = html.replace('<div id="root"></div>', '<div id="root">' + content + '</div>');
  }
  if (route === "/") {
    // The homepage is the root index file, not a nested route.
    writeFileSync(join(root, "index.html"), html);
  } else {
    const directory = join(root, route.slice(1));
    mkdirSync(directory, { recursive: true });
    writeFileSync(join(directory, "index.html"), html);
  }
}
} finally { await vite.close(); }
console.log("Generated crawlable HTML for " + pages.length + " pages, including public informational page SSR.");
