import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

export default function HardMoneyMichigan() {
  return (
    <PageLayout>
      <section className="section-padding">
        <div className="section-container max-w-4xl">
          <span className="badge-accent mb-6 inline-block">Michigan Investment Property Financing</span>
          <h1 className="heading-section mb-6">Hard Money Loans &amp; Private Lending in Michigan</h1>
          <p className="text-body-lg mb-8">Y2K Lending works with real estate investors throughout Michigan, including Metro Detroit and communities across the state. Explore financing for property acquisitions, fix-and-flip projects, and short-term investment needs.</p>
          <h2 className="heading-card mb-4">Financing Fix-and-Flip Projects Across Michigan</h2>
          <p className="text-body mb-8">A fix-and-flip project combines a property purchase, renovation work, and a planned sale. When preparing a financing inquiry, explain the property's current condition, the improvements you intend to make, your renovation budget, and your expected sale timeline. Include the purchase price or current debt so the team can understand the complete project.</p>
          <h2 className="heading-card mb-4">Bridge Financing for Investment Properties</h2>
          <p className="text-body mb-8">Bridge financing addresses a short-term funding need while an investor prepares for a sale or longer-term financing. Describe the gap you need to cover and your repayment plan. If refinancing is your expected exit, include the anticipated timing and any arrangements already in progress.</p>
          <h2 className="heading-card mb-4">What to Include in Your Loan Request</h2>
          <ul className="list-disc pl-6 text-body space-y-3 mb-8">
            <li>The address of the investment property being financed.</li>
            <li>The requested loan amount and how the funds will be used.</li>
            <li>Your purchase price or current ownership and existing financing.</li>
            <li>A renovation scope and budget, if work is planned.</li>
            <li>When you need funding and your expected loan duration.</li>
            <li>Your exit strategy: a property sale, refinancing, or another repayment source.</li>
          </ul>
          <h2 className="heading-card mb-4">Questions About Michigan Private Lending</h2>
          <h3 className="font-semibold text-lg mb-2">Does Y2K Lending work with Metro Detroit investors?</h3>
          <p className="text-body mb-6">Yes. Y2K Lending serves real estate investors throughout Michigan, including Detroit and surrounding markets. Include the actual property location in your inquiry so the team can review the deal.</p>
          <h3 className="font-semibold text-lg mb-2">What loan terms are available?</h3>
          <p className="text-body mb-6">Request terms for your specific property and transaction. Ask about the interest rate, fees, loan duration, funding structure, and any conditions before deciding whether a loan fits your project.</p>
          <h3 className="font-semibold text-lg mb-2">How do I get started?</h3>
          <p className="text-body mb-8">Submit the loan request form with your project details. The team will review your inquiry and contact you to discuss your financing needs. An inquiry does not guarantee approval or funding.</p>
          <div className="flex flex-wrap gap-6 items-center">
            <Link to="/loan-request" className="inline-flex px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold">Request Investment Property Financing</Link>
            <Link to="/hard-money-lenders-detroit" className="text-primary underline">Metro Detroit lending information</Link>
            <Link to="/what-we-offer" className="text-primary underline">Explore loan options</Link>
            <Link to="/lending-process" className="text-primary underline">Review the lending process</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
