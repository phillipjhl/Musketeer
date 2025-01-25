import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import Styles from './styles/app.scss';
import {Amplify} from 'aws-amplify';
import ampConfig from './amplifyconfiguration.json';

Amplify.configure(ampConfig)

ReactDOM.render(<App />, document.getElementById("root"));
