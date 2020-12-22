import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import Styles from './styles/app.scss';
import Amplify from '@aws-amplify/core';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

ReactDOM.render(<App />, document.getElementById("root"));
