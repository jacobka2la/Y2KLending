import { Link } from "react-router-dom";
import { MessageSquare, ClipboardCheck, FileText, Brain, CheckCircle, Handshake } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import cityBg from "@/assets/city-bg.jpg";

const strengths = [
  {
    icon: MessageSquare,
    title: "Responsive Communication",
    description: "We understand that timely communication is essential in real estate transactions. Our team is accessible, attentive, and committed to providing prompt responses at every stage of the process.",
  },
  {
    icon: ClipboardCheck,
    title: "Efficient Review Process",
    description: "Our streamlined review and underwriting process is designed to minimize delays without compromising thoroughness. We respect your timeline and work diligently to deliver decisions quickly.",
  },
  {
    icon: FileText,
    title: "Straightforward Terms",
    description: "Transparency is fundamental to how we operate. All loan terms, conditions, rates, and fees are presented clearly and comprehensively so you always know exactly where you stand.",
  },
  {
    icon: Brain,
    title: "Investor-Focused Mindset",
    description: "As a firm that works exclusively with real estate investors, we understand the dynamics of investment transactions. Our approach is informed by the realities of the market and the priorities of our borrowers.",
  },
  {
    icon: CheckCircle,
    title: "Reliable Execution",
    description: "When we make a commitment, we honor it. Our borrowers trust us to close on time and deliver capital as agreed. Reliability is not just a value — it is the standard by which we operate.",
  },
  {
    icon: Handshake,
    title: "Relationship-Based Service",
    description: "We invest in long-term relationships with our borrowers. Every interaction is an opportunity to demonstrate our commitment to your success and to build a partnership that extends beyond a single transaction.",
  },
];

const WhyChooseUs = () => {
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
            <span className="badge-accent mb-4 inline-block">Our Strengths</span>
            <h1 className="heading-display mb-6">Why Choose Y2K Lending</h1>
            <p className="text-body-lg">
              Borrowers choose Y2K Lending because we deliver on our commitments with professionalism, transparency, and a genuine commitment to their investment success.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Strengths Grid */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.08}>
                <div className="card-elevated h-full text-center">
                  <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary-light flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="heading-card mb-4">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
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
            <h2 className="heading-section mb-6">Experience the Difference</h2>
            <p className="text-body-lg mb-8">
              Discover what it means to work with a lending partner that prioritizes your success. Submit a loan request and let us demonstrate the Y2K Lending standard.
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

export default WhyChooseUs;
