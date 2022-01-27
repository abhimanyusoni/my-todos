import React, { Component } from "react";
import InputWithLabel from "./form-element";

class AddTodo extends Component {
  state = {
    id: "",
    title: "",
    desc: ""
  };
  submitForm = (e) => {
    e.preventDefault();
    this.props.addListhandler(this.state);
    this.setState({ id: "", title: "", desc: "" });
  };
  render() {
    return (
      <div className="add-todo p-3">
        <form onSubmit={this.submitForm}>
          <InputWithLabel
            classes="form-control mb-3"
            label="Enter Serial Number: "
            type="number"
            placeholder="Enter number"
            value={this.state.id}
            onChangeEvent={(e) => this.setState({ id: e.target.value })}
          />
          <InputWithLabel
            classes="form-control mb-3"
            label="Enter Todo Title: "
            type="text"
            placeholder="Enter your title"
            value={this.state.title}
            onChangeEvent={(e) => this.setState({ title: e.target.value })}
          />
          <InputWithLabel
            classes="form-control mb-3"
            label="Enter Todo Title: "
            type="text"
            placeholder="Enter your title"
            value={this.state.desc}
            onChangeEvent={(e) => this.setState({ desc: e.target.value })}
          />
          <button className="btn btn-dark" type="submit">
            Add Todo item
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
