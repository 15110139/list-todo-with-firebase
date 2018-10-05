import React, { PureComponent } from "react";
import { Button, Input } from "reactstrap";
import Item from "./components/Item/Index";
import { init as firebaseInit } from "./firebase";
const uuidv4 = require("uuid/v4");
class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      listToDo: [],
      valueInput: ""
    };
    this.firebase = firebaseInit();
    this.firebase
      .ref("listToDo")
      .once("value")
      .then(data => {
        this.setState({
          listToDo: data.val() ? data.val() : []
        });
      });
  }
  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  removeTask = id => {
    var listToDo = this.state.listToDo;
    const index = listToDo.findIndex(el => el.id == id);
    listToDo.splice(index, 1);
    this.setState({
      listToDo: listToDo
    });
    this.firebase.ref(`listToDo`).set(listToDo);
    this.forceUpdate();
  };
  addNewTask = () => {
    const { listToDo, valueInput } = this.state;
    let list = listToDo;
    list.unshift({ id: uuidv4(), content: valueInput, check: false });
    this.firebase.ref(`listToDo`).set(list);
    this.setState({
      listToDo: list,
      valueInput: ""
    });
    this.forceUpdate();
  };

  updateCheckTask = id => {
    var listToDo = this.state.listToDo;
    const index = listToDo.findIndex(el => el.id == id);
    listToDo[index].check = !listToDo[index].check;
    this.setState({
      listToDo: listToDo
    });
    this.forceUpdate();
    this.firebase.ref(`listToDo`).set(listToDo);
  };
  _renderList = () => {
    return this.state.listToDo.map((el, index) => (
      <Item
        key={index}
        updateCheckTask={this.updateCheckTask}
        removeTask={this.removeTask}
        el={el}
        index={index}
      />
    ));
  };
  render() {
    const { valueInput } = this.state;
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
