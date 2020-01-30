import React, { Component } from "react";
import PropTypes from "prop-types";
import { TextAreaFieldGroup } from "../../commons";
import { TextFieldGroup } from "../../commons";
class PostForm extends Component {
  constructor() {
    super();

    this.state = {
      postData: {
        title: "",
        text: ""
      }
    };
  }
  updateItem(event) {
    event.preventDefault();
    let updated = Object.assign({}, this.state.postData);
    updated[event.target.name] = event.target.value;

    let updatedTitle = Object.assign({}, this.state.postData);
    updatedTitle[event.target.name] = event.target.value;
    this.setState({
      postData: updated,
      postDataTitle: updatedTitle
    });
  }
  submitItem(event) {
    event.preventDefault();
    this.props.submit(this.state.postData);
    let updated = Object.assign({}, this.state.postData);

    updated["text"] = "";
    let updatedTitle = Object.assign({}, this.state.postDataTitle);
    updatedTitle["title"] = "";
    this.setState({
      postData: updated,
      postDataTitle: updatedTitle
    });
  }
  render() {
    const { errors } = this.props;
    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header text-white bg-post">
            <div class="ameboInfo">
              <div class="">
                <h4>An opportunity to meet and exchange with other members of our community on a multiple range of topics. Expand tour connections trough networking. discover new adventures.</h4>
                <a href="http://localhost:3000/register" id="linkright">SIGN UP</a>
              </div>
            </div>
          </div>{" "}
          <div className="card-body">
            <form onSubmit={this.submitItem.bind(this)}>
              <div className="form-group">
                <TextFieldGroup type="text" width="100%"
                  name="title"
                  placeholder="Title"
                  value={this.state.postData.title}
                  onChange={this.updateItem.bind(this)}
                />{" "}
                <TextAreaFieldGroup
                  placeholder="Create a Post"
                  name="text"
                  value={this.state.postData.text}
                  error={errors.text}
                  onChange={this.updateItem.bind(this)}
                />{" "}
              </div>{" "}
              <button type="submit" className="btn btn-dark">
                Submit{" "}
              </button>{" "}
            </form>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

PostForm.propTypes = {
  errors: PropTypes.object.isRequired
};

export default PostForm;
