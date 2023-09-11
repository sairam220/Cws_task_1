import { Link } from "react-router-dom";
import "../Table4/index.css";

const Table5 = () => {
  const tableStyle = {
    fontFamily: "Arial, sans-serif",
    borderCollapse: "collapse",
    width: "100%"
  };

  const thStyle = {
    backgroundColor: "#f2f2f2",
    border: "1px solid #dddddd",
    textAlign: "center",
    paddingBottom: "11px",
    height: "50px",
    fontSize: "15px",
    fontFamily: "sans-serif"
  };

  const thStyle1 = {
    backgroundColor: "#f2f2f2",
    border: "1px solid #dddddd",
    textAlign: "center",
    paddingBottom: "11px",
    height: "50px",
    fontSize: "15px",
    width: "300px",
    fontFamily: "sans-serif"
  };

  const tdStyle = {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "8px",
    fontWeight: "bold",
    fontSize: "14.5px"
  };

  return (
    <div className="table-page">
      <div className="table-heading-container">
        <p className="table-para">
          5.Details of outward supplies during the financial year on which tax
          is not payble
        </p>
      </div>
      <p className="note-para">
        <span className="note">Note : </span>The fildes are where the system
        computed values would be modified by more/less than 20%,shall be
        highleted in `Red` for refference and attention.
        <hr className="hr" />
      </p>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle1}>Nature Of Supplies</th>
            <th style={thStyle}>Taxble Value (₹)</th>
            <th style={thStyle}>Integrated Tax (₹)</th>
            <th style={thStyle}>Central Tax (₹)</th>
            <th style={thStyle}>State/UT Tax (₹)</th>
            <th style={thStyle}>CESS (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>
              (A) Zero rated Supply(Export) without Payment of tax
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td style={tdStyle}>(B) Supplies to SEZ without Payment of tax</td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td style={tdStyle}>
              (C) Supplies on Which tax is to be Paid by the reciptent on
              reverse Charge Basis
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td style={tdStyle}>(D) Exmpted</td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td style={tdStyle}>(E) Nill Rated</td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td style={tdStyle}>(F) Non Gst Supply (includes 'no supply')</td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td style={tdStyle}>(G) Sub total (A to F above)</td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td style={tdStyle}>
              (H) Credit note Issued In respect of transactions specified in (B)
              to (F) above(-)
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td style={tdStyle}>
              (I) Debit note Issued In respect of transactions specified in (B)
              to (F) above(+)
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td style={tdStyle}>(J) Supplies declared through Amendments(+)</td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td style={tdStyle}>(K) Supplies declared through Amendments(-)</td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td style={tdStyle}>(L) Sub Total (H to K Above)</td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td style={tdStyle}>
              (M) TurnOvear On which tax is not be paid (G to L above)
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td style={tdStyle}>
              (N) Total TurnOvear including Advances (4N + 5m - 4G above)
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
            <td style={tdStyle}>
              <input type="text" className="input-in-td" placeholder="₹0.00" />
            </td>
          </tr>
        </tbody>
      </table>
      <Link
        className="close-button"
        to="/"
        style={{ color: "black", textDecoration: "none", marginRight: "10px" }}
      >
        <button className="close-btn-1">Close</button>
      </Link>
    </div>
  );
};

export default Table5;
