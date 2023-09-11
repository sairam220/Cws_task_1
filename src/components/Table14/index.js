import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../Table4/index.css";

const Table14 = () => {
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
          14. Different Tax paidon account of declaration in table no. 10 & 11
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
            <th style={thStyle}>Payble (₹)</th>
            <th style={thStyle}>Paid (₹)</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={tdStyle}>Integrated Tax</td>
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
            <td style={tdStyle}>Central Tax</td>
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
            <td style={tdStyle}>State/UT Tax</td>
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
            <td style={tdStyle}>Cess</td>
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
            <td style={tdStyle}>Intrest</td>
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

export default Table14;
