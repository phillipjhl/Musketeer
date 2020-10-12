import React, { lazy, Component, Fragment, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { checkLogin, getUser } from "../services/user";

import NavBar from "./NavBar";
const BlogMain = lazy(() => import("./pages/BlogMain"));
const AdminEdit = lazy(() => import("./admin/AdminEdit"));
const AdminPage = lazy(() => import("./admin/AdminPage"));
const BlogFull  = lazy(() => import("./BlogFull"));
import PrivateRoute from "./auth/privateRoute";
const Login = lazy(() => import("./auth/login"));
const Logout = lazy(() => import("./auth/logout"));
import Donate from "./donate";
import UserContext from "../services/context";
const Home = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/About"));
import Footer from "./Footer";
import IndeterminateProgress from "./utilities/indeterminateProgress";
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CaseStudyPage = lazy(() => import("./pages/CaseStudy"));
// export const UserContext = React.createContext("guest");
const FourZeroFour = lazy(() => import("./pages/FourZeroFour"));
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "guest"
    };
  }
  static contextType = UserContext;

  componentDidMount() {
    checkLogin()
      .then(loggedIn => {
        getUser()
          .then(user => {
            this.setState({ user });
          })
          .catch(err => {
            throw err;
          });
      })
      .catch();
  }

  componentDidUpdate() {
    // console.log("update");
  }

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        <Router>
          <Fragment>
            <NavBar
              user={this.state.user}
              homeLinkText={"KATRINA LANGLAND"}
              styleMode={"white"}
              sticky={true}
            />
            <main className="main">
              <Suspense fallback={<IndeterminateProgress />}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/home" component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/logout" component={Logout} />
                  <Route path="/about" component={AboutPage} />
                  <Route path="/casestudy" component={CaseStudyPage} />
                  <Route path="/blogs/:id" component={BlogFull} />
                  {/* <Route path="/donate" component={Donate} /> */}
                  <Route path="/contact" component={ContactPage} />
                  <Route path="/blogs" component={BlogMain} />
                  <PrivateRoute path="/admin" component={AdminPage} />
                  <PrivateRoute path="/admin/*" component={AdminPage} />
                  <PrivateRoute
                    exact
                    path="/blog/:id/edit"
                    component={AdminEdit}
                  />
                  <Route component={FourZeroFour} />
                </Switch>
              </Suspense>
            </main>
            <Footer />
          </Fragment>
        </Router>
      </UserContext.Provider>
    );
  }
}

export default App;
