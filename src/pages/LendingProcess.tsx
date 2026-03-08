import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import bgProcess from "@/assets/bg-process.jpg";

const steps = [
  {
    number: "01",
    title: "Initial Inquiry",
    description: "The process begins with a conversation. You provide an overview of your deal, the property, your investment strategy, and your financing needs. This allows our team to understand the opportunity and determine how we can best assist.",
  },
  {
    number: "02",
    title: "Deal Review",
    description: "Our team conducts a thorough evaluation of the property, the proposed transaction, and the overall viability of the investment. We assess key factors including property value, location, condition, and the borrower's experience and track record.",
  },
  {
    number: "03",
    title: "Underwriting",
    description: "Once the initial review is complete, our underwriting team performs a detailed analysis of the deal. This includes valuation assessment, risk evaluation, and structuring of loan terms that align with the specifics of the transaction.",
  },
  {
    number: "04",
    title: "Terms and Approval",
    description: "Upon completion of underwriting, we present clear and comprehensive loan terms for your review. All rates, fees, timelines, and conditions are communicated transparently so you can make an informed decision with full confidence.",
  },
  {
    number: "05",
    title: "Funding",
    description: "Once terms are agreed upon and all conditions are satisfied, funds are disbursed promptly. Our commitment to efficiency ensures that your capital is available when you need it, allowing you to execute on your investment without delay.",
  },
];

const LendingProcess = () => {
  return (
    <PageLayout>
      {/* Header */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={cityBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background" />
        </div>
        <div className="relative section-container text-center max-w-3xl">
          <AnimatedSection>
            <span className="badge-accent mb-4 inline-block">How It Works</span>
            <h1 className="heading-display mb-6">Our Lending Process</h1>
            <p className="text-body-lg">
              We have designed a lending process that is efficient, transparent, and respectful of your time. From first contact to funding, every step is structured to provide clarity and confidence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />

            <div className="flex flex-col gap-12 md:gap-16">
              {steps.map((step, index) => (
                <AnimatedSection key={step.number} delay={index * 0.1}>
                  <div className="flex gap-6 md:gap-8 items-start">
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg md:text-xl shadow-lg">
                      {step.number}
                    </div>
                    <div className="pt-1 md:pt-3">
                      <h3 className="heading-card mb-3">{step.title}</h3>
                      <p className="text-body">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="section-container text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="heading-section mb-6">Begin the Process Today</h2>
            <p className="text-body-lg mb-8">
              Submit your loan request and our team will initiate a review promptly. We look forward to understanding your deal and exploring how Y2K Lending can support your investment.
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

export default LendingProcess;
