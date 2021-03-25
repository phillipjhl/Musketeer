import React, { lazy, useEffect, Fragment, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { checkLogin, getUser } from "../services/user";

import NavBar from "./NavBar";
// const BlogMain = lazy(() => import("./pages/BlogMain"));
// const AdminEdit = lazy(() => import("./admin/AdminEdit"));
// const AdminPage = lazy(() => import("./admin/AdminPage"));
// const BlogFull = lazy(() => import("./BlogFull"));
import PrivateRoute from "./auth/privateRoute";
const Login = lazy(() => import("./auth/login"));
const Logout = lazy(() => import("./auth/logout"));
// import Donate from "./donate";
import UserContext from "../services/context";
// const Home = lazy(() => import("./pages/Home"));
import Home from "./pages/Home";
const AboutPage = lazy(() => import("./pages/About"));
import Footer from "./Footer";
import IndeterminateProgress from "./utilities/indeterminateProgress";
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CaseStudyPage = lazy(() => import("./pages/CaseStudy"));
const RunrPage = lazy(() => import("./pages/RunrPage"));
const DesignSystem = lazy(() => import("./pages/DesignSystem"));
// export const UserContext = React.createContext("guest");
import FourZeroFour from "./pages/FourZeroFour";

const withTitle = COMP => {
  const wrappedPage = props => {
    useEffect(() => {
      window.scrollTo(0, 0);
      document.title = props.title
        ? `Katrina Langland | ${props.title}`
        : "Katrina Langland | Product Designer";
    }, [props.title]);

    return <COMP {...props} />;
  };

  return wrappedPage;
};

const HomeHOC = withTitle(Home);
const AboutHOC = withTitle(AboutPage);
const CSStudyHOC = withTitle(CaseStudyPage);
const RunrPageHOC = withTitle(RunrPage);
const DesignSystemHOC = withTitle(DesignSystem);
const ContactHOC = withTitle(ContactPage);

function App(props) {
  const [USER, setUser] = useState("guest");

  useEffect(() => {
    checkLogin()
      .then(loggedIn => {
        if (loggedIn) {
          getUser()
            .then(user => {
              setUser(user);
            })
            .catch(err => {});
        }
      })
      .catch(err => {});
  }, []);

  return (
    <UserContext.Provider value={USER}>
      <Router>
        <Fragment>
          <NavBar
            user={USER}
            homeLinkText={"Katrina Langland"}
            styleMode={"white"}
            sticky={true}
          />
          <main className="main">
            <Suspense fallback={<IndeterminateProgress />}>
              <Switch>
                <Route
                  exact
                  path={["/", "/home"]}
                  render={props => <HomeHOC {...props} />}
                />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route
                  path="/about"
                  render={props => <AboutHOC title="About" {...props} />}
                />
                <Route
                  path="/casestudy/runr"
                  render={props => (
                    <RunrPageHOC title="Case Study - RUNR" {...props} />
                  )}
                />
                <Route
                  path="/casestudy/gro"
                  render={props => (
                    <CSStudyHOC title="Case Study - GRO" {...props} />
                  )}
                />
                <Route
                  path="/casestudy/designstudy"
                  render={props => (
                    <DesignSystemHOC title="Design System - GRO" {...props} />
                  )}
                />
                {/* <Route path="/blogs/:id" component={BlogFull} /> */}
                {/* <Route path="/donate" component={Donate} /> */}
                <Route
                  path="/contact"
                  render={props => <ContactHOC title="Contact Me" {...props} />}
                />
                {/* <Route path="/blogs" component={BlogMain} /> */}
                {/* <PrivateRoute path="/admin" component={AdminPage} />
                  <PrivateRoute path="/admin/*" component={AdminPage} /> */}
                {/* <PrivateRoute
                    exact
                    path="/blog/:id/edit"
                    component={AdminEdit}
                  /> */}
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

export default App;
