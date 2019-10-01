import React, { Component, Fragment } from "react";
import Jumbotron from "../Jumbotron";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <main>
                    <Jumbotron title="KATRINA LANGLAND" subtitle="brand and lifestyle photography" class="jumbotron-full" />
                    <div>
                        Hello there...
                    </div>
                </main>
            </Fragment>
        );
    }
} 