import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

class Sidebar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            //sidebar
            //-about author
            //-categories
            //--list of "links" to blogs tags
            //---weddings
            //---engagements
            //---personal
            <Fragment>
                <aside className="col-md-4 sidebar bg-light">
                    <div className="p-3 mb-3 bg-light rounded">
                        <h4 className="font-italic">About</h4>
                        <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                    </div>
                    <div className="container pl-0">
                        <div className="col-7 bg-white p-2 mx-0">
                        <h4>Categories</h4>
                        </div>
                        <div>
                            <ul className="list mb-0">
                                <li>
                                    <Link to="/admin">Create New Blogs</Link>
                                </li>
                                <li><a href="#">Active</a></li>
                                <li><a href="#">Personal</a></li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </Fragment>
        );
    }

}

export default Sidebar;