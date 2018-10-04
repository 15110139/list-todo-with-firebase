import React, { Component } from "react";
import { Button, Input } from "reactstrap";
import { init as firebaseInit } from "./firebase";
class App extends Component {
  constructor() {
    super();
    firebaseInit();
    this.state = {
      listToDo: [],
      valueInput: ""
    };
  }
  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  addNewTask = () => {
    const { listToDo, valueInput } = this.state;
    let list = listToDo;
    list.push({ content: valueInput, check: true });
    this.setState({
      listToDo: list,
      valueInput: ""
    });
    console.log(listToDo);
  };
  _renderList = () => {
    return (
      this,
      this.state.listToDo.map((el, index) => (
        <div
          className={
            el.check
              ? "m-auto alert alert-success border"
              : "m-auto alert alert-light border"
          }
          style={{ width: 500 }}
          key={index}
        >
          <div className="">
            <p>{el.content}</p>
          </div>
          <div className="d-flex justify-content-end">
            <Button size="sm" color="secondary">
              <i className="fas fa-edit" />
            </Button>{" "}
            <Button size="sm" color="primary">
              {el.check ? (
                <i class="fas fa-redo-alt" />
              ) : (
                <i className="fas fa-check" />
              )}
            </Button>{" "}
            <Button size="sm" color="danger">
              <i className="fas fa-times" />
            </Button>{" "}
          </div>
        </div>
      ))
    );
  };
  render() {
    const { listToDo, valueInput } = this.state;
    return (
      <div className="container">
        <div className="text-center">
          <h1>ToDo App</h1>
          <div className="d-inline-flex">
            <Input
              value={valueInput}
              name="valueInput"
              onChange={this.onChangeInput}
              placeholder="Enter name task"
            />
            <Button
              outline
              color="secondary"
              disabled={!valueInput ? true : false}
              onClick={this.addNewTask}
            >
              <i class="fas fa-plus" /> Add Task
            </Button>
          </div>
        </div>

        <hr />

        {this._renderList()}
      </div>
    );
  }
}

export default App;
