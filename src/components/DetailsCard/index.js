import { Link } from "react-router-dom";
import "./index.css";

const DetailsCard = () => {
  return (
    <div className="details-container">
      <Link
        style={{ color: "black", textDecoration: "none", marginRight: "10px" }}
        to="/table-4"
        className="details-card"
      >
        <li>
          <div className="heading-container">
            <h1 className="heading">
              4.Deatils of advances,inward and outward supplies made during the
              finance year on which tax payble
            </h1>
          </div>
          <div className="row">
            <div className="column">
              <p className="para">
                Taxble Value <br /> ₹41,87,520.83
              </p>
            </div>
            <div className="column">
              <p className="para">
                Integrated Tax (₹) <br /> ₹0.0
              </p>
            </div>
            <div className="column">
              <p className="para">
                Central Tax (₹) <br /> ₹3,80,865.12
              </p>
            </div>
            <div className="column">
              <p className="para">
                State / UT tax (₹) <br /> ₹3,80,865
              </p>
            </div>
            <div className="column">
              <p className="para">
                CESS (₹) <br /> ₹0.00
              </p>
            </div>
          </div>
        </li>
      </Link>

      <Link
        style={{ color: "black", textDecoration: "none", marginRight: "10px" }}
        to="/table-5"
        className="details-card"
      >
        <li>
          <div className="heading-container">
            <h1 className="heading">
              5.Details of outward supplies during the financial year on which
              tax is not payble
            </h1>
          </div>
          <div className="row">
            <div className="column">
              <p className="para">
                Value (₹) <br /> ₹0.00
              </p>
            </div>
          </div>
        </li>
      </Link>

      <Link
        style={{ color: "black", textDecoration: "none", marginRight: "10px" }}
        to="/table-6"
        className="details-card"
      >
        <li className="">
          <div className="heading-container">
            <h1 className="heading">
              6.Deatails of itc avalid during financial year.
            </h1>
          </div>
          <div className="row">
            <div className="column">
              <p className="para">
                Integrated Tax (₹) <br /> ₹0.00
              </p>
            </div>
            <div className="column">
              <p className="para">
                Central Tax (₹) <br /> ₹0.00
              </p>
            </div>
            <div className="column">
              <p className="para">
                State / UT tax (₹) <br /> ₹0.00
              </p>
            </div>
            <div className="column">
              <p className="para">
                CESS (₹) <br /> ₹0.00
              </p>
            </div>
          </div>
        </li>
      </Link>

      <Link
        style={{ color: "black", textDecoration: "none", marginRight: "10px" }}
        to="/table-7"
        className="details-card"
      >
        <li>
          <div className="heading-container">
            <h1 className="heading">
              7.Deatils of ITC Reversed and Ineligible itc during the financial
              year
            </h1>
          </div>
          <div className="row">
            <div className="column">
              <p className="para">
                Integrated Tax (₹) <br /> ₹-
              </p>
            </div>
            <div className="column">
              <p className="para">
                Central Tax (₹) <br /> ₹-
              </p>
            </div>
            <div className="column">
              <p className="para">
                State / UT tax (₹) <br /> ₹-
              </p>
            </div>
            <div className="column">
              <p className="para">
                CESS (₹) <br /> ₹-
              </p>
            </div>
          </div>
        </li>
      </Link>

      <Link
        style={{ color: "black", textDecoration: "none", marginRight: "10px" }}
        to="/table-8"
        className="details-card"
      >
        <li>
          <div className="heading-container">
            <h1 className="heading">8. Other ITC Related Information</h1>
          </div>
          <div className="row">
            <div className="column">
              <p className="para">
                Integrated Tax (₹) <br /> ₹0.00
              </p>
            </div>
            <div className="column">
              <p className="para">
                Central Tax (₹) <br /> ₹3,70,608.56
              </p>
            </div>
            <div className="column">
              <p className="para">
                State / UT tax (₹) <br /> ₹3,70,608.56
              </p>
            </div>
            <div className="column">
              <p className="para">
                CESS (₹) <br /> ₹0.00
              </p>
            </div>
          </div>
        </li>
      </Link>

      <Link
        style={{ color: "black", textDecoration: "none", marginRight: "10px" }}
        to="/table-9"
        className="details-card"
      >
        <li>
          <div className="heading-container">
            <h1 className="heading">
              9.Deatils of tax paid as declared in returns feild during the
              financial year
            </h1>
          </div>
          <div className="row">
            <div className="column">
              <p className="para">
                Taxble Value <br /> ₹7,62,932.00
              </p>
            </div>
            <div className="column">
              <p className="para">
                Paid Through Cash (₹) <br /> ₹10,090.00
              </p>
            </div>
            <div className="column">
              <p className="para">
                Paid Through ITC (₹) <br /> ₹7,52,842.00
              </p>
            </div>
          </div>
        </li>
      </Link>

      <Link
        style={{ color: "black", textDecoration: "none", marginRight: "10px" }}
        to="multi-table"
        className="details-card"
      >
        <li>
          <div className="heading-container">
            <h1 className="heading">
              10,11,12&13 Particulars of the tranctions financial year till the
              expand
            </h1>
          </div>
          <div className="row">
            <div className="column">
              <p className="para">
                Taxble Value <br /> ₹41,87,520.83
              </p>
            </div>
            <div className="column">
              <p className="para">
                Integrated Tax (₹) <br /> ₹0.0
              </p>
            </div>
            <div className="column">
              <p className="para">
                Central Tax (₹) <br /> ₹3,80,865.12
              </p>
            </div>
            <div className="column">
              <p className="para">
                State / UT tax (₹) <br /> ₹3,80,865
              </p>
            </div>
            <div className="column">
              <p className="para">
                CESS (₹) <br /> ₹0.00
              </p>
            </div>
          </div>
        </li>
      </Link>

      <Link
        style={{ color: "black", textDecoration: "none", marginRight: "10px" }}
        to="/table-14"
        className="details-card"
      >
        <li>
          <div className="heading-container">
            <h1 className="heading">
              14. Different Tax paidon account of declaration in table no. 10 &
              11
            </h1>
          </div>
          <div className="row">
            <div className="column">
              <p className="para">
                Taxble Value <br /> ₹-
              </p>
            </div>
            <div className="column">
              <p className="para">
                Tax Paid (₹) <br /> ₹-
              </p>
            </div>
          </div>
        </li>
      </Link>

      <Link
        style={{ color: "black", textDecoration: "none", marginRight: "10px" }}
        to="/table-15"
        className="details-card"
      >
        <li>
          <div className="heading-container">
            <h1 className="heading">15. Particulars of Demands and Refunds</h1>
          </div>
          <div className="row">
            <div className="column">
              <p className="para">
                Refund Claimed <br /> ₹-
              </p>
            </div>
            <div className="column">
              <p className="para">
                Refund Sectioned (₹) <br /> ₹-
              </p>
            </div>
            <div className="column">
              <p className="para">
                Refund Pending (₹) <br /> ₹-
              </p>
            </div>
            <div className="column">
              <p className="para">
                Demand Of taxes (₹) <br /> ₹-
              </p>
            </div>
            <div className="column">
              <p className="para">
                Taxes paid (₹) <br /> ₹-
              </p>
            </div>
            <div className="column">
              <p className="para">
                Demands Pending (₹) <br /> ₹-
              </p>
            </div>
          </div>
        </li>
      </Link>

      <Link
        style={{ color: "black", textDecoration: "none", marginRight: "10px" }}
        to="/table-16"
        className="details-card"
      >
        <li>
          <div className="heading-container">
            <h1 className="heading">
              16.Supplies recived from Composition taxpayers, demeed supply by
              job worker and goods sent on approval basis
            </h1>
          </div>
          <div className="row">
            <div className="column">
              <p className="para">
                Taxble Value <br /> ₹41,87,520.83
              </p>
            </div>
            <div className="column">
              <p className="para">
                Integrated Tax (₹) <br /> ₹0.0
              </p>
            </div>
            <div className="column">
              <p className="para">
                Central Tax (₹) <br /> ₹3,80,865.12
              </p>
            </div>
            <div className="column">
              <p className="para">
                State / UT tax (₹) <br /> ₹3,80,865
              </p>
            </div>
            <div className="column">
              <p className="para">
                CESS (₹) <br /> ₹0.00
              </p>
            </div>
          </div>
        </li>
      </Link>

      <Link
        style={{ color: "black", textDecoration: "none", marginRight: "10px" }}
        to="/table-17"
        className="details-card"
      >
        <li>
          <div className="heading-container">
            <h1 className="heading">
              17.HSN wise summary of Outwards Supplies
              <br /> No of Records-
            </h1>
          </div>
          <div className="row">
            <div className="column">
              <p className="para">
                Taxble Value <br /> ₹-
              </p>
            </div>
            <div className="column">
              <p className="para">
                Integrated Tax (₹) <br /> ₹-
              </p>
            </div>
            <div className="column">
              <p className="para">
                Central Tax (₹) <br /> ₹-
              </p>
            </div>
            <div className="column">
              <p className="para">
                State / UT tax (₹) <br /> ₹-
              </p>
            </div>
            <div className="column">
              <p className="para">
                CESS (₹) <br /> ₹-
              </p>
            </div>
          </div>
        </li>
      </Link>

      <Link
        style={{ color: "black", textDecoration: "none", marginRight: "10px" }}
        to="/table-18"
        className="details-card"
      >
        <li>
          <div className="heading-container">
            <h1 className="heading">
              18.HSN wise summary of Inwards Supplies
              <br /> No of Records-
            </h1>
          </div>
          <div className="row">
            <div className="column">
              <p className="para">
                Taxble Value <br /> ₹-
              </p>
            </div>
            <div className="column">
              <p className="para">
                Integrated Tax (₹) <br /> ₹-Deatils
              </p>
            </div>
            <div className="column">
              <p className="para">
                Central Tax (₹) <br /> ₹-
              </p>
            </div>
            <div className="column">
              <p className="para">
                State / UT tax (₹) <br /> ₹-
              </p>
            </div>
            <div className="column">
              <p className="para">
                CESS (₹) <br /> ₹-
              </p>
            </div>
          </div>
        </li>
      </Link>
      <li className="details-card">
        <div className="heading-container">
          <h1 className="heading">19. Late Fee Payble & Paid</h1>
        </div>
        <div className="row">
          <div className="column">
            <p className="para">
              Late Fee Payble <br /> ₹-
            </p>
          </div>
          <div className="column">
            <p className="para">
              Late Fee Paid (₹) <br /> ₹-
            </p>
          </div>
        </div>
      </li>
    </div>
  );
};

export default DetailsCard;
