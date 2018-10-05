import React, { PureComponent } from "react";
import { Button } from "reactstrap";
class Item extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
  }

  removeTask = id => {
    this.props.removeTask(id);
  };
  updateCheckTask = id => {
    this.props.updateCheckTask(id);
    this.forceUpdate();
  };
  render() {
    const { el, index } = this.props;
    return (
      <div
        className={
          el.check
            ? "m-auto alert alert-success border"
            : "m-auto alert alert-light border"
        }
        style={{ width: 500 }}
        index={index}
      >
        <div className="">
          <p>{el.content}</p>
        </div>
        <div className="d-flex justify-content-end">
          <Button size="sm" color="secondary">
            <i className="fas fa-edit" />
          </Button>{" "}
          <Button
            onClick={() => {
              this.updateCheckTask(el.id);
            }}
            size="sm"
            color="primary"
          >
            {el.check ? (
              <i class="fas fa-redo-alt" />
            ) : (
              <i className="fas fa-check" />
            )}
          </Button>{" "}
          <Button
            onClick={() => {
              this.removeTask(el.id);
            }}
            size="sm"
            color="danger"
          >
            <i className="fas fa-times" />
          </Button>{" "}
        </div>
      </div>
    );
  }
}

export default Item;
