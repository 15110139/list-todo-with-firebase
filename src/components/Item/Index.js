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

  removeTask = id => {
    this.props.removeTask(id);
  };
  updateCheckTask = id => {
    this.props.updateCheckTask(id);
    this.forceUpdate();
  };
  editText = () => {
    this.setState({
      edit: !this.state.edit
    });
    this.forceUpdate();
  };

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
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
