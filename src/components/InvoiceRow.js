import React, { Component } from "react";

class InvoiceRow extends Component {
  state = {
    ...this.props.invoiceRowData
  };

  inputChangedHandler = event => {
    this.setState({ [event.target.name]: event.target.value }, this.updateRow);
  };

  updateRow = () => {
    this.props.onChange(this.props.id, this.state);
  };

  deleteHandler = () => {
    this.props.deleteRow(this.props.id);
  };

  render() {
    const { quantity, description, unitPrice } = this.props.invoiceRowData;
    return (
      <tr>
        <td>
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={this.inputChangedHandler}
          />
        </td>
        <td>
          <input
            type="text"
            name="description"
            value={description}
            onChange={this.inputChangedHandler}
          />
        </td>
        <td>
          <input
            type="number"
            name="unitPrice"
            value={unitPrice}
            onChange={this.inputChangedHandler}
          />
        </td>
        <td>
          <p>{quantity * unitPrice}</p>
        </td>
        <td>
          <button className="button deleteButton" onClick={this.deleteHandler}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default InvoiceRow;
