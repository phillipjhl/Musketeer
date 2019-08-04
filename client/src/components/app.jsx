import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { checkLogin, getUser } from "../services/user";

import NavBar from "./NavBar";
import Home from "./Home";
// import AdminInput from "./admin/AdminInput";
import AdminEdit from "./admin/AdminEdit";
import AdminPage from "./admin/AdminPage";
import BlogFull from "./BlogFull";
import PrivateRoute from "./auth/privateRoute";
import Login from "./auth/login";
import Logout from "./auth/logout";
import Donate from "./donate";
import Contact from "./contact";
import UserContext from '../services/context';
// export const UserContext = React.createContext("guest");
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: 'guest'
    };
  }
  static contextType = UserContext;

  componentDidMount() {
    checkLogin()
      .then(loggedIn => {
        getUser()
          .then(user => {
            console.log(user);
            this.setState({ user });
          })
          .catch(err => {
            throw err;
          });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        <Router>
          <Fragment>
            <NavBar user={this.state.user} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Logout} />
              <Route path="/blogs/:id" component={BlogFull} />
              <Route path="/donate" component={Donate} />
              <Route path="/contact" component={Contact} />
              <Route path="/blogs" component={Home} />
              <PrivateRoute path="/admin" component={AdminPage} />
              <PrivateRoute exact path="/blog/:id/edit" component={AdminEdit} />
            </Switch>
          </Fragment>
        </Router>
      </UserContext.Provider>
    );
  }
}

export default App;
