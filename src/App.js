import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
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
    list.push({ content: valueInput, check: false });
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
          className={el.check ? "m-auto alert-secondary border" : "m-auto alert alert-light border"}
          style={{ width: 500 }}
          key={index}
        >
          <div className="">
            <p>{el.content}</p>
          </div>
          <div className="d-flex justify-content-end">
            <button>Edit</button>
            <input type="checkbox" />
            <button>Delete</button>
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

          <input
            value={valueInput}
            name="valueInput"
            onChange={this.onChangeInput}
            placeholder="Enter name task"
          />
          <button
            disabled={!valueInput ? true : false}
            onClick={this.addNewTask}
          >
            Add
          </button>
        </div>

        <hr />

        {this._renderList()}
      </div>
    );
  }
}

export default App;
