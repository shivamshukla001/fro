import React from "react";

const Brokerage = () => {
  return (
    <div className="container mt-5">
       <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8">
          <a href="" style={{textDecoration:"none"}}>
          <h3>Brokerage Calculator</h3> </a>
          <ul className="" style={{lineHeight:"2.5", textAlign:"left"}}>
    <li>Brokerage fees vary based on the broker and trade type.</li>
    <li>It includes charges like STT, SEBI fees, and GST.</li>
    <li>Stamp duty is applicable as per state regulations.</li>
    <li>Some brokers offer zero brokerage on equity delivery trades.</li>
    <li>Intraday and F&O trades usually have a fixed or percentage-based fee.</li>
    <li>Using a brokerage calculator helps estimate total trading costs.</li>
</ul>
         
        </div>
        <div className="col-4">
          <a href=""  style={{textDecoration:"none"}}><h3>List of Charges</h3></a> 
        </div>
      </div>
      <div className="row" style={{ lineHeight: "1.8" }}>
        <h3>Charges Explained</h3>
        <div className="col-6 mt-5">
          <h5>Free equity delivery</h5>
          <p>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.{" "}
          </p>
          <p>
            When trading at NextGen Trade, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h5>Transaction/Turnover Charges</h5>
          <p>
            {" "}
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.{" "}
          </p>
          <p>
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017){" "}
          </p>
          <p>
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover. BSE has revised transaction charges for
            group A, B and other non exclusive scrips (non-exclusive scrips from
            group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat
            rate basis w.e.f. December 1, 2022.{" "}
          </p>
          <p>
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>
          <h5>Call & trade</h5>
          <p>
            Additional charges of ₹50 per order for orders placed through a
            dealer at NextGen Trade including auto square off orders.
          </p>
        </div>
        <div className="col-6 mt-5" style={{ lineHeight: "1.8" }}>
          <h5>GST</h5>
          <p>
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>
          <h5>SEBI charges</h5>
          <p>Charged by SEBI on the value of your transactions.</p>
          <h5>Stamp duty</h5>
          <p>
            Charged by the state government on the value of your transactions.
          </p>
          <h5>STT/CTT</h5>
          <p>
            Charged by the government when transacting on the exchanges. Charged
            as above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.{" "}
          </p>
        </div>
        <h5>Disclaimer</h5>
        <p>
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
      <div className="row mt-5">
        <h3>Charges for account opening</h3>
        <div className="col">
          <table>
            <tr>
              <th>Type of Account</th>
              <th>Charges</th>
            </tr>
            <tr>
              <td>Online account</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>₹ 500</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="row mt-5">
        <h3 className="mt-5">Charges for optional value added services</h3>
        <div className="col">
        <table>
        <tr>
            <th>Service</th>
            <th>Billing Frequency</th>
            <th>Charges</th>
        </tr>
        <tr>
            <td>Tickertape</td>
            <td>Monthly / Annual</td>
            <td>Free: 0 | Pro: 249/2399</td>
        </tr>
        <tr>
            <td>Smallcase</td>
            <td>Per transaction</td>
            <td>Buy & Invest More: 100 | SIP: 10</td>
        </tr>
        <tr>
            <td>Kite Connect</td>
            <td>Monthly</td>
            <td>Connect: 2000 | Historical: 2000</td>
        </tr>
    </table>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
