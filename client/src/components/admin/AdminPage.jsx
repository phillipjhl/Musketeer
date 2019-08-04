//Admin page to edit or delete blogs

import React, { Fragment, Component } from "react";
// import { all, one, insert, update, destroy } from '../services/blogs';

import { AdminEdit } from "./AdminEdit";
import AdminInput from "./AdminInput";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }

  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <h1>Hello there.</h1>
          <AdminInput />
        </div>
      </Fragment>
    );
  }
}

export default AdminPage;
