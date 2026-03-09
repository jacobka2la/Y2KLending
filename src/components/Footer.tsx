import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold font-body text-primary-foreground mb-4">Y2K Lending</h3>
            <p className="text-sm opacity-60 leading-relaxed max-w-xs mx-auto md:mx-0">
              Strategic hard money lending solutions for real estate investors. Dependable capital, transparent terms, and efficient execution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Who We Are", path: "/" },
                { label: "What We Offer", path: "/what-we-offer" },
                { label: "Lending Process", path: "/lending-process" },
                { label: "Why Choose Us", path: "/why-choose-us" },
                { label: "Submit a Loan Request", path: "/loan-request" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm opacity-60 hover:opacity-100 transition-opacity duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Get in Touch</h4>
            <p className="text-sm opacity-60 leading-relaxed">
              Ready to discuss your next real estate investment? Submit a loan request or reach out to our team directly.
            </p>
            <Link
              to="/loan-request"
              className="inline-block mt-4 px-6 py-2.5 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark transition-colors duration-200"
            >
              Submit a Request
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm opacity-40">
            © {new Date().getFullYear()} Y2K Lending. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
