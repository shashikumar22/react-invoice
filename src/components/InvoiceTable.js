import React, { Component } from "react";
import InvoiceRow from "./InvoiceRow";
import "./custom.css";

class InvoiceTable extends Component {
  state = {
    rowData: []
  };

  rowChangedHandler = (row, data) => {
    const rowData = this.state.rowData;
    rowData[row] = data;
    this.setState({ rowData: rowData });
  };

  addRowHandler = () => {
    const newRow = this.state.rowData;
    newRow.push({ quantity: 0, description: "", unitPrice: 0 });
    this.setState({ rowData: newRow });
  };

  getTotal = () => {
    let total = 0;
    this.state.rowData.forEach(row => {
      total += row.quantity * row.unitPrice;
    });
    return total;
  };

  deleteRowHandler = row => {
    const rowDataCopy = this.state.rowData.slice(0);
    rowDataCopy.splice(row, 1);
    this.setState({ rowData: rowDataCopy });
  };

  render() {
    const invoiceRows = this.state.rowData.map((invoiceRow, index) => (
      <InvoiceRow
        key={index}
        id={index}
        invoiceRowData={this.state.rowData[index]}
        deleteRow={this.deleteRowHandler}
        onChange={this.rowChangedHandler}
      />
    ));
    return (
      <div>
        <div style={{ textAlign: "right", marginRight: "3px" }}>
          <button className="button" onClick={this.addRowHandler}>
            Add Row
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Description</th>
              <th>Unit Price</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{invoiceRows}</tbody>
          <tfoot>
            <tr>
              <td />
              <td />
              <th>Grand total:</th>
              <th>{this.getTotal()}</th>
              <td />
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default InvoiceTable;
