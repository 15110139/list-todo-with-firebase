import React, { PureComponent } from "react";
import { Button } from "reactstrap";
class Item extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      contentEdit: this.props.el ? this.props.el.content : ""
    };
  }
  // sữ lý sự hiện remove task
  removeTask = id => {
    this.props.removeTask(id);
  };
  // sữ lý sự kiện update task
  updateCheckTask = id => {
    this.props.updateCheckTask(id);
    this.forceUpdate();
  };
  // sữ lý sự kiện nhập nội dung o input
  editText = () => {
    this.setState({
      edit: !this.state.edit
    });
    this.forceUpdate();
  };
  // bắt sự kiện change input task
  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  // sữ lý sữ kiện lưu nôi dung sau khi sữa
  saveEdit = id => {
    if (this.state.contentEdit !== "") {
      this.props.updateContenTask(id, this.state.contentEdit);
    }
    this.setState({
      edit: !this.state.edit
    });
    this.forceUpdate();
  };
  render() {
    const { edit, contentEdit } = this.state;
    const { el, index } = this.props;
    return (
      <div
        className={
          el.check
            ? "col-lg-6 m-auto alert alert-success border"
            : "col-lg-6 m-auto alert alert-light border"
        }
        index={index}
      >
        <div className="row">
          {edit ? (
            /* ô input sữ nỗi dung */
            <input
              type="text"
              value={contentEdit}
              name="contentEdit"
              onChange={this.onChangeInput}
              onBlur={() => this.saveEdit(el.id)}
              autoFocus
            />
          ) : (
            <div>
              <p>{el.content}</p>
            </div>
          )}
        </div>
        {/* cum btn check sữa xóa */}
        <div className="d-flex justify-content-end">
          {!edit && (
            <Button onClick={this.editText} size="sm" color="secondary">
              <i className="fas fa-edit" />
            </Button>
          )}
          <Button
            onClick={() => {
              this.updateCheckTask(el.id);
            }}
            size="sm"
            color="primary"
          >
            {el.check ? (
              <i className="fas fa-redo-alt" />
            ) : (
              <i className="fas fa-check" />
            )}
          </Button>
          <Button
            onClick={() => {
              this.removeTask(el.id);
            }}
            size="sm"
            color="danger"
          >
            <i className="fas fa-times" />
          </Button>
        </div>
      </div>
    );
  }
}

export default Item;
