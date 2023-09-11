import { Link } from "react-router-dom";

import "../Table4/index.css";

const Table18 = () => {
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
        <p className="table-para">18.HSN wise summary of Inwards Supplies</p>
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
            <th style={thStyle1}>HSN Code</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>UQC</th>
            <th style={thStyle}>Total Quantity</th>
            <th style={thStyle}>Taxble Value(₹)</th>
            <th style={thStyle}>
              Is Supply Applicable For concessitional rate of tax
            </th>
            <th style={thStyle}>Rate of Tax(%)</th>
            <th style={thStyle}>Integrated Tax (₹)</th>
            <th style={thStyle}>Central Tax (₹)</th>
            <th style={thStyle}>State/UT Tax (₹)</th>
            <th style={thStyle}>CESS (₹)</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={tdStyle}>15091000 </td>
            <td style={tdStyle}>
              Olive Oil and it's Fractions, WHTHER OR NOT REDIFINED BUT NOT
              CHEMICALLY MODIFIED VIRGIN
            </td>
            <td style={tdStyle}>BUN</td>
            <td style={tdStyle}>1</td>
            <td style={tdStyle}>10000.00₹</td>
            <td style={tdStyle}>N</td>
            <td style={tdStyle}>18</td>
            <td style={tdStyle}>1800.00</td>
            <td style={tdStyle}>0.00</td>
            <td style={tdStyle}>0.00</td>
            <td style={tdStyle}>11.00</td>
            <td style={tdStyle}>Edit,Delete</td>
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

export default Table18;
