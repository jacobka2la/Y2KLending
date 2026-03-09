import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Zap, Eye, Anchor, Clock, Building, Briefcase, Coins } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import cityBg from "@/assets/city-bg.jpg";
import patternBg from "@/assets/pattern-bg.jpg";

const coreValues = [
  { icon: Shield, title: "Integrity", description: "Every transaction is conducted with complete transparency and ethical standards that protect all parties involved." },
  { icon: Zap, title: "Speed", description: "Time-sensitive opportunities require swift action. Our streamlined processes are built to deliver capital when it matters most." },
  { icon: Eye, title: "Clarity", description: "From initial inquiry to final funding, every term, timeline, and expectation is communicated with precision." },
  { icon: Anchor, title: "Reliability", description: "When we commit to a deal, we execute. Our borrowers trust us to follow through on every agreement without exception." },
];

const Home = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img src={cityBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/80 to-background" />
        </div>
        <div className="relative section-container text-center py-28 md:py-40 lg:py-48">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="badge-accent mb-6 inline-block">Hard Money Lending</span>
            <h1 className="heading-display max-w-4xl mx-auto mb-6">
              Strategic Private Lending for Real Estate Investors
            </h1>
            <p className="text-body-lg max-w-2xl mx-auto mb-10">
              Y2K Lending provides dependable financing solutions designed for investors who need reliable capital to act on real estate opportunities with confidence and speed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/what-we-offer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark transition-colors duration-200 shadow-lg"
              >
                View Loan Options
              </Link>
              <Link
                to="/loan-request"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                Submit a Loan Request
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-background">
        <div className="section-container text-center max-w-4xl">
          <AnimatedSection>
            <span className="badge-accent mb-4 inline-block">About Us</span>
            <h2 className="heading-section mb-8">Who We Are</h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-body mb-6">
              Y2K Lending is a private lending firm dedicated to serving real estate investors who require timely, dependable capital. Founded on the principle that borrowers deserve a lending partner who operates with the same discipline and urgency as the investors it serves, our firm has established a reputation for consistent execution and transparent dealings.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="text-body mb-6">
              Our team brings together deep expertise in real estate finance, underwriting, and asset evaluation. We understand the complexities of investment transactions and the critical role that reliable financing plays in capitalizing on opportunities. Every engagement is handled with a commitment to clear communication, fair terms, and a thorough understanding of the deal at hand.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-body">
              At Y2K Lending, we do not view our borrowers as transactions. We see each loan as the beginning of a professional relationship built on mutual respect, shared objectives, and a commitment to results. Whether you are an experienced investor scaling a portfolio or executing your next acquisition, we are prepared to serve as a trusted capital partner.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-muted">
        <div className="section-container text-center">
          <AnimatedSection>
            <span className="badge-accent mb-4 inline-block">Our Foundation</span>
            <h2 className="heading-section mb-12">Core Values</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <AnimatedSection key={value.title} delay={0.1 + index * 0.08}>
                <div className="card-elevated text-center h-full">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary-light flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="heading-card mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={patternBg} alt="" className="w-full h-full object-cover opacity-40" />
        </div>
        <div className="relative section-container text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="heading-section mb-6">Ready to Get Started?</h2>
            <p className="text-body-lg mb-8">
              Whether you have an active deal or are preparing for your next opportunity, Y2K Lending is here to provide the capital solutions you need.
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

export default Home;
