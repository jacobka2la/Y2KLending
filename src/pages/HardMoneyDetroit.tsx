import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

export default function HardMoneyDetroit() {
  return (
    <PageLayout>
      <section className="section-padding">
        <div className="section-container max-w-4xl">
          <span className="badge-accent mb-6 inline-block">Detroit Real Estate Investor Financing</span>
          <h1 className="heading-section mb-6">Hard Money Lenders in Detroit, Michigan</h1>
          <p className="text-body-lg mb-8">Looking at an investment property in Detroit? Y2K Lending works with Michigan real estate investors seeking private financing for acquisitions, renovations, and short-term projects. Tell us about the property and your plan so we can review your financing inquiry.</p>

          <h2 className="heading-card mb-4">Financing a Detroit Property Investment</h2>
          <p className="text-body mb-8">Detroit investment deals can involve vacant houses, properties needing substantial repairs, or purchases with tight transaction timelines. Before requesting financing, gather the property's address, purchase price, current condition, and estimated renovation costs. A realistic budget and repayment plan make it easier to evaluate the project. Availability and terms depend on the individual deal.</p>

          <h2 className="heading-card mb-4">Fix-and-Flip Loans for Detroit Projects</h2>
          <p className="text-body mb-8">If you plan to renovate and resell a Detroit property, explain the scope of work, contractor or project timeline, total budget, and expected resale strategy. Include whether the property is under contract or already owned. For projects with major repairs, identify the work needed before the property can be marketed or occupied.</p>

          <h2 className="heading-card mb-4">Bridge Financing and Refinancing Plans</h2>
          <p className="text-body mb-8">Some investors need short-term financing while preparing to sell or refinance. If refinancing is your exit strategy, describe when you expect to qualify for longer-term financing and what must happen first. If selling is the plan, include your expected listing and closing timeline. Neither exit strategy guarantees loan approval.</p>

          <h2 className="heading-card mb-4">Before You Request a Detroit Investment Loan</h2>
          <ul className="list-disc pl-6 text-body space-y-3 mb-8">
            <li>Confirm the property address and whether it is in Detroit or a nearby municipality.</li>
            <li>Provide the purchase price, current value estimate, and existing debt, if any.</li>
            <li>Describe planned repairs, estimated costs, and the project schedule.</li>
            <li>State the amount requested and when you need the funds.</li>
            <li>Explain how you expect to repay the loan, including a sale or refinance.</li>
          </ul>

          <h2 className="heading-card mb-4">Detroit Hard Money Lending Questions</h2>
          <h3 className="font-semibold text-lg mb-2">Can I inquire about a property that needs renovation?</h3>
          <p className="text-body mb-6">Yes. Share the property's condition and a clear repair plan with your inquiry. Y2K Lending will review the information you submit; approval and financing terms are not guaranteed.</p>
          <h3 className="font-semibold text-lg mb-2">Does the property have to be in Detroit city limits?</h3>
          <p className="text-body mb-6">No. Y2K Lending also serves real estate investors in the broader Metro Detroit area and elsewhere in Michigan. Include the exact address so the team can review the location.</p>
          <h3 className="font-semibold text-lg mb-2">How much does a hard money loan cost?</h3>
          <p className="text-body mb-8">Interest rates, fees, loan length, and other conditions vary by transaction. Request the complete proposed terms and review the total cost before making a financing decision.</p>

          <div className="flex flex-wrap gap-6 items-center">
            <Link to="/loan-request" className="inline-flex px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold">Submit a Detroit Loan Request</Link>
            <Link to="/hard-money-lending-michigan" className="text-primary underline">Michigan lending overview</Link>
            <Link to="/lending-process" className="text-primary underline">How the lending process works</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
