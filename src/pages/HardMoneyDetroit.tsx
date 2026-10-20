import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

export default function HardMoneyDetroit() {
  return (
    <PageLayout>
      <section className="section-padding">
        <div className="section-container max-w-4xl">
          <span className="badge-accent mb-6 inline-block">Detroit Real Estate Investor Financing</span>
          <h1 className="heading-section mb-6">Hard Money Lenders in Detroit, Michigan</h1>
          <p className="text-body-lg mb-5">Looking for hard money loans in Detroit? Y2K Lending reviews financing inquiries from Michigan real estate investors purchasing, renovating, or repositioning investment properties. Share your deal details to explore whether a financing option may fit your project.</p>
          <div className="flex flex-wrap items-center gap-4 mb-10"><Link to="/loan-request" className="inline-flex px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold">Request Financing for Your Detroit Property</Link><Link to="/lending-process" className="text-primary underline">See the lending process</Link></div>
          <div className="grid sm:grid-cols-3 gap-4 mb-10"><div className="card-elevated p-5"><h2 className="font-semibold mb-2">Fix-and-flip projects</h2><p className="text-body">Describe your purchase, renovation budget, and expected resale plan.</p></div><div className="card-elevated p-5"><h2 className="font-semibold mb-2">Investment property acquisitions</h2><p className="text-body">Share the property, proposed purchase, and amount you want to finance.</p></div><div className="card-elevated p-5"><h2 className="font-semibold mb-2">Bridge financing inquiries</h2><p className="text-body">Explain your timeline and how you plan to sell or refinance.</p></div></div>

          <h2 className="heading-card mb-4">Financing a Detroit Property Investment</h2>
          <p className="text-body mb-8">Detroit investment deals can involve vacant houses, properties needing substantial repairs, or purchases with tight transaction timelines. Before requesting financing, gather the property's address, purchase price, current condition, and estimated renovation costs. A realistic budget and repayment plan make it easier to evaluate the project. Availability and terms depend on the individual deal.</p>

          <h2 className="heading-card mb-4">Fix-and-Flip Loans for Detroit Projects</h2>
          <p className="text-body mb-8">If you plan to renovate and resell a Detroit property, explain the scope of work, contractor or project timeline, total budget, and expected resale strategy. Include whether the property is under contract or already owned. For projects with major repairs, identify the work needed before the property can be marketed or occupied.</p>

          <h2 className="heading-card mb-4">Bridge Financing and Refinancing Plans</h2>
          <p className="text-body mb-8">Some investors need short-term financing while preparing to sell or refinance. If refinancing is your exit strategy, describe when you expect to qualify for longer-term financing and what must happen first. If selling is the plan, include your expected listing and closing timeline. Neither exit strategy guarantees loan approval.</p>

          <h2 className="heading-card mb-4">How Y2K Reviews a Detroit Loan Inquiry</h2>
          <p className="text-body mb-4">Every project is different. When you submit an inquiry, provide the details that help a lender assess the property and your proposed transaction. The information below is a preparation checklist, not a guarantee of approval or a published underwriting standard.</p>
          <h3 className="font-semibold text-lg mb-3">Information to prepare</h3>
          <ul className="list-disc pl-6 text-body space-y-3 mb-8">
            <li>Confirm the property address and whether it is in Detroit or a nearby municipality.</li>
            <li>Provide the purchase price, current value estimate, and existing debt, if any.</li>
            <li>Describe planned repairs, estimated costs, and the project schedule.</li>
            <li>State the amount requested and when you need the funds.</li>
            <li>Explain how you expect to repay the loan, including a sale or refinance.</li>
          </ul>

          <div className="bg-muted rounded-xl p-6 mb-10"><h2 className="heading-card mb-3">Real Estate Experience Behind Y2K Lending</h2><p className="text-body mb-4">Y2K Lending is led by CEO Mark Kattula, a Michigan real estate associate broker with experience in Metro Detroit property transactions. His real estate background informs the company’s understanding of investor projects. Brokerage transactions are not the same as Y2K-funded loans.</p><Link to="/" className="text-primary underline font-semibold">Meet Mark Kattula on our homepage</Link></div>
          <h2 className="heading-card mb-4">Detroit Hard Money Lending Questions</h2>
          <h3 className="font-semibold text-lg mb-2">Can I inquire about a property that needs renovation?</h3>
          <p className="text-body mb-6">Yes. Share the property's condition and a clear repair plan with your inquiry. Y2K Lending will review the information you submit; approval and financing terms are not guaranteed.</p>
          <h3 className="font-semibold text-lg mb-2">Does the property have to be in Detroit city limits?</h3>
          <p className="text-body mb-6">No. Y2K Lending also serves real estate investors in the broader Metro Detroit area and elsewhere in Michigan. Include the exact address so the team can review the location.</p>
          <h3 className="font-semibold text-lg mb-2">How much does a hard money loan cost?</h3>
          <p className="text-body mb-8">Interest rates, fees, loan length, and other conditions vary by transaction. Request the complete proposed terms and review the total cost before making a financing decision.</p>

          <h3 className="font-semibold text-lg mb-2">What are the minimum loan amount, interest rate, and loan term?</h3>
          <p className="text-body mb-6">Y2K Lending has not published standard minimum amounts, interest rates, or loan terms on this page. Share your property and requested amount so the team can discuss available options and any proposed costs before you decide whether to proceed.</p>
          <h3 className="font-semibold text-lg mb-2">How quickly can a loan close?</h3>
          <p className="text-body mb-8">Timing depends on the property, documentation, due diligence, and the specific transaction. Include your target closing date when you submit an inquiry; no closing timeline is guaranteed.</p>
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
