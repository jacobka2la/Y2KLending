import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

export default function HardMoneyMichigan() {
  return (
    <PageLayout>
      <section className="section-padding">
        <div className="section-container max-w-5xl">
          <span className="badge-accent mb-6 inline-block">Michigan Real Estate Investor Financing</span>
          <h1 className="heading-section mb-6">Hard Money Lenders in Michigan | Private Real Estate Lending</h1>
          <p className="text-body-lg mb-6">Looking for a hard money lender in Michigan? Y2K Lending works with real estate investors across the state, including Metro Detroit. Tell us about your investment property, project goals, and timeline to start a conversation about financing.</p>
          <p className="text-body mb-8">Whether you are evaluating a property purchase, planning renovations, or considering bridge financing, our team discusses each inquiry individually. Loan rates, requirements, and proposed terms are discussed directly by phone or in person, rather than published as standard offers online.</p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="/loan-request" className="inline-flex px-7 py-3 rounded-lg bg-primary text-primary-foreground font-semibold">Discuss a Michigan Loan Request</Link>
            <Link to="/lending-process" className="inline-flex items-center text-primary underline font-semibold">How the process works</Link>
          </div>

          <h2 className="heading-card mb-5">Private Lending for Michigan Investment Properties</h2>
          <div className="grid md:grid-cols-3 gap-5 mb-12">
            <div className="card-elevated p-6"><h3 className="font-semibold text-lg mb-3">Fix-and-Flip Projects</h3><p className="text-body">Planning to buy, renovate, and resell? Start with the property's condition, scope of work, renovation budget, and expected resale plan.</p></div>
            <div className="card-elevated p-6"><h3 className="font-semibold text-lg mb-3">Investment Property Purchases</h3><p className="text-body">Considering an acquisition? Share the property location, transaction stage, investment strategy, and expected closing date.</p></div>
            <div className="card-elevated p-6"><h3 className="font-semibold text-lg mb-3">Bridge Financing Inquiries</h3><p className="text-body">Need to discuss short-term financing while preparing for a sale or refinance? Explain the timeline and your intended exit strategy.</p></div>
          </div>

          <h2 className="heading-card mb-4">Michigan-Focused Lending, Including Metro Detroit</h2>
          <p className="text-body mb-5">Y2K Lending's focus is Michigan statewide—not just Detroit city limits. We welcome inquiries about investment properties in Michigan communities, including Metro Detroit. The location, property type, and transaction details are considered as part of the individual discussion.</p>
          <p className="text-body mb-9">Michigan real estate markets differ from one community to another. When evaluating a project, investors should consider comparable property sales, local renovation costs, taxes, carrying costs, and realistic timelines. A plan that works for one neighborhood may not work for another.</p>

          <h2 className="heading-card mb-4">What Makes a Michigan Investment Project Worth Reviewing?</h2>
          <p className="text-body mb-5">A useful first conversation starts with the property and the business plan. For example, an investor purchasing a home to renovate and resell should understand the acquisition price, anticipated work, holding costs, and expected resale value. An investor planning to refinance should consider what needs to happen before longer-term financing is possible.</p>
          <p className="text-body mb-9">These are general project-planning considerations, not Y2K Lending's underwriting rules or a promise that any particular project will qualify. The purpose of the initial conversation is to understand the deal before discussing possible terms.</p>

          <h2 className="heading-card mb-4">How to Start a Conversation with Y2K Lending</h2>
          <ol className="list-decimal pl-6 text-body space-y-4 mb-10">
            <li><strong>Tell us about the property.</strong> Share its Michigan location and whether you own it, have it under contract, or are still evaluating it.</li>
            <li><strong>Explain your investment plan.</strong> Describe the intended purchase, renovation, resale, refinance, or other investment objective.</li>
            <li><strong>Discuss timing.</strong> Let the team know where the transaction stands and when you hope to move forward.</li>
            <li><strong>Speak directly about financing.</strong> Contact Y2K Lending to discuss any potential financing structure, costs, requirements, and next steps privately.</li>
          </ol>

          <div className="bg-muted rounded-xl p-7 mb-12">
            <h2 className="heading-card mb-4">Michigan Real Estate Experience Behind Y2K Lending</h2>
            <p className="text-body mb-4">Y2K Lending is led by Mark Kattula, a Michigan real estate associate broker. His experience with property transactions in Metro Detroit provides practical perspective on property values, negotiations, and real estate investment decisions.</p>
            <p className="text-body mb-4">You can learn more about Mark's professional real estate background through his <a href="https://markkattula.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">real estate website</a> and <a href="https://www.homes.com/real-estate-agents/mark-kattula/es1r38n/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Homes.com profile</a>.</p>
            <Link to="/" className="text-primary underline font-semibold">Meet our leadership</Link>
          </div>

          <h2 className="heading-card mb-5">Michigan Hard Money Lending FAQs</h2>
          <h3 className="font-semibold text-lg mb-2">Does Y2K Lending only work in Detroit?</h3>
          <p className="text-body mb-6">No. Y2K Lending focuses on real estate investment inquiries throughout Michigan, including Metro Detroit. Share the property's location when contacting the team.</p>
          <h3 className="font-semibold text-lg mb-2">What is the difference between hard money lending and a traditional mortgage?</h3>
          <p className="text-body mb-6">Hard money lending generally focuses on real estate collateral and a specific investment transaction, while traditional mortgages often follow more standardized borrower and property requirements. Financing structures and risks vary, so discuss the complete terms of any proposal before proceeding.</p>
          <h3 className="font-semibold text-lg mb-2">Can I discuss a property that needs repairs?</h3>
          <p className="text-body mb-6">Yes. You can submit an inquiry describing the property's current condition and your renovation plan. An inquiry is not an approval or funding commitment.</p>
          <h3 className="font-semibold text-lg mb-2">Are interest rates and loan requirements listed online?</h3>
          <p className="text-body mb-6">No. Y2K Lending discusses financing requirements, potential rates, fees, and other terms directly over the phone or in person, based on the individual inquiry.</p>
          <h3 className="font-semibold text-lg mb-2">How quickly can financing be arranged?</h3>
          <p className="text-body mb-9">Timing depends on the transaction, property, documentation, and review. Tell the team your target closing date when you inquire. No specific funding timeline is guaranteed.</p>

          <div className="rounded-xl border border-border p-7">
            <h2 className="heading-card mb-3">Have a Michigan Investment Property in Mind?</h2>
            <p className="text-body mb-6">Contact Y2K Lending to discuss your project and possible next steps directly. You do not need to choose from published loan packages to start a conversation.</p>
            <div className="flex flex-wrap items-center gap-5">
              <Link to="/loan-request" className="inline-flex px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold">Submit a Loan Inquiry</Link>
              <Link to="/lending-process" className="text-primary underline">See our process</Link>
              <Link to="/hard-money-lenders-detroit" className="text-primary underline">Metro Detroit lending</Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
