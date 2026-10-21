import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Who We Are", path: "/" },
  { label: "What We Offer", path: "/what-we-offer" },
  { label: "Lending Process", path: "/lending-process" },
  { label: "Why Choose Us", path: "/why-choose-us" },
  { label: "Submit a Loan Request", path: "/loan-request" },
];

const Navbar = () => {
  const location = useLocation();
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      {/* Desktop Layout */}
      <div className="hidden md:flex section-container items-center h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 mr-8">
          <span className="inline-flex items-center justify-center w-[60px] h-[34px] rounded-md bg-foreground text-background text-xl font-bold font-body tracking-tight leading-none uppercase">Y2K</span>
          <span className="text-lg font-semibold font-body text-foreground tracking-wide uppercase">Lending</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center justify-center flex-1 gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 text-center ${
                  isActive
                    ? "text-primary bg-primary-light"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="relative ml-3 shrink-0">
          <button type="button" onClick={() => setContactOpen(!contactOpen)} aria-expanded={contactOpen} aria-controls="desktop-contact-menu" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            Contact Us Directly <span aria-hidden="true" className="text-xs">{contactOpen ? "▲" : "▼"}</span>
          </button>
          {contactOpen && (
            <div id="desktop-contact-menu" className="absolute right-0 top-full mt-2 w-64 rounded-xl border border-border bg-card p-4 shadow-xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Speak with Y2K Lending</p>
              <a href="tel:+15868998881" className="block rounded-md px-2 py-2 text-sm font-semibold text-foreground hover:bg-muted">Call 586-899-8881</a>
              <a href="mailto:mark@y2klending.com" className="block rounded-md px-2 py-2 text-sm font-semibold text-foreground hover:bg-muted">Email mark@y2klending.com</a>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Logo Row */}
        <div className="flex items-center justify-center h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-[52px] h-[30px] rounded-md bg-foreground text-background text-lg font-bold font-body tracking-tight leading-none uppercase">Y2K</span>
            <span className="text-base font-semibold font-body text-foreground tracking-wide uppercase">Lending</span>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-4 px-4 pb-3">
          <a href="tel:+15868998881" className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">Contact Us Directly · Call</a>
          <a href="mailto:mark@y2klending.com" className="text-xs font-semibold text-foreground underline underline-offset-4">Email Us</a>
        </div>
        {/* Scrollable Navigation Row */}
        <div className="overflow-x-auto border-t border-border scrollbar-hide">
          <div className="flex items-center gap-1 px-4 py-2 w-max">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`whitespace-nowrap px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-primary bg-primary-light"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;