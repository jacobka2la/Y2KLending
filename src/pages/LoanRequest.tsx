import { useState, FormEvent } from "react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import bgLoan from "@/assets/bg-loan.jpg";
import { toast } from "sonner";

const LoanRequest = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xlgpgeld", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast.success("Your loan request has been submitted successfully. Our team will review your inquiry and respond promptly.");
        form.reset();
      } else {
        toast.error("There was an issue submitting your request. Please try again.");
      }
    } catch {
      toast.error("A network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 text-base font-body bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200";
  const labelClasses = "block text-sm font-semibold font-body text-foreground mb-2";

  return (
    <PageLayout>
      {/* Header */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgLoan} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background" />
        </div>
        <div className="relative section-container text-center max-w-3xl">
          <AnimatedSection>
            <span className="badge-accent mb-4 inline-block">Get Started</span>
            <h1 className="heading-display mb-6">Submit a Loan Request</h1>
            <p className="text-body-lg">
              Complete the form below to submit your loan inquiry. Our team will review the details and contact you to discuss your financing needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-2xl">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="card-elevated space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={labelClasses}>Full Name *</label>
                  <input type="text" id="name" name="name" required maxLength={100} className={inputClasses} placeholder="John Smith" />
                </div>
                <div>
                  <label htmlFor="email" className={labelClasses}>Email Address *</label>
                  <input type="email" id="email" name="email" required maxLength={255} className={inputClasses} placeholder="john@example.com" />
                </div>
              </div>

              {/* Phone & Loan Amount */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className={labelClasses}>Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required maxLength={20} className={inputClasses} placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label htmlFor="loanAmount" className={labelClasses}>Loan Amount Requested *</label>
                  <input type="text" id="loanAmount" name="loanAmount" required maxLength={50} className={inputClasses} placeholder="$250,000" />
                </div>
              </div>

              {/* Property Address */}
              <div>
                <label htmlFor="propertyAddress" className={labelClasses}>Property Address *</label>
                <input type="text" id="propertyAddress" name="propertyAddress" required maxLength={300} className={inputClasses} placeholder="123 Main Street, City, State, ZIP" />
              </div>

              {/* Property Type */}
              <div>
                <label htmlFor="propertyType" className={labelClasses}>Property Type *</label>
                <select id="propertyType" name="propertyType" required className={inputClasses}>
                  <option value="">Select property type</option>
                  <option value="Single Family">Single Family</option>
                  <option value="Multi-Family">Multi-Family</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Mixed Use">Mixed Use</option>
                  <option value="Land">Land</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Deal Description */}
              <div>
                <label htmlFor="dealDescription" className={labelClasses}>Brief Description of the Deal *</label>
                <textarea id="dealDescription" name="dealDescription" required maxLength={1000} rows={4} className={inputClasses} placeholder="Provide a summary of the property, your investment strategy, and the purpose of the loan." />
              </div>

              {/* Exit Strategy & Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="exitStrategy" className={labelClasses}>Exit Strategy *</label>
                  <input type="text" id="exitStrategy" name="exitStrategy" required maxLength={200} className={inputClasses} placeholder="e.g., Refinance, Sale" />
                </div>
                <div>
                  <label htmlFor="timeline" className={labelClasses}>Timeline *</label>
                  <input type="text" id="timeline" name="timeline" required maxLength={100} className={inputClasses} placeholder="e.g., 6 months, 12 months" />
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label htmlFor="notes" className={labelClasses}>Additional Notes</label>
                <textarea id="notes" name="notes" maxLength={1000} rows={3} className={inputClasses} placeholder="Any additional information you would like to share." />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-base font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark disabled:opacity-60 transition-colors duration-200 shadow-lg"
              >
                {isSubmitting ? "Submitting..." : "Submit Loan Request"}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you authorize Y2K Lending to review your inquiry and contact you regarding financing options.
              </p>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default LoanRequest;
