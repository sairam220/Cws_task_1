import { Link } from "react-router-dom";
import "../Table4/index.css";

const Table16 = () => {
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
          16.Supplies recived from Composition taxpayers, demeed supply by job
          worker and goods sent on approval basis
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
            <th style={thStyle1}>Description</th>
            <th style={thStyle}>Taxble Value</th>
            <th style={thStyle}>Integrated Tax (₹)</th>
            <th style={thStyle}>Central Tax (₹)</th>
            <th style={thStyle}>State/UT Tax (₹)</th>
            <th style={thStyle}>CESS (₹)</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={tdStyle}>
              (A). Supplies recived from Composition Taxpayers
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
            <td style={tdStyle}>(B). Deemed supply under section 143</td>
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
              (C) Goods sent on approval basis but not returned
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

export default Table16;
