import React, { Component } from "react";
import UserDetails from "./UserDetails";
import InvoiceTable from "./InvoiceTable";
import "./custom.css";

class Invoice extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <h2 className="editInvoice">Edit Invoice</h2>
        <UserDetails />
        <InvoiceTable />
      </div>
    );
  }
}

export default Invoice;
