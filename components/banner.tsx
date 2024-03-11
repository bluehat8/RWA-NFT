import type { NextPage } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';

const RisksMitigationFrame: NextPage = () => {
  return (
    <div className="container" style={{ minHeight: "100vmin" }}>
      <div className="row" style={{ marginTop: "30vmin" }}>
        <div className="col-md-6 order-md-2 mb-4 mb-md-0">
          <div className="row">
            <div className="col-12 text-center">
              <img src="/logo-1-1@2x.png" alt="Logo" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 order-md-1 d-flex align-items-center">
          <div className="w-100">
            <h2 className="fw-light text-md-start text-center">
              Build RWA based financial engines and systemitize them for growth
            </h2>
            <p className="fw-bold text-md-start text-center">
              Acquire and hold NFTs of financial assets linked to real-world goods to receive automatic dividends from their growth
            </p>
            <div className="d-flex justify-content-md-start justify-content-center">
              <button className="btn btn-primary mt-3" style={{ width: "367px", background: "#0f172a", border: "none" }}>
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="row order-md-3" style={{ marginTop: "12vmin" }}>
          <div className="col-12 text-center">
            <img src="/bimouse.svg" alt="Bimouse" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RisksMitigationFrame;