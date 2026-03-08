import { Link } from "react-router-dom";
import { Building, ArrowRightLeft, Clock, Banknote, Layers } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import cityBg from "@/assets/city-bg.jpg";

const offerings = [
  {
    icon: Building,
    title: "Fix and Flip Financing",
    description: "Short-term capital for investors acquiring, renovating, and reselling residential or commercial properties. Our financing is structured to align with your project timeline and expected return.",
  },
  {
    icon: ArrowRightLeft,
    title: "Bridge Loans",
    description: "Interim financing designed to bridge the gap between acquisition and long-term funding. Ideal for investors who need immediate capital while arranging permanent financing or awaiting a sale.",
  },
  {
    icon: Clock,
    title: "Short-Term Investment Loans",
    description: "Flexible loan structures for real estate investment strategies that require capital on a compressed timeline. We work with investors executing on time-sensitive acquisitions and dispositions.",
  },
  {
    icon: Banknote,
    title: "Fast Funding Solutions",
    description: "When a deal cannot wait, our accelerated review and funding process ensures that qualified borrowers receive capital with the speed their opportunities demand.",
  },
  {
    icon: Layers,
    title: "Asset-Based Lending",
    description: "Our lending decisions are driven primarily by the underlying real estate asset, allowing experienced investors to secure financing based on the strength and value of the property itself.",
  },
];

const WhatWeOffer = () => {
  return (
    <PageLayout>
      {/* Header */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={cityBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background" />
        </div>
        <div className="section-container text-center max-w-3xl">
          <AnimatedSection>
            <span className="badge-accent mb-4 inline-block">Our Services</span>
            <h1 className="heading-display mb-6">What We Offer</h1>
            <p className="text-body-lg">
              Y2K Lending provides a focused suite of financing solutions tailored to the needs of real estate investors. Each product is designed for clarity, speed, and alignment with your investment objectives.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Offerings */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.08}>
                <div className="card-elevated h-full flex flex-col text-center">
                  <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary-light flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="heading-card mb-4">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="section-container text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="heading-section mb-6">Explore Your Financing Options</h2>
            <p className="text-body-lg mb-8">
              Every deal is unique. Submit a loan request and our team will work with you to identify the most suitable financing structure for your investment.
            </p>
            <Link
              to="/loan-request"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark transition-colors duration-200 shadow-lg"
            >
              Submit a Loan Request
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default WhatWeOffer;
