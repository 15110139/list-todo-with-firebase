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
  // sữ lí sữ kiện khi ô input có sữ thây đổi.
  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // sữ lí sự kiện xóa 1 task
  removeTask = id => {
    var listToDo = this.state.listToDo;
    // xóa phần tử trong list task hiện tại
    const index = listToDo.findIndex(el => el.id === id);
    listToDo.splice(index, 1);
    this.setState({
      listToDo: listToDo
    });
    // update dữ liệu lên firebase
    this.firebase.ref(`listToDo`).set(listToDo);
    this.forceUpdate();
  };
  addNewTask = () => {
    const { listToDo, valueInput } = this.state;
    let list = listToDo;
    // thêm task mới vào list task
    list.unshift({ id: uuidv4(), content: valueInput, check: false });
    // update dữ liệu lên firebase

    this.firebase.ref(`listToDo`).set(list);
    // rest lai ô input
    this.setState({
      listToDo: list,
      valueInput: ""
    });
    this.forceUpdate();
  };

  updateCheckTask = id => {
    var listToDo = this.state.listToDo;
    // update thông tin task được chọn
    const index = listToDo.findIndex(el => el.id === id);
    listToDo[index].check = !listToDo[index].check;
    this.setState({
      listToDo: listToDo
    });
    this.forceUpdate();
    // update dữ liệu lên firebase
    this.firebase.ref(`listToDo`).set(listToDo);
  };

  updateContentTask = (id, newContent) => {
    var listToDo = this.state.listToDo;
    const index = listToDo.findIndex(el => el.id === id);
    listToDo[index].content = newContent;
    this.setState({
      listToDo: listToDo
    });
    this.forceUpdate();
    this.firebase.ref(`listToDo`).set(listToDo);
  };

  // show list task
  _renderList = () => {
    return this.state.listToDo.map((el, index) => (
      <Item
        key={index}
        updateCheckTask={this.updateCheckTask}
        removeTask={this.removeTask}
        updateContenTask={this.updateContentTask}
        el={el}
        index={index}
      />
    ));
  };

  // render giao diện list to do
  render() {
    const { valueInput } = this.state;
    return (
      <div className="container">
        <div className="text-center">
          <h1>ToDo App</h1>
          <div className="d-inline-flex">
            {/* ô input */}
            <Input
              value={valueInput}
              name="valueInput"
              onChange={this.onChangeInput}
              placeholder="Enter name task"
            />
            {/* button thêm task */}
            <Button
              outline
              color="secondary"
              disabled={!valueInput ? true : false}
              onClick={this.addNewTask}
            >
              <i className="fas fa-plus" /> Add Task
            </Button>
          </div>
        </div>

        <hr />
        {/* render list task */}
        {this._renderList()}
      </div>
    );
  }
}

export default App;
