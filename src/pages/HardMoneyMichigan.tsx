import { Link } from "react-router-dom";
import { ArrowRight, Building2, Hammer, ArrowRightLeft, MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import bgOffer from "@/assets/bg-offer.jpg";

const services = [
  { icon: Hammer, title: "Fix-and-Flip Financing", text: "Purchasing a property to renovate and resell? Share the acquisition details, proposed repairs, project budget, and resale plan." },
  { icon: Building2, title: "Investment Property Acquisitions", text: "Considering an investment purchase? Tell us where the property is, what stage the transaction is in, and your financing goals." },
  { icon: ArrowRightLeft, title: "Bridge Financing", text: "Planning a sale or refinance? Explain the timing of your transaction and how you expect to repay the financing." },
];

const questions = [
  { question: "Does Y2K Lending only serve Detroit?", answer: "No. Y2K Lending welcomes investment-property financing inquiries from across Michigan, including Metro Detroit. Share the property location when you contact us." },
  { question: "How is hard money lending different from a traditional mortgage?", answer: "Hard money lending commonly centers on real estate collateral and a specific investment transaction. Traditional mortgages often follow more standardized borrower and property criteria. Actual financing structures, costs, and risks vary." },
  { question: "Can I ask about a property that needs repairs?", answer: "Yes. Tell us about its condition, the planned work, and your investment strategy. Submitting an inquiry does not guarantee approval." },
  { question: "What are Y2K Lending's rates and loan requirements?", answer: "Potential rates, fees, requirements, and other terms are discussed directly with the team based on the individual inquiry. They are not listed as standard offers online." },
  { question: "How quickly can financing close?", answer: "The timeline depends on the property, transaction, documentation, and review. Include your desired closing date when contacting us. No specific funding timeline is guaranteed." },
];

export default function HardMoneyMichigan() {
  return (
    <PageLayout>
      {/* Match the photographic, centered hero used across the main website. */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgOffer} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background" />
        </div>
        <div className="relative section-container text-center max-w-4xl">
          <AnimatedSection>
            <span className="badge-accent mb-4 inline-block">Michigan Real Estate Investor Financing</span>
            <h1 className="heading-display mb-6">Hard Money Lenders in Michigan</h1>
            <p className="text-body-lg max-w-3xl mx-auto mb-8">
              Explore private real estate lending for Michigan investment properties with Y2K Lending.
              From fix-and-flip projects to property acquisitions and bridge financing, start with a conversation about your deal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/loan-request" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-dark transition-colors shadow-lg">
                Submit a Loan Request <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+15868998881" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" /> Call 586-899-8881
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="badge-accent mb-4 inline-block">Financing Conversations</span>
              <h2 className="heading-section mb-5">Private Lending for Michigan Investment Properties</h2>
              <p className="text-body-lg">Different projects call for different conversations. Tell us about the property and your investment strategy so we can discuss possible next steps.</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.08}>
                <div className="card-elevated h-full flex flex-col text-center">
                  <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary-light flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="heading-card mb-4">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="section-container grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection>
            <span className="badge-accent mb-4 inline-block">Statewide Focus</span>
            <h2 className="heading-section mb-6">Michigan-Focused Lending, Including Metro Detroit</h2>
            <p className="text-body mb-5">
              Y2K Lending works with real estate investors throughout Michigan, not just within Detroit city limits.
              Whether your investment property is in Metro Detroit or elsewhere in the state, share its location and your plans.
            </p>
            <p className="text-body mb-6">
              Michigan property markets can differ significantly by community. Comparable sales, local taxes, renovation costs,
              holding expenses, and resale demand all affect an investor's business plan.
            </p>
            <Link to="/hard-money-lenders-detroit" className="inline-flex items-center gap-2 text-primary font-semibold underline">
              Explore Metro Detroit lending <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="card-elevated">
              <div className="flex items-center gap-3 mb-5">
                <MapPin className="w-7 h-7 text-primary" />
                <h3 className="heading-card">Planning a Michigan Real Estate Investment?</h3>
              </div>
              <p className="text-body mb-5">Before requesting financing, it helps to understand the deal beyond the purchase price.</p>
              <ul className="space-y-4">
                {[
                  "Review recent comparable sales in the property's local market.",
                  "Estimate repair costs, property taxes, insurance, and carrying expenses.",
                  "Consider realistic renovation and closing timelines.",
                  "Plan how you expect to repay through a sale, refinance, or another exit."
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-body">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground mt-6">These are general investment-planning considerations, not Y2K Lending's underwriting requirements.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container max-w-5xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="badge-accent mb-4 inline-block">Getting Started</span>
              <h2 className="heading-section mb-5">How to Discuss a Michigan Loan Request</h2>
              <p className="text-body-lg max-w-3xl mx-auto">You don't need to choose a published loan package. Start by describing your property and investment plan.</p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { number: "01", title: "Identify the property", text: "Provide the Michigan property address and tell us whether you own it, have it under contract, or are evaluating a purchase." },
              { number: "02", title: "Describe your investment plan", text: "Explain the purchase, repairs, resale, refinance, or other intended use of the property." },
              { number: "03", title: "Share the timeline", text: "Tell us your target closing date and any transaction deadlines." },
              { number: "04", title: "Discuss financing directly", text: "Contact the Y2K Lending team to discuss possible terms, requirements, costs, and next steps for your specific inquiry." }
            ].map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.05}>
                <div className="card-elevated h-full flex gap-5">
                  <span className="font-heading text-3xl font-bold text-primary">{step.number}</span>
                  <div><h3 className="heading-card mb-3">{step.title}</h3><p className="text-body">{step.text}</p></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/lending-process" className="inline-flex items-center gap-2 text-primary font-semibold underline">Learn more about our lending process <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="section-container max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-10">
              <span className="badge-accent mb-4 inline-block">Common Questions</span>
              <h2 className="heading-section">Michigan Hard Money Lending FAQs</h2>
            </div>
          </AnimatedSection>
          <div className="space-y-4">
            {questions.map((item, index) => (
              <AnimatedSection key={item.question} delay={index * 0.04}>
                <div className="card-elevated">
                  <h3 className="heading-card mb-3">{item.question}</h3>
                  <p className="text-body">{item.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container text-center max-w-3xl">
          <AnimatedSection>
            <span className="badge-accent mb-4 inline-block">Let's Talk About Your Deal</span>
            <h2 className="heading-section mb-6">Have a Michigan Investment Property in Mind?</h2>
            <p className="text-body-lg mb-8">
              Send Y2K Lending the details of your project or contact our team directly.
              Financing terms and availability are discussed individually; submitting an inquiry is not an approval or funding commitment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/loan-request" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-dark transition-colors shadow-lg">
                Submit a Loan Request <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="mailto:mark@y2klending.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" /> Email Y2K Lending
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
