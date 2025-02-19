import React from "react";

const Universe = () => {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <h1 className="mt-10">The NextGen Trade Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-5 text-center">
          <img
            src="media/images/NextGen TradeFundhouse.png"
            style={{ width: "70%" }}
          />
          <p className="mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals
          </p>
        </div>
        <div className="col-4 p-5 text-center">
          <img src="media/images/sensibullLogo.svg" style={{ width: "70%" }} />
          <p className="mt-4">
           
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-5 text-center">
          <img src="media/images/sensibullLogo.svg" style={{ width: "70%" }} />
          <p className="mt-4 ">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row text-center">
        

        <div className="col-4 p-5 text-center">
          <img
            src="media/images/streakLogo.png"
            style={{ width: "70%" }}
          />
          <p className="mt-3 ">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals
          </p>
        </div>
        <div className="col-4 p-5 text-center">
          <img src="media/images/smallcaseLogo.png" style={{ width: "70%" }} />
          <p className="mt-3 ">
           
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-5 text-center ">
          <img src="media/images/dittoLogo.png" style={{ width: "70%" }} />
          <p className="mt-4 ">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <button className='p-2 fs-5 btn btn-primary mb-5' style={{width:"25%", margin:"0 auto" }}> Sign Up for free </button>
      </div>
      
    </div>
  );
};

export default Universe;
