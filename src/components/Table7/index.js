import { Link } from "react-router-dom";
import "../Table4/index.css";

const Table7 = () => {
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
          7.Deatils of ITC Reversed and Ineligible itc during the financial year
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
            <th style={thStyle}>Integrated Tax (₹)</th>
            <th style={thStyle}>Central Tax (₹)</th>
            <th style={thStyle}>State/UT Tax (₹)</th>
            <th style={thStyle}>CESS (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>(A) As per rule 37</td>
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
            <td style={tdStyle}>(B) As per rule 39</td>
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
            <td style={tdStyle}>(C) As per rule 42</td>
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
            <td style={tdStyle}>(D) As per rule 43</td>
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
            <td style={tdStyle}>(E) As per Section 17(5)</td>
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
            <td style={tdStyle}>(F) Reversel Of TRAN-I Credit</td>
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
            <td style={tdStyle}>(G) Reversal Of TRAN-II Credit</td>
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
              <input
                type="text"
                className="input-in-td"
                placeholder="(H1) other Revarsal(pl. specify)"
              />
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
              (I) Total ITC reversed Sum Of (A to H above)
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
            <td style={tdStyle}>(J) Net ITC Avalible for utilaizatio</td>
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

export default Table7;
