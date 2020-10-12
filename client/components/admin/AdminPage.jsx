//Admin page to edit or delete blogs
import React, { Fragment, Component } from "react";
import UserContext from "../../services/context";
// import { all, one, insert, update, destroy } from '../services/blogs';

import { AdminEdit } from "./AdminEdit";
import AdminInput from "./AdminInput";
class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static contextType = UserContext;

  render() {
    console.log(this.context);
    return (
      <section className="container my-lg">
        <div className="container-fluid">
          <h1>{`Hello there, ${
            this.context.first_name ? this.context.first_name : this.context
          }`}</h1>
          <AdminInput />
        </div>
      </section>
    );
  }
}
export default AdminPage;
