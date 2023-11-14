import React from "react";

function Table(props) {
  return (
    <div>
      <table id="result">
        <thead id="result-head">
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody id="result-name">
          <tr>
            <td>1</td>
            <td>$16,725</td>
            <td>$825</td>
            <td>$825</td>
            <td>$15900</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
